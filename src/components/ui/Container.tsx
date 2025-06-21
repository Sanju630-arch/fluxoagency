'use client';

import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
  id?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animate?: boolean;
};

const maxWidthClasses = {
  xs: 'max-w-screen-xs',
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  'full': 'max-w-full',
};

const paddingClasses = {
  none: 'px-0',
  sm: 'px-4',
  md: 'px-6 sm:px-8',
  lg: 'px-4 sm:px-8 md:px-12',
};

export default function Container({
  children,
  className = '',
  as = 'div',
  id,
  maxWidth = 'xl',
  padding = 'md',
  animate = false,
  ...props
}: ContainerProps & Omit<MotionProps, keyof ContainerProps>) {
  const containerClasses = cn(
    'mx-auto w-full', 
    maxWidthClasses[maxWidth], 
    paddingClasses[padding], 
    className
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const Component = motion[as];

  return animate ? (
    <Component
      id={id}
      className={containerClasses}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      {...props}
    >
      {children}
    </Component>
  ) : (
    <Component
      id={id}
      className={containerClasses}
      {...props}
    >
      {children}
    </Component>
  );
} 