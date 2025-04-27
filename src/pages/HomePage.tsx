
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />
      <Banner />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default HomePage;
