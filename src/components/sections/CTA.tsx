'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        
        {/* Animated gradient */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
            opacity: [0.3, 0.4, 0.3, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Circuit lines */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-[70%] opacity-10" 
          viewBox="0 0 1920 800" 
          preserveAspectRatio="xMidYMax slice"
        >
          <motion.path 
            d="M0,200 C300,100 600,300 900,200 C1200,100 1500,300 1920,200" 
            stroke="#3A76F0" 
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.5,
            }}
            transition={{ 
              duration: 2.5,
              ease: "easeInOut"
            }}
          />
          <motion.path 
            d="M0,400 C400,300 800,500 1200,400 C1600,300 1920,400 1920,400" 
            stroke="#3AFFE0" 
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
            }}
            transition={{ 
              duration: 2.5,
              delay: 0.5,
              ease: "easeInOut"
            }}
          />
          <motion.path 
            d="M0,600 C500,500 1000,700 1500,600 C1700,550 1920,600 1920,600" 
            stroke="#3A76F0" 
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.2,
            }}
            transition={{ 
              duration: 2.5,
              delay: 1,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
      
      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            {/* Glowing Card */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 overflow-hidden">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30"
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Glass card */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                
                {/* Glass card content */}
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                  >
                    <motion.span
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-primary inline-block mr-2"
                    />
                    Get Started Today
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Heading level="h2" className="mb-6" highlight>
                      Transform Your Business with AI Automation
                    </Heading>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl text-white/70 mb-8 max-w-2xl"
                  >
                    Join forward-thinking organizations that are revolutionizing their operations with our cutting-edge AI solutions. Schedule a personalized demo to see how we can address your specific challenges.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button 
                      variant="primary" 
                      size="lg" 
                      href="/contact"
                      leftIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                      }
                    >
                      Schedule a Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      href="/solutions"
                      rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      }
                    >
                      Explore Solutions
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Stats section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center text-center group"
                >
                  {/* Hover effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 rounded-xl"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                    <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Stats data
const stats = [
  {
    value: '85%',
    label: 'Average Efficiency Gain'
  },
  {
    value: '50+',
    label: 'Enterprise Clients'
  },
  {
    value: '24/7',
    label: 'Support & Monitoring'
  },
  {
    value: '99.9%',
    label: 'System Uptime'
  }
]; 