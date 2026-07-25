import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import {
  X,
  Calendar,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Avatars & Digital Twins',
    budget: '$1,000 - $3,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      projectType: 'AI Avatars & Digital Twins',
      budget: '$1,000 - $3,000',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#08080d]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0c0c12]">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Book Free Consultation
              </h3>
              <p className="text-xs text-zinc-400">
                15-Minute Project Strategy & AI Stack Audit
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">
                Inquiry Received!
              </h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="text-purple-300 font-semibold">{formData.name}</span>. I have received your request for <span className="text-cyan-300 font-semibold">{formData.projectType}</span> and will respond to your email ({formData.email}) within 4 hours.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <a
                  href={CONTACT_INFO.calComLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Lock In Cal.com Time Slot</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl glass-panel text-zinc-300 hover:text-white text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Quick Action Links Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CONTACT_INFO.calComLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-panel border border-purple-500/30 hover:border-purple-500 hover:bg-purple-950/40 transition-all group flex items-center space-x-3"
                >
                  <div className="p-2.5 rounded-lg bg-purple-600/30 text-purple-300 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white flex items-center gap-1">
                      Cal.com Booking <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </h5>
                    <p className="text-xs text-zinc-400">Direct 15-min calendar slot</p>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-panel border border-green-500/30 hover:border-green-500 hover:bg-green-950/40 transition-all group flex items-center space-x-3"
                >
                  <div className="p-2.5 rounded-lg bg-green-600/30 text-green-300 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white flex items-center gap-1">
                      WhatsApp Chat <ArrowRight className="w-3.5 h-3.5 text-green-400 group-hover:translate-x-1 transition-transform" />
                    </h5>
                    <p className="text-xs text-zinc-400">Instant direct message</p>
                  </div>
                </a>
              </div>

              <div className="relative flex items-center my-4">
                <div className="flex-grow border-t border-white/10" />
                <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Or Send Project Details Directly
                </span>
                <div className="flex-grow border-t border-white/10" />
              </div>

              {/* Quick Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Primary AI Need
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="AI Avatars & Digital Twins">AI Avatars & Digital Twins</option>
                      <option value="AI Video Production">AI Video Production</option>
                      <option value="Voice Cloning & Dubbing">Voice Cloning & Dubbing</option>
                      <option value="Voice Agents & Chatbots">Voice Agents & Chatbots</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="Other Custom AI Solutions">Other Custom AI Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Project Overview
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe what you're looking to build or produce..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(168,85,247,0.35)] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
