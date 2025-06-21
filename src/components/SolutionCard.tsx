'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  complexity: 'simple' | 'moderate' | 'complex';
  implementationTime: string;
  price: number;
  slug: string;
}

const SolutionCard = ({
  title,
  description,
  icon,
  benefits,
  complexity,
  implementationTime,
  price,
  slug
}: SolutionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Map complexity to a color and label
  const complexityMap = {
    simple: { color: 'bg-green-500/20 text-green-400', label: 'Simple' },
    moderate: { color: 'bg-yellow-500/20 text-yellow-400', label: 'Moderate' },
    complex: { color: 'bg-red-500/20 text-red-400', label: 'Complex' },
  };

  const { color, label } = complexityMap[complexity];

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50"
        animate={{ 
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative p-6 bg-secondary/60 backdrop-blur-sm h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-primary/20 p-3 rounded-lg text-3xl">
            {icon}
          </div>
          <span className={`${color} text-xs font-medium px-2.5 py-1 rounded-full`}>
            {label}
          </span>
        </div>
        
        <h3 className="text-xl font-space font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-xs text-white/60">Implementation Time</p>
              <p className="text-sm text-white font-medium">{implementationTime}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-xs text-white/60">Starting at</p>
              <p className="text-sm text-accent font-medium">${price.toLocaleString()}</p>
            </div>
          </div>
          
          <h4 className="text-white font-medium text-sm mb-2">Key Benefits:</h4>
          <ul className="text-white/70 text-sm space-y-1 mb-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span>{benefit}</span>
              </motion.li>
            ))}
            {benefits.length > 3 && (
              <li className="text-accent text-xs">+ {benefits.length - 3} more benefits</li>
            )}
          </ul>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href={`/solutions/${slug}`}
              className="w-full block text-center py-2.5 px-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionCard; 