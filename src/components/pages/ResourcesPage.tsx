import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  BookOpen, 
  Users, 
  MessageCircle, 
  FileText,
  Video,
  Code,
  HelpCircle,
  Activity,
  Newspaper,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigateBack: () => void;
  onNavigateToUserManual: () => void;
  onNavigateToBlog: () => void;
  onNavigateToCommunity: () => void;
  onNavigateToSupport: () => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigateBack,
  onNavigateToUserManual,
  onNavigateToBlog,
  onNavigateToCommunity,
  onNavigateToSupport
}) => {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      icon: BookOpen,
      color: 'from-primary-500 to-primary-600',
      resources: [
        { 
          name: 'User Manual', 
          description: 'Complete setup and usage guide',
          onClick: onNavigateToUserManual,
          featured: true
        },
        { 
          name: 'API Documentation', 
          description: 'Technical API reference and examples',
          onClick: onNavigateToSupport
        },
        { 
          name: 'Integration Guide', 
          description: 'MT5 integration and configuration'
        },
        { 
          name: 'Troubleshooting', 
          description: 'Common issues and solutions'
        }
      ]
    },
    {
      title: 'Learning Center',
      description: 'Educational content and trading insights',
      icon: GraduationCap,
      color: 'from-accent-500 to-violet-600',
      resources: [
        { 
          name: 'Blog', 
          description: 'Latest AI trading insights and market analysis',
          onClick: onNavigateToBlog,
          featured: true
        },
        { 
          name: 'Case Studies', 
          description: 'Real-world trading success stories'
        },
        { 
          name: 'Whitepapers', 
          description: 'In-depth research and methodology'
        },
        { 
          name: 'Webinars', 
          description: 'Live and recorded training sessions'
        }
      ]
    },
    {
      title: 'Community & Support',
      description: 'Connect with traders and get help',
      icon: Users,
      color: 'from-success-500 to-success-600',
      resources: [
        { 
          name: 'Community Forum', 
          description: 'Connect with other YoForex AI traders',
          onClick: onNavigateToCommunity,
          featured: true
        },
        { 
          name: 'Help Center', 
          description: 'Frequently asked questions and guides',
          onClick: onNavigateToSupport
        },
        { 
          name: 'Contact Support', 
          description: 'Get direct help from our team',
          onClick: onNavigateToSupport
        },
        { 
          name: 'Status Page', 
          description: 'System status and uptime monitoring'
        }
      ]
    },
    {
      title: 'Tools & Utilities',
      description: 'Additional tools and resources',
      icon: Code,
      color: 'from-warning-500 to-warning-600',
      resources: [
        { 
          name: 'Strategy Builder', 
          description: 'Create custom trading strategies'
        },
        { 
          name: 'Backtesting Tools', 
          description: 'Test strategies with historical data'
        },
        { 
          name: 'Risk Calculator', 
          description: 'Calculate position sizes and risk'
        },
        { 
          name: 'Market Scanner', 
          description: 'Scan markets for opportunities'
        }
      ]
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
                <span className="text-sm text-neutral-400 ml-2">Resources</span>
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
            Trading <span className="bg-gradient-primary bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to master YoForex AI and become a successful AI-powered trader.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-neutral-700/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-neutral-400">{category.description}</p>
                </div>
              </div>

              {/* Resources List */}
              <div className="space-y-4">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: resourceIndex * 0.05 }}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      resource.featured 
                        ? 'border-primary-500/50 bg-primary-500/10 hover:bg-primary-500/20' 
                        : 'border-neutral-700/50 bg-neutral-800/20 hover:bg-neutral-800/40'
                    }`}
                    onClick={resource.onClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className={`font-semibold ${
                            resource.featured ? 'text-primary-400' : 'text-white'
                          }`}>
                            {resource.name}
                          </h4>
                          {resource.featured && (
                            <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-neutral-400 text-sm mt-1">{resource.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <motion.button
                onClick={onNavigateToUserManual}
                className="p-4 bg-primary-500/20 border border-primary-500/50 rounded-lg text-primary-400 hover:bg-primary-500/30 transition-colors duration-200 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">User Manual</span>
              </motion.button>
              
              <motion.button
                onClick={onNavigateToBlog}
                className="p-4 bg-accent-500/20 border border-accent-500/50 rounded-lg text-accent-400 hover:bg-accent-500/30 transition-colors duration-200 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Newspaper className="w-5 h-5" />
                <span className="font-medium">Latest Blog</span>
              </motion.button>
              
              <motion.button
                onClick={onNavigateToSupport}
                className="p-4 bg-success-500/20 border border-success-500/50 rounded-lg text-success-400 hover:bg-success-500/30 transition-colors duration-200 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">Get Support</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ResourcesPage;