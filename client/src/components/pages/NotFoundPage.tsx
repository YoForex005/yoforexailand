import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { 
  Home, 
  Search, 
  FileText, 
  ArrowLeft, 
  ExternalLink,
  TrendingUp,
  Brain,
  Activity
} from 'lucide-react';
import SEOHead from '../SEOHead';

const NotFoundPage: React.FC = () => {
  const [, setLocation] = useLocation();

  const popularPages = [
    {
      title: 'Live Demo',
      description: 'Try our AI trading analysis with real examples',
      href: '/live-demo',
      icon: Activity,
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Features',
      description: 'Explore our AI trading features and capabilities',
      href: '/features',
      icon: Brain,
      color: 'from-success-500 to-success-600'
    },
    {
      title: 'Sign Up Free',
      description: 'Get started with 5 free daily AI analyses',
      href: '/signup',
      icon: TrendingUp,
      color: 'from-accent-500 to-violet-600'
    },
    {
      title: 'Resources',
      description: 'Documentation, guides, and learning materials',
      href: '/resources',
      icon: FileText,
      color: 'from-warning-500 to-warning-600'
    }
  ];

  const handleGoHome = () => setLocation('/');
  const handleGoToPage = (href: string) => setLocation(href);

  return (
    <>
      <SEOHead
        title="Page Not Found | YoForex AI"
        description="The page you're looking for doesn't exist. Explore our AI forex trading platform features and get started with free analysis."
        noindex={true}
      />
      
      <div className="min-h-screen bg-neutral-950 text-white font-inter flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
              The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button
                onClick={handleGoHome}
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
              
              <motion.button
                onClick={() => window.history.back()}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Popular <span className="bg-gradient-primary bg-clip-text text-transparent">Pages</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleGoToPage(page.href)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${page.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <page.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {page.title}
                  </h4>
                  
                  <p className="text-neutral-400 text-sm mb-4">
                    {page.description}
                  </p>
                  
                  <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                    <span>Visit Page</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-neutral-400 mb-6">
              If you believe this is an error or need assistance finding what you're looking for, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => handleGoToPage('/contact')}
                className="bg-gradient-secondary text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-4 h-4" />
                <span>Contact Support</span>
              </motion.button>
              
              <motion.button
                onClick={() => handleGoToPage('/help')}
                className="border border-neutral-600 text-neutral-300 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-4 h-4" />
                <span>Help Center</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;