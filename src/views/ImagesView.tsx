import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageItem } from '../types';
import { IMAGES_DATA } from '../data/portfolioData';
import { assetUrl } from '../utils/assetUrl';
import { shuffleArray } from '../utils/shuffleArray';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';

interface ImagesViewProps {
  onOpenImageModal: (image: ImageItem) => void;
  onOpenConsultation: () => void;
}

export const ImagesView: React.FC<ImagesViewProps> = ({
  onOpenImageModal,
  onOpenConsultation,
}) => {
  const [shuffledImages] = useState(() => shuffleArray(IMAGES_DATA));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <ImageIcon className="w-4 h-4 text-blue-400" />
          <span>Generative Visual Art</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          AI Image Portfolio
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          A showcase of AI-generated visuals, marketing creatives, advertising concepts, product imagery, and digital artwork.
        </p>
      </div>

      {/* Masonry Style Pinterest Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {shuffledImages.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (idx % 10) * 0.05 }}
            onClick={() => onOpenImageModal(img)}
            className="break-inside-avoid glass-panel rounded-2xl border border-white/10 overflow-hidden cursor-pointer group hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all duration-300 relative"
          >
            <div className="relative overflow-hidden bg-black">
              <img
                src={assetUrl(img.imageUrl)}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white line-clamp-1">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#08080c] sm:hidden">
              <div className="text-xs font-semibold text-white truncate">
                {img.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="p-8 rounded-2xl glass-panel border border-white/10 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Looking for Custom Midjourney & Flux Visual Concepts?</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
          I generate high-converting advertising creatives, product packaging renders, brand imagery, and custom LoRAs.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg"
        >
          Commission Custom Images
        </button>
      </div>
    </div>
  );
};
