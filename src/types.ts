export type NavPage = 'home' | 'videos' | 'images' | 'tools' | 'other-services' | 'contact';

export interface VideoItem {
  id: string;
  title: string;
  category: 'Digital Twins' | 'Talking Head' | 'Marketing' | 'Commercials' | 'Social Media';
  description: string;
  videoUrl: string;
  toolsUsed: string[];
  duration: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  featured?: boolean;
}

export interface ImageItem {
  id: string;
  title: string;
  category: 'Portraits' | 'Product Ads' | 'Social Media' | 'Marketing Concepts' | 'Creative Art';
  description: string;
  imageUrl: string;
  prompt: string;
  toolsUsed: string[];
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface ToolItem {
  name: string;
  iconName: string;
  description: string;
  category: string;
  proficiency: 'Expert' | 'Advanced' | 'Mastery';
  badgeColor?: string;
}

export interface ToolCategorySection {
  id: string;
  title: string;
  subtitle: string;
  tools: ToolItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  gradient: string;
}

export interface OtherServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  useCases: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  avatar: string;
  company?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
}
