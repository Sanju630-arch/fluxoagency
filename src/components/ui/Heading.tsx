'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
  animate?: boolean;
  highlight?: boolean;
  id?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export default function Heading({
  level = 'h2',
  children,
  className = '',
  animate = false,
  highlight = false,
  id,
  align = 'left',
  size,
}: HeadingProps) {
  // Size classes based on heading level and size prop
  const sizeClasses = {
    h1: size ? getSizeClass(size) : 'text-4xl md:text-5xl font-bold',
    h2: size ? getSizeClass(size) : 'text-3xl md:text-4xl font-bold',
    h3: size ? getSizeClass(size) : 'text-2xl md:text-3xl font-semibold',
    h4: size ? getSizeClass(size) : 'text-xl md:text-2xl font-semibold',
    h5: size ? getSizeClass(size) : 'text-lg md:text-xl font-medium',
    h6: size ? getSizeClass(size) : 'text-base md:text-lg font-medium',
  };

  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Highlight styling
  const highlightClasses = highlight 
    ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent'
    : 'text-white';
  
  // Combined classes
  const headingClasses = cn(
    sizeClasses[level],
    alignClasses[align],
    highlightClasses,
    'tracking-tight',
    className
  );

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      }
    }
  };

  // Dynamic component based on heading level
  const Component = motion[level];

  return animate ? (
    <Component
      id={id}
      className={headingClasses}
      initial="hidden"
      animate="visible"
      variants={headingVariants}
    >
      {children}
    </Component>
  ) : (
    <Component
      id={id}
      className={headingClasses}
    >
      {children}
    </Component>
  );
}

// Helper function to get size class based on size prop
function getSizeClass(size: 'sm' | 'md' | 'lg' | 'xl' | '2xl'): string {
  switch (size) {
    case 'sm':
      return 'text-base md:text-lg font-medium';
    case 'md':
      return 'text-lg md:text-xl font-semibold';
    case 'lg':
      return 'text-xl md:text-2xl font-semibold';
    case 'xl':
      return 'text-2xl md:text-3xl font-bold';
    case '2xl':
      return 'text-3xl md:text-5xl font-bold';
    default:
      return 'text-xl md:text-2xl font-semibold';
  }
} 