
import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/mockData';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length >= 1) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleProductClick = (product: Product) => {
    setIsSearchOpen(false);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://iili.io/3jvC8Xf.png?w=400&h=400&fit=crop&auto=format" 
               alt="Toko Putra Logo" 
               className="h-8 w-auto object-contain"
             />
          </Link>
          
          <div className="relative" ref={searchRef}>
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Search className="w-5 h-5" />
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-12 w-80 bg-white shadow-lg rounded-lg p-4 animate-fade-in z-50">
                <input
                  type="text"
                  placeholder="Cari Produk..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-brand-blue"
                  autoFocus
                />
                
                {searchResults.length > 0 && (
                  <div className="mt-3 max-h-64 overflow-y-auto">
                    {searchResults.map(product => (
                      <div 
                        key={product.id}
                        className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                        onClick={() => handleProductClick(product)}
                      >
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-md mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-800">{product.name}</p>
                          <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {searchQuery.length >= 1 && searchResults.length === 0 && (
                  <p className="text-center py-3 text-gray-500">No products found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
      />
    </>
  );
};

export default Header;
