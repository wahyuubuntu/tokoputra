
import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { videos } from '../data/mockData';
import Pagination from './Pagination';

const VIDEOS_PER_PAGE = 10;

const VideoGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  
  const currentVideos = videos.slice(
    (currentPage - 1) * VIDEOS_PER_PAGE,
    currentPage * VIDEOS_PER_PAGE
  );
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-24">
      <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default VideoGrid;
