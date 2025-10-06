import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { 
  ArrowLeft,
  BookOpen,
  Users,
  HelpCircle,
  FileText,
  Video,
  MessageCircle,
  ExternalLink,
  Zap,
  Star,
  TrendingUp,
  Brain
} from 'lucide-react';
import SEOHead from '../SEOHead';
import { navigate } from 'wouter/use-browser-location';

const ResourcesPage: React.FC = () => {
  const [, setLocation] = useLocation();

  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      color: 'from-primary-500 to-primary-600',
      resources: [
        {
          title: 'User Manual',
          description: 'Complete guide to using YoForex AI platform',
          href: '/docs/user-manual',
          icon: BookOpen
        },
        {
          title: 'API Documentation',
          description: 'Technical reference for developers',
          href: '/docs/api',
          icon: FileText
        },
        {
          title: 'Integration Guide',
          description: 'Connect YoForex AI with your trading tools',
          href: '/docs/integration-guide',
          icon: Zap
        },
        {
          title: 'Troubleshooting',
          description: 'Common issues and solutions',
          href: '/docs/troubleshooting',
          icon: HelpCircle
        }
      ]
    },
    {
      title: 'Learning Materials',
      description: 'Educational content to improve your trading',
      icon: Brain,
      color: 'from-success-500 to-success-600',
      resources: [
        {
          title: 'Case Studies',
          description: 'Real trading scenarios and AI analysis',
          href: '/resources/case-studies',
          icon: FileText
        },
        {
          title: 'Whitepapers',
          description: 'Research papers and technical insights',
          href: '/resources/whitepapers',
          icon: BookOpen
        },
        {
          title: 'Webinars',
          description: 'Live and recorded trading sessions',
          href: '/resources/webinars',
          icon: Video
        },
        {
          title: 'Blog',
          description: 'Latest news, tips, and market insights',
          href: '/blog',
          icon: FileText
        }
      ]
    },
    {
      title: 'Community & Support',
      description: 'Get help and connect with other traders',
      icon: Users,
      color: 'from-accent-500 to-violet-600',
      resources: [
        {
          title: 'Community Forum',
          description: 'Connect with traders and share strategies',
          href: '/community/forum',
          icon: MessageCircle
        },
        {
          title: 'Help Center',
          description: 'FAQs and support articles',
          href: '/help',
          icon: HelpCircle
        },
        {
          title: 'Contact Support',
          description: 'Get direct help from our team',
          href: '/contact',
          icon: Users
        },
        {
          title: 'Community',
          description: 'Join our trading community',
          href: '/community',
          icon: Users
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Resources & Documentation | YoForex AI Trading Platform"
        description="Access comprehensive trading resources: user manuals, API docs, case studies, whitepapers, webinars, and community support for AI forex trading."
        keywords="forex resources, trading documentation, API docs, case studies, webinars, trading education, YoForex support"
      />
      
      <div className="min-h-screen bg-neutral-950 text-white font-inter">
        {/* Header */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            {/* <motion.button
              onClick={() => setLocation('/')}
              className="flex items-center space-x-2 text-neutral-400 hover:text-white mb-8 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button> */}

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Trading <span className="bg-gradient-primary bg-clip-text text-transparent">Resources</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
                Everything you need to master AI-powered forex trading. From beginner guides to advanced API documentation.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {resourceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                >
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  {/* Resource Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (resourceIndex * 0.1) }}
                        className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer"
                        onClick={() => setLocation(resource.href)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-700 transition-colors">
                          <resource.icon className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                        </div>
                        
                        <h3 className="font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {resource.title}
                        </h3>
                        
                        <p className="text-neutral-400 text-sm mb-4">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                          <span>Learn More</span>
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="py-16 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Quick <span className="bg-gradient-primary bg-clip-text text-transparent">Access</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Most popular resources to get you started quickly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Getting Started</h3>
                <p className="text-neutral-400 mb-6">
                  New to YoForex AI? Start here with our comprehensive beginner's guide.
                </p>
                <button
                  onClick={() => setLocation('/docs/user-manual')}
                  className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Read Guide
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-success-500 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Trading Strategies</h3>
                <p className="text-neutral-400 mb-6">
                  Learn professional trading strategies with real-world case studies.
                </p>
                <button
                  onClick={() => setLocation('/resources/case-studies')}
                  className="bg-gradient-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  View Cases
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Join Community</h3>
                <p className="text-neutral-400 mb-6">
                  Connect with traders, share strategies, and learn from experts.
                </p>
                <button
                  onClick={() => setLocation('/community')}
                  className="bg-gradient-accent text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Join Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-3xl p-12 relative overflow-hidden"
            >
              {/* Background Animation */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Start <span className="bg-gradient-primary bg-clip-text text-transparent">Trading?</span>
                </h2>
                <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Now that you know what's available, start your AI trading journey with 5 free daily analyses.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => navigate("/welcome")}
                    className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Start Free Trial</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => navigate('/live-demo')}
                    className="bg-gradient-glass backdrop-blur-sm border border-neutral-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Brain className="w-5 h-5" />
                    <span>View Demo</span>
                  </motion.button>
                </div>
                
                <p className="text-sm text-neutral-400 mt-6">
                  No credit card required • Access to all resources
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;