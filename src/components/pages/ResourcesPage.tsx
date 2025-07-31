import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigateBack: () => void;
  onNavigateToUserManual: () => void;
  onNavigateToBlog: () => void;
  onNavigateToCommunity: () => void;
  onNavigateToSupport: () => void;
  onNavigateToStrategyBuilder?: () => void;
  onNavigateToBacktestingTools?: () => void;
  onNavigateToRiskCalculator?: () => void;
  onNavigateToMarketScanner?: () => void;
  onNavigateToIntegrationGuide?: () => void;
  onNavigateToTroubleshooting?: () => void;
  onNavigateToStrategyBuilder?: () => void;
  onNavigateToBacktestingTools?: () => void;
  onNavigateToRiskCalculator?: () => void;
  onNavigateToMarketScanner?: () => void;
  onNavigateToIntegrationGuide?: () => void;
  onNavigateToTroubleshooting?: () => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigateBack,
  onNavigateToUserManual,
  onNavigateToBlog,
  onNavigateToCommunity,
  onNavigateToSupport,
  onNavigateToStrategyBuilder,
  onNavigateToBacktestingTools,
  onNavigateToRiskCalculator,
  onNavigateToMarketScanner,
  onNavigateToIntegrationGuide,
  onNavigateToTroubleshooting
}) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const resourceCategories = [
    {
      id: 'documentation',
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      icon: BookOpen,
      color: 'from-primary-500 to-primary-600',
      resources: [
        { 
          id: 'user-manual',
          name: 'User Manual', 
          description: 'Complete setup and usage guide',
          onClick: onNavigateToUserManual,
          featured: true,
          expandedContent: {
            title: 'Comprehensive User Manual',
            details: [
              'Complete guide covers setup, configuration, and best practices for workflow automation',
              'Topics include API key integration, model selection for analytics jobs',
              'Notification setups (MT5/Telegram) and custom workflow creation',
              'Step-by-step tutorials with screenshots and code examples',
              'Troubleshooting section with common issues and solutions',
              'Best practices for enterprise deployment and scaling'
            ],
            contact: 'Download full PDF or access online via app.yoforex.co.in. Questions: support@yoforex.co.in',
            address: 'Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India'
          }
        },
        { 
          id: 'api-docs',
          name: 'API Documentation', 
          description: 'Technical API reference and examples',
          onClick: onNavigateToSupport,
          expandedContent: {
            title: 'Technical API Reference',
            details: [
              'Detailed RESTful API documentation with authentication (Bearer tokens)',
              'Endpoints for workflow initiation (/v1/workflows/run) and results retrieval',
              'Webhook configuration and real-time notification setup',
              'Pseudocode examples in multiple programming languages',
              'Rate limits (100/min for Pro plans) and error handling',
              'Integration examples for popular enterprise systems'
            ],
            contact: 'Full documentation available at app.yoforex.co.in/api-docs',
            address: 'Technical support: support@yoforex.co.in'
          }
        },
        { 
          id: 'integration-guide',
          name: 'Integration Guide', 
          description: 'Connect YoForex AI with brokers and trading platforms',
          onClick: onNavigateToIntegrationGuide,
          expandedContent: {
            title: 'Trading Platform Integration Guide',
            details: [
              'Step-by-step instructions for connecting to MetaTrader, TradingView, and major brokers',
              'Telegram and Discord notification setup for trade alerts',
              'API integration for automated analysis requests',
              'Webhook configuration for real-time signal delivery',
              'Mobile app integration and push notifications',
              'Custom integration examples and troubleshooting'
            ],
            contact: 'Custom setup assistance: support@yoforex.co.in',
            address: 'Integration support included with Pro and Max plans'
          }
        },
        { 
          id: 'troubleshooting',
          name: 'Troubleshooting', 
          description: 'Common trading platform issues and solutions',
          onClick: onNavigateToTroubleshooting,
          expandedContent: {
            title: 'Trading Platform Troubleshooting',
            details: [
              'Common solutions for AI model connection issues',
              'Chart upload and analysis failure troubleshooting',
              'Broker integration and notification setup problems',
              'Account and subscription management issues',
              'Performance optimization for faster analysis',
              'Contact support for unresolved technical issues'
            ],
            contact: 'Unresolved issues: support@yoforex.co.in with account details',
            address: 'Priority support available for Pro and Max subscribers'
          }
        }
      ]
    },
    {
      id: 'learning',
      title: 'Learning Center',
      description: 'Educational content and trading insights',
      icon: GraduationCap,
      color: 'from-accent-500 to-violet-600',
      resources: [
        { 
          id: 'blog',
          name: 'Blog', 
          description: 'Latest AI trading insights and market analysis',
          onClick: onNavigateToBlog,
          featured: true,
          expandedContent: {
            title: 'AI Trading Insights Blog',
            details: [
              'Deep dives into AI trading strategies and market analysis techniques',
              'Trading psychology and AI-assisted decision making',
              'Recent posts: "How Multi-AI Consensus Improves Trading Accuracy"',
              '"Mastering Fibonacci with AI" and advanced strategy guides',
              'Market regime analysis and AI model performance reviews',
              'Success stories and case studies from the trading community'
            ],
            contact: 'Subscribe for updates—educational content for traders',
            address: 'Trading insights team: support@yoforex.co.in'
          }
        },
        { 
          id: 'case-studies',
          name: 'Case Studies', 
          description: 'Real trader success stories and results',
          expandedContent: {
            title: 'Trader Success Stories',
            details: [
              'Real examples of traders improving win rates with AI analysis',
              'Case study: "How I Doubled My Win Rate Using Multi-AI Consensus"',
              'Performance improvements and risk management success',
              'Before/after trading results and strategy optimization',
              'Community member spotlights and learning journeys',
              'Different trading styles and AI model preferences'
            ],
            contact: 'Request full case studies: support@yoforex.co.in',
            address: 'Share your success story with the community'
          }
        },
        { 
          id: 'whitepapers',
          name: 'Whitepapers', 
          description: 'In-depth AI trading research and methodology',
          expandedContent: {
            title: 'AI Trading Research Papers',
            details: [
              'In-depth papers: "Multi-AI Consensus in Trading Analysis"',
              '20-page research on AI model performance in different market conditions',
              '"Risk Management with AI: A Quantitative Approach" methodology guide',
              'Research on AI trading psychology and behavioral analysis',
              'Market regime detection using artificial intelligence',
              'Peer-reviewed trading methodologies and backtesting frameworks'
            ],
            contact: 'Download research papers via app.yoforex.co.in/resources',
            address: 'Trading research team: support@yoforex.co.in'
          }
        },
        { 
          id: 'webinars',
          name: 'Webinars', 
          description: 'Live and recorded trading education sessions',
          expandedContent: {
            title: 'AI Trading Education Sessions',
            details: [
              'Live sessions: "Mastering Multi-AI Trading Strategies"',
              'Upcoming webinar: "Advanced Fibonacci Analysis with AI"',
              'On-demand library of trading education content',
              'Expert-led sessions on AI model selection and optimization',
              'Q&A sessions with successful community traders',
              'Strategy deep-dives and live market analysis'
            ],
            contact: 'Register at app.yoforex.co.in/webinars for trading education',
            address: 'Live Q&A during webinars via chat and Discord'
          }
        }
      ]
    },
    {
      id: 'community',
      title: 'Community & Support',
      description: 'Connect with traders and get help',
      icon: Users,
      color: 'from-success-500 to-success-600',
      resources: [
        { 
          id: 'community-forum',
          name: 'Community Forum', 
          description: 'Connect with other AI-powered traders',
          onClick: onNavigateToCommunity,
          featured: true,
          expandedContent: {
            title: 'AI Trading Community Forum',
            details: [
              'Trading discussions on strategies and AI model performance',
              'Platform feedback and feature requests from active traders',
              'Categories: Strategy sharing, AI tips, market analysis, troubleshooting',
              'Moderated for educational trading discussions only',
              'Direct access to trading experts and development team',
              'Peer-to-peer learning and strategy optimization'
            ],
            contact: 'Access via app.yoforex.co.in/forum',
            address: 'Community guidelines enforce educational trading discussions only'
          }
        },
        { 
          id: 'help-center',
          name: 'Help Center', 
          description: 'Trading platform FAQ and setup guides',
          onClick: onNavigateToSupport,
          expandedContent: {
            title: 'Trading Platform Help Center',
            details: [
              'Self-service articles on account setup and subscription management',
              'Pricing information and plan comparison guides',
              'AI model selection and strategy setup tutorials',
              'Broker integration and notification configuration',
              'Searchable FAQ database for common trading platform questions',
              'Video tutorials and step-by-step trading guides'
            ],
            contact: 'Personalized help: support@yoforex.co.in',
            address: 'Trading support available 24/7 via app.yoforex.co.in'
          }
        },
        { 
          id: 'contact-support',
          name: 'Contact Support', 
          description: 'Get direct help from our trading support team',
          onClick: onNavigateToSupport,
          expandedContent: {
            title: 'Direct Trading Platform Support',
            details: [
              'Email support@yoforex.co.in for platform and trading inquiries',
              'Support ticket system via app.yoforex.co.in for issue tracking',
              'Business hours: 9 AM - 6 PM IST, Monday to Friday',
              'Priority support for Pro and Max subscribers',
              'Live chat and screen sharing for complex setup issues',
              'Discord community support for peer-to-peer assistance'
            ],
            contact: 'Response time: 2-4 hours for priority support',
            address: 'Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India'
          }
        },
        { 
          id: 'status-page',
          name: 'Status Page', 
          description: 'Platform status and AI model availability',
          expandedContent: {
            title: 'Real-Time Platform Status',
            details: [
              'Real-time platform uptime and AI model availability (99.9% SLA)',
              'AI model status and performance metrics',
              'Analysis response time tracking and optimization',
              'Subscription alerts for service disruptions or model outages',
              'Maintenance notifications and scheduled updates',
              'Historical uptime data and incident reports'
            ],
            contact: 'Current status: All AI models operational',
            address: 'Subscribe for alerts on platform or model disruptions'
          }
        }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Utilities',
      description: 'Additional tools and resources',
      icon: Code,
      color: 'from-warning-500 to-warning-600',
      resources: [
        { 
          id: 'strategy-builder',
          name: 'Strategy Builder', 
          description: 'Create custom AI trading strategies',
          onClick: onNavigateToStrategyBuilder,
          expandedContent: {
            title: 'Custom AI Trading Strategy Builder',
            details: [
              'Visual strategy designer for custom trading approaches',
              'Configure parameters like confidence levels, timeframes, and risk settings',
              'Drag-and-drop interface for combining multiple strategies',
              'Template library for popular trading strategies (SMC, ICT, Fibonacci)',
              'Backtesting and validation tools for strategy optimization',
              'Integration with all 392+ AI models for enhanced analysis'
            ],
            contact: 'Accessible via app.yoforex.co.in/tools for Pro and Max users',
            address: 'Strategy building tutorials available in learning center'
          }
        },
        { 
          id: 'backtesting',
          name: 'Backtesting Tools', 
          description: 'Test trading strategies with historical market data',
          onClick: onNavigateToBacktestingTools,
          expandedContent: {
            title: 'Trading Strategy Backtesting Tools',
            details: [
              'Simulate trading strategies with years of historical market data',
              'Multi-AI model backtesting and performance comparison',
              'Test strategy performance across different market conditions',
              'Detailed performance metrics: win rate, drawdown, Sharpe ratio',
              'Export results for further analysis and strategy refinement',
              'Custom date ranges and currency pair selection'
            ],
            contact: 'Advanced backtesting features available in Pro and Max plans',
            address: 'Historical data: 5+ years for major currency pairs and crypto'
          }
        },
        { 
          id: 'risk-calculator',
          name: 'Risk Calculator', 
          description: 'Calculate position sizing and risk management',
          onClick: onNavigateToRiskCalculator,
          expandedContent: {
            title: 'Trading Risk Management Calculator',
            details: [
              'Calculate optimal position sizes based on account balance and risk tolerance',
              'Risk-reward ratio analysis and trade expectancy calculations',
              'Portfolio risk assessment across multiple open positions',
              'Drawdown protection and maximum risk exposure limits',
              'Kelly Criterion and other position sizing methodologies',
              'Risk management templates for different trading styles'
            ],
            contact: 'Educational risk management tools—not financial advice',
            address: 'Risk management education: support@yoforex.co.in'
          }
        },
        { 
          id: 'market-scanner',
          name: 'Market Scanner', 
          description: 'Scan markets for AI-identified trading opportunities',
          onClick: onNavigateToMarketScanner,
          expandedContent: {
            title: 'AI-Powered Market Opportunity Scanner',
            details: [
              'Scan 50+ currency pairs and crypto markets for trading opportunities',
              'AI-powered pattern recognition and setup identification',
              'Real-time alerts for high-probability trade setups',
              'Custom scanning parameters and strategy filters',
              'Multi-timeframe scanning with confluence detection',
              'Scheduled scans with customizable notification preferences'
            ],
            contact: 'Configure market scanning via app.yoforex.co.in/scanner',
            address: 'Advanced scanning features available for Pro and Max users'
          }
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
                        
                        {/* Learn More Button */}
                        {resource.expandedContent && (
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCard(resource.id);
                            }}
                            className="mt-2 flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-xs font-medium">
                              {expandedCard === resource.id ? 'Show Less' : 'Expand Details'}
                            </span>
                            {expandedCard === resource.id ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                          </motion.button>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-500" />
                    </div>
                    
                    {/* Expanded Content */}
                    {resource.expandedContent && expandedCard === resource.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-900/30 rounded-lg p-4"
                      >
                        <h5 className="text-sm font-semibold text-white mb-3">
                          {resource.expandedContent.title}
                        </h5>
                        <ul className="space-y-2 mb-3">
                          {resource.expandedContent.details.map((detail, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1 h-1 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                              <span className="text-neutral-300 text-xs leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-primary-400 text-xs mb-2">
                          Educational risk management tools—not financial advice
                        </p>
                        {resource.expandedContent.address && (
                          <p className="text-neutral-500 text-xs mb-3">
                            Risk management education: support@yoforexai.com
                          </p>
                        )}
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(resource.id);
                          }}
                          className="text-neutral-400 hover:text-white text-xs transition-colors duration-300"
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