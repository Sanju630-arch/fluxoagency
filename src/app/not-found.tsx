'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../components/ui/Button';
import Heading from '../components/ui/Heading';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(5);
  
  // Handle mouse move for interactive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Countdown to redirect
  useEffect(() => {
    if (count <= 0) return;
    
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with grid and glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 filter blur-[100px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
      </div>
      
      {/* 404 Text with glitch effect */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mb-6">
          <motion.div
            className="text-[150px] md:text-[200px] font-bold text-primary opacity-20 select-none absolute top-0 left-1/2 -translate-x-1/2"
            animate={{ 
              x: [0, -4, 6, -8, 0],
              opacity: [0.2, 0.3, 0.1, 0.2],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              repeatType: "reverse"
            }}
          >
            404
          </motion.div>
          <motion.div
            className="text-[150px] md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary select-none"
            animate={{ 
              x: [0, 3, -5, 7, 0],
              skew: [0, 2, -1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              repeatType: "reverse"
            }}
          >
            404
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent opacity-30" />
        </div>
        
        <Heading level="h1" className="mb-6">
          Page Not Found
        </Heading>
        
        <p className="text-xl text-white/70 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved. You'll be redirected to the home page in <span className="text-primary font-bold">{count}</span> seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
        
        {/* Animated circuit paths */}
        <svg 
          className="absolute -z-10 opacity-20 w-full h-full max-w-5xl"
          viewBox="0 0 800 600" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M200,100 C300,50 400,150 500,100 C600,50 650,150 700,200 C750,250 700,350 650,400 C600,450 500,450 400,400 C300,350 200,450 150,350 C100,250 150,150 200,100"
            stroke="#3A76F0"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.5,
              strokeDashoffset: [0, 1000],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
          <motion.path
            d="M150,200 C200,150 300,200 350,150 C400,100 500,150 550,200 C600,250 550,350 500,400 C450,450 350,400 300,450 C250,500 150,450 100,400 C50,350 100,250 150,200"
            stroke="#3AFFE0"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.5,
              strokeDashoffset: [1000, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
} 