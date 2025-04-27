
import React from 'react';
import Header from '../components/Header';
import VideoGrid from '../components/VideoGrid';
import Footer from '../components/Footer';

const VideosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />
      <VideoGrid />
      <Footer />
    </div>
  );
};

export default VideosPage;
