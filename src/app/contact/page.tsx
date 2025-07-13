'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import LoadingSpinner from '../../components/LoadingSpinner';

// Initialize EmailJS with your public key
emailjs.init("NqQuJUl_3SjTedDo-"); // Replace with your actual EmailJS public key

export default function ContactPage() {
  const searchParams = useSearchParams();
  const selectedSolution = searchParams.get('solution');
  const selectedPlan = searchParams.get('plan');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: selectedSolution ? `I'm interested in the ${selectedSolution?.replace(/-/g, ' ')} solution.` : 
             selectedPlan ? `I'm interested in the ${selectedPlan?.replace(/-/g, ' ')} plan.` : '',
    solution: selectedSolution || '',
    plan: selectedPlan || '',
    budget: '',
    newsletter: true
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear validation error when field is changed
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        solution: formData.solution,
        plan: formData.plan,
        budget: formData.budget,
        newsletter: formData.newsletter ? 'Yes' : 'No'
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_dx96umt', // Replace with your EmailJS service ID
        'template_3dnj20g', // Replace with your EmailJS template ID
        templateParams
      );

      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        solution: '',
        plan: '',
        budget: '',
        newsletter: true
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-background" />
        
        {/* Animated circles */}
        <motion.div
          className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full border border-primary/20 opacity-30"
          animate={{ 
            rotate: 360, 
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 40, ease: "linear", repeat: Infinity },
            scale: { duration: 10, ease: "easeInOut", repeat: Infinity }
          }}
        />
        
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-accent/20 opacity-20"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, ease: "linear", repeat: Infinity },
            scale: { duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <Container className="pt-20 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Heading level="h1" highlight className="mb-6">
            Get in Touch
          </Heading>
          <p className="text-xl text-white/70">
            Ready to transform your operations with AI automation? Our team is here to help you get started.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass" className="p-8 backdrop-blur-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.5
                    }}
                    className="relative w-24 h-24 mx-auto mb-8"
                  >
                    {/* Outer ring */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="absolute inset-0 rounded-full border-4 border-primary/30"
                    />
                    
                    {/* Inner ring */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute inset-2 rounded-full border-4 border-primary/50"
                    />
                    
                    {/* Checkmark circle */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="absolute inset-4 rounded-full bg-primary/20 flex items-center justify-center"
                    >
                      <motion.svg
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                        className="w-12 h-12 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M20 6L9 17L4 12"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                        />
                      </motion.svg>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <Heading level="h3" className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Message Sent Successfully!
                    </Heading>
                  </motion.div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="text-white/70 mb-8 max-w-md mx-auto"
                  >
                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <Button 
                      variant="primary" 
                      onClick={() => setIsSubmitted(false)}
                      className="group relative overflow-hidden"
                    >
                      <span className="relative z-10">Send Another Message</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Heading level="h3" className="mb-6">Contact Information</Heading>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <p className="text-red-500">{submitError}</p>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2">
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-white/10 border ${validationErrors.name ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          placeholder="Your name"
                        />
                        {validationErrors.name && (
                          <p className="mt-1 text-red-500 text-sm">{validationErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white mb-2">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-white/10 border ${validationErrors.email ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          placeholder="your@email.com"
                        />
                        {validationErrors.email && (
                          <p className="mt-1 text-red-500 text-sm">{validationErrors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-white mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="solution" className="block text-white mb-2">
                          Interested Solution
                        </label>
                        <select
                          id="solution"
                          name="solution"
                          value={formData.solution}
                          onChange={handleChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="" className="bg-secondary">Select a solution</option>
                          <option value="document-processing" className="bg-secondary">Intelligent Document Processing</option>
                          <option value="customer-service" className="bg-secondary">AI Customer Service</option>
                          <option value="predictive-maintenance" className="bg-secondary">Predictive Maintenance</option>
                          <option value="inventory-optimization" className="bg-secondary">Inventory Optimization</option>
                          <option value="quality-control" className="bg-secondary">AI Quality Control</option>
                          <option value="workflow-automation" className="bg-secondary">Workflow Automation</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-white mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="" className="bg-secondary">Select budget range</option>
                          <option value="under-5k" className="bg-secondary">Under $5,000</option>
                          <option value="5k-15k" className="bg-secondary">$5,000 - $15,000</option>
                          <option value="15k-30k" className="bg-secondary">$15,000 - $30,000</option>
                          <option value="over-30k" className="bg-secondary">Over $30,000</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-white/10 border ${validationErrors.message ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="How can we help you today?"
                      />
                      {validationErrors.message && (
                        <p className="mt-1 text-red-500 text-sm">{validationErrors.message}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-white/20 bg-white/10 text-primary focus:ring-primary/50"
                      />
                      <label htmlFor="newsletter" className="ml-2 block text-white/70">
                        Subscribe to our newsletter for AI automation insights
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      fullWidth 
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
          
          {/* Contact information */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card variant="outline" className="mb-8">
              <Heading level="h3" className="mb-6">Connect With Us</Heading>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-white/70">+916305007783</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-white/70">info@fluxoagency.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-white/70">Hyderabad<br />India</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="gradient" className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Heading level="h3">Quick Response</Heading>
              </div>
              <p className="text-white mb-6">
                We pride ourselves on our lightning-fast response times. A member of our team will get back to you within 24 hours.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  );
} 
