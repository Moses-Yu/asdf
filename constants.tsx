
import React from 'react';
import { Shield, Activity, Database, Cpu, Search, BookOpen } from 'lucide-react';

export const COLORS = {
  primary: '#1e40af', // Navy/Blue
  secondary: '#3b82f6', // Light Blue
  accent: '#0f172a', // Slate-900
};

export const SOLUTIONS = [
  {
    id: 'engine',
    title: 'Deltoid Health Engine',
    description: 'AI-driven health analysis platform that predicts risks and provides optimized care pathways.',
    icon: <Activity className="w-10 h-10 text-blue-600" />
  },
  {
    id: 'hub',
    title: 'Deltoid Clinical Data Hub',
    description: 'A clinical-grade data management infrastructure designed for hospitals and research centers.',
    icon: <Database className="w-10 h-10 text-blue-600" />
  },
  {
    id: 'lab',
    title: 'Deltoid Insight Lab',
    description: 'Strategic R&D and consulting for healthcare technology advancement and implementation.',
    icon: <Cpu className="w-10 h-10 text-blue-600" />
  }
];

export const VALUES = [
  {
    title: 'AI-driven Healthcare',
    description: 'Predictive intelligence for personalized wellness.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: 'Clinical-grade Quality',
    description: 'Validated data pipelines for medical excellence.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Future-focused R&D',
    description: 'Pushing the boundaries of medical informatics.',
    icon: <Search className="w-6 h-6" />
  },
  {
    title: 'Personalized Insight',
    description: 'Tailored health journeys based on deep data.',
    icon: <Activity className="w-6 h-6" />
  }
];

export const LIBRARY_POSTS = [
  {
    id: 1,
    category: 'Trend',
    title: '디지털 헬스케어의 미래: AI는 어떻게 진료를 보조하는가?',
    date: '2024.05.20',
    image: 'https://picsum.photos/seed/health1/600/400'
  },
  {
    id: 2,
    category: 'Expert Column',
    title: '데이터 보안과 의료 정보의 가치: HIPAA 준수의 중요성',
    date: '2024.05.18',
    image: 'https://picsum.photos/seed/health2/600/400'
  },
  {
    id: 3,
    category: 'Information',
    title: '개인 맞춤형 식단 가이드: Deltoid가 제안하는 데이터 기반 영양학',
    date: '2024.05.15',
    image: 'https://picsum.photos/seed/health3/600/400'
  }
];

export const PARTNERS = [
  'Samsung Medical Center',
  'Seoul National University Hospital',
  'MediData Corp',
  'HealthLink Research',
  'Future Biotics',
  'CloudHealth Systems'
];
