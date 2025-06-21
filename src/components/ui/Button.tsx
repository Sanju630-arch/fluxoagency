'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoadingSpinner from '../LoadingSpinner';

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  type = 'button',
  onClick,
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-4 py-2 rounded-full',
    md: 'text-base px-6 py-3 rounded-full',
    lg: 'text-lg px-8 py-4 rounded-full',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary hover:bg-opacity-90 focus:ring-primary',
    accent: 'bg-accent text-secondary hover:bg-accent hover:bg-opacity-90 focus:ring-accent',
    outline: 'border border-white border-opacity-30 text-white hover:border-accent hover:text-accent focus:ring-white focus:ring-opacity-30',
    ghost: 'text-white text-opacity-80 hover:bg-white hover:bg-opacity-10 focus:ring-white focus:ring-opacity-30'
  };
  
  // Width style
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Disabled style
  const disabledStyle = disabled || isLoading ? 'opacity-70 cursor-not-allowed pointer-events-none' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`;
  
  // Get appropriate spinner color based on variant
  const spinnerColor: 'primary' | 'accent' | 'white' = variant === 'accent' ? 'primary' : 'white';
  
  // Button content
  const buttonContent = (
    <>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color={spinnerColor} />
        </span>
      )}
      <span className={`flex items-center ${isLoading ? 'opacity-0' : ''}`}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </span>
    </>
  );

  // Animation props
  const animationProps = !disabled && !isLoading ? {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 }
  } : {};
  
  // If button has a href, render it as a Link
  if (href) {
    return (
      <Link href={href} passHref>
        <motion.div className={buttonStyles} {...animationProps} role="button">
          {buttonContent}
        </motion.div>
      </Link>
    );
  }
  
  // Otherwise render a button
  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...animationProps}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
} 