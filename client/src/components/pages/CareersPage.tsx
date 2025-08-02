import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Users, MapPin, Clock, Briefcase, Code, Headphones, BarChart3, Shield, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface CareersPageProps {
  onNavigateBack: () => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ onNavigateBack }) => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const toggleRole = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  const toggleValue = (valueId: string) => {
    setExpandedValue(expandedValue === valueId ? null : valueId);
  };

  const openRoles = [
    {
      title: 'Frontend Engineer (React/NextJS)',
      department: 'Engineering',
      location: 'Kolkata / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build beautiful, responsive user interfaces for our analytics platform using React, TypeScript, and modern web technologies.',
      requirements: [
        'Strong experience with React, TypeScript, and modern JavaScript',
        'Experience with Next.js, Tailwind CSS, and component libraries',
        'Knowledge of state management (Redux, Zustand) and API integration',
        'Understanding of responsive design and accessibility principles'
      ],
      icon: Code,
      color: 'from-primary-500 to-primary-600',
      id: 'frontend-engineer'
    },
    {
      title: 'Backend Engineer (Python, Node, API)',
      department: 'Engineering',
      location: 'Kolkata / Remote',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Design and build scalable backend systems, APIs, and data processing pipelines for our AI analytics platform.',
      requirements: [
        'Strong experience with Python or Node.js and API development',
        'Experience with databases (PostgreSQL, MongoDB) and cloud platforms',
        'Knowledge of microservices architecture and containerization',
        'Understanding of AI/ML integration and data processing pipelines'
      ],
      icon: Code,
      color: 'from-success-500 to-success-600',
      id: 'backend-engineer'
    },
    {
      title: 'QA Engineer',
      department: 'Engineering',
      location: 'Kolkata / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Ensure the quality and reliability of our platform through comprehensive testing strategies and automation.',
      requirements: [
        'Experience with manual and automated testing methodologies',
        'Knowledge of testing frameworks (Jest, Cypress, Selenium)',
        'Understanding of API testing and performance testing',
        'Experience with CI/CD pipelines and quality assurance processes'
      ],
      icon: Shield,
      color: 'from-warning-500 to-warning-600',
      id: 'qa-engineer'
    },
    {
      title: 'Customer Support Analyst',
      department: 'Support',
      location: 'Kolkata',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Provide exceptional technical support to our customers and help them succeed with our analytics platform.',
      requirements: [
        'Strong communication skills and customer service experience',
        'Technical aptitude and ability to troubleshoot software issues',
        'Experience with support ticketing systems and knowledge bases',
        'Understanding of SaaS platforms and API integrations'
      ],
      icon: Headphones,
      color: 'from-accent-500 to-violet-600',
      id: 'support-analyst'
    },
    {
      title: 'Cloud DevOps Engineer',
      department: 'Engineering',
      location: 'Kolkata / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain our cloud infrastructure, ensuring scalability, security, and reliability of our platform.',
      requirements: [
        'Experience with AWS, Azure, or Google Cloud Platform',
        'Knowledge of containerization (Docker, Kubernetes) and orchestration',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Understanding of monitoring, logging, and security best practices'
      ],
      icon: BarChart3,
      color: 'from-error-500 to-error-600',
      id: 'devops-engineer'
    }
  ];

  const benefits = [
    'Competitive salary and equity package',
    'Comprehensive health insurance',
    'Flexible work arrangements (remote/hybrid)',
    'Professional development budget',
    'Modern office in Kolkata with great amenities',
    'Team outings and company events',
    'Learning and conference allowances',
    'Flexible vacation policy'
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace new technologies to solve complex problems.',
      icon: Zap,
      id: 'innovation'
    },
    {
      title: 'Customer Success',
      description: 'Our customers\' success drives everything we do and build.',
      icon: Users,
      id: 'customer-success'
    },
    {
      title: 'Quality & Excellence',
      description: 'We maintain high standards in our code, products, and processes.',
      icon: Shield,
      id: 'quality'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage experimentation.',
      icon: BarChart3,
      id: 'learning'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      {/* Header */}
      <header className="bg-gradient-glass backdrop-blur-sm border-b border-neutral-800/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={onNavigateBack}
                className="p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  YoForex AI
                </span>
                <span className="text-sm text-neutral-400 ml-2">Careers</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Help us build the future of AI-powered analytics and workflow automation. Join our growing team of engineers, designers, and customer success professionals.
          </p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300"
              >
                <value.icon className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => toggleValue(value.id)}
                  className="mt-4 flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">
                    {expandedValue === value.id ? 'Show Less' : 'Learn More'}
                  </span>
                  {expandedValue === value.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </motion.button>

                {/* Expanded Content */}
                {expandedValue === value.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-800/20 rounded-lg p-4"
                  >
                    {value.id === 'innovation' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Innovation Culture</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• 20% time allocation for experimental projects and research</p>
                          <p className="text-sm text-neutral-300">• Access to latest AI tools and development platforms</p>
                          <p className="text-sm text-neutral-300">• Regular hackathons and innovation challenges</p>
                          <p className="text-sm text-neutral-300">• Patent filing support and intellectual property rewards</p>
                          <p className="text-sm text-neutral-300">• Collaboration with leading AI research institutions</p>
                        </div>
                        <p className="text-primary-400 text-sm">
                          Join our innovation-driven team at support@yoforexai.com
                        </p>
                      </div>
                    )}

                    {value.id === 'customer-success' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Customer-Centric Approach</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• Direct customer feedback integration into development cycles</p>
                          <p className="text-sm text-neutral-300">• Regular customer advisory board meetings and input sessions</p>
                          <p className="text-sm text-neutral-300">• Customer success metrics tied to team performance reviews</p>
                          <p className="text-sm text-neutral-300">• Opportunities to work directly with enterprise customers</p>
                          <p className="text-sm text-neutral-300">• Customer-first decision making in all product discussions</p>
                        </div>
                        <p className="text-success-400 text-sm">
                          Be part of our customer success mission
                        </p>
                      </div>
                    )}

                    {value.id === 'quality' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Excellence Standards</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• Comprehensive code review process with senior engineers</p>
                          <p className="text-sm text-neutral-300">• Automated testing with 90%+ code coverage requirements</p>
                          <p className="text-sm text-neutral-300">• Performance monitoring and optimization as core practices</p>
                          <p className="text-sm text-neutral-300">• Security-first development with regular audits</p>
                          <p className="text-sm text-neutral-300">• Documentation standards and knowledge sharing culture</p>
                        </div>
                        <p className="text-warning-400 text-sm">
                          High standards drive our 99.9% platform reliability
                        </p>
                      </div>
                    )}

                    {value.id === 'learning' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Learning & Development</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• ₹50,000 annual learning budget for courses and conferences</p>
                          <p className="text-sm text-neutral-300">• Internal tech talks and knowledge sharing sessions</p>
                          <p className="text-sm text-neutral-300">• Mentorship programs with senior technical leaders</p>
                          <p className="text-sm text-neutral-300">• Support for advanced degrees and professional certifications</p>
                          <p className="text-sm text-neutral-300">• Cross-team collaboration and skill development opportunities</p>
                        </div>
                        <p className="text-accent-400 text-sm">
                          Invest in your growth with our learning programs
                        </p>
                      </div>
                    )}

                    <motion.button
                      onClick={() => toggleValue(value.id)}
                      className="mt-4 text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Collapse
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            Open <span className="bg-gradient-primary bg-clip-text text-transparent">Positions</span>
          </h2>
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-neutral-700/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${role.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                        {role.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-neutral-400 mt-2">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-3 h-3" />
                          <span>{role.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{role.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{role.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                    {role.experience}
                  </span>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-6">{role.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Requirements</h4>
                  <div className="space-y-2">
                    {role.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        <span className="text-neutral-400 text-sm leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  className={`bg-gradient-to-r ${role.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => toggleRole(role.id)}
                  className="mt-3 flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">
                    {expandedRole === role.id ? 'Show Less Details' : 'See Full Details'}
                  </span>
                  {expandedRole === role.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </motion.button>

                {/* Expanded Content */}
                {expandedRole === role.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-800/20 rounded-lg p-4"
                  >
                    {role.id === 'frontend-engineer' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Frontend Engineering Role</h4>
                        <div className="space-y-3 mb-4">
                          <div>
                            <h5 className="text-primary-400 font-medium mb-2">Key Responsibilities</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Build responsive, accessible interfaces for enterprise analytics dashboards</li>
                              <li>• Implement real-time data visualization and interactive charts</li>
                              <li>• Collaborate with UX designers on user experience optimization</li>
                              <li>• Optimize performance for large-scale data rendering</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-success-400 font-medium mb-2">Growth Opportunities</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Lead frontend architecture decisions for new product features</li>
                              <li>• Mentor junior developers and contribute to technical standards</li>
                              <li>• Work directly with enterprise customers on custom implementations</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-primary-400 text-sm">
                          Apply: support@yoforex.co.in with portfolio and GitHub profile
                        </p>
                      </div>
                    )}

                    {role.id === 'backend-engineer' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Backend Engineering Role</h4>
                        <div className="space-y-3 mb-4">
                          <div>
                            <h5 className="text-success-400 font-medium mb-2">Technical Focus</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Design and implement scalable API architectures</li>
                              <li>• Build data processing pipelines for AI model orchestration</li>
                              <li>• Optimize database performance for high-volume analytics</li>
                              <li>• Implement security best practices and compliance standards</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-warning-400 font-medium mb-2">Impact & Scale</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Systems serving 50,000+ enterprise users globally</li>
                              <li>• Processing 1M+ analytics operations daily</li>
                              <li>• 99.9% uptime SLA with multi-region deployment</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-success-400 text-sm">
                          Technical interview process includes system design and coding challenges
                        </p>
                      </div>
                    )}

                    {role.id === 'qa-engineer' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Quality Assurance Role</h4>
                        <div className="space-y-3 mb-4">
                          <div>
                            <h5 className="text-warning-400 font-medium mb-2">Testing Responsibilities</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Develop comprehensive test strategies for AI workflow automation</li>
                              <li>• Implement automated testing for API endpoints and integrations</li>
                              <li>• Performance testing for enterprise-scale data processing</li>
                              <li>• Security testing and vulnerability assessment</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-accent-400 font-medium mb-2">Quality Standards</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Maintain 99.9% platform reliability through rigorous testing</li>
                              <li>• Ensure SOC 2 compliance through security testing protocols</li>
                              <li>• Collaborate with development teams on quality metrics</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-warning-400 text-sm">
                          Quality engineering is critical to our enterprise customer success
                        </p>
                      </div>
                    )}

                    {role.id === 'support-analyst' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Customer Support Role</h4>
                        <div className="space-y-3 mb-4">
                          <div>
                            <h5 className="text-accent-400 font-medium mb-2">Support Scope</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Technical support for API integrations and workflow setup</li>
                              <li>• Enterprise customer onboarding and training</li>
                              <li>• Troubleshooting complex automation scenarios</li>
                              <li>• Documentation and knowledge base maintenance</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-primary-400 font-medium mb-2">Career Growth</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Path to technical account management for enterprise clients</li>
                              <li>• Opportunity to specialize in customer success or technical writing</li>
                              <li>• Direct impact on product development through customer feedback</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-accent-400 text-sm">
                          Customer success is at the heart of our business model
                        </p>
                      </div>
                    )}

                    {role.id === 'devops-engineer' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">DevOps Engineering Role</h4>
                        <div className="space-y-3 mb-4">
                          <div>
                            <h5 className="text-error-400 font-medium mb-2">Infrastructure Management</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Manage multi-region cloud infrastructure across AWS, Azure, GCP</li>
                              <li>• Implement CI/CD pipelines for rapid, reliable deployments</li>
                              <li>• Monitor and optimize system performance and costs</li>
                              <li>• Ensure security compliance and disaster recovery procedures</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-success-400 font-medium mb-2">Scale & Impact</h5>
                            <ul className="space-y-1 text-sm text-neutral-300">
                              <li>• Infrastructure supporting 50,000+ enterprise users</li>
                              <li>• 99.9% uptime SLA with automatic failover systems</li>
                              <li>• Cost optimization saving 40% on cloud infrastructure</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-error-400 text-sm">
                          Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India
                        </p>
                      </div>
                    )}

                    <motion.button
                      onClick={() => toggleRole(role.id)}
                      className="mt-4 text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Collapse Details
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work <span className="bg-gradient-primary bg-clip-text text-transparent">With Us?</span>
          </h2>
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 rounded-full bg-success-400 flex-shrink-0" />
                  <span className="text-neutral-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Apply?</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Send your CV and a brief cover letter explaining why you'd be a great fit for our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5" />
                <span>Apply Now</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              
              <div className="text-neutral-400">
                Email: support@yoforex.co.in
              </div>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              Remote and on-site roles available at our Dubai operations center:<br />
              B2007-127, 33rd floor, Latifa Tower, Trade Center first, Sheikh Zayed Road, Dubai-UAE
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CareersPage;