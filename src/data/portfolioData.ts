import {
  VideoItem,
  ImageItem,
  ToolCategorySection,
  ServiceItem,
  OtherServiceItem,
  Testimonial,
  ProcessStep,
} from '../types';

/**
 * HOW TO ADD YOUR OWN CUSTOM VIDEOS & IMAGES TO THE WEBSITE:
 *
 * 1. Put your video files (.mp4, .webm) into the folder: public/videos/
 *    e.g. public/videos/my_demo_video.mp4
 *    In this file, set: videoUrl: '/videos/my_demo_video.mp4'
 *
 * 2. Put your image/photo files (.jpg, .png, .webp) into the folder: public/images/
 *    e.g. public/images/my_thumbnail.jpg
 *    In this file, set: thumbnail: '/images/my_thumbnail.jpg' or imageUrl: '/images/my_photo.jpg'
 */

export const FEATURED_SHOWCASE_VIDEO: VideoItem = {
  id: 'featured-1',
  title: 'Intro Showcase',
  category: 'Featured',
  description: 'Featured video showcase',
  thumbnail: '/images/Real%20Time%20Voice%20Agent.png',
  videoUrl: '/videos/Sample%20Intro.mov',
  toolsUsed: [],
  aspectRatio: '16:9',
  featured: true,
};

export const VIDEOS_DATA: VideoItem[] = [
  FEATURED_SHOWCASE_VIDEO,
  {
    id: 'v-2',
    title: 'Assessment Module',
    category: 'Learning',
    description: '',
    thumbnail: '/images/Real%20Time%20Voice%20Agent.png',
    videoUrl: '/videos/Assessment%20Module.mp4',
    toolsUsed: [],
    aspectRatio: '16:9',
  },
  {
    id: 'v-3',
    title: 'Learning Module',
    category: 'Learning',
    description: '',
    thumbnail: '/images/Real%20Time%20Voice%20Agent.png',
    videoUrl: '/videos/Learning%20Module.mp4',
    toolsUsed: [],
    aspectRatio: '16:9',
  },
  {
    id: 'v-4',
    title: 'Muntaha ki dost',
    category: 'Production',
    description: '',
    thumbnail: '/images/Real%20Time%20Voice%20Agent.png',
    videoUrl: '/videos/Muntaha%20ki%20dost.mp4',
    toolsUsed: [],
    aspectRatio: '16:9',
  },
  {
    id: 'v-5',
    title: 'Project Showcase',
    category: 'Project',
    description: '',
    thumbnail: '/images/ChatGPT%20Image%20Jun%2020%2C%202026%2C%2012_46_03%20AM.png',
    videoUrl: '/videos/90f3b040-66d9-4aed-8480-8ecbaf34566e_final.mov',
    toolsUsed: [],
    aspectRatio: '16:9',
  },
];

export const IMAGES_DATA: ImageItem[] = [
  {
    id: 'img-1',
    title: 'Real Time Voice Agent',
    category: 'Projects',
    description: '',
    imageUrl: '/images/Real%20Time%20Voice%20Agent.png',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'portrait',
  },
  {
    id: 'img-2',
    title: 'ChatGPT Generated Image',
    category: 'AI Generation',
    description: '',
    imageUrl: '/images/ChatGPT%20Image%20Jun%2020%2C%202026%2C%2012_46_03%20AM.png',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'landscape',
  },
  {
    id: 'img-3',
    title: 'Gemini Generated Image 1',
    category: 'AI Generation',
    description: '',
    imageUrl: '/images/Gemini_Generated_Image_qv6240qv6240qv62.png',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'landscape',
  },
  {
    id: 'img-4',
    title: 'Gemini Generated Image 2',
    category: 'AI Generation',
    description: '',
    imageUrl: '/images/Gemini_Generated_Image_xknac2xknac2xkna.png',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'landscape',
  },
  {
    id: 'img-5',
    title: 'WhatsApp Showcase 2',
    category: 'Gallery',
    description: '',
    imageUrl: '/images/WhatsApp%20Image%202026-01-20%20at%2016.11.11%20(2).jpeg',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'portrait',
  },
  {
    id: 'img-6',
    title: 'WhatsApp Showcase 3',
    category: 'Gallery',
    description: '',
    imageUrl: '/images/WhatsApp%20Image%202026-01-20%20at%2016.11.11%20(3).jpeg',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'portrait',
  },
  {
    id: 'img-7',
    title: 'WhatsApp Showcase 4',
    category: 'Gallery',
    description: '',
    imageUrl: '/images/WhatsApp%20Image%202026-01-20%20at%2016.11.11%20(4).jpeg',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'portrait',
  },
  {
    id: 'img-8',
    title: 'WhatsApp Showcase 5',
    category: 'Gallery',
    description: '',
    imageUrl: '/images/WhatsApp%20Image%202026-01-20%20at%2016.11.11%20(5).jpeg',
    prompt: '',
    toolsUsed: [],
    aspectRatio: 'portrait',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 's-1',
    title: 'AI Avatars & Digital Twins',
    description: 'Realistic digital representations for content creation and business communication. Voice-matched, gesture-aligned, and ready for high-volume video synthesis.',
    iconName: 'UserCheck',
    features: [
      'Photorealistic 4K avatar training from custom video footage',
      'Voice clone integration with localized language dubbing',
      'Custom facial gesture & lip-sync fine-tuning',
      'Script-to-video automated batch rendering pipelines',
    ],
    gradient: 'from-purple-600/20 via-purple-500/10 to-transparent',
  },
  {
    id: 's-2',
    title: 'AI Video Production',
    description: 'Marketing videos, educational content, product explainers, and social media content crafted with cutting-edge generative video AI tools.',
    iconName: 'Video',
    features: [
      'High-impact social media short-form video production',
      'AI commercial commercials & brand video teasers',
      'Interactive e-learning and corporate training videos',
      'Cinematic text-to-video & image-to-video generation',
    ],
    gradient: 'from-blue-600/20 via-blue-500/10 to-transparent',
  },
  {
    id: 's-3',
    title: 'AI Voice Cloning',
    description: 'Natural-sounding voice replication for scalable content production across podcasts, audiobooks, customer support, and commercial voiceovers.',
    iconName: 'Mic',
    features: [
      'Zero-shot & few-shot high fidelity voice replication',
      'Emotional cadence control and accent fine-tuning',
      'Multi-speaker podcast and monologue generation',
      'Cross-lingual neural voice synthesis in 30+ languages',
    ],
    gradient: 'from-cyan-600/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 's-4',
    title: 'AI Automation',
    description: 'Chatbots, voice agents, workflow automation, and AI-powered business solutions that eliminate manual operations and drive revenue growth.',
    iconName: 'Bot',
    features: [
      'Inbound and outbound AI voice call agent deployment',
      'Knowledge-base RAG chatbots with document intelligence',
      'End-to-end multi-app workflow automation (n8n / Make)',
      'Custom LLM agent swarms for autonomous task execution',
    ],
    gradient: 'from-indigo-600/20 via-purple-500/10 to-transparent',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    id: 'w-1',
    title: 'End-to-End Production',
    description: 'From initial concept and script writing to avatar training, video synthesis, audio mastering, and final polished delivery.',
    iconName: 'Layers',
  },
  {
    id: 'w-2',
    title: 'Fast Turnaround',
    description: 'Efficient AI-powered workflows that cut video production time from weeks to hours without compromising cinematic quality.',
    iconName: 'Zap',
  },
  {
    id: 'w-3',
    title: 'Modern AI Stack',
    description: 'Hands-on expert mastery across top generative tools including HeyGen, ElevenLabs, Runway Gen-3, Midjourney, n8n, and LangChain.',
    iconName: 'Cpu',
  },
  {
    id: 'w-4',
    title: 'Business-Focused Results',
    description: 'Solutions designed for practical business utility — driving engagement, customer retention, lead conversion, and operational cost savings.',
    iconName: 'TrendingUp',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Moazzim delivered high-quality AI-generated video content with exceptional attention to detail. The avatar quality exceeded our expectations.',
    author: 'Sarah Jenkins',
    title: 'Marketing Director',
    company: 'Nexus Tech Global',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-2',
    quote: 'The workflow was smooth, communication was excellent, and the final output looked highly professional. Our social engagement increased by 300%.',
    author: 'David Sterling',
    title: 'Business Owner',
    company: 'Apex Media Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-3',
    quote: 'We were able to produce content significantly faster using the AI production process implemented by Moazzim. A complete game-changer for our launch.',
    author: 'Elena Rostova',
    title: 'Startup Founder',
    company: 'Veloce AI',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-4',
    quote: 'Strong technical expertise combined with creative execution. Highly recommended for AI-driven content projects, voice agents, and custom workflows.',
    author: 'Marcus Thorne',
    title: 'Operations Manager',
    company: 'Synapse Automations',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];

export const TOOL_SECTIONS: ToolCategorySection[] = [
  {
    id: 'llm',
    title: 'Large Language Models',
    subtitle: 'Foundation models for text synthesis, reasoning, code generation, and intelligent decision making.',
    tools: [
      { name: 'ChatGPT', iconName: 'MessageSquare', description: 'Advanced prompt engineering, GPT-4o vision capabilities, and custom GPT builder workflows.', category: 'LLM', proficiency: 'Expert' },
      { name: 'Claude', iconName: 'Sparkles', description: 'Deep long-context document analysis, nuanced writing, and complex system prompt design with Claude 3.5 Sonnet.', category: 'LLM', proficiency: 'Expert' },
      { name: 'Gemini', iconName: 'Globe', description: 'Native multimodal reasoning with Google Gemini models for real-time visual, voice, and data processing.', category: 'LLM', proficiency: 'Expert' },
      { name: 'Grok', iconName: 'Zap', description: 'Real-time web data intelligence and conversational analysis using xAI Grok.', category: 'LLM', proficiency: 'Advanced' },
      { name: 'DeepSeek', iconName: 'Code', description: 'Open-weight reasoning models fine-tuned for complex mathematical, logic, and code synthesis.', category: 'LLM', proficiency: 'Expert' },
      { name: 'Llama', iconName: 'Terminal', description: 'Self-hosted open-source model deployment, quantization, and fine-tuning with Llama 3 models.', category: 'LLM', proficiency: 'Advanced' },
      { name: 'Mistral', iconName: 'Cpu', description: 'High-speed lightweight open-weight models for edge processing and efficient API endpoints.', category: 'LLM', proficiency: 'Advanced' },
    ],
  },
  {
    id: 'voice-ai',
    title: 'Voice AI',
    subtitle: 'Neural voice cloning, text-to-speech synthesis, speech recognition, and emotional cadence control.',
    tools: [
      { name: 'ElevenLabs', iconName: 'Mic', description: 'Industry gold-standard high fidelity voice cloning, dubbing, and expressive text-to-speech rendering.', category: 'Voice AI', proficiency: 'Mastery' },
      { name: 'PlayHT', iconName: 'Volume2', description: 'Ultra-realistic conversational AI voice generation with low latency streaming capabilities.', category: 'Voice AI', proficiency: 'Expert' },
      { name: 'Murf', iconName: 'Radio', description: 'Studio-quality studio voiceovers with precise pitch, emphasis, and speed timing controls.', category: 'Voice AI', proficiency: 'Advanced' },
      { name: 'Resemble AI', iconName: 'Waveform', description: 'Real-time voice manipulation, deepfake detection, and ethical voice synthesis solutions.', category: 'Voice AI', proficiency: 'Advanced' },
    ],
  },
  {
    id: 'avatars',
    title: 'Digital Twins & Avatars',
    subtitle: 'Photorealistic digital presenters, voice-synced talking avatars, and video synthesis platforms.',
    tools: [
      { name: 'Synthesia', iconName: 'UserCheck', description: 'Enterprise studio avatar video production with multi-speaker layouts and turn-key presentation templates.', category: 'Digital Twins', proficiency: 'Mastery' },
      { name: 'HeyGen', iconName: 'Video', description: 'Custom avatar creation, photorealistic video dubbing, and automated social media clip generation.', category: 'Digital Twins', proficiency: 'Mastery' },
      { name: 'Tavus', iconName: 'Users', description: 'Programmatic personalized video generation at scale for outbound sales and customer onboarding.', category: 'Digital Twins', proficiency: 'Expert' },
      { name: 'D-ID', iconName: 'Smile', description: 'Photo-to-talking avatar animation with real-time streaming API integration.', category: 'Digital Twins', proficiency: 'Expert' },
    ],
  },
  {
    id: 'video-gen',
    title: 'Video Generation',
    subtitle: 'Generative diffusion video models, camera motion synthesis, cinematic lighting, and video-to-video styling.',
    tools: [
      { name: 'Runway', iconName: 'Film', description: 'Runway Gen-2 & Gen-3 Alpha cinematic video generation, motion brush controls, and background removal.', category: 'Video Gen', proficiency: 'Mastery' },
      { name: 'Veo', iconName: 'PlaySquare', description: 'Google Veo high-definition generative video with precise spatial coherence and prompt understanding.', category: 'Video Gen', proficiency: 'Expert' },
      { name: 'Kling', iconName: 'Clapperboard', description: 'Photorealistic high-motion video synthesis with long clip consistency and camera controls.', category: 'Video Gen', proficiency: 'Expert' },
      { name: 'Hailuo', iconName: 'Eye', description: 'Smooth fluid animation and creative physics simulation for visual effects.', category: 'Video Gen', proficiency: 'Advanced' },
      { name: 'Pika', iconName: 'Sparkles', description: 'Idea-to-video synthesis, 3D character animation, and dynamic aspect ratio video editing.', category: 'Video Gen', proficiency: 'Expert' },
      { name: 'Luma', iconName: 'Layers', description: 'Luma Dream Machine camera trajectory synthesis and photorealistic 3D environment rendering.', category: 'Video Gen', proficiency: 'Expert' },
    ],
  },
  {
    id: 'image-gen',
    title: 'Image Generation',
    subtitle: 'State-of-the-art text-to-image models, custom LoRA training, inpainting, and commercial product rendering.',
    tools: [
      { name: 'Midjourney', iconName: 'Image', description: 'Midjourney v6 hyper-realistic photography, cinematic art direction, and style consistency matrices.', category: 'Image Gen', proficiency: 'Mastery' },
      { name: 'Flux', iconName: 'Aperture', description: 'FLUX.1 Pro and Schnell high-fidelity text rendering, anatomical precision, and fast generation.', category: 'Image Gen', proficiency: 'Mastery' },
      { name: 'GPT Image', iconName: 'Palette', description: 'Integrated image generation with precise contextual prompt alignment and iterative editing.', category: 'Image Gen', proficiency: 'Expert' },
      { name: 'Stable Diffusion', iconName: 'Maximize2', description: 'ComfyUI node pipelines, ControlNet depth guidance, LoRA training, and custom checkpoint fine-tuning.', category: 'Image Gen', proficiency: 'Expert' },
      { name: 'Leonardo AI', iconName: 'Wand2', description: 'Commercial asset generation, 3D texture maps, and canvas motion graphics styling.', category: 'Image Gen', proficiency: 'Expert' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Development',
    subtitle: 'Workflow orchestration, backend API development, agent frameworks, and low-code integrations.',
    tools: [
      { name: 'LangChain', iconName: 'Link', description: 'Building resilient LLM application chains, memory stores, document loaders, and tool interfaces.', category: 'Dev & Auto', proficiency: 'Expert' },
      { name: 'LangGraph', iconName: 'Share2', description: 'Stateful multi-agent systems with loop graphs, human-in-the-loop checkpoints, and branching logic.', category: 'Dev & Auto', proficiency: 'Expert' },
      { name: 'n8n', iconName: 'Workflow', description: 'Self-hosted open-source workflow automation connecting 400+ SaaS tools with custom JS nodes.', category: 'Dev & Auto', proficiency: 'Mastery' },
      { name: 'Make', iconName: 'GitMerge', description: 'Visual cloud integration scenario building for automated marketing, CRM, and video processing.', category: 'Dev & Auto', proficiency: 'Mastery' },
      { name: 'Zapier', iconName: 'Zap', description: 'Rapid API connector setups and Webhook triggers for light task automation.', category: 'Dev & Auto', proficiency: 'Expert' },
      { name: 'Python', iconName: 'Code', description: 'Core programming language for data manipulation, AI script generation, PyTorch, and Async IO.', category: 'Dev & Auto', proficiency: 'Mastery' },
      { name: 'FastAPI', iconName: 'Server', description: 'High-performance asynchronous REST API microservices for AI model inference wrapper endpoints.', category: 'Dev & Auto', proficiency: 'Expert' },
      { name: 'Streamlit', iconName: 'Layout', description: 'Rapid prototyping of interactive AI web applications, internal dashboards, and model demos.', category: 'Dev & Auto', proficiency: 'Expert' },
    ],
  },
  {
    id: 'vector-db',
    title: 'Vector Databases & Retrieval',
    subtitle: 'Semantic search indexing, high-dimensional vector embeddings, and retrieval-augmented generation storage.',
    tools: [
      { name: 'Pinecone', iconName: 'Database', description: 'Serverless vector database with low latency similarity search for enterprise RAG applications.', category: 'Vector DB', proficiency: 'Mastery' },
      { name: 'Chroma', iconName: 'HardDrive', description: 'Open-source local embedding database ideal for prototyping and privacy-conscious setups.', category: 'Vector DB', proficiency: 'Expert' },
      { name: 'FAISS', iconName: 'Search', description: 'Facebook AI Similarity Search library for dense vector clustering and GPU-accelerated retrieval.', category: 'Vector DB', proficiency: 'Advanced' },
      { name: 'Weaviate', iconName: 'Box', description: 'Vector search engine with built-in hybrid search, multi-modal embeddings, and GraphQL querying.', category: 'Vector DB', proficiency: 'Advanced' },
      { name: 'Qdrant', iconName: 'ShieldCheck', description: 'Production-ready vector search engine with rich filtering payload capabilities.', category: 'Vector DB', proficiency: 'Advanced' },
    ],
  },
];

export const OTHER_AI_SERVICES: OtherServiceItem[] = [
  {
    id: 'os-1',
    title: 'AI Chatbots',
    description: 'Custom-trained conversational assistants for websites, support desks, and sales lead qualification.',
    iconName: 'MessageSquareText',
    details: [
      'Website chat widget integration with zero latency',
      'Knowledge-base indexing on company PDFs, URLs & docs',
      'Lead qualification with direct CRM routing',
      'Fallback human agent handoff logic',
    ],
    useCases: ['E-Commerce Support', 'SaaS Onboarding', 'Medical Intake', 'Real Estate Qualifying'],
  },
  {
    id: 'os-2',
    title: 'Voice Agents',
    description: 'Inbound and outbound AI phone calling systems powered by ultra-low latency conversational voice models.',
    iconName: 'PhoneCall',
    details: [
      'Sub-800ms response time voice conversations',
      'Dynamic appointment booking directly into Google/Cal.com',
      'Cold lead reactivation phone campaigns',
      'Real-time call transcription & sentiment tagging',
    ],
    useCases: ['Dental/Medical Appointment Booking', 'Insurance Inquiries', 'Sales Follow-Ups', 'Hotel Concierge'],
  },
  {
    id: 'os-3',
    title: 'RAG Systems',
    description: 'Retrieval-Augmented Generation architectures allowing AI models to answer complex queries accurately from private data.',
    iconName: 'FileSearch',
    details: [
      'Hallucination-free document QA indexing',
      'Hybrid semantic + keyword vector search',
      'Role-based security access control on document slices',
      'Citation links highlighting exact document source pages',
    ],
    useCases: ['Legal Document Review', 'Corporate Compliance QA', 'Technical Manual Assistants', 'Financial Audit Analysis'],
  },
  {
    id: 'os-4',
    title: 'Workflow Automation',
    description: 'End-to-end business process automation eliminating repetitive manual tasks across your tech stack.',
    iconName: 'GitBranch',
    details: [
      'Automated video asset generation triggers from RSS/Webhooks',
      'CRM contact sync across HubSpot, Salesforce & Slack',
      'Social media auto-posting & caption generation pipelines',
      'Invoice parsing & automated accounting data entry',
    ],
    useCases: ['Content Repurposing Engines', 'Automated Lead Enrichment', 'Support Ticket Routing', 'E-Commerce Orders'],
  },
  {
    id: 'os-5',
    title: 'AI Agents',
    description: 'Autonomous agent swarms capable of multi-step planning, tool usage, internet browsing, and executing task lists.',
    iconName: 'Cpu',
    details: [
      'LangGraph stateful multi-agent orchestrations',
      'Tool access: Web scraping, API calls, SQL querying',
      'Human-in-the-loop review checkpoints before action',
      'Self-correcting error handling loops',
    ],
    useCases: ['Competitive Intelligence Scraping', 'Automated Email Outreach', 'Code Refactoring', 'Market Research Synthesis'],
  },
  {
    id: 'os-6',
    title: 'Custom AI Solutions',
    description: 'Bespoke AI application development tailored specifically to your unique business bottlenecks and functional requirements.',
    iconName: 'Sliders',
    details: [
      'Fine-tuned model training on domain-specific datasets',
      'Interactive Streamlit & React internal tools',
      'Private cloud LLM deployment for strict data privacy',
      'API wrapper development & performance optimization',
    ],
    useCases: ['Proprietary Industry Tools', 'Internal Staff Co-Pilots', 'Data Monetization Products', 'AI Strategy Audits'],
  },
];

export const PROCESS_TIMELINE: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery Call',
    description: 'We discuss your project goals, target audience, brand aesthetic, and specific AI requirements during a 15-minute consultation.',
    duration: 'Day 1',
  },
  {
    stepNumber: 2,
    title: 'Requirement Analysis',
    description: 'We audit your existing assets, select the optimal AI stack (avatars, voice models, automation triggers), and map out key deliverables.',
    duration: 'Day 2',
  },
  {
    stepNumber: 3,
    title: 'Solution Design',
    description: 'Creation of video storyboards, voice clone samples, architectural flowcharts, or system prompts for your feedback and approval.',
    duration: 'Days 3–4',
  },
  {
    stepNumber: 4,
    title: 'Development',
    description: 'High-throughput execution: rendering AI avatars, synthesis of voice tracks, building automation nodes, and refining image assets.',
    duration: 'Days 5–8',
  },
  {
    stepNumber: 5,
    title: 'Testing & QA',
    description: 'Rigorous quality checks: lip-sync verification, audio noise cleanup, prompt boundary testing, and multi-device display checks.',
    duration: 'Day 9',
  },
  {
    stepNumber: 6,
    title: 'Deployment & Handover',
    description: 'Final delivery of high-res video assets, deployment of live chatbots or workflows, and comprehensive team training documentation.',
    duration: 'Day 10',
  },
];

export const CONTACT_INFO = {
  name: 'Moazzim Ali Bhatti',
  title: 'AI Content Production & Automation Specialist',
  whatsapp: '+92 309 4374318',
  whatsappLink: 'https://wa.me/923094374318',
  email: 'moazzim.ali843@gmail.com',
  linkedin: 'https://www.linkedin.com/in/moazzim-ali-bhatti/',
  calComLink: 'https://cal.com/moazzim/15min',
  location: 'Available Globally (Remote)',
  pricingNoteTitle: 'Custom Project Pricing',
  pricingNoteText: 'Every project is unique. Contact me to discuss your requirements and receive a custom quote based on scope, complexity, and deliverables.',
};
