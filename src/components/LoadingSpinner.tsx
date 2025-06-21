'use client';

import { motion } from 'framer-motion';

type LoadingSpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'accent' | 'white';
  text?: string;
};

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  text
}: LoadingSpinnerProps) {
  const getSize = () => {
    switch (size) {
      case 'sm': return 'w-6 h-6';
      case 'md': return 'w-10 h-10';
      case 'lg': return 'w-16 h-16';
      default: return 'w-10 h-10';
    }
  };

  const getColor = () => {
    switch (color) {
      case 'primary': return 'border-primary';
      case 'accent': return 'border-accent';
      case 'white': return 'border-white';
      default: return 'border-primary';
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear"
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: [0, 1, 0],
      transition: {
        delay: i * 0.2,
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <motion.div
          className={`${getSize()} rounded-full border-t-2 border-b-2 ${getColor()}`}
          variants={spinnerVariants}
          animate="animate"
        />
        <motion.div
          className={`absolute inset-0 rounded-full ${getColor().replace('border', 'bg')} bg-opacity-20`}
          variants={glowVariants}
          animate="animate"
        />
      </div>

      {text && (
        <div className="flex items-center space-x-1">
          <span className="text-white text-opacity-80">{text}</span>
          <div className="flex space-x-1 ml-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-accent"
                variants={dotVariants}
                initial="initial"
                animate="animate"
                custom={i}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 