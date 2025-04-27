
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Star, ShoppingCart, Share2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, imageUrl, description, rating, ratingCount, buyLink } = product;

  const handleShareToWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const productUrl = `${window.location.origin}/product/${id}`;
    const message = `Check out this product: ${name}\n\nPrice: $${price.toFixed(2)}\n\n${description}\n\nLink: ${productUrl}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative h-48">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 truncate">{name}</h3>
          <p className="text-brand-blue text-lg font-bold mt-1">${price.toFixed(2)}</p>
          
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
          
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">({ratingCount} ratings)</span>
          </div>
          
          <div className="flex justify-between mt-4">
            <a 
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-sm text-brand-blue font-medium hover:underline"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Buy Now
            </a>
            
            <button
              onClick={handleShareToWhatsApp}
              className="flex items-center text-sm text-brand-green font-medium hover:underline"
            >
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
