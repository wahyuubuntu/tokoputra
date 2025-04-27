
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Video, Web, QrCode } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Footer: React.FC = () => {
  const [isQrCodeOpen, setIsQrCodeOpen] = useState(false);
  const websiteUrl = window.location.origin;
  const websiteName = "Our Tech Store";

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
            onClick={() => setIsQrCodeOpen(true)}
            className="flex flex-col items-center text-gray-700 hover:text-brand-blue transition-colors"
          >
            <Web className="w-6 h-6" />
            <span className="text-xs mt-1">Website</span>
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

      <Dialog open={isQrCodeOpen} onOpenChange={setIsQrCodeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">{websiteName}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6">
            <QrCode size={200} />
            <p className="mt-4 text-center text-sm text-gray-500">{websiteUrl}</p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
