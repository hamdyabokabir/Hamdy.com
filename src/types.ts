export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'websites' | 'design' | 'branding' | 'ai';
  technologies: string[];
  challenges?: string;
  solutions?: string;
  previewUrl?: string;
  githubUrl?: string;
  client?: string;
  duration?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'design' | 'ai' | 'marketing';
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
