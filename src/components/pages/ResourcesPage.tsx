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
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigateBack,
  onNavigateToUserManual,
  onNavigateToBlog,
  onNavigateToCommunity,
  onNavigateToSupport
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
          description: 'Enterprise system integration and configuration',
          expandedContent: {
            title: 'Enterprise Integration Guide',
            details: [
              'Step-by-step instructions for connecting to AWS S3, databases, Slack',
              'Secure data orchestration with enterprise-grade security',
              'Real-time notifications and webhook configuration',
              'API cost reduction mode setup (60-80% savings)',
              'Multi-AI model workflows for scalable automation',
              'Custom integration examples and best practices'
            ],
            contact: 'Custom setup assistance: support@yoforex.co.in',
            address: 'Professional setup included with Pro and Enterprise plans'
          }
        },
        { 
          id: 'troubleshooting',
          name: 'Troubleshooting', 
          description: 'Common issues and solutions',
          expandedContent: {
            title: 'Comprehensive Troubleshooting',
            details: [
              'Common solutions for API errors and connectivity issues',
              'Workflow failure diagnosis and resolution steps',
              'Performance optimization tips and best practices',
              'Log analysis and debugging techniques',
              'Uptime-related problem resolution (99.9% SLA backed)',
              'Escalation procedures for complex technical issues'
            ],
            contact: 'Unresolved issues: support@yoforex.co.in with account details',
            address: 'Emergency support available for Enterprise customers'
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
          description: 'Latest AI analytics insights and automation trends',
          onClick: onNavigateToBlog,
          featured: true,
          expandedContent: {
            title: 'Technical Insights Blog',
            details: [
              'Insights on AI-driven automation trends and SaaS scalability',
              'IT best practices and enterprise workflow optimization',
              'Recent posts: "Optimizing Multi-AI Workflows for Enterprise Efficiency"',
              '"Securing Analytics Platforms in the Cloud" and infrastructure guides',
              'Technical deep-dives on platform architecture and performance',
              'Industry trends and emerging technologies in workflow automation'
            ],
            contact: 'Subscribe for updates—purely technical content, no advisory material',
            address: 'Editorial team: support@yoforex.co.in'
          }
        },
        { 
          id: 'case-studies',
          name: 'Case Studies', 
          description: 'Real-world automation success stories',
          expandedContent: {
            title: 'Enterprise Success Stories',
            details: [
              'Real-world examples of YoForex AI boosting IT operations',
              'Case study: Firm reducing workflow processing time by 70%',
              'Technical outcomes and scalability improvements',
              'ROI analysis and performance metrics',
              'Implementation timelines and best practices',
              'Industry-specific use cases and solutions'
            ],
            contact: 'Request full case studies: support@yoforex.co.in',
            address: 'Custom case study development available for Enterprise clients'
          }
        },
        { 
          id: 'whitepapers',
          name: 'Whitepapers', 
          description: 'In-depth research and methodology',
          expandedContent: {
            title: 'Technical Research Papers',
            details: [
              'In-depth papers: "AI Orchestration for Workflow Automation"',
              '20-page technical analysis on architectures and benchmarks',
              '"Enterprise Compliance in SaaS Analytics" compliance guide',
              'Research on multi-AI model performance and optimization',
              'Industry best practices and emerging technology trends',
              'Peer-reviewed technical methodologies and frameworks'
            ],
            contact: 'Download via app.yoforex.co.in/resources',
            address: 'Research team: support@yoforex.co.in'
          }
        },
        { 
          id: 'webinars',
          name: 'Webinars', 
          description: 'Live and recorded training sessions',
          expandedContent: {
            title: 'Technical Training Sessions',
            details: [
              'Live sessions: "Building Resilient API Integrations"',
              'Upcoming webinar: July 30, 2025 - Advanced Workflow Design',
              'On-demand library of technical training content',
              'Expert-led sessions on platform optimization',
              'Q&A sessions with development team',
              'Industry best practices and case study reviews'
            ],
            contact: 'Register at app.yoforex.co.in/webinars for technical training',
            address: 'Live support during webinars via chat'
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
          description: 'Connect with other YoForex AI users',
          onClick: onNavigateToCommunity,
          featured: true,
          expandedContent: {
            title: 'Professional Community Forum',
            details: [
              'Technical discussions on integrations and workflow optimization',
              'Platform feedback and feature requests from enterprise users',
              'Categories: API tips, automation best practices, troubleshooting',
              'Moderated for professional, SaaS-focused conversations only',
              'Direct access to development team for technical questions',
              'Peer-to-peer support and knowledge sharing'
            ],
            contact: 'Access via app.yoforex.co.in/forum',
            address: 'Community guidelines enforce professional IT discussions only'
          }
        },
        { 
          id: 'help-center',
          name: 'Help Center', 
          description: 'Frequently asked questions and guides',
          onClick: onNavigateToSupport,
          expandedContent: {
            title: 'Self-Service Support Center',
            details: [
              'Self-service articles on account management and billing',
              'Pricing information in ₹ (e.g., ₹12,800/month for Basic)',
              'API troubleshooting guides and common solutions',
              'Security features documentation (SOC 2 compliance)',
              'Searchable FAQ database for quick issue resolution',
              'Video tutorials and step-by-step guides'
            ],
            contact: 'Personalized help: support@yoforex.co.in',
            address: 'Self-service available 24/7 via app.yoforex.co.in'
          }
        },
        { 
          id: 'contact-support',
          name: 'Contact Support', 
          description: 'Get direct help from our team',
          onClick: onNavigateToSupport,
          expandedContent: {
            title: 'Direct Technical Support',
            details: [
              'Email support@yoforex.co.in for technical inquiries',
              'Ticket submission via app.yoforex.co.in for tracking',
              'Business hours: 9 AM - 6 PM IST, Monday to Friday',
              'Priority support for Pro and Enterprise customers',
              'Screen sharing and remote assistance available',
              'Escalation to senior engineers for complex issues'
            ],
            contact: 'Response time: 2-4 hours for priority support',
            address: 'Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India'
          }
        },
        { 
          id: 'status-page',
          name: 'Status Page', 
          description: 'System status and uptime monitoring',
          expandedContent: {
            title: 'Real-Time System Monitoring',
            details: [
              'Real-time platform uptime monitoring (99.9% SLA)',
              'Incident history and maintenance schedule transparency',
              'Performance metrics and response time tracking',
              'Subscription alerts for service disruptions',
              'Regional status updates for global infrastructure',
              'Planned maintenance notifications and impact assessments'
            ],
            contact: 'Current status: All systems operational as of latest update',
            address: 'Subscribe for alerts on workflow disruptions'
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
          description: 'Create custom automation strategies',
          expandedContent: {
            title: 'Custom Workflow Strategy Builder',
            details: [
              'Visual workflow designer for automation strategies',
              'Configure parameters like confidence levels (0-5) and data filters',
              'Drag-and-drop interface for complex workflow creation',
              'Template library for common enterprise use cases',
              'Testing and validation tools for strategy optimization',
              'Integration with all 392 AI models for enhanced capabilities'
            ],
            contact: 'Accessible via app.yoforex.co.in/tools—software only for IT automation',
            address: 'Training available for enterprise strategy development'
          }
        },
        { 
          id: 'backtesting',
          name: 'Backtesting Tools', 
          description: 'Test strategies with historical data',
          expandedContent: {
            title: 'Historical Data Analysis Tools',
            details: [
              'Simulate workflows with historical data for performance testing',
              'Multi-model consensus testing and validation',
              'Web search integration testing with historical events',
              'Performance metrics and optimization recommendations',
              'Results exportable for enterprise reporting and analysis',
              'Custom date ranges and data source selection'
            ],
            contact: 'Advanced backtesting features available in Pro and Enterprise plans',
            address: 'Historical data retention: 2 years for Enterprise customers'
          }
        },
        { 
          id: 'risk-calculator',
          name: 'Risk Calculator', 
          description: 'Calculate resource allocation and limits',
          expandedContent: {
            title: 'Resource Allocation Calculator',
            details: [
              'Calculate resource allocation and limits for workflows',
              'API call optimization and cost estimation tools',
              'Data volume planning and capacity management',
              'Integration with drawdown controls for efficient SaaS usage',
              'Performance impact analysis and optimization suggestions',
              'Budget planning tools for enterprise resource management'
            ],
            contact: 'No financial implications—purely technical resource planning',
            address: 'Enterprise resource planning: support@yoforex.co.in'
          }
        },
        { 
          id: 'market-scanner',
          name: 'Market Scanner', 
          description: 'Scan data sources for automation opportunities',
          expandedContent: {
            title: 'Intelligent Data Source Scanner',
            details: [
              'Scan data sources for automation opportunities using real-time web search',
              'Monitor 50+ data terms and sources for workflow triggers',
              'Automated notification system for workflow updates',
              'Custom scanning parameters and filtering options',
              'Integration with enterprise data lakes and warehouses',
              'Scheduled scanning with configurable frequency'
            ],
            contact: 'Configure via app.yoforex.co.in/scanner',
            address: 'Custom scanning rules available for Enterprise customers'
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
                          {resource.expandedContent.contact}
                        </p>
                        {resource.expandedContent.address && (
                          <p className="text-neutral-500 text-xs mb-3">
                            {resource.expandedContent.address}
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