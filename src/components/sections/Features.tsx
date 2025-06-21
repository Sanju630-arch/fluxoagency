'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Image from 'next/image';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_100%,rgba(58,118,240,0.08)_0%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      </div>
      
      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
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
              AI-Powered Solutions
            </motion.div>
            <Heading level="h2" className="mb-4">Transform Your Business with Intelligent Automation</Heading>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our suite of AI-driven tools empowers your organization to streamline operations, 
              reduce costs, and accelerate growth with precision and efficiency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Features tabs and visualization */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-1 mb-8">
                <div className="grid grid-cols-3 gap-1">
                  {features.map((feature, index) => (
                    <button
                      key={feature.title}
                      onClick={() => setActiveFeature(index)}
                      className={`relative p-4 rounded-xl transition-all duration-300 ${
                        activeFeature === index 
                          ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-white' 
                          : 'bg-transparent text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {activeFeature === index && (
                        <motion.div
                          layoutId="activeFeatureBg"
                          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="mb-3">{feature.icon}</div>
                        <h3 className="text-sm font-medium">{feature.title}</h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Feature details */}
              <div className="relative">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeFeature === index ? 1 : 0,
                      y: activeFeature === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full"
                    style={{ display: activeFeature === index ? 'block' : 'none' }}
                  >
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/70 mb-6">{feature.description}</p>
                    
                    <div className="space-y-4">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-sm text-white/80">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
                
                {/* Spacer for absolute positioning */}
                <div className="opacity-0 pointer-events-none h-64"></div>
              </div>
            </motion.div>
            
            {/* Feature visualization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Glowing circle */}
                <motion.div 
                  className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl"
                  animate={{ 
                    x: [0, 20, -20, 0],
                    y: [0, -20, 20, 0],
                    opacity: [0.4, 0.6, 0.4, 0.4]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Feature visualization */}
                <div className="relative rounded-xl overflow-hidden h-80 flex items-center justify-center">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeFeature === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      style={{ 
                        display: activeFeature === index ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center' 
                      }}
                    >
                      <div className="relative z-10 p-4 flex flex-col items-center">
                        <motion.div 
                          className="text-primary/80 mb-4"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut" 
                          }}
                        >
                          {feature.illustration}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Interface elements */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                      <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/60" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Features data
const features = [
  {
    title: 'Process Automation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    description: 'Automate repetitive tasks and complex workflows with our AI-driven process automation solutions, freeing your team to focus on high-value activities.',
    benefits: [
      'Reduce manual workload by up to 85%',
      'Minimize human error in routine processes',
      'Scale operations without proportional staff increases',
      'Deploy custom workflows tailored to your business needs'
    ],
    illustration: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="60" stroke="#3A76F0" strokeWidth="2" strokeDasharray="8 4" />
        <circle cx="100" cy="100" r="40" fill="#3A76F0" fillOpacity="0.1" stroke="#3A76F0" strokeWidth="2" />
        <circle cx="100" cy="100" r="20" fill="#3A76F0" fillOpacity="0.2" />
        <path d="M70 100C70 83.4315 83.4315 70 100 70C116.569 70 130 83.4315 130 100" stroke="#3A76F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M140 80L140 120" stroke="#3A76F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M150 90L150 110" stroke="#3A76F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 80L60 120" stroke="#3A76F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 90L50 110" stroke="#3A76F0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Data Intelligence',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    description: 'Transform raw data into actionable insights with our AI-powered analytics platform. Identify patterns, predict trends, and make data-driven decisions.',
    benefits: [
      'Extract meaningful patterns from complex datasets',
      'Generate predictive models for future business outcomes',
      'Create interactive dashboards for real-time monitoring',
      'Receive automated alerts for anomalies and opportunities'
    ],
    illustration: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="120" width="20" height="40" rx="2" fill="#3A76F0" fillOpacity="0.2" />
        <rect x="70" y="100" width="20" height="60" rx="2" fill="#3A76F0" fillOpacity="0.3" />
        <rect x="100" y="80" width="20" height="80" rx="2" fill="#3A76F0" fillOpacity="0.4" />
        <rect x="130" y="60" width="20" height="100" rx="2" fill="#3A76F0" fillOpacity="0.5" />
        <path d="M40 150L160 50" stroke="#3A76F0" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        <circle cx="40" cy="150" r="4" fill="#3A76F0" />
        <circle cx="80" cy="100" r="4" fill="#3A76F0" />
        <circle cx="120" cy="70" r="4" fill="#3A76F0" />
        <circle cx="160" cy="50" r="4" fill="#3A76F0" />
      </svg>
    )
  },
  {
    title: 'Cognitive Systems',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    description: 'Deploy intelligent systems that learn, adapt, and evolve with your business. Our cognitive solutions utilize advanced machine learning to deliver unprecedented automation capabilities.',
    benefits: [
      'Create systems that learn from experience and improve over time',
      'Implement natural language processing for text and voice applications',
      'Develop computer vision systems for image and video analysis',
      'Build recommendation engines tailored to your customers'
    ],
    illustration: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="50" stroke="#3A76F0" strokeWidth="2" fill="#3A76F0" fillOpacity="0.1" />
        <path d="M100 50L100 150" stroke="#3A76F0" strokeWidth="2" />
        <path d="M50 100L150 100" stroke="#3A76F0" strokeWidth="2" />
        <circle cx="70" cy="70" r="10" fill="#3A76F0" fillOpacity="0.3" />
        <circle cx="130" cy="70" r="10" fill="#3A76F0" fillOpacity="0.3" />
        <circle cx="70" cy="130" r="10" fill="#3A76F0" fillOpacity="0.3" />
        <circle cx="130" cy="130" r="10" fill="#3A76F0" fillOpacity="0.3" />
        <path d="M80 100C80 88.9543 88.9543 80 100 80C111.046 80 120 88.9543 120 100C120 111.046 111.046 120 100 120C88.9543 120 80 111.046 80 100Z" fill="#3A76F0" fillOpacity="0.2" stroke="#3A76F0" strokeWidth="2" />
        <circle cx="100" cy="100" r="5" fill="#3A76F0" />
      </svg>
    )
  },
]; 