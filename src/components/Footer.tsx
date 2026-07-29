import React from 'react';
import { NavPage } from '../types';
import { CONTACT_INFO } from '../data/portfolioData';
import { assetUrl } from '../utils/assetUrl';
import {
  Zap,
  Mail,
  Phone,
  Linkedin,
  Calendar,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030305] border-t border-white/10 pt-16 pb-12 text-zinc-400 relative overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => handleNav('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.3)] group-hover:scale-105 transition-transform duration-300 shrink-0">
                <img
                  src={assetUrl('/moazzim_profile.png')}
                  alt="Moazzim"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xl font-bold tracking-tight text-white">
                Moazzim <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI Studio</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Engineering high-fidelity AI avatars, voice clones, marketing videos, digital twins, and autonomous AI systems for modern enterprise brands and creators.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-zinc-300 hover:text-white hover:border-green-500/50 hover:bg-green-950/40 transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/40 transition-all"
                aria-label="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('videos')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Video Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('images')}
                  className="hover:text-purple-400 transition-colors"
                >
                  AI Image Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tools')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Tools & Technologies
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              AI Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('other-services')}
                  className="hover:text-purple-400 transition-colors"
                >
                  AI Avatars & Digital Twins
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('other-services')}
                  className="hover:text-purple-400 transition-colors"
                >
                  AI Voice Cloning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('other-services')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Voice Agents & RAG
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('other-services')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Workflow Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-zinc-300 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-green-500" />
                <span>{CONTACT_INFO.whatsapp}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-2 text-zinc-300 hover:text-blue-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>
              <button
                onClick={onOpenConsultation}
                className="mt-2 w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg glass-panel border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/30 transition-all text-xs font-semibold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book 15-Min Call</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-bold gap-4">
          <span>© 2026 Moazzim AI Studio</span>
          <div className="flex items-center space-x-6">
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
