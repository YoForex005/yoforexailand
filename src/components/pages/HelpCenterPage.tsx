import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, HelpCircle, Search, Book, CreditCard, Code, Shield, Wrench, ChevronRight } from 'lucide-react';

interface HelpCenterPageProps {
  onNavigateBack: () => void;
}

const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ onNavigateBack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Account setup, dashboard overview, and first steps',
      articles: [
        'Creating your YoForex AI account',
        'Dashboard overview and navigation',
        'Setting up your first analytics workflow',
        'Understanding user roles and permissions',
        'Initial configuration best practices'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: CreditCard,
      title: 'Billing & Subscriptions',
      description: 'Pricing, payments, upgrades, and billing support',
      articles: [
        'Understanding pricing plans and features',
        'How to upgrade or downgrade your plan',
        'Managing payment methods and billing',
        'Subscription renewal and cancellation',
        'Invoice and receipt management'
      ],
      color: 'from-success-500 to-success-600'
    },
    {
      icon: Code,
      title: 'API & Integrations',
      description: 'Developer guides, API documentation, and integrations',
      articles: [
        'Getting started with the YoForex AI API',
        'Authentication and API key management',
        'Setting up webhooks and notifications',
        'Third-party integration guides',
        'Troubleshooting API connection issues'
      ],
      color: 'from-accent-500 to-violet-600'
    },
    {
      icon: Shield,
      title: 'Platform Security',
      description: 'Security features, compliance, and data protection',
      articles: [
        'Understanding our security architecture',
        'Data encryption and privacy protection',
        'SOC 2 compliance and certifications',
        'User access controls and permissions',
        'Security best practices for organizations'
      ],
      color: 'from-warning-500 to-warning-600'
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: 'Troubleshooting, system requirements, and technical issues',
      articles: [
        'System requirements and compatibility',
        'Common troubleshooting steps',
        'Performance optimization tips',
        'Error codes and their meanings',
        'How to report technical issues'
      ],
      color: 'from-error-500 to-error-600'
    }
  ];

  const popularArticles = [
    'How to set up your first analytics workflow',
    'Understanding API rate limits and best practices',
    'Troubleshooting connection issues',
    'Managing team permissions and access',
    'Billing and subscription management'
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
                <span className="text-sm text-neutral-400 ml-2">Help Center</span>
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
            Help <span className="bg-gradient-primary bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to your questions and get the most out of YoForex AI's analytics and workflow automation platform.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* Popular Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Popular Articles</h2>
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
            <div className="space-y-3">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800/30 transition-colors cursor-pointer group"
                >
                  <span className="text-neutral-300 group-hover:text-white transition-colors">{article}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-primary-400 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-neutral-400 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {category.articles.slice(0, 3).map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-neutral-300 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-neutral-600" />
                      <span>{article}</span>
                    </div>
                  ))}
                  <div className="text-sm text-primary-400 hover:text-primary-300 transition-colors cursor-pointer">
                    View all {category.articles.length} articles →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <HelpCircle className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-neutral-400 mb-6">
              Our support team is here to help with any questions about YoForex AI's platform and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="bg-transparent border border-neutral-700 text-neutral-300 px-6 py-3 rounded-lg font-medium hover:border-neutral-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Ticket
              </motion.button>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              Email: support@yoforex.co.in | Response time: 2-4 hours
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default HelpCenterPage;