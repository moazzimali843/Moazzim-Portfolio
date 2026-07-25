import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import {
  Mail,
  Phone,
  Linkedin,
  Calendar,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Clock,
  DollarSign,
} from 'lucide-react';

interface ContactViewProps {
  onOpenConsultation: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenConsultation }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-4 h-4 text-purple-400" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Let's Build Something Amazing
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Let's discuss your project and explore how AI can help achieve your goals.
        </p>
      </div>

      {/* 4 Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* WhatsApp Card */}
        <div className="p-6 rounded-2xl glass-panel border border-green-500/30 hover:border-green-500/70 transition-all space-y-4 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-green-950/50 border border-green-800/50 w-fit text-green-400 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">WhatsApp</h3>
            <p className="text-sm font-mono text-zinc-300">{CONTACT_INFO.whatsapp}</p>
          </div>
          <div className="pt-2 space-y-2">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyPhone}
              className="w-full py-2 px-3 rounded-xl glass-panel text-zinc-400 hover:text-white text-xs flex items-center justify-center space-x-1"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? 'Copied Number!' : 'Copy Number'}</span>
            </button>
          </div>
        </div>

        {/* Email Card */}
        <div className="p-6 rounded-2xl glass-panel border border-blue-500/30 hover:border-blue-500/70 transition-all space-y-4 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-800/50 w-fit text-blue-400 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Email</h3>
            <p className="text-xs font-mono text-zinc-300 break-all">{CONTACT_INFO.email}</p>
          </div>
          <div className="pt-2 space-y-2">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2 px-3 rounded-xl glass-panel text-zinc-400 hover:text-white text-xs flex items-center justify-center space-x-1"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied Email!' : 'Copy Address'}</span>
            </button>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 hover:border-cyan-500/70 transition-all space-y-4 flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-800/50 w-fit text-cyan-400 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">LinkedIn</h3>
            <p className="text-xs text-zinc-400">Professional Profile & Network</p>
          </div>
          <div className="pt-2">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
            >
              <span>View Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Free Consultation Cal.com Card */}
        <div className="p-6 rounded-2xl glass-panel border border-purple-500/40 hover:border-purple-500/80 transition-all space-y-4 flex flex-col justify-between group bg-purple-950/20">
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-purple-600/30 border border-purple-500/50 w-fit text-purple-300 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Free Consultation</h3>
            <p className="text-xs text-zinc-400">15-Minute Strategy & AI Audit</p>
          </div>
          <div className="pt-2">
            <a
              href={CONTACT_INFO.calComLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Book 15-Minute Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* CUSTOM PROJECT PRICING SECTION */}
      <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 bg-[#08080d] space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Custom Project Pricing
          </h2>
        </div>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl">
          {CONTACT_INFO.pricingNoteText}
        </p>
      </section>

      {/* Direct Contact & Strategy Call Action Section */}
      <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-blue-950/30 to-cyan-950/40 space-y-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <Badge variant="purple" size="md">
            Direct Communication
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Reach out directly via Email or WhatsApp to discuss your project requirements, request a quote, or schedule an AI automation audit.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold text-sm transition-all shadow-lg flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Chat on WhatsApp ({CONTACT_INFO.whatsapp})</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg flex items-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email Directly ({CONTACT_INFO.email})</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule 15-Min Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-4 flex items-center justify-center space-x-6 text-xs text-zinc-400 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>Typical response: 4–6 hours</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Confidentiality Guaranteed</span>
          </div>
        </div>
      </section>
    </div>
  );
};
