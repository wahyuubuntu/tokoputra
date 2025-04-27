
import React from 'react';
import { Video } from '../types';
import { ExternalLink } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { title, youtubeId, downloadLink } = video;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        
        <div className="mt-3">
          <a
            href={downloadLink}
            className="flex items-center text-brand-blue hover:underline"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            <span>Visit Video</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
