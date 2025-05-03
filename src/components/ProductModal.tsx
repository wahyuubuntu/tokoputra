import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Share2 } from 'lucide-react';
import { Product } from '../types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  const [reviews, setReviews] = useState<any[]>([
    {
      title: 'Rating 5 Stars',
      comment: 'Sangat menarik, kualitas yang luar biasa!',
      rating: 5,
      author: 'Jeni',
      date: new Date().toLocaleDateString(),
    },
    {
      title: 'Rating 4 Stars',
      comment: 'Bagus sekali, sesuai dengan ekspektasi.',
      rating: 4,
      author: 'Ali',
      date: new Date().toLocaleDateString(),
    },
    {
      title: 'Rating 5 Stars',
      comment: 'Wah hebat, sangat puas dengan produk ini!',
      rating: 5,
      author: 'Hasan',
      date: new Date().toLocaleDateString(),
    },
  ]); // Added the three reviews here
  const [rating, setRating] = useState<number>(0); // User's rating input
  const [reviewText, setReviewText] = useState<string>(''); // User's review text input

  const handleShareToWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const productUrl = `${window.location.origin}/product/${product.id}`;
    const message = `Detail Produk: ${product.name}\n\nPrice: Rp ${product.price}\n\n${product.description}\n\nLink: ${productUrl}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // State to control the active review slide index
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Automatically change the review slide every 5 seconds
  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(() => {
        setActiveReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000); // 5000 ms (5 seconds)

      return () => clearInterval(interval); // Clear the interval on unmount
    }
  }, [reviews.length]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {/* Product Images Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full max-w-[300px] h-[300px] object-contain rounded-md mx-auto"
                  />
                </CarouselItem>
                {product.images?.map((image, index) => (
                  <CarouselItem key={index}>
                    <img 
                      src={image} 
                      alt={`${product.name} - ${index + 1}`} 
                      className="w-full max-w-[300px] h-[300px] object-contain rounded-md mx-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div className="mt-4">
            <p className="text-brand-blue text-lg font-bold">Rp {product.price}</p>

            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`w-4 h-4 ${index < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">
                {product.rating} ({product.ratingCount} ratings)
              </span>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Deskripsi Produk</h3>
              <p className="text-black mt-4">{product.description}</p>
            </div>

            <div className="flex gap-4 mt-6">
              <a 
                href={product.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue hover:bg-brand-dark text-white font-medium px-4 py-2 rounded-md flex items-center justify-center"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Beli Sekarang
              </a>

              <button
                onClick={handleShareToWhatsApp}
                className="bg-brand-green hover:opacity-90 text-white font-medium px-4 py-2 rounded-md flex items-center justify-center"
              >
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </button>
            </div>

            {/* Reviews Section as an automatic Slideshow */}
            <div className="mt-8">
              <h3 className="font-bold text-lg border-b pb-2">Ulasan dan Rating</h3>

              <Carousel className="w-full mt-4">
                <CarouselContent>
                  {/* Review Slideshow */}
                  {reviews.map((review, index) => (
                    <CarouselItem key={index}>
                      <div
                        className={`border-b pb-4 px-2 ${
                          index === activeReviewIndex ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-1000`}
                      >
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star 
                                key={starIndex} 
                                className={`w-3 h-3 ${starIndex < Math.floor(review.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="ml-2 font-medium">{review.title}</p>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{review.comment}</p>
                        <p className="text-gray-500 text-xs mt-1">{review.author} - {review.date}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Review Form */}
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Tulis Ulasan Anda</h3>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${rating > index ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Tulis ulasan Anda..."
                rows={4}
              />
              <button
                onClick={() => {
                  if (rating > 0 && reviewText) {
                    setReviews([{ title: `Rating ${rating} Stars`, comment: reviewText, rating, author: 'Anonymous', date: new Date().toLocaleDateString() }, ...reviews]);
                    setReviewText('');
                    setRating(0);
                  }
                }}
                className="mt-4 bg-brand-blue text-white px-4 py-2 rounded-md"
              >
                Kirim Ulasan
              </button>
            </div>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
