'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../../components/ui/LoadingScreen';

// AI automation solutions data
const automationSolutions = [
  {
    id: 'ai-property-assistant',
    title: 'AI Property Assistant',
    description: 'Answers property-related queries, schedules site visits.',
    icon: '🏠',
    features: [
      'Share property info, images, videos via chatbot',
      'Schedule site visits',
      'Explain loan or pricing options',
    ],
    roi: [
      { label: 'Value', value: 'Handles 100+ property queries/month automatically' },
      { label: 'ROI', value: 'Closes 1–2 extra property deals/month = $2000+' },
      { label: 'Profit', value: '$1500–$1800/month' },
    ],
    idealFor: 'Real estate agents, property managers, rental firms',
  },
  {
    id: 'ai-booking-assistant',
    title: 'AI Booking Assistant',
    description: 'Handles bookings via call/chat across multiple platforms.',
    icon: '📅',
    features: [
      'Calendar integration',
      'Multi-slot scheduling',
      'Confirmation messages (SMS, WhatsApp)',
    ],
    roi: [
      { label: 'Value', value: 'Auto-schedules bookings, prevents double bookings' },
      { label: 'ROI', value: '10–20% boost in direct bookings = $500–$1000 extra' },
      { label: 'Profit', value: '$400–$800/month' },
    ],
    idealFor: 'Hotels, vacation rentals, spas, restaurants',
  },
  {
    id: 'ai-receptionist',
    title: 'AI Receptionist',
    description: 'Handles incoming calls 24/7 like a smart front-desk agent.',
    icon: '☎️',
    features: [
      'Book/reschedule appointments',
      'Provide opening hours, location, pricing',
      'Transfer calls to human staff when needed',
    ],
    roi: [
      { label: 'Value', value: 'Saves 4–6 hours/day of front desk work' },
      { label: 'ROI', value: 'Saves ~$600–$900/month in staff cost + 10% more bookings' },
      { label: 'Profit', value: '$400–$700/month' },
    ],
    idealFor: 'Clinics, salons, lawyers, repair centers',
  },
  {
    id: 'invoice-billing-assistant',
    title: 'Invoice & Billing Assistant',
    description: 'Understands and explains invoices, billing terms, payments.',
    icon: '🧾',
    features: [
      'Answers invoice-related queries',
      'Tracks payment status',
      'Integrates with accounting tools',
    ],
    roi: [
      { label: 'Value', value: 'Reduces billing queries & improves cash flow' },
      { label: 'ROI', value: 'Saves 10 hours/month + recovers 5–10% delayed payments' },
      { label: 'Profit', value: '$400–$700/month' },
    ],
    idealFor: 'SaaS, logistics, B2B services, agencies',
  },
];

// Case Studies data
const caseStudies = [
  {
    icon: '🏭',
    title: 'Manufacturing Excellence',
    industry: 'Manufacturing',
    description: 'Helped a leading manufacturer reduce downtime by implementing predictive maintenance and optimizing production schedules.',
    result: '40% reduction in downtime',
    slug: 'manufacturing-excellence'
  },
  {
    icon: '🏥',
    title: 'Healthcare Innovation',
    industry: 'Healthcare',
    description: 'Developed an AI-powered patient management system that improved scheduling efficiency and reduced administrative workload.',
    result: '25% increase in patient capacity',
    slug: 'healthcare-innovation'
  },
  {
    icon: '🏦',
    title: 'Financial Intelligence',
    industry: 'Finance',
    description: 'Implemented advanced fraud detection algorithms that significantly reduced fraudulent transactions for a financial institution.',
    result: '65% improvement in fraud detection',
    slug: 'financial-intelligence'
  }
];

// Pricing plans
const pricingPlans = [
  {
    name: 'Basic Automation',
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    description: 'Perfect for small businesses looking to automate simple processes.',
    features: [
      'Process automation for up to 5 workflows',
      'Basic AI integration',
      'Standard support (business hours)',
      'Monthly usage reports',
      'Up to 10,000 transactions/month',
    ],
    isPopular: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    description: 'Ideal for growing businesses with moderate automation needs.',
    features: [
      'Process automation for up to 15 workflows',
      'Advanced AI integration',
      'Priority support (extended hours)',
      'Weekly performance analytics',
      'Up to 50,000 transactions/month',
      'Custom automation development',
      'API access'
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 14999,
    yearlyPrice: 149990,
    description: 'For large organizations with complex automation requirements.',
    features: [
      'Unlimited process automation',
      'Full AI capabilities suite',
      '24/7 dedicated support',
      'Real-time analytics dashboard',
      'Unlimited transactions',
      'Custom solution development',
      'Full API access',
      'Dedicated account manager',
      'On-site training and setup'
    ],
    isPopular: false,
  }
];

type SolutionCardProps = {
  title: string;
  description: string;
  icon: string;
  features: string[];
  roi: { label: string; value: string }[];
  idealFor: string;
};
const SolutionCard = ({ title, description, icon, features, roi, idealFor }: SolutionCardProps) => {
  return (
    <motion.div
      className="card overflow-hidden bg-gradient-to-br from-primary/80 to-accent/60 shadow-xl hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center text-3xl mr-4 group-hover:bg-white/20 transition-all">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white drop-shadow mb-1">{title}</h3>
          <p className="text-white/70 text-sm font-medium">{description}</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold text-white mb-2">Key Features</h4>
        <ul className="space-y-1">
          {features.map((f: string, i: number) => (
            <li key={i} className="text-white/90 text-sm flex items-start">
              <span className="text-accent mr-2">✓</span>{f}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold text-white mb-2">ROI Coverage</h4>
        <ul className="space-y-1">
          {roi.map((item: { label: string; value: string }, i: number) => (
            <li key={i} className="text-white/80 text-xs flex items-start">
              <span className="font-bold text-accent mr-2">{item.label}:</span> {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-white/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Ideal For: {idealFor}</span>
      </div>
      <div className="flex justify-end">
        <Link href="/contact" className="btn-primary py-2 px-6 text-base font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default function Solutions() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredSolutions, setFilteredSolutions] = useState(automationSolutions);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-grid-pattern pt-12 md:pt-16 pb-20 md:pb-24">
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background pointer-events-none"></div>
            <div className="absolute -top-24 left-1/3 w-96 h-96 bg-primary bg-opacity-20 rounded-full filter blur-[120px] animate-pulse"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="hero-heading">
                  AI-Powered{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Solutions
                  </span>
                </h1>
                <p className="mt-6 text-xl text-white text-opacity-80 max-w-3xl mx-auto">
                  Transform your business with our cutting-edge AI automation solutions designed to boost efficiency, reduce costs, and drive innovation.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* AI Automation Solutions Section */}
          <section className="py-20" id="automation-solutions">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-heading mb-6">
                  AI Automation{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Solutions
                  </span>
                </h2>
                <p className="text-white text-opacity-80 mb-8">
                  Browse our range of AI automation solutions, tailored to address specific business challenges and optimize operational efficiency.
                </p>
                
                {/* No filter needed since all solutions are shown */}
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {filteredSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    title={solution.title}
                    description={solution.description}
                    icon={solution.icon}
                    features={solution.features}
                    roi={solution.roi}
                    idealFor={solution.idealFor}
                  />
                ))}
              </div>
              
              {filteredSolutions.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-white text-opacity-70">No solutions available at this time.</p>
                </div>
              )}
            </div>
          </section>
          
          {/* Case Studies Section */}
          <section className="py-20" id="case-studies">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-heading">
                  Success{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Stories
                  </span>
                </h2>
                <p className="mt-4 text-lg text-white text-opacity-70">
                  See how our solutions have transformed businesses across industries.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.div 
                    key={index} 
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(58,255,224,0.3)' }}
                  >
                    <div className="bg-primary bg-opacity-10 p-3 rounded-lg inline-block mb-4">
                      <span className="text-2xl">{study.icon}</span>
                    </div>
                    <h3 className="text-xl font-space font-medium text-white mb-2">{study.title}</h3>
                    <p className="text-white text-opacity-60 text-sm mb-3">{study.industry}</p>
                    <p className="text-white text-opacity-70 mb-6">{study.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white text-opacity-50 text-sm">Results:</span>
                        <span className="ml-2 text-accent font-medium">{study.result}</span>
                      </div>
                      <Link href={`/solutions/${study.slug}`} className="text-primary hover:text-accent text-sm font-medium transition-colors">
                        Read Case Study →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary bg-opacity-30 rounded-full filter blur-[80px]"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent bg-opacity-30 rounded-full filter blur-[60px]"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-6">
                    Ready to transform your operations?
                  </h2>
                  <p className="text-lg text-white text-opacity-80 mb-10 max-w-2xl mx-auto">
                    Discover how our AI automation solutions can help your business thrive in the digital age.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/contact" className="btn-accent">
                        Request a Demo
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/industries" className="btn-outline">
                        Explore Industries
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  );
} 
