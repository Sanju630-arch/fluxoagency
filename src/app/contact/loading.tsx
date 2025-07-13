'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  // Animation variants for the logo parts
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2 
      }
    }
  };

  const partVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation for the spinner
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear"
      }
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <motion.div
        className="mb-8 flex items-center"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="text-white font-space font-bold text-3xl md:text-4xl"
          variants={partVariants}
        >
          FLU
        </motion.span>
        <motion.span 
          className="text-accent font-space font-bold text-3xl md:text-4xl"
          variants={partVariants}
        >
          XO
        </motion.span>
      </motion.div>
      
      <motion.div
        className="w-16 h-16 border-t-4 border-accent rounded-full"
        variants={spinnerVariants}
        animate="animate"
      />
      
      <motion.p
        className="mt-8 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading contact information...
      </motion.p>
    </div>
  );
} 
