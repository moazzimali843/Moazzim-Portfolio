import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageItem } from '../types';
import { IMAGES_DATA } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import {
  Image as ImageIcon,
  Maximize2,
  Search,
  Sparkles,
  Terminal,
} from 'lucide-react';

interface ImagesViewProps {
  onOpenImageModal: (image: ImageItem) => void;
  onOpenConsultation: () => void;
}

export const ImagesView: React.FC<ImagesViewProps> = ({
  onOpenImageModal,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Portraits',
    'Product Ads',
    'Social Media',
    'Marketing Concepts',
    'Creative Art',
  ];

  const filteredImages = IMAGES_DATA.filter((img) => {
    const matchesCategory =
      selectedCategory === 'All' || img.category === selectedCategory;
    const matchesSearch =
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.toolsUsed.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

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

      {/* Filter Tabs & Search Controls */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]'
                      : 'glass-panel text-zinc-400 hover:text-white hover:border-blue-500/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search images, prompts, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-400 px-2 border-b border-white/10 pb-3">
          <span>
            Showing <strong className="text-white">{filteredImages.length}</strong> of{' '}
            <strong className="text-white">{IMAGES_DATA.length}</strong> visual assets
          </span>
          <span className="text-blue-400 font-mono">30 High-Resolution Assets</span>
        </div>
      </div>

      {/* Masonry Style Pinterest Grid */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-2xl space-y-4">
          <p className="text-zinc-400 text-sm">No artwork found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
          >
            Reset Search
          </button>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
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
                  src={img.imageUrl}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="blue" size="sm">
                      {img.category}
                    </Badge>
                    <div className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-white line-clamp-1">
                      {img.title}
                    </h3>
                    <p className="text-[11px] text-zinc-300 line-clamp-2">
                      {img.description}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1">
                      {img.toolsUsed.map((tool, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white/15 text-zinc-200 px-2 py-0.5 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Always visible title bar on mobile / low hover */}
              <div className="p-3 bg-[#08080c] sm:hidden">
                <div className="text-xs font-semibold text-white truncate">
                  {img.title}
                </div>
                <div className="text-[10px] text-zinc-400">{img.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

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
