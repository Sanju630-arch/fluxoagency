'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'outline' | 'glass';
  interactive?: boolean;
  onClick?: () => void;
  id?: string;
};

export default function Card({
  children,
  className = '',
  variant = 'default',
  interactive = false,
  onClick,
  id,
}: CardProps) {
  // Base styles
  const baseStyles = 'rounded-xl overflow-hidden p-6';
  
  // Variant styles
  const variantStyles = {
    default: 'bg-secondary bg-opacity-10 border border-secondary border-opacity-10',
    gradient: 'bg-gradient-to-br from-primary to-accent',
    outline: 'border border-white border-opacity-20 bg-secondary bg-opacity-5',
    glass: 'backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20',
  };
  
  // Interactive styles
  const interactiveStyles = interactive
    ? 'cursor-pointer transition-all duration-300'
    : '';
  
  // Combined styles
  const cardStyles = cn(
    baseStyles,
    variantStyles[variant],
    interactiveStyles,
    className
  );

  // Animation properties
  const motionProps = interactive
    ? {
        whileHover: { scale: 1.02, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <motion.div
      id={id}
      className={cardStyles}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

// Card components
export function CardHeader({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn('text-xl font-bold text-white', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-white text-opacity-70 mt-1', className)}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-white border-opacity-10', className)}>
      {children}
    </div>
  );
}

export function CardIcon({
  children,
  className = '',
  variant = 'primary',
}: {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'accent' | 'white';
}) {
  const variantStyles = {
    primary: 'bg-primary bg-opacity-20 text-primary',
    accent: 'bg-accent bg-opacity-20 text-accent',
    white: 'bg-white bg-opacity-20 text-white',
  };

  return (
    <div className={cn('p-3 rounded-full inline-flex items-center justify-center mb-4', variantStyles[variant], className)}>
      {children}
    </div>
  );
} 