import React from 'react';
import { motion } from 'motion/react';
import { OTHER_AI_SERVICES, PROCESS_TIMELINE } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import {
  Layers,
  MessageSquareText,
  PhoneCall,
  FileSearch,
  GitBranch,
  Cpu,
  Sliders,
  CheckCircle,
  ArrowRight,
  Clock,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface OtherServicesViewProps {
  onOpenConsultation: () => void;
}

export const OtherServicesView: React.FC<OtherServicesViewProps> = ({
  onOpenConsultation,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-purple-400" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-green-400" />;
      case 'FileSearch':
        return <FileSearch className="w-6 h-6 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-rose-400" />;
      default:
        return <Layers className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-20">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Intelligent Automations</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Other AI Services
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Beyond content creation, I build intelligent systems that automate business operations and customer interactions.
        </p>
      </div>

      {/* 6 Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OTHER_AI_SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-7 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all duration-300 space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform">
                {getServiceIcon(service.iconName)}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  Key Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {service.details.map((d, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Use Cases Badges */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                Popular Applications
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.useCases.map((uc, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-white/5 text-purple-300 px-2 py-0.5 rounded-full border border-purple-800/30"
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PROCESS TIMELINE SECTION */}
      <section className="space-y-12 pt-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Development & Deployment Process
          </h2>
          <p className="text-sm text-zinc-400">
            A battle-tested 6-step roadmap ensuring smooth implementation from initial audit to final launch.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PROCESS_TIMELINE.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4 hover:border-cyan-500/40 transition-all relative group"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 text-white font-bold text-base flex items-center justify-center shadow-md">
                  0{step.stepNumber}
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/50 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {step.duration}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-500/30 text-center space-y-6 bg-gradient-to-r from-purple-950/80 via-blue-950/60 to-cyan-950/80">
        <h3 className="text-2xl font-bold text-white">Ready to Automate Customer Inquiries & Workflows?</h3>
        <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
          Let's discuss how an AI voice agent, RAG document assistant, or automated workflow pipeline can reduce costs and scale operations.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule AI Automation Audit</span>
        </button>
      </div>
    </div>
  );
};
