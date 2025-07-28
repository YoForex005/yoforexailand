import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Handshake, Cloud, Shield, Code, Database, Globe, Users, Mail, ArrowRight } from 'lucide-react';

interface PartnersPageProps {
  onNavigateBack: () => void;
}

const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigateBack }) => {
  const partnerCategories = [
    {
      title: 'Cloud Infrastructure',
      description: 'Leading cloud providers ensuring scalability and reliability',
      icon: Cloud,
      color: 'from-primary-500 to-primary-600',
      partners: [
        { name: 'Amazon Web Services', description: 'Primary cloud infrastructure and AI services' },
        { name: 'Microsoft Azure', description: 'Enterprise cloud solutions and AI capabilities' },
        { name: 'Google Cloud Platform', description: 'Machine learning and data analytics services' }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Trusted partners for enterprise security and compliance',
      icon: Shield,
      color: 'from-success-500 to-success-600',
      partners: [
        { name: 'SOC 2 Auditors', description: 'Independent security and compliance validation' },
        { name: 'Cybersecurity Consultants', description: 'Ongoing security assessment and monitoring' },
        { name: 'Data Protection Partners', description: 'GDPR and privacy compliance expertise' }
      ]
    },
    {
      title: 'Technology Integrations',
      description: 'Strategic technology partners and integration providers',
      icon: Code,
      color: 'from-accent-500 to-violet-600',
      partners: [
        { name: 'API Gateway Providers', description: 'Scalable API management and orchestration' },
        { name: 'Database Partners', description: 'High-performance data storage solutions' },
        { name: 'Monitoring & Analytics', description: 'Platform performance and usage analytics' }
      ]
    },
    {
      title: 'Data & AI Partners',
      description: 'Leading AI and data processing technology providers',
      icon: Database,
      color: 'from-warning-500 to-warning-600',
      partners: [
        { name: 'OpenAI', description: 'Advanced language models and AI capabilities' },
        { name: 'Anthropic', description: 'Claude AI models for enterprise applications' },
        { name: 'Google AI', description: 'Gemini models and machine learning services' }
      ]
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate your solutions with our platform through APIs and SDKs',
      benefits: [
        'Access to YoForex AI developer resources',
        'Joint go-to-market opportunities',
        'Technical support and documentation',
        'Co-marketing and event participation'
      ],
      icon: Code,
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Solution Partners',
      description: 'Build and deliver solutions using YoForex AI platform',
      benefits: [
        'Partner certification programs',
        'Sales and technical training',
        'Lead sharing and referral programs',
        'Priority support and resources'
      ],
      icon: Users,
      color: 'from-success-500 to-success-600'
    },
    {
      title: 'Channel Partners',
      description: 'Resell and distribute YoForex AI to your customer base',
      benefits: [
        'Competitive partner pricing',
        'Sales enablement and training',
        'Marketing development funds',
        'Dedicated partner success manager'
      ],
      icon: Globe,
      color: 'from-accent-500 to-violet-600'
    }
  ];

  const partnerBenefits = [
    'Access to cutting-edge AI analytics platform',
    'Comprehensive technical documentation and APIs',
    'Joint marketing and co-selling opportunities',
    'Dedicated partner success management',
    'Priority technical support and resources',
    'Partner certification and training programs',
    'Revenue sharing and incentive programs',
    'Early access to new features and capabilities'
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
                <span className="text-sm text-neutral-400 ml-2">Partners</span>
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
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We work with leading data infrastructure, cloud, and AI providers to ensure best-in-class software reliability and scalability for our customers.
          </p>
        </motion.div>

        {/* Partner Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Strategic <span className="bg-gradient-primary bg-clip-text text-transparent">Partners</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-neutral-700/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-neutral-400 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partner.name} className="p-4 bg-neutral-800/30 rounded-lg">
                      <h4 className="font-semibold text-white mb-1">{partner.name}</h4>
                      <p className="text-neutral-400 text-sm">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partnership <span className="bg-gradient-primary bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-neutral-700/50 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{type.description}</p>
                </div>

                <div className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full mt-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${type.color} hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partner <span className="bg-gradient-primary bg-clip-text text-transparent">Benefits</span>
          </h2>
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {partnerBenefits.map((benefit, index) => (
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

        {/* Partner Application */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Interested in <span className="bg-gradient-primary bg-clip-text text-transparent">Partnering?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and help businesses leverage AI-powered analytics and workflow automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Handshake className="w-5 h-5" />
                  <span>Become a Partner</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.button>
                
                <motion.button
                  className="bg-transparent border-2 border-primary-500/50 text-primary-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-500/10 transition-colors duration-300 inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Partnerships</span>
                </motion.button>
              </div>
              <div className="mt-6 text-sm text-neutral-500">
                Email: support@yoforex.co.in | Partnership response within 48 hours
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PartnersPage;