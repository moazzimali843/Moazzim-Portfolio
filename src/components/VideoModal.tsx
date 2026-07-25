import React, { useRef, useState } from 'react';
import { VideoItem } from '../types';
import { Badge } from './Badge';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Sparkles,
  Layers,
  Calendar,
} from 'lucide-react';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  onClose,
  onOpenConsultation,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0f]">
          <div className="flex items-center space-x-3">
            <Badge variant="purple" size="md">
              {video.category}
            </Badge>
            {video.featured && (
              <Badge variant="gradient" size="md">
                Featured Project
              </Badge>
            )}
            <span className="text-xs text-zinc-400 font-mono">
              Duration: {video.duration}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden group min-h-[280px] sm:min-h-[380px]">
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.thumbnail}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full max-h-[50vh] object-contain"
          />

          {/* Overlay Custom Controls */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={handleFullscreen}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Details Footer */}
        <div className="p-6 bg-[#08080c] space-y-4 overflow-y-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {video.title}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {video.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" /> Tools & AI Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {video.toolsUsed.map((tool, idx) => (
                <Badge key={idx} variant="blue" size="sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Production ready for social, ad campaigns & corporate communications</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white text-sm font-semibold hover:opacity-95 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Discuss Project Scope</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
