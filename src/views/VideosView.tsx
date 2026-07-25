import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VideoItem } from '../types';
import { VIDEOS_DATA } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import {
  Play,
  Search,
  Video,
  Filter,
  Sparkles,
  Layers,
  Clock,
} from 'lucide-react';

interface VideosViewProps {
  onOpenVideoModal: (video: VideoItem) => void;
  onOpenConsultation: () => void;
}

export const VideosView: React.FC<VideosViewProps> = ({
  onOpenVideoModal,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Digital Twins',
    'Talking Head',
    'Marketing',
    'Commercials',
    'Social Media',
  ];

  const filteredVideos = VIDEOS_DATA.filter((video) => {
    const matchesCategory =
      selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.toolsUsed.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Video className="w-4 h-4 text-purple-400" />
          <span>Showcase Gallery</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Video Portfolio
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          A collection of AI-generated videos, digital twins, talking-head content, marketing creatives, and commercial productions.
        </p>
      </div>

      {/* Category Filters & Search Controls */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                      : 'glass-panel text-zinc-400 hover:text-white hover:border-purple-500/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search videos or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-zinc-400 px-2 border-b border-white/10 pb-3">
          <span>
            Showing <strong className="text-white">{filteredVideos.length}</strong> of{' '}
            <strong className="text-white">{VIDEOS_DATA.length}</strong> videos
          </span>
        </div>
      </div>

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-2xl space-y-4">
          <p className="text-zinc-400 text-sm">No videos found matching your filter criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => onOpenVideoModal(video)}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden cursor-pointer group hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image & Play Overlay */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Center Hover Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md">
                    <Play className="w-6 h-6 ml-0.5" />
                  </div>
                </div>

                {/* Category Badge Top Left - Removed */}
                {/* Duration Badge Bottom Right - Removed */}
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-grow flex flex-col justify-between bg-[#08080c]">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Footer Banner */}
      <div className="p-8 rounded-2xl glass-panel border border-white/10 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Need Custom Video Production or Voice Cloning?</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
          I produce custom digital twins, commercial promos, localized dubs, and talking head content with short turnaround times.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg"
        >
          Request Custom Video Quote
        </button>
      </div>
    </div>
  );
};
