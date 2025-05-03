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

// Import mock review data
import { productReviews } from '@/data/mockData';


interface Review {
  productId: string;
  title: string;
  comment: string;
  rating: number;
  author: string;
  date: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (product) {
      const filtered = productReviews
        .filter((r) => r.productId === product.id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setReviews(filtered);
    }
  }, [product]);

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('id-ID', options);
  };

  if (!product) return null;

  const handleShareToWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const productUrl = `${window.location.origin}/product/${product.id}`;
    const message = `Detail Produk: ${product.name}\n\nPrice: Rp ${product.price}\n\n${product.description}\n\nLink: ${productUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
                {product.rating} dari 5 ({reviews.length} ulasan)
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
                Beli Sekarang Juga
              </a>

              <button
                onClick={handleShareToWhatsApp}
                className="bg-brand-green hover:opacity-90 text-white font-medium px-4 py-2 rounded-md flex items-center justify-center"
              >
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </button>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
              <h3 className="font-bold text-lg border-b pb-2">Ulasan dan Rating</h3>

              {reviews.length === 0 ? (
                <p className="text-gray-500 mt-2">Belum ada ulasan untuk produk ini.</p>
              ) : (
                <div className="mt-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 mb-4">
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
                      <p className="text-gray-500 text-xs mt-1">{review.author} - {formatDate(review.date)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
