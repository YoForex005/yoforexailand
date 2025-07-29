import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe,
  Cpu,
  BarChart3,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  const benefits = [
    {
      id: 'complete-ai',
      icon: Cpu,
      title: 'Complete AI Solution',
      description: 'Extensive library of 392 AI models with both automated signals and interactive assistant capabilities.',
      color: 'from-primary-500 to-primary-600',
      expandedContent: {
        details: [
          'Access 392+ AI models for workflow automation and analytics',
          '67 free options including DeepSeek R1, Gemini 2.5 Pro, Llama variants',
          '325 premium models: Grok 4, OpenAI O3, Claude Opus 4 for advanced tasks',
          'Seamless switching between models for optimal cost-efficiency',
          'Real-time model performance monitoring and selection',
          'Custom model training for enterprise-specific requirements'
        ],
      }
    },
    {
      id: 'user-friendly',
      icon: Users,
      title: 'User-Friendly Interface',
      description: 'Intuitive on-screen controls with keyboard shortcuts and visual trading buttons for seamless operation.',
      color: 'from-accent-500 to-violet-600',
      expandedContent: {
        details: [
          'Drag-and-drop workflow builder for easy automation setup',
          'Customizable dashboards with role-based access controls',
          'Keyboard shortcuts for power users and efficiency',
          'Mobile-responsive design for on-the-go management',
          'Real-time collaboration tools for team workflows',
          'Comprehensive onboarding and training resources'
        ],
      }
    },
    {
      id: 'proven-strategies',
      icon: TrendingUp,
      title: 'Proven Strategies',
      description: 'Advanced features including trend following, mean reversion, breakout detection, and smart recovery options.',
      color: 'from-success-500 to-success-600',
      expandedContent: {
        details: [
          'Trend analysis algorithms for data pattern recognition',
          'Anomaly detection for proactive issue identification',
          'Predictive analytics for capacity planning',
          'Smart recovery mechanisms for system resilience',
          'Multi-dimensional data correlation analysis',
          'Custom strategy development for specific use cases'
        ],
      }
    },
    {
      id: 'cost-efficiency',
      icon: BarChart3,
      title: 'Cost Efficiency',
      description: 'API cost reduction mode saves 60-80% on expenses with flexible switching between free and premium models.',
      color: 'from-warning-500 to-warning-600',
      expandedContent: {
        details: [
          '60-80% API cost savings through smart model selection',
          'Automated switching between free and premium models',
          'Usage analytics and cost forecasting tools',
          'Resource pooling for enterprise-wide efficiency',
          'Transparent pricing with no hidden fees',
          'ROI tracking and optimization recommendations'
        ],
      }
    },
    {
      id: 'professional-support',
      icon: Shield,
      title: 'Professional Support',
      description: 'Free setup assistance, dedicated community access, and comprehensive documentation for all users.',
      color: 'from-error-500 to-error-600',
      expandedContent: {
        details: [
          'Free professional setup assistance and onboarding',
          'Dedicated support team with 2-4 hour response time',
          'Comprehensive documentation and API references',
          'Private community access for enterprise users',
          'Regular training webinars and best practice sessions',
          'Priority feature requests and development input'
        ],
      }
    },
    {
      id: 'multi-platform',
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Seamless MT5 integration with dual notifications, web search capabilities, and prop firm compliance.',
      color: 'from-neutral-600 to-neutral-700',
      expandedContent: {
        details: [
          'RESTful APIs for seamless system integration',
          'Webhook support for real-time notifications',
          'Enterprise SSO and authentication integration',
          'Cloud platform compatibility (AWS, Azure, GCP)',
          'Database connectors for popular systems',
          'Custom integration development services'
        ],
      }
    }
  ];

  return (
    <section className="py-24 bg-neutral-900/50">
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
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">YoForex AI</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            The world's most comprehensive AI trading ecosystem combining automation with intelligence for professional traders.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                onHoverStart={() => setHoveredBenefit(benefit.id)}
                onHoverEnd={() => setHoveredBenefit(null)}
                onClick={() => setHoveredBenefit(hoveredBenefit === benefit.id ? null : benefit.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHoveredBenefit(hoveredBenefit === benefit.id ? null : benefit.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={hoveredBenefit === benefit.id}
                aria-label={`${benefit.title} - Click to view details`}
              >
              <div className="relative bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 h-full hover:border-neutral-700/50 transition-all duration-300 overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  whileHover={{ scale: 1.02 }}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
              </motion.div>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredBenefit === benefit.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 shadow-2xl max-w-sm mx-auto"
                  >
                    <div className="space-y-2">
                      {benefit.expandedContent.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
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
          <p className="text-neutral-400 text-sm">Tap any card above to view detailed information</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;