import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import {
  Sparkles,
  Video,
  Image as ImageIcon,
  Wrench,
  Layers,
  Mail,
  Menu,
  X,
  Calendar,
  Zap,
} from 'lucide-react';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { page: NavPage; label: string; icon: React.ReactNode }[] = [
    { page: 'home', label: 'Home', icon: <Sparkles className="w-4 h-4" /> },
    { page: 'videos', label: 'Videos', icon: <Video className="w-4 h-4" /> },
    { page: 'images', label: 'Images', icon: <ImageIcon className="w-4 h-4" /> },
    { page: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
    { page: 'other-services', label: 'Other AI Services', icon: <Layers className="w-4 h-4" /> },
    { page: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl'
          : 'bg-[#050505]/40 backdrop-blur-md py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-[0_0_20px_rgba(147,51,234,0.5)] group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src="/moazzim_profile.jpg"
                alt="Moazzim"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 italic">
                Moazzim AI Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center space-x-2 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center space-x-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-purple-700" />
              <span>Book Call</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-zinc-300 hover:text-white rounded-xl glass-panel hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
