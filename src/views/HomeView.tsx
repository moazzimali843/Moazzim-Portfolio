import React from 'react';
import { motion } from 'motion/react';
import { NavPage, VideoItem } from '../types';
import {
  FEATURED_SHOWCASE_VIDEO,
  CORE_SERVICES,
  WHY_WORK_WITH_ME,
  TESTIMONIALS_DATA,
} from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { VideoThumbnail } from '../components/VideoThumbnail';
import { assetUrl } from '../utils/assetUrl';
import {
  Play,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  UserCheck,
  Video,
  Mic,
  Bot,
  TrendingUp,
  Quote,
  Calendar,
  Mail,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenVideoModal: (video: VideoItem) => void;
  onOpenConsultation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenVideoModal,
  onOpenConsultation,
}) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-purple-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-blue-400" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-cyan-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-indigo-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="space-y-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.15)] mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Next-Gen AI Content Production</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            AI Avatars,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Digital Twins
            </span>{' '}
            & Automation
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Create realistic AI avatars, voice clones, and intelligent automation systems for modern businesses looking to scale their digital presence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={() => onNavigate('videos')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-sm shadow-[0_10px_30px_rgba(147,51,234,0.3)] hover:scale-105 transition-transform flex items-center justify-center space-x-2 text-white"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-sm backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center space-x-2 text-white"
            >
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>Book Free Consultation</span>
            </button>
          </motion.div>

          {/* Capability Highlights Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-purple-500/40 transition-colors">
              <div className="text-2xl font-mono font-bold text-white">AI TOOLS</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-wider">Expertise</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-blue-500/40 transition-colors">
              <div className="text-2xl font-mono font-bold text-white">VIDEO</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-wider">Production</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-cyan-500/40 transition-colors">
              <div className="text-2xl font-mono font-bold text-white">TWINS</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-wider">Digital Scale</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-indigo-500/40 transition-colors">
              <div className="text-2xl font-mono font-bold text-white">AUTO</div>
              <div className="text-[10px] uppercase text-gray-500 tracking-wider">Solutions</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM SERVICE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group cursor-pointer" onClick={() => onNavigate('other-services')}>
            <div className="text-purple-400 mb-2">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">AI Avatars</h4>
            <p className="text-[11px] text-gray-400">Realistic digital representations for content creation.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group cursor-pointer" onClick={() => onNavigate('videos')}>
            <div className="text-blue-400 mb-2">
              <Video className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">AI Video</h4>
            <p className="text-[11px] text-gray-400">Product explainers and marketing reels at scale.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer" onClick={() => onNavigate('tools')}>
            <div className="text-cyan-400 mb-2">
              <Mic className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">Voice Cloning</h4>
            <p className="text-[11px] text-gray-400">Natural-sounding voice replication for global brands.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/40 transition-colors group cursor-pointer" onClick={() => onNavigate('other-services')}>
            <div className="text-white mb-2">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold mb-1 text-white">AI Automation</h4>
            <p className="text-[11px] text-gray-400">Chatbots and RAG systems for business operations.</p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED AI AVATAR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/50">
            Featured Highlight
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Featured AI Avatar Showcase
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Experience photorealistic executive avatars and zero-shot voice cloning engineered for multi-lingual global distribution.
          </p>
        </div>

        {/* Large Embedded Showcase Card */}
        <div className="relative glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl group hover:border-purple-500/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Video Thumbnail Container */}
            <div
              className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-black cursor-pointer overflow-hidden"
              onClick={() => onOpenVideoModal(FEATURED_SHOWCASE_VIDEO)}
            >
              <VideoThumbnail
                src={assetUrl(FEATURED_SHOWCASE_VIDEO.videoUrl)}
                alt={FEATURED_SHOWCASE_VIDEO.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Play Button Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-300 border border-white/30 backdrop-blur-md">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>

              {/* Top Badges */}
              {/* Removed badges as requested */}
            </div>

            {/* Video Metadata Sidebar */}
            <div className="lg:col-span-5 p-8 sm:p-10 bg-[#08080d] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Primary Portfolio Showcase
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {FEATURED_SHOWCASE_VIDEO.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {FEATURED_SHOWCASE_VIDEO.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Technologies & AI Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_SHOWCASE_VIDEO.toolsUsed.map((tool, idx) => (
                      <Badge key={idx} variant="gray" size="sm">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenVideoModal(FEATURED_SHOWCASE_VIDEO)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Watch Full Showcase</span>
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl glass-panel text-zinc-300 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Build Similar Twin</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Specialized AI Services
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            High-impact AI production workflows designed to scale video creation, brand engagement, and operational automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/50 transition-all duration-300 bg-gradient-to-br ${service.gradient} space-y-6 group`}
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIconComponent(service.iconName)}
                </div>
                <Badge variant="purple" size="sm">
                  Enterprise Ready
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-zinc-300">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHY WORK WITH ME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Why Work With Me
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Combining deep technical AI mastery with sharp creative direction for high-performing business results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all space-y-4 group"
            >
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/50 w-fit group-hover:scale-110 transition-transform">
                {getIconComponent(item.iconName)}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/50">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Read what agency leaders, marketing directors, and founders say about our AI production standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 pointer-events-none" />

              <p className="text-sm sm:text-base text-zinc-200 italic leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-purple-300">
                    {testimonial.title}
                    {testimonial.company ? ` • ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl glass-panel border border-purple-500/30 bg-gradient-to-r from-purple-950/80 via-blue-950/60 to-cyan-950/80 text-center space-y-8 shadow-[0_0_50px_rgba(168,85,247,0.25)] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <Badge variant="gradient" size="md">
              Get Started Today
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Ready to Build AI-Powered Content?
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Whether you need AI avatars, digital twins, marketing videos, chatbots, voice agents, or automation systems, let's discuss your project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold text-base hover:opacity-95 shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
