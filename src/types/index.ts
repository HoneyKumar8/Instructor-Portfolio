export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problemStatement: string;
  solution: string;
  architecture?: string;
  techStack: string[];
  role: string;
  githubUrl: string;
  liveUrl?: string;
  keyLearnings: string[];
  category: 'AI / ML' | 'Full-Stack MERN' | 'Web Apps' | 'Educational Tools';
  featured: boolean;
  screenshot?: string;
}

export interface TeachingTopic {
  id: string;
  name: string;
  category: 'Primary' | 'Secondary' | 'Technical Stack' | 'Professional';
  proficiency: number; // e.g. 95
  description: string;
  iconName?: string;
}

export interface TeachingStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Interview';
  keyConcepts: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  type: 'Current Faculty Role' | 'Industry Experience' | 'Internship';
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  priority: boolean;
  skills: string[];
  credentialUrl?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'C++ Notes' | 'DSA Cheatsheets' | 'Roadmaps' | 'Practice' | 'Strategy';
  difficulty: 'Beginner' | 'All Levels' | 'Advanced';
  duration?: string;
  url?: string;
  status: 'available' | 'coming-soon';
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isError?: boolean;
}

export type ThemeMode = 'light' | 'dark' | 'system';
