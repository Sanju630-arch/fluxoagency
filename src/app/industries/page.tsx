'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export default function Industries() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid-pattern pt-12 md:pt-16 pb-20 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background pointer-events-none"></div>
        <div className="absolute -top-24 right-1/3 w-96 h-96 bg-accent/20 rounded-full filter blur-[120px] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-heading">
              Industry-Specific{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Solutions
              </span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              Our AI automation solutions are tailored to address the unique challenges and opportunities in your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <a 
                key={industry.id} 
                href={`#${industry.id}`}
                className="group card flex flex-col items-center text-center p-8 transition-all hover:scale-105"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-space font-medium text-white mb-2">{industry.name}</h3>
                <p className="text-white/70 text-sm">{industry.shortDescription}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Detail Sections */}
      {industries.map((industry, index) => (
        <section 
          key={industry.id} 
          id={industry.id} 
          className={`py-24 ${index % 2 === 0 ? '' : 'bg-secondary/30'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="inline-block mb-3 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  {industry.name}
                </div>
                <h2 className="section-heading mb-6">{industry.title}</h2>
                <p className="text-white/80 mb-8">
                  {industry.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-white text-lg mb-4">Key Challenges We Address:</h3>
                  <ul className="space-y-3">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <span className="text-white/80">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={`/contact?industry=${industry.id}`} className="btn-primary">
                  Learn More
                </Link>
              </div>
              
              <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                {industry.solutions.map((solution, i) => (
                  <div key={i} className="card">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                        <span className="text-primary text-xl">{solution.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-lg mb-2">{solution.title}</h4>
                        <p className="text-white/70">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* ROI Calculator Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-background dark:to-secondary/70 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading text-gray-900 dark:text-white">
              Calculate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                ROI
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-white/70">
              Estimate the return on investment for implementing our AI automation solutions in your industry.
            </p>
          </div>
          <div className="glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden bg-white dark:bg-secondary/80 transition-colors duration-500">
            {/* Animated icons for aesthetics */}
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl opacity-60 animate-pulse"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl opacity-50 animate-pulse"
              animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            />
            <div className="relative z-10">
              <ROIAnimatedCalculator />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading">
              Client{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Testimonials
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Hear directly from our clients about how our solutions have transformed their operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6">{testimonial.quote}</p>
                <div className="flex text-primary">
                  {"★★★★★".split("").map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 rounded-full filter blur-[80px]"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent/30 rounded-full filter blur-[60px]"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-6">
                Ready to revolutionize your industry?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Our team of experts will help you find the perfect AI automation solution for your specific industry needs.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link href="/solutions" className="btn-outline">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Industry data
const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    shortDescription: 'Optimize production and quality with intelligent automation',
    title: 'Revolutionize Manufacturing Operations',
    description: 'Modernize your manufacturing processes with AI-driven solutions that optimize production, improve quality control, and predict maintenance needs before failures occur.',
    challenges: [
      'Managing complex supply chains with multiple variables',
      'Minimizing downtime and maintaining equipment efficiency',
      'Ensuring consistent product quality across production lines',
      'Optimizing resource allocation and reducing waste'
    ],
    solutions: [
      {
        icon: '🔄',
        title: 'Predictive Maintenance',
        description: 'Anticipate equipment failures before they happen using machine learning algorithms that analyze sensor data and performance patterns.'
      },
      {
        icon: '📊',
        title: 'Production Optimization',
        description: 'Maximize throughput and minimize costs by optimizing production schedules, resource allocation, and inventory management.'
      },
      {
        icon: '👁️',
        title: 'Quality Assurance',
        description: 'Implement computer vision systems that can detect defects and quality issues with greater accuracy than traditional methods.'
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    shortDescription: 'Enhance patient care and operational efficiency',
    title: 'Transform Healthcare Delivery',
    description: 'Our healthcare solutions combine AI and automation to improve patient outcomes, streamline administrative tasks, and enhance operational efficiency across your organization.',
    challenges: [
      'Managing and analyzing large volumes of patient data',
      'Optimizing scheduling and resource allocation',
      'Ensuring compliance with evolving regulations',
      'Improving diagnostic accuracy and treatment planning'
    ],
    solutions: [
      {
        icon: '📋',
        title: 'Patient Management',
        description: 'Streamline patient intake, scheduling, and follow-up processes to improve patient experience and reduce administrative burden.'
      },
      {
        icon: '📈',
        title: 'Clinical Analytics',
        description: 'Analyze patient data to identify trends, predict outcomes, and support clinical decision-making with evidence-based insights.'
      },
      {
        icon: '🧾',
        title: 'Revenue Cycle Optimization',
        description: 'Automate billing, coding, and claims processing to reduce errors, accelerate reimbursement, and improve financial performance.'
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: '🏦',
    shortDescription: 'Enhance risk assessment and automate compliance',
    title: 'Modernize Financial Operations',
    description: 'Empower your financial institution with AI-driven solutions that enhance risk assessment, automate compliance processes, and deliver personalized customer experiences.',
    challenges: [
      'Managing evolving compliance and regulatory requirements',
      'Detecting and preventing fraudulent transactions',
      'Providing personalized services at scale',
      'Optimizing investment decisions based on market data'
    ],
    solutions: [
      {
        icon: '🛡️',
        title: 'Fraud Detection',
        description: 'Implement advanced anomaly detection algorithms that identify suspicious patterns and prevent fraudulent activities in real-time.'
      },
      {
        icon: '⚖️',
        title: 'Compliance Automation',
        description: 'Streamline regulatory compliance with automated monitoring, reporting, and documentation systems.'
      },
      {
        icon: '📱',
        title: 'Customer Experience',
        description: 'Deliver personalized financial advice and services using AI-powered chatbots and recommendation engines.'
      }
    ]
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: '🛍️',
    shortDescription: 'Personalize customer experiences and optimize inventory',
    title: 'Reinvent the Retail Experience',
    description: 'Transform your retail business with AI solutions that personalize customer interactions, optimize inventory management, and streamline operations across physical and digital channels.',
    challenges: [
      'Managing inventory across multiple channels and locations',
      'Personalizing customer experiences at scale',
      'Predicting demand fluctuations and trends',
      'Optimizing pricing and promotion strategies'
    ],
    solutions: [
      {
        icon: '🏪',
        title: 'Inventory Optimization',
        description: 'Reduce stockouts and overstock situations with AI-driven demand forecasting and automated inventory management.'
      },
      {
        icon: '👤',
        title: 'Customer Personalization',
        description: 'Deliver tailored product recommendations and personalized marketing campaigns based on customer behavior and preferences.'
      },
      {
        icon: '💰',
        title: 'Dynamic Pricing',
        description: 'Optimize pricing strategies in real-time based on demand, competition, and market conditions to maximize revenue.'
      }
    ]
  }
];

// Testimonial data
const testimonials = [
  {
    name: 'Robert Chen',
    role: 'Director of Operations',
    company: 'Global Manufacturing Inc.',
    quote: 'FLUXO\'s predictive maintenance solution has dramatically reduced our downtime by 47% and extended the lifespan of our equipment. The ROI exceeded our expectations within just six months.',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'MedTech Solutions',
    quote: 'Implementing FLUXO\'s AI-powered patient management system transformed our operations. We\'ve increased our capacity by 30% while improving patient satisfaction scores.',
  },
  {
    name: 'Michael Torres',
    role: 'Head of Digital Innovation',
    company: 'First Capital Bank',
    quote: 'The fraud detection system from FLUXO has saved us millions in potential losses and reduced false positives by 60%. Their team\'s expertise in both finance and AI is truly impressive.',
  }
]; 

function ROIAnimatedCalculator() {
  const [industry, setIndustry] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState({
    efficiencyImprovement: 0,
    costReduction: 0,
    payback: 0,
    roi5y: 0,
  });
  const [animated, setAnimated] = useState({
    efficiencyImprovement: 0,
    costReduction: 0,
    payback: 0,
    roi5y: 0,
  });

  // Real-time calculation on input change
  useEffect(() => {
    let eff = 30, cost = 15, payback = 12, roi = 150;
    if (efficiency === 'Low (Manual processes)') {
      eff = 50; cost = 30; payback = 6; roi = 350;
    } else if (efficiency === 'Medium (Some automation)') {
      eff = 40; cost = 25; payback = 8; roi = 250;
    } else if (efficiency === 'High (Mostly automated)') {
      eff = 20; cost = 10; payback = 18; roi = 100;
    }
    setResult({
      efficiencyImprovement: eff,
      costReduction: cost,
      payback: payback,
      roi5y: roi,
    });
    setAnimated({ efficiencyImprovement: 0, costReduction: 0, payback: 0, roi5y: 0 });
  }, [industry, companySize, efficiency, budget]);

  // Animate numbers when result changes
  useEffect(() => {
    const duration = 800;
    const start = performance.now();
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      setAnimated({
        efficiencyImprovement: Math.round(result.efficiencyImprovement * t),
        costReduction: Math.round(result.costReduction * t),
        payback: Math.round(result.payback * t),
        roi5y: Math.round(result.roi5y * t),
      });
      if (t < 1) requestAnimationFrame(animate);
    }
    animate();
  }, [result]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div>
            <label className="block text-gray-900 text-sm font-bold mb-2">Industry</label>
            <select
              className="w-full bg-white border border-gray-300 focus:border-primary rounded-lg px-4 py-3 text-gray-900 font-bold transition-colors duration-300 focus:outline-none"
              value={industry}
              onChange={e => setIndustry(e.target.value)}
            >
              <option value="">Select your industry</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-900 text-sm font-bold mb-2">Company Size</label>
            <select
              className="w-full bg-white border border-gray-300 focus:border-primary rounded-lg px-4 py-3 text-gray-900 font-bold transition-colors duration-300 focus:outline-none"
              value={companySize}
              onChange={e => setCompanySize(e.target.value)}
            >
              <option value="">Select company size</option>
              <option>Small (1-50 employees)</option>
              <option>Medium (51-500 employees)</option>
              <option>Large (501+ employees)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-900 text-sm font-bold mb-2">Current Process Efficiency</label>
            <select
              className="w-full bg-white border border-gray-300 focus:border-primary rounded-lg px-4 py-3 text-gray-900 font-bold transition-colors duration-300 focus:outline-none"
              value={efficiency}
              onChange={e => setEfficiency(e.target.value)}
            >
              <option value="">Select efficiency level</option>
              <option>Low (Manual processes)</option>
              <option>Medium (Some automation)</option>
              <option>High (Mostly automated)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-900 text-sm font-bold mb-2">Annual Budget for Technology</label>
            <input
              type="text"
              placeholder="$ Amount"
              className="w-full bg-white border border-gray-300 focus:border-primary rounded-lg px-4 py-3 text-gray-900 font-bold transition-colors duration-300 focus:outline-none"
              value={budget}
              onChange={e => setBudget(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="card bg-gray-900 text-white dark:bg-secondary/80 dark:text-white transition-colors duration-500 shadow-2xl border-2 border-accent/40">
        <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-accent animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V6M5 12l7-7 7 7" /></svg>
          Estimated ROI
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-white/80 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4 text-primary animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
              Efficiency Improvement
            </p>
            <motion.p className="text-accent font-bold text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              +{animated.efficiencyImprovement}%
            </motion.p>
          </div>
          <div>
            <p className="text-white/80 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
              Cost Reduction
            </p>
            <motion.p className="text-accent font-bold text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              -{animated.costReduction}%
            </motion.p>
          </div>
          <div>
            <p className="text-white/80 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4 text-primary animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg>
              Payback Period
            </p>
            <motion.p className="text-accent font-bold text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {animated.payback} months
            </motion.p>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/80 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
              5-Year ROI
            </p>
            <motion.p className="text-accent font-bold text-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {animated.roi5y}%
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
} 
