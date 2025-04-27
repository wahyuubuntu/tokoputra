
import React from 'react';
import { ProfileContact } from '../types';
import { X } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileData: ProfileContact;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, profileData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div 
        className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Contact Information</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <p className="text-xl font-bold text-brand-blue">{profileData.name}</p>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-800">{profileData.email}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-gray-800">{profileData.phone}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-gray-800">{profileData.address}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Social Media</p>
              <div className="flex gap-4">
                {profileData.socialLinks.facebook && (
                  <a 
                    href={profileData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                )}
                
                {profileData.socialLinks.instagram && (
                  <a 
                    href={profileData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    Instagram
                  </a>
                )}
                
                {profileData.socialLinks.twitter && (
                  <a 
                    href={profileData.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t">
          <button
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
