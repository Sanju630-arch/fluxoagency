'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type PricingTier = 'monthly' | 'yearly';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  popularFeature?: string;
  isPopular?: boolean;
  bgGradient?: string;
  callToAction: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Automation',
    description: 'For small businesses looking to automate simple tasks',
    price: {
      monthly: 99,
      yearly: 79,
    },
    features: [
      'Process automation for simple workflows',
      'Basic reporting and analytics',
      'Email support',
      'Up to 5 automated processes',
      'API access',
    ],
    popularFeature: 'Great for small teams',
    callToAction: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses with complex automation needs',
    price: {
      monthly: 199,
      yearly: 159,
    },
    features: [
      'Advanced process automation',
      'Detailed analytics dashboard',
      'Priority email and chat support',
      'Up to 15 automated processes',
      'AI-powered insights',
      'Workflow integrations',
      'Custom automations',
    ],
    popularFeature: 'Most popular for mid-sized companies',
    isPopular: true,
    bgGradient: 'from-primary/20 to-accent/20',
    callToAction: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with advanced automation requirements',
    price: {
      monthly: 399,
      yearly: 319,
    },
    features: [
      'Full-suite process automation',
      'Advanced AI optimization',
      'Dedicated account manager',
      'Unlimited automated processes',
      'Custom AI model training',
      'Enterprise API access',
      'Advanced security features',
      'On-premise installation option',
      '24/7 priority support',
    ],
    popularFeature: 'Best for large enterprises',
    callToAction: 'Contact Sales',
  },
];

const PricingCards = () => {
  const [selectedTier, setSelectedTier] = useState<PricingTier>('monthly');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const toggleTier = () => {
    setSelectedTier(selectedTier === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              AI Automation Plan
            </span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Select the perfect plan for your business needs and scale as you grow
          </motion.p>
          
          {/* Pricing Toggle */}
          <motion.div 
            className="flex items-center justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={`text-sm mr-3 ${selectedTier === 'monthly' ? 'text-white' : 'text-white/50'}`}>
              Monthly
            </span>
            <button
              onClick={toggleTier}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-secondary border border-white/20"
            >
              <span className="sr-only">Toggle pricing tier</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-accent transition-transform ${
                  selectedTier === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ml-3 flex items-center ${selectedTier === 'yearly' ? 'text-white' : 'text-white/50'}`}>
              Yearly
              <span className="ml-2 bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${
                plan.isPopular ? 'md:-mt-4 md:mb-4' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                plan.bgGradient || 'from-white/5 to-white/10'
              } opacity-50`}></div>
              
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <span className="bg-accent text-secondary text-xs font-medium px-2.5 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="relative p-6 md:p-8 backdrop-blur-sm bg-secondary/60 h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-space font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-white/70 text-sm">{plan.description}</p>
                
                <div className="mt-5 flex items-baseline text-white">
                  <span className="text-4xl md:text-5xl font-space font-bold">
                    ${selectedTier === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="ml-2 text-white/60">/month</span>
                  
                  {selectedTier === 'yearly' && (
                    <span className="ml-2 text-accent text-sm">
                      (Billed annually)
                    </span>
                  )}
                </div>
                
                {plan.popularFeature && (
                  <p className="mt-2 text-sm text-accent font-medium">
                    {plan.popularFeature}
                  </p>
                )}
                
                <ul className="mt-6 space-y-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary text-xs">✓</span>
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={`/contact?plan=${plan.id}`}
                    className={`w-full block text-center py-3 px-4 rounded-full transition-all ${
                      plan.isPopular
                        ? 'bg-accent text-secondary hover:shadow-accent/30 hover:shadow-lg'
                        : 'bg-primary text-white hover:shadow-primary/30 hover:shadow-lg'
                    }`}
                  >
                    {plan.callToAction}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-white/80">
            Need a custom solution? <Link href="/contact" className="text-accent hover:underline">Contact our team</Link> for pricing tailored to your specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards; 