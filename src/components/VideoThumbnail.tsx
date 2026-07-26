import React, { useEffect, useRef } from 'react';

interface VideoThumbnailProps {
  src: string;
  alt: string;
  className?: string;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  src,
  alt,
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const seekToPreview = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        video.currentTime = Math.min(1, video.duration * 0.05);
      }
    };

    video.addEventListener('loadedmetadata', seekToPreview);
    return () => video.removeEventListener('loadedmetadata', seekToPreview);
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="metadata"
      aria-label={alt}
      className={className}
    />
  );
};
