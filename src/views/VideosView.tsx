import React from 'react';
import { motion } from 'motion/react';
import { VideoItem } from '../types';
import { VIDEOS_DATA } from '../data/portfolioData';
import { VideoThumbnail } from '../components/VideoThumbnail';
import { assetUrl } from '../utils/assetUrl';
import { Play, Video } from 'lucide-react';

interface VideosViewProps {
  onOpenVideoModal: (video: VideoItem) => void;
  onOpenConsultation: () => void;
}

export const VideosView: React.FC<VideosViewProps> = ({
  onOpenVideoModal,
  onOpenConsultation,
}) => {
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

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VIDEOS_DATA.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => onOpenVideoModal(video)}
            className="glass-panel rounded-2xl border border-white/10 overflow-hidden cursor-pointer group hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Video Preview & Play Overlay */}
            <div className="relative aspect-video bg-black overflow-hidden">
              <VideoThumbnail
                src={assetUrl(video.videoUrl)}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md">
                  <Play className="w-6 h-6 ml-0.5" />
                </div>
              </div>
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
