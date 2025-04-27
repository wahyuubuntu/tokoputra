
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Video } from 'lucide-react';
import ProfileModal from './ProfileModal';
import { profileData } from '../data/mockData';

const Footer: React.FC = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-40">
      <div className="container mx-auto">
        <nav className="flex justify-around items-center py-3">
          <Link
            to="/"
            className="flex flex-col items-center text-gray-700 hover:text-brand-blue transition-colors"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <button
            onClick={openProfileModal}
            className="flex flex-col items-center text-gray-700 hover:text-brand-blue transition-colors"
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
          
          <Link
            to="/videos"
            className="flex flex-col items-center text-gray-700 hover:text-brand-blue transition-colors"
          >
            <Video className="w-6 h-6" />
            <span className="text-xs mt-1">Videos</span>
          </Link>
        </nav>
      </div>

      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={closeProfileModal} 
        profileData={profileData} 
      />
    </footer>
  );
};

export default Footer;
