'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import Card, { CardContent, CardIcon, CardTitle, CardDescription } from '../../components/ui/Card';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');
  
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-background" />
        
        {/* Geometric background shapes */}
        <div className="absolute top-[10%] left-[5%] w-[20vw] h-[20vw] bg-primary/5 rounded-3xl rotate-12" />
        <div className="absolute top-[40%] right-[5%] w-[15vw] h-[15vw] bg-accent/5 rounded-full" />
        <div className="absolute bottom-[10%] left-[15%] w-[10vw] h-[10vw] bg-primary/5 rounded-full" />
        
        {/* Animated glowing orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              Our Story
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <Heading level="h1" highlight className="mb-6">
                Pioneering the Future of <br />AI Automation
              </Heading>
            </motion.div>
            
            <motion.p
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="text-xl text-white/70 max-w-3xl mx-auto mb-8"
            >
              FLUXO is a cutting-edge technology company dedicated to transforming industries through intelligent automation. We combine AI expertise with deep industry knowledge to deliver solutions that drive efficiency and growth.
            </motion.p>
          </div>
        </Container>
      </section>
      
      {/* About Tabs Section */}
      <section className="relative py-16">
        <Container>
          <div className="flex overflow-x-auto pb-2 mb-10 justify-center">
            <div className="flex space-x-2 p-1 bg-white/5 rounded-full border border-white/10">
              {[
                { id: 'mission', label: 'Our Mission' },
                { id: 'values', label: 'Core Values' },
                { id: 'journey', label: 'Our Journey' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            {activeTab === 'mission' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                <div>
                  <Heading level="h2" className="mb-6">
                    Transforming Industries Through <span className="text-primary">Intelligent Automation</span>
                  </Heading>
                  <div className="space-y-4 text-white/70">
                    <p>
                      At FLUXO, our mission is to harness the power of artificial intelligence to solve complex business challenges and drive industry transformation. We believe that intelligent automation is the key to unlocking unprecedented efficiency, innovation, and growth.
                    </p>
                    <p>
                      We're dedicated to making advanced AI technologies accessible to businesses of all sizes, democratizing access to tools that were once only available to large enterprises with massive resources.
                    </p>
                    <p>
                      By combining cutting-edge AI research with practical industry applications, we create solutions that deliver measurable ROI and create sustainable competitive advantages for our clients.
                    </p>
                    <div className="pt-4">
                      <Button href="/solutions" variant="outline">
                        Explore Our Solutions
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur"></div>
                  <div className="relative bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'values' && (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {coreValues.map((value, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Card variant="outline" className="h-full">
                      <CardIcon variant="primary">
                        {value.icon}
                      </CardIcon>
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {activeTab === 'journey' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-3xl mx-auto">
                  <div className="space-y-16">
                    {timeline.map((item, index) => (
                      <div key={index} className="relative">
                        {/* Timeline line */}
                        {index < timeline.length - 1 && (
                          <div className="absolute left-[19px] top-[40px] w-1 bg-primary/20 h-[calc(100%+4rem)]"></div>
                        )}
                        
                        <div className="flex gap-8">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center z-10">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-primary font-medium text-lg">{item.year}</div>
                            <h3 className="text-xl font-bold text-white mt-1 mb-3">{item.title}</h3>
                            <p className="text-white/70 mb-4">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </Container>
      </section>
      
      {/* Team Section */}
      <section className="relative py-16">
        <Container>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Heading level="h2" highlight className="mb-4">
              Meet Our Leadership Team
            </Heading>
            <p className="text-lg text-white/70">
              Our diverse team combines expertise in AI, industry knowledge, and business acumen to drive innovation and deliver exceptional results.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {teamMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(58,118,240,0.25)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card variant="glass" className="relative overflow-hidden group border-2 border-transparent group-hover:border-accent transition-all duration-300 shadow-xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative z-10">
                    <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-5xl shadow-lg border-4 border-white/10 group-hover:scale-105 transition-transform">
                      {member.initials}
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-1 drop-shadow">{member.name}</h3>
                    <p className="text-accent text-center text-base mb-4 font-semibold">{member.role}</p>
                    <p className="text-white/80 text-center text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3 mt-6">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <Container>
          <Card variant="gradient" className="p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <Heading level="h2" className="mb-4">
                Ready to Transform Your Business?
              </Heading>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI automation solutions can help you achieve your business goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get in Touch
                </Button>
                <Button href="/solutions" variant="outline" size="lg">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}

// Core Values data
const coreValues = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new possibilities to create solutions that drive meaningful change.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality solutions and services that exceed expectations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership to create solutions greater than the sum of their parts.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical standards in everything we do.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Client Focus',
    description: 'We put our clients at the center of everything we do, ensuring their success is our success.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905 0 .905.714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    )
  },
  {
    title: 'Adaptability',
    description: 'We embrace change and continuously evolve to meet the dynamic needs of our clients and the market.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

// Timeline data
const timeline = [
  {
    year: '2018',
    title: 'The FLUXO Journey Begins',
    description: 'FLUXO was founded by a team of AI researchers and industry experts with a vision to transform how businesses operate through intelligent automation.'
  },
  {
    year: '2019',
    title: 'First Enterprise Solutions',
    description: 'Launched our first enterprise solutions focused on document processing and workflow automation, gaining our initial enterprise clients.'
  },
  {
    year: '2020',
    title: 'Expansion & Innovation',
    description: 'Expanded our team and solution portfolio, introducing predictive maintenance and AI quality control systems that delivered 40% efficiency improvements.'
  },
  {
    year: '2021',
    title: 'International Growth',
    description: 'Expanded into international markets and formed strategic partnerships with leading technology providers to enhance our solution capabilities.'
  },
  {
    year: '2022',
    title: 'Advanced AI Research',
    description: 'Established our Advanced AI Research division to explore cutting-edge technologies and develop next-generation automation solutions.'
  },
  {
    year: 'Present',
    title: 'Leading the Industry',
    description: 'Today, FLUXO is a recognized leader in AI automation, serving clients across industries globally with a comprehensive suite of solutions.'
  }
];

// Team Members data
const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Co-Founder',
    bio: 'Former AI research scientist with 15+ years experience in machine learning and business transformation.',
    initials: 'AM',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'Sophia Chen',
    role: 'CTO & Co-Founder',
    bio: 'PhD in Computer Science specializing in neural networks and natural language processing.',
    initials: 'SC',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'Marcus Johnson',
    role: 'Chief AI Officer',
    bio: 'Expert in developing enterprise AI solutions with experience at leading tech companies.',
    initials: 'MJ',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Olivia Rodriguez',
    role: 'VP of Product',
    bio: 'Product strategist focused on translating complex technologies into user-friendly solutions.',
    initials: 'OR',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'David Kim',
    role: 'VP of Customer Success',
    bio: 'Dedicated to ensuring clients achieve maximum value from our AI automation solutions.',
    initials: 'DK',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Elena Petrov',
    role: 'Director of R&D',
    bio: 'Leads our research initiatives in advanced AI technologies and new application areas.',
    initials: 'EP',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
]; 
