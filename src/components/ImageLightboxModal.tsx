import React, { useState } from 'react';
import { ImageItem } from '../types';
import { Badge } from './Badge';
import {
  X,
  Copy,
  Check,
  Maximize2,
  Sparkles,
  Layers,
  Calendar,
  Terminal,
} from 'lucide-react';

interface ImageLightboxModalProps {
  image: ImageItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  image,
  onClose,
  onOpenConsultation,
}) => {
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!image) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(image.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 transition-all border border-white/10"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Container */}
        <div
          className={`lg:w-3/5 bg-black/90 flex items-center justify-center p-4 relative overflow-hidden group cursor-pointer ${
            isZoomed ? 'scale-110 transition-transform duration-300' : ''
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={image.imageUrl}
            alt={image.title}
            className="max-h-[70vh] lg:max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl transition-all duration-300"
          />

          <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs text-zinc-300 flex items-center gap-1.5 border border-white/10">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isZoomed ? 'Click to fit' : 'Click to zoom'}</span>
            </span>
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="lg:w-2/5 p-6 bg-[#08080d] flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="purple" size="md">
                {image.category}
              </Badge>
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                AI Portfolio Asset
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {image.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {image.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
