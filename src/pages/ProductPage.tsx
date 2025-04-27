
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { Star, ShoppingCart, Share2, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0', 10);
  const product = products.find(p => p.id === productId);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleShareToWhatsApp = () => {
    if (!product) return;
    
    const productUrl = window.location.href;
    const message = `Check out this product: ${product.name}\n\nPrice: $${product.price.toFixed(2)}\n\n${product.description}\n\nLink: ${productUrl}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600 mb-4">Product not found</p>
        <Link 
          to="/" 
          className="text-brand-blue hover:underline flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-24">
        <Link 
          to="/" 
          className="text-brand-blue hover:underline flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to products
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="p-6 md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-brand-blue text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
              
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index} 
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating) 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {product.rating} ({product.ratingCount} ratings)
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-gray-700 font-semibold mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={product.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue hover:bg-brand-dark text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy Now
                </a>
                
                <button
                  onClick={handleShareToWhatsApp}
                  className="bg-brand-green hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share to WhatsApp
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Reviews Section */}
          <div className="p-6 border-t">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Reviews and Ratings</h2>
            <p className="text-gray-600">
              This product has received {product.ratingCount} reviews with an average rating of {product.rating} stars.
            </p>
            
            {/* Mock Reviews - In a real app, these would come from an API */}
            <div className="mt-6 space-y-6">
              <div className="border-b pb-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`w-4 h-4 ${
                          index < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-2 font-medium">Excellent Product</p>
                </div>
                <p className="text-gray-600 mt-2">
                  This product exceeded my expectations! The quality is outstanding and it works perfectly.
                </p>
                <p className="text-gray-500 text-sm mt-1">John D. - 3 days ago</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`w-4 h-4 ${
                          index < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-2 font-medium">Great Value</p>
                </div>
                <p className="text-gray-600 mt-2">
                  Very happy with my purchase. Good quality for the price and fast shipping.
                </p>
                <p className="text-gray-500 text-sm mt-1">Sarah M. - 1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
