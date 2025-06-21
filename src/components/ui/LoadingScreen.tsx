'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  duration?: number;
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ 
  duration = 2500, 
  onLoadingComplete 
}: LoadingScreenProps) {
  const [show, setShow] = useState(true);
  const letters = ['F', 'L', 'U', 'X', 'O'];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, delay: 0.2 }
          }}
        >
          <div className="relative">
            {/* Pulsating glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />
            
            {/* Grid background */}
            <div className="absolute inset-0 -m-12 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            {/* Logo letters container */}
            <div className="relative flex items-center justify-center space-x-3">
              {letters.map((letter, index) => (
                <motion.div
                  key={letter}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {/* Letter */}
                  <motion.div
                    className="relative text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: index * 0.15, 
                      ease: "easeInOut"
                    }}
                  >
                    {letter}
                    
                    {/* Glowing underline */}
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
                      initial={{ width: "0%", left: "50%" }}
                      animate={{ 
                        width: ["0%", "100%", "0%"],
                        left: ["50%", "0%", "50%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.15,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Particle effects */}
                  {[...Array(3)].map((_, particleIndex) => (
                    <motion.div
                      key={`particle-${index}-${particleIndex}`}
                      className="absolute top-full left-1/2 w-1 h-1 rounded-full bg-primary"
                      initial={{ 
                        opacity: 0,
                        x: 0,
                        y: 0 
                      }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        x: [
                          0, 
                          (Math.random() - 0.5) * 30,
                          (Math.random() - 0.5) * 50
                        ],
                        y: [0, -10, -30],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: index * 0.15 + particleIndex * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
            
            {/* Circuit decoration */}
            <svg 
              className="absolute top-0 left-0 w-full h-full -m-12 opacity-20"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M20,100 C70,50 120,150 200,100 C280,50 330,150 380,100"
                stroke="#3A76F0"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
              <motion.path
                d="M20,80 C100,20 150,120 200,80 C250,40 300,120 380,80"
                stroke="#3AFFE0"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2,
                  delay: 0.5,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
              <motion.path
                d="M20,120 C80,180 150,60 200,120 C250,180 330,60 380,120"
                stroke="#3A76F0"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2,
                  delay: 1,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
            </svg>
            
            {/* Loading text */}
            <motion.div
              className="absolute -bottom-16 inset-x-0 text-center text-white/50 text-sm font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              >
                POWERING INTELLIGENCE
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 