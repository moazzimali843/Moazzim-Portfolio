import React from 'react';
import { motion } from 'motion/react';
import { TOOL_SECTIONS } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import {
  Wrench,
  Cpu,
  Sparkles,
  MessageSquare,
  Globe,
  Zap,
  Code,
  Terminal,
  Mic,
  Volume2,
  Radio,
  Activity,
  UserCheck,
  Video,
  Users,
  Smile,
  Film,
  PlaySquare,
  Clapperboard,
  Eye,
  Layers,
  Image,
  Aperture,
  Palette,
  Maximize2,
  Wand2,
  Link,
  Share2,
  Workflow,
  GitMerge,
  Server,
  Layout,
  Database,
  HardDrive,
  Search,
  Box,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

interface ToolsViewProps {
  onOpenConsultation: () => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ onOpenConsultation }) => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Code': return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Mic': return <Mic className="w-5 h-5 text-cyan-400" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-blue-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-rose-400" />;
      case 'Waveform': return <Activity className="w-5 h-5 text-purple-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-purple-400" />;
      case 'Video': return <Video className="w-5 h-5 text-blue-400" />;
      case 'Users': return <Users className="w-5 h-5 text-indigo-400" />;
      case 'Smile': return <Smile className="w-5 h-5 text-cyan-400" />;
      case 'Film': return <Film className="w-5 h-5 text-purple-400" />;
      case 'PlaySquare': return <PlaySquare className="w-5 h-5 text-blue-400" />;
      case 'Clapperboard': return <Clapperboard className="w-5 h-5 text-rose-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Image': return <Image className="w-5 h-5 text-purple-400" />;
      case 'Aperture': return <Aperture className="w-5 h-5 text-amber-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-blue-400" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-indigo-400" />;
      case 'Wand2': return <Wand2 className="w-5 h-5 text-purple-400" />;
      case 'Link': return <Link className="w-5 h-5 text-emerald-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-cyan-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-rose-400" />;
      case 'GitMerge': return <GitMerge className="w-5 h-5 text-purple-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-purple-400" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-blue-400" />;
      case 'Search': return <Search className="w-5 h-5 text-cyan-400" />;
      case 'Box': return <Box className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      default: return <Wrench className="w-5 h-5 text-purple-400" />;
    }
  };

  const getProficiencyVariant = (prof: string) => {
    switch (prof) {
      case 'Mastery': return 'gradient';
      case 'Expert': return 'purple';
      case 'Advanced': return 'blue';
      default: return 'gray';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Wrench className="w-4 h-4 text-cyan-400" />
          <span>Technology Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          AI Tools & Technologies
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Hands-on experience across leading AI platforms for content creation, automation, and intelligent systems.
        </p>
      </div>

      {/* 7 Sections */}
      <div className="space-y-16">
        {TOOL_SECTIONS.map((section, sIdx) => (
          <section key={section.id} className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-purple-300 text-xs font-bold font-mono">
                  0{sIdx + 1}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 pl-11">
                {section.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {section.tools.map((tool, tIdx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: tIdx * 0.04 }}
                  className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 hover:bg-purple-950/20 transition-all duration-200 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {getToolIcon(tool.iconName)}
                    </div>
                    <Badge variant={getProficiencyVariant(tool.proficiency)} size="sm">
                      {tool.proficiency}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-500/30 text-center space-y-6 bg-gradient-to-r from-purple-950/60 to-blue-950/60">
        <h3 className="text-2xl font-bold text-white">Need Custom Tool Stack Integration or Advice?</h3>
        <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
          Whether you need n8n workflow nodes, custom LangChain agents, or HeyGen avatar setups, I help assemble the ultimate GenAI stack for your business.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-sm shadow-xl hover:opacity-95 transition-all"
        >
          Book AI Stack Consultation
        </button>
      </div>
    </div>
  );
};
