import { LucideIcon } from 'lucide-react';

export enum ServiceCategory {
  RITUALS = 'Ритуалы',
  DIVINATION = 'Мантика',
  ENERGY = 'Энергетика',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  category: ServiceCategory;
  icon?: LucideIcon;
  popular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  imageUrl: string;
}

export interface OracleResponse {
  answer: string;
  cardName?: string;
}
