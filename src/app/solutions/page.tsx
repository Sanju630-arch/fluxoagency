'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../../components/ui/LoadingScreen';

// AI automation solutions data
const automationSolutions = [
  {
    id: 'document-processing',
    title: 'Intelligent Document Processing',
    description: 'Automate document processing with AI that extracts, categorizes, and analyzes information from various document types.',
    icon: '📄',
    benefits: [
      'Reduce manual data entry by up to 80%',
      'Improve data accuracy to 99%+',
      'Process documents 24/7',
      'Scale with business growth',
      'Integrate with existing systems',
    ],
    complexity: 'moderate' as const,
    implementationTime: '4-6 weeks',
    price: 5000,
    slug: 'document-processing'
  },
  {
    id: 'customer-service',
    title: 'AI Customer Service',
    description: 'Deploy intelligent chatbots and virtual assistants that handle customer inquiries, provide support, and route complex issues.',
    icon: '🤖',
    benefits: [
      '24/7 customer support availability',
      'Handle multiple inquiries simultaneously',
      'Reduce response time by 90%',
      'Consistent brand voice and messaging',
      'Seamless handoff to human agents',
      'Continuous learning and improvement',
    ],
    complexity: 'complex' as const,
    implementationTime: '8-12 weeks',
    price: 12000,
    slug: 'customer-service'
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    description: 'Implement AI systems that predict equipment failures before they happen, optimizing maintenance schedules and reducing downtime.',
    icon: '⚙️',
    benefits: [
      'Reduce unplanned downtime by up to 50%',
      'Extend equipment lifespan',
      'Optimize maintenance scheduling',
      'Real-time monitoring and alerts',
      'Data-driven decision making',
    ],
    complexity: 'complex' as const,
    implementationTime: '10-14 weeks',
    price: 15000,
    slug: 'predictive-maintenance'
  },
  {
    id: 'inventory-optimization',
    title: 'Inventory Optimization',
    description: 'Use AI to forecast demand, optimize inventory levels, and automate reordering to reduce costs while maintaining optimal stock levels.',
    icon: '📦',
    benefits: [
      'Reduce inventory costs by 15-30%',
      'Minimize stockouts and overstock situations',
      'Automate reordering processes',
      'Adapt to seasonal fluctuations',
      'Real-time inventory visibility',
    ],
    complexity: 'moderate' as const,
    implementationTime: '6-8 weeks',
    price: 8000,
    slug: 'inventory-optimization'
  },
  {
    id: 'quality-control',
    title: 'AI Quality Control',
    description: 'Implement computer vision and machine learning systems that detect defects and ensure quality standards in manufacturing and production.',
    icon: '👁️',
    benefits: [
      'Increase defect detection accuracy to 99%',
      'Reduce quality control labor costs',
      'Process inspection in real-time',
      'Generate detailed quality reports',
      'Continuous system learning and improvement',
    ],
    complexity: 'complex' as const,
    implementationTime: '8-10 weeks',
    price: 18000,
    slug: 'quality-control'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamline business processes by automating repetitive tasks, approvals, notifications, and data transfers between systems.',
    icon: '🔄',
    benefits: [
      'Reduce processing time by up to 70%',
      'Eliminate human error in routine tasks',
      'Improve employee productivity',
      'Enhance compliance with standardized processes',
      'Real-time progress tracking and reporting',
    ],
    complexity: 'simple' as const,
    implementationTime: '3-5 weeks',
    price: 4500,
    slug: 'workflow-automation'
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

const SolutionCard = ({ 
  title, 
  description, 
  icon, 
  benefits, 
  complexity, 
  implementationTime, 
  price, 
  slug 
}: {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  complexity: 'simple' | 'moderate' | 'complex';
  implementationTime: string;
  price: number;
  slug: string;
}) => {
  const complexityColor = {
    simple: 'bg-green-500',
    moderate: 'bg-yellow-500',
    complex: 'bg-orange-500'
  };

  return (
    <motion.div 
      className="card overflow-hidden"
      whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(58, 118, 240, 0.3)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 flex-shrink-0 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-space font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <p className="text-white text-opacity-80 mb-4">{description}</p>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className={`w-3 h-3 rounded-full ${complexityColor[complexity]} mr-2`}></span>
          <span className="text-white text-opacity-70 text-sm capitalize">{complexity} Complexity</span>
        </div>
        <span className="text-white text-opacity-70 text-sm">{implementationTime}</span>
      </div>
      
      <div className="border-t border-white border-opacity-10 pt-4 mb-4">
        <h4 className="font-medium text-white mb-2">Key Benefits:</h4>
        <ul className="space-y-1">
          {benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="text-white text-opacity-70 text-sm flex items-start">
              <span className="text-accent mr-2">✓</span>
              {benefit}
            </li>
          ))}
          {benefits.length > 3 && (
            <li className="text-white text-opacity-60 text-sm">
              +{benefits.length - 3} more benefits
            </li>
          )}
        </ul>
      </div>
      
      <div className="mt-auto flex items-center justify-between">
        <span className="text-white font-medium">
          From <span className="text-accent">${price.toLocaleString()}</span>
        </span>
        <Link 
          href={`/contact?solution=${slug}`} 
          className="btn-primary py-2 px-4 text-sm"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default function Solutions() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredSolutions, setFilteredSolutions] = useState(automationSolutions);
  const [isYearly, setIsYearly] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Filter solutions based on category
  const filterSolutions = (category: string) => {
    setSelectedCategory(category);
    
    if (category === 'all') {
      setFilteredSolutions(automationSolutions);
      return;
    }
    
    const complexity = category as 'simple' | 'moderate' | 'complex';
    const filtered = automationSolutions.filter(
      solution => solution.complexity === complexity
    );
    setFilteredSolutions(filtered);
  };

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
                
                {/* Complexity filter */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  {['all', 'simple', 'moderate', 'complex'].map((category) => (
                    <motion.button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category 
                          ? 'bg-primary text-white shadow-lg' 
                          : 'bg-white bg-opacity-10 text-white text-opacity-70 hover:bg-opacity-20'
                      }`}
                      onClick={() => filterSolutions(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category === 'all' ? 'All Solutions' : `${category.charAt(0).toUpperCase() + category.slice(1)} Complexity`}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredSolutions.map((solution) => (
                    <SolutionCard
                      key={solution.id}
                      title={solution.title}
                      description={solution.description}
                      icon={solution.icon}
                      benefits={solution.benefits}
                      complexity={solution.complexity}
                      implementationTime={solution.implementationTime}
                      price={solution.price}
                      slug={solution.slug}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
              
              {filteredSolutions.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-white text-opacity-70">No solutions match the selected filter.</p>
                  <motion.button 
                    className="mt-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
                    onClick={() => filterSolutions('all')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Solutions
                  </motion.button>
                </div>
              )}
            </div>
          </section>
          
          {/* Pricing Section */}
          <section className="py-20 bg-secondary bg-opacity-30" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-heading mb-6">
                  Flexible{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Pricing
                  </span>
                </h2>
                <p className="text-white text-opacity-80 mb-8">
                  Choose the plan that fits your business needs. All plans include implementation support and ongoing maintenance.
                </p>
                
                {/* Toggle */}
                <div className="flex items-center justify-center mb-8">
                  <span className={`mr-3 text-sm ${!isYearly ? 'text-white' : 'text-white text-opacity-60'}`}>Monthly</span>
                  <div 
                    className="relative w-14 h-7 bg-white bg-opacity-20 rounded-full cursor-pointer"
                    onClick={() => setIsYearly(!isYearly)}
                  >
                    <motion.div 
                      className="absolute top-1 w-5 h-5 bg-accent rounded-full"
                      animate={{ left: isYearly ? 'calc(100% - 20px - 4px)' : '4px' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className={`ml-3 text-sm ${isYearly ? 'text-white' : 'text-white text-opacity-60'}`}>
                    Yearly <span className="text-accent text-xs">(Save 20%)</span>
                  </span>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div 
                    key={index}
                    className={`card relative overflow-hidden ${plan.isPopular ? 'border-2 border-accent' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, boxShadow: '0 20px 30px rgba(58, 118, 240, 0.3)' }}
                  >
                    {plan.isPopular && (
                      <div className="absolute top-0 right-0 bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-space font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-accent">
                        ${isYearly ? Math.floor(plan.yearlyPrice / 12).toLocaleString() : plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-white text-opacity-60 ml-1">/month</span>
                      
                      {isYearly && (
                        <div className="text-sm text-white text-opacity-70 mt-1">
                          Billed annually (${plan.yearlyPrice.toLocaleString()})
                        </div>
                      )}
                    </div>
                    
                    <p className="text-white text-opacity-80 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-start text-white text-opacity-80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * idx }}
                        >
                          <span className="text-accent mr-2 flex-shrink-0 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/contact?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block text-center py-3 px-6 rounded-full transition-all ${
                        plan.isPopular 
                          ? 'bg-accent text-secondary hover:bg-opacity-90' 
                          : 'bg-primary text-white hover:bg-opacity-90'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-12 text-white text-opacity-70">
                <p>Need a custom solution? <Link href="/contact" className="text-accent hover:underline">Contact us</Link> for personalized pricing.</p>
              </div>
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