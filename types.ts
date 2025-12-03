import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface SectionProps {
  id: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  // Allow both Lucide icons and custom React components (for brand logos)
  icon: LucideIcon | React.ComponentType<{ size?: number | string; className?: string }>;
  category: 'frontend' | 'backend' | 'ai' | 'tools' | 'payments';
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}