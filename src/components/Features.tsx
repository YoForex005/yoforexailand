import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Zap, 
  Shield, 
  Cpu, 
  BarChart3, 
  Globe, 
  RefreshCw,
  Brain,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Features: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: 'api-orchestration',
      icon: Zap,
      title: 'API Orchestration',
      description: 'Intelligent failover system automatically switches between primary and backup API keys for 99.9% uptime.',
      color: 'from-primary-500 to-primary-600',
      delay: 0.1,
      expandedContent: {
        details: [
          'Multi-region cloud infrastructure with automatic failovers',
          'Real-time monitoring and health checks for all API endpoints',
          'Load balancing across multiple AI model providers',
          'Intelligent routing based on response times and availability',
          'Cost optimization through smart provider selection',
          'Enterprise-grade security with SOC 2 compliance'
        ],
      }
    },
    {
      id: 'pending-orders',
      icon: Target,
      title: 'Pending Orders',
      description: 'Zero-slippage execution with real-time order modifications and smart entry positioning.',
      color: 'from-success-500 to-success-600',
      delay: 0.2,
      expandedContent: {
        details: [
          'Real-time data processing with sub-second latency',
          'Smart queue management for high-volume operations',
          'Automated retry logic with exponential backoff',
          'Priority-based task scheduling and execution',
          'Integration with enterprise messaging systems',
          'Comprehensive audit trails for compliance'
        ],
      }
    },
    {
      id: 'ai-position',
      icon: BarChart3,
      title: 'AI Position Management',
      description: 'Dynamic TP/SL adjustments with conditional recovery nets and risk optimization.',
      color: 'from-accent-500 to-violet-600',
      delay: 0.3,
      expandedContent: {
        details: [
          'Dynamic resource allocation based on workload patterns',
          'Automated scaling for peak demand periods',
          'Cost optimization through intelligent resource pooling',
          'Performance monitoring with predictive analytics',
          'Integration with cloud infrastructure providers',
          'Real-time alerts for resource threshold breaches'
        ],
      }
    },
    {
      id: 'explainable-ai',
      icon: Brain,
      title: 'Explainable AI',
      description: 'Chain-of-thought insights with model reasoning, source citations, and confidence scoring.',
      color: 'from-warning-500 to-warning-600',
      delay: 0.4,
      expandedContent: {
        details: [
          'Detailed reasoning chains for all AI-generated insights',
          'Source attribution and confidence scoring (0-5 scale)',
          'Model performance tracking and comparison',
          'Bias detection and mitigation strategies',
          'Audit-ready documentation for compliance',
          'Custom explainability reports for stakeholders'
        ],
      }
    },
    {
      id: 'recovery-mode',
      icon: RefreshCw,
      title: 'Recovery Mode',
      description: 'Automated position recovery with averaging strategies and dynamic lot sizing.',
      color: 'from-error-500 to-error-600',
      delay: 0.5,
      expandedContent: {
        details: [
          'Intelligent error detection and classification',
          'Automated rollback and recovery procedures',
          'Data integrity validation and restoration',
          'Graceful degradation during system failures',
          'Comprehensive backup and disaster recovery',
          'Real-time incident response and notification'
        ],
      }
    },
    {
      id: 'web-search',
      icon: Globe,
      title: 'Real-Time Web Search',
      description: 'Live news and market sentiment analysis integrated into trading decisions.',
      color: 'from-neutral-600 to-neutral-700',
      delay: 0.6,
      expandedContent: {
        details: [
          'Real-time web scraping from 50+ trusted sources',
          'Natural language processing for content analysis',
          'Sentiment analysis and trend detection',
          'Automated data validation and quality checks',
          'Integration with external APIs and databases',
          'Custom search parameters and filtering'
        ],
      }
    }
  ];

  return (
    <section id="features" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Advanced <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Professional-grade trading tools powered by cutting-edge AI technology and enterprise-level infrastructure.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(hoveredCard === feature.id ? null : feature.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHoveredCard(hoveredCard === feature.id ? null : feature.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={hoveredCard === feature.id}
                aria-label={`${feature.title} - Click to view details`}
              >
              <div className="relative bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 h-full hover:border-neutral-700/50 transition-all duration-300 overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  whileHover={{ scale: 1.02 }}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              </motion.div>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredCard === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 shadow-2xl max-w-sm mx-auto"
                  >
                    <div className="space-y-3">
                      {feature.expandedContent.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-3 p-2 rounded-lg bg-neutral-800/30">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mt-2 flex-shrink-0`} />
                          <span className="text-neutral-300 text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-neutral-700/50">
                      <p className="text-primary-400 text-xs">support@yoforex.co.in</p>
                    </div>
                    
                    {/* Mobile tap indicator */}
                    <div className="md:hidden mt-3 pt-3 border-t border-neutral-700/50">
                      <p className="text-neutral-500 text-xs text-center">Tap card to toggle details</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile accessibility note */}
        <div className="md:hidden mt-8 text-center">
          <p className="text-neutral-400 text-sm">Tap any feature card to view technical details</p>
        </div>

        {/* Live Demo Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
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
                Ready to Experience <span className="bg-gradient-primary bg-clip-text text-transparent">AI-Powered Trading?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Try our live demo sandbox with real market data and see how our AI consensus system works in action.
              </p>
              <motion.button
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Cpu className="w-5 h-5" />
                <span>Launch Live Demo</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;