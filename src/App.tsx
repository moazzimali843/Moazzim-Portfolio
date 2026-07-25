import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavPage, VideoItem, ImageItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ConsultationModal } from './components/ConsultationModal';

import { HomeView } from './views/HomeView';
import { VideosView } from './views/VideosView';
import { ImagesView } from './views/ImagesView';
import { ToolsView } from './views/ToolsView';
import { OtherServicesView } from './views/OtherServicesView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  // Sync window scroll state on page switch
  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f3f4f6] font-sans selection:bg-purple-900 selection:text-white relative flex flex-col justify-between overflow-x-hidden">
      {/* Background Atmospheric Effects for Immersive UI */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] rotate-12 pointer-events-none z-0"></div>

      {/* Sticky Header Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Page Content Views */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenVideoModal={(video) => setActiveVideo(video)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}

            {currentPage === 'videos' && (
              <VideosView
                onOpenVideoModal={(video) => setActiveVideo(video)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}

            {currentPage === 'images' && (
              <ImagesView
                onOpenImageModal={(image) => setActiveImage(image)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}

            {currentPage === 'tools' && (
              <ToolsView
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}

            {currentPage === 'other-services' && (
              <OtherServicesView
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}

            {currentPage === 'contact' && (
              <ContactView
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Lightbox / Action Modals */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <ImageLightboxModal
        image={activeImage}
        onClose={() => setActiveImage(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
