import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Bot, 
  Settings, 
  Globe, 
  Cpu, 
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Play,
  MessageSquare,
  Shield,
  BarChart3
} from 'lucide-react';

interface FeaturesPageProps {
  onNavigateBack: () => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigateBack }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('automated');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const featureSections = [
    {
      id: 'automated',
      icon: Bot,
      title: 'Automated Mode',
      subtitle: '24/7 Hands-Free Trading',
      color: 'from-primary-500 to-primary-600',
      features: [
        'Fully automated signals for hands-free operation',
        'Multi-pair trading (AUDCAD, AUDNZD, NZDCAD or customizable)',
        'Flexible selection from 392 AI models',
        'Confidence control with 0-5 levels',
        'Advanced filters including RSI and Major Trend Filter',
        'Risk management with drawdown protection',
        'Smart recovery options for position management',
        'AI-calculated TP/SL levels for optimal exits',
        'Split orders for broker compliance',
        'Gain staging to lock in profits',
        'Prop firm compliance features',
        'News filter integration',
        'Time-based trading controls'
      ]
    },
    {
      id: 'interactive',
      icon: MessageSquare,
      title: 'Interactive Assistant Mode',
      subtitle: 'Real-Time AI Chat & Analysis',
      color: 'from-accent-500 to-violet-600',
      features: [
        'Intuitive on-screen interface with smart buttons',
        'Analyst button for market opportunities',
        'Assistant button for position management',
        'Custom queries with web search toggle',
        'Forecast button for weekly market overviews',
        'Smart symbol selector for easy navigation',
        'Visual trading buttons for quick actions',
        'Settings for SL/TP/lot size configuration',
        'Keyboard shortcuts (S for selector, M for minimize)',
        'C for custom queries, ESC to close',
        'Arrow keys for interface navigation',
        'Real-time sentiment analysis display',
        'Customizable interface themes and layouts',
        'Multi-monitor support for enterprise setups'
      ]
    },
    {
      id: 'enhanced',
      icon: Globe,
      title: 'Enhanced Features',
      subtitle: 'Advanced Trading Intelligence',
      color: 'from-success-500 to-success-600',
      features: [
        'Web search integration with 50+ market terms',
        'Real-time news and events monitoring',
        'AI Position Management (APM) with three profiles',
        'Relaxed, Balanced, and Strict risk profiles',
        'Strategy features: trend following, mean reversion',
        'Breakout detection algorithms',
        'Auto sentiment analysis capabilities',
        'Automated forecast generation',
        'Smart notification system',
        'Dual notifications via MT5 mobile and Telegram',
        'Real-time monitoring for system alerts',
        'Enterprise event integration for business intelligence',
        'Custom alert thresholds and escalation procedures'
      ]
    },
    {
      id: 'models',
      icon: Cpu,
      title: 'AI Model Access',
      subtitle: 'Comprehensive AI Library',
      color: 'from-warning-500 to-warning-600',
      features: [
        '67 free AI models including DeepSeek variants',
        'Gemini, Llama, Claude Haiku, Mistral models',
        '325 premium models for advanced analysis',
        'Grok 4, OpenAI O3, Claude Opus 4 access',
        'DeepSeek R1 Pro, Gemini 2.5 Pro models',
        'Flexible switching between free and premium',
        'API cost reduction mode (60-80% savings)',
        'Model performance tracking',
        'Custom model preferences',
        'Real-time model availability status',
        'Automatic failover between models',
        'Model-specific confidence scoring',
        'Usage analytics and cost optimization',
        'Custom model training for enterprise needs'
      ]
    },
    {
      id: 'strategy',
      icon: TrendingUp,
      title: 'Strategy Features',
      subtitle: 'Professional Trading Tools',
      color: 'from-error-500 to-error-600',
      features: [
        'Trend following algorithms',
        'Mean reversion strategies',
        'Breakout detection systems',
        'Multi-timeframe analysis',
        'Risk-reward optimization',
        'Position sizing algorithms',
        'Correlation analysis tools',
        'Market regime detection',
        'Volatility-based adjustments',
        'Seasonal pattern recognition',
        'Economic calendar integration',
        'Custom strategy builder interface',
        'Performance benchmarking and optimization',
        'Integration with enterprise data sources'
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

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
                <span className="text-sm text-neutral-400 ml-2">Features</span>
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
            Platform <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Explore the comprehensive capabilities of YoForex AI's B2B2C SaaS platform with advanced AI analytics and workflow automation tools.
          </p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-6">
          {featureSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden"
            >
              {/* Section Header */}
              <motion.button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-neutral-800/20 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${section.color} rounded-xl`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                    <p className="text-neutral-400">{section.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-neutral-400" />
                </motion.div>
              </motion.button>

              {/* Section Content */}
              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-neutral-800/50"
                  >
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.05 }}
                            className="flex items-start space-x-3 p-3 rounded-lg bg-neutral-800/20 hover:bg-neutral-800/40 transition-colors duration-200"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0`} />
                            <span className="text-neutral-300 text-sm leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <motion.button
                      onClick={() => toggleCard(section.id)}
                      className="mt-6 flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium">
                        {expandedCard === section.id ? 'Show Less Details' : 'Learn More'}
                      </span>
                      {expandedCard === section.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </motion.button>

                    {/* Expanded Content */}
                    {expandedCard === section.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-neutral-800/50 bg-neutral-800/20 rounded-lg p-4"
                      >
                        {section.id === 'automated' && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Enterprise Automation Details</h4>
                            <div className="space-y-3 mb-4">
                              <div>
                                <h5 className="text-primary-400 font-medium mb-2">Technical Specifications</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• 24/7 automated workflow processing with 99.9% uptime</li>
                                  <li>• Support for 50+ data sources and enterprise integrations</li>
                                  <li>• Real-time API orchestration with intelligent failover</li>
                                  <li>• Scalable from 100 to 1M+ operations per day</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-success-400 font-medium mb-2">Enterprise Benefits</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• Reduce manual workflow processing by 80-90%</li>
                                  <li>• SOC 2 compliant with enterprise security standards</li>
                                  <li>• Custom SLA agreements for mission-critical operations</li>
                                  <li>• Dedicated support team with 2-hour response time</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-primary-400 text-sm">
                              For enterprise automation setup: support@yoforex.co.in
                            </p>
                          </div>
                        )}

                        {section.id === 'interactive' && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Interactive Assistant Capabilities</h4>
                            <div className="space-y-3 mb-4">
                              <div>
                                <h5 className="text-accent-400 font-medium mb-2">Real-Time Analytics</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• Natural language queries for complex data analysis</li>
                                  <li>• Real-time web search integration from 50+ sources</li>
                                  <li>• Custom dashboard creation with drag-and-drop interface</li>
                                  <li>• Multi-user collaboration with role-based permissions</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-warning-400 font-medium mb-2">Integration Features</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• RESTful API with comprehensive documentation</li>
                                  <li>• Webhook support for real-time notifications</li>
                                  <li>• Enterprise SSO and authentication integration</li>
                                  <li>• Custom workflow triggers and automation rules</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-accent-400 text-sm">
                              Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India
                            </p>
                          </div>
                        )}

                        {section.id === 'enhanced' && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Advanced Intelligence Features</h4>
                            <div className="space-y-3 mb-4">
                              <div>
                                <h5 className="text-success-400 font-medium mb-2">Data Processing</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• Real-time data ingestion from multiple sources</li>
                                  <li>• Advanced pattern recognition and anomaly detection</li>
                                  <li>• Automated data quality validation and cleansing</li>
                                  <li>• Predictive analytics for capacity planning</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-primary-400 font-medium mb-2">Notification Systems</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• Multi-channel alerts (email, Slack, webhooks)</li>
                                  <li>• Intelligent escalation procedures</li>
                                  <li>• Custom notification templates and scheduling</li>
                                  <li>• Integration with enterprise monitoring tools</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-success-400 text-sm">
                              For advanced feature configuration: support@yoforex.co.in
                            </p>
                          </div>
                        )}

                        {section.id === 'models' && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Comprehensive AI Model Library</h4>
                            <div className="space-y-3 mb-4">
                              <div>
                                <h5 className="text-warning-400 font-medium mb-2">Free Tier Models (67 Available)</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• DeepSeek R1, Gemini 2.5 Pro, Llama variants</li>
                                  <li>• Claude Haiku, Mistral 7B, and open-source alternatives</li>
                                  <li>• Perfect for development, testing, and small-scale operations</li>
                                  <li>• No usage limits for basic automation workflows</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-error-400 font-medium mb-2">Premium Models (325 Available)</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• Grok 4, OpenAI O3, Claude Opus 4 for advanced tasks</li>
                                  <li>• Specialized models for specific industry verticals</li>
                                  <li>• Enhanced accuracy and performance for enterprise workloads</li>
                                  <li>• 60-80% cost savings through intelligent model switching</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-warning-400 text-sm">
                              Model selection guidance: support@yoforex.co.in
                            </p>
                          </div>
                        )}

                        {section.id === 'strategy' && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Professional Analytics Tools</h4>
                            <div className="space-y-3 mb-4">
                              <div>
                                <h5 className="text-error-400 font-medium mb-2">Analytics Algorithms</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• Trend analysis for data pattern recognition</li>
                                  <li>• Anomaly detection for proactive issue identification</li>
                                  <li>• Multi-dimensional correlation analysis</li>
                                  <li>• Predictive modeling for business forecasting</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-primary-400 font-medium mb-2">Custom Development</h5>
                                <ul className="space-y-1 text-sm text-neutral-300">
                                  <li>• Tailored algorithms for specific business requirements</li>
                                  <li>• Integration with existing enterprise data systems</li>
                                  <li>• Performance optimization and scalability planning</li>
                                  <li>• Comprehensive testing and validation procedures</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-error-400 text-sm">
                              Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India
                            </p>
                          </div>
                        )}

                        <motion.button
                          onClick={() => toggleCard(section.id)}
                          className="mt-4 text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          Collapse Details
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
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
                Ready to Experience <span className="bg-gradient-primary bg-clip-text text-transparent">All Features?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Start your free trial today and access the complete YoForex AI feature set with professional setup assistance.
              </p>
              <motion.button
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Start Free Trial</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default FeaturesPage;