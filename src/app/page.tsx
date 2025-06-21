'use client';

import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Card, { CardContent, CardIcon, CardTitle, CardDescription } from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustedBy />
      <Features />
      <CTA />
    </main>
  );
}

// Feature data
const features = [
  {
    icon: '⚙️',
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to reduce manual work and minimize errors.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Implement intelligent systems that learn and adapt to your business needs.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for better decision making.',
  },
  {
    icon: '🔄',
    title: 'Workflow Optimization',
    description: 'Identify bottlenecks and streamline processes for maximum efficiency.',
  },
  {
    icon: '🔍',
    title: 'Predictive Maintenance',
    description: 'Anticipate equipment failures before they happen to reduce downtime.',
  },
  {
    icon: '💻',
    title: 'Digital Transformation',
    description: 'Comprehensive solutions to modernize your business operations.',
  },
];

// Industry data
const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Optimize production lines and enhance quality control through intelligent automation.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Improve patient care and operational efficiency with smart healthcare solutions.',
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Enhance risk assessment and automate compliance with intelligent systems.',
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Personalize customer experiences and optimize inventory management.',
  },
]; 