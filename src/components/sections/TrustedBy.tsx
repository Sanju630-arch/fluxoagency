'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      </div>
      
      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary inline-block mr-2"
              />
              Trusted Globally
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">Partnering with Industry Leaders</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our AI automation solutions are trusted by forward-thinking companies across diverse industries
            </p>
          </motion.div>

          {/* Logo showcase with hover effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + (index * 0.05),
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 } 
                }}
                className="flex items-center justify-center relative group"
              >
                <div className="relative w-full aspect-[3/2] flex items-center justify-center p-4">
                  {/* Glass card background */}
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 rounded-xl border border-white/10 transition-colors duration-300" />
                  
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 rounded-xl blur-xl"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Logo image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={120}
                      height={60}
                      className="object-contain w-full h-full max-h-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Decorative corner elements */}
                  <motion.div 
                    className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-tr-xl"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-bl-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Animated highlight text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-white/70 text-sm">
              Join the growing list of companies transforming their operations with FLUXO
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block mt-2"
            >
              <a 
                href="/contact" 
                className="text-primary font-medium hover:text-primary/80 transition-colors duration-300 inline-flex items-center"
              >
                Schedule a demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Logo data
const logos = [
  {
    name: 'TechCorp',
    logo: '/images/logos/techcorp.svg',
  },
  {
    name: 'Innovatech',
    logo: '/images/logos/innovatech.svg',
  },
  {
    name: 'GlobalAI',
    logo: '/images/logos/globalai.svg',
  },
  {
    name: 'FutureWorks',
    logo: '/images/logos/futureworks.svg',
  },
  {
    name: 'DataFlow',
    logo: '/images/logos/dataflow.svg',
  },
  {
    name: 'SynthInc',
    logo: '/images/logos/synthinc.svg',
  },
]; 