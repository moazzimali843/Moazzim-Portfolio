import React, { useState } from 'react';
import { ImageItem } from '../types';
import { assetUrl } from '../utils/assetUrl';
import { X, Maximize2 } from 'lucide-react';

interface ImageLightboxModalProps {
  image: ImageItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  image,
  onClose,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 transition-all border border-white/10"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className={`bg-black/90 flex items-center justify-center p-4 relative overflow-hidden group cursor-pointer ${
            isZoomed ? 'scale-110 transition-transform duration-300' : ''
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={assetUrl(image.imageUrl)}
            alt={image.title}
            className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl transition-all duration-300"
          />

          <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs text-zinc-300 flex items-center gap-1.5 border border-white/10">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isZoomed ? 'Click to fit' : 'Click to zoom'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
