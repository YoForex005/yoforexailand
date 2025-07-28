import React from 'react';
import { motion } from 'framer-motion';
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
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);

  const toggleBenefit = (benefitId: string) => {
    setExpandedBenefit(expandedBenefit === benefitId ? null : benefitId);
  };

  const benefits = [
    {
      id: 'complete-ai',
      icon: Cpu,
      title: 'Complete AI Solution',
      description: 'Extensive library of 392 AI models with both automated signals and interactive assistant capabilities.',
      color: 'from-primary-500 to-primary-600',
      expandedContent: {
        title: 'Comprehensive AI Model Access',
        details: [
          'Access 392+ AI models for workflow automation and analytics',
          '67 free options including DeepSeek R1, Gemini 2.5 Pro, Llama variants',
          '325 premium models: Grok 4, OpenAI O3, Claude Opus 4 for advanced tasks',
          'Seamless switching between models for optimal cost-efficiency',
          'Real-time model performance monitoring and selection',
          'Custom model training for enterprise-specific requirements'
        ],
        contact: 'For AI model integration guides: support@yoforex.co.in'
      }
    },
    {
      id: 'user-friendly',
      icon: Users,
      title: 'User-Friendly Interface',
      description: 'Intuitive on-screen controls with keyboard shortcuts and visual trading buttons for seamless operation.',
      color: 'from-accent-500 to-violet-600',
      expandedContent: {
        title: 'Intuitive Enterprise Interface',
        details: [
          'Drag-and-drop workflow builder for easy automation setup',
          'Customizable dashboards with role-based access controls',
          'Keyboard shortcuts for power users and efficiency',
          'Mobile-responsive design for on-the-go management',
          'Real-time collaboration tools for team workflows',
          'Comprehensive onboarding and training resources'
        ],
        contact: 'Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India'
      }
    },
    {
      id: 'proven-strategies',
      icon: TrendingUp,
      title: 'Proven Strategies',
      description: 'Advanced features including trend following, mean reversion, breakout detection, and smart recovery options.',
      color: 'from-success-500 to-success-600',
      expandedContent: {
        title: 'Advanced Analytics Strategies',
        details: [
          'Trend analysis algorithms for data pattern recognition',
          'Anomaly detection for proactive issue identification',
          'Predictive analytics for capacity planning',
          'Smart recovery mechanisms for system resilience',
          'Multi-dimensional data correlation analysis',
          'Custom strategy development for specific use cases'
        ],
        contact: 'For strategy customization: support@yoforex.co.in'
      }
    },
    {
      id: 'cost-efficiency',
      icon: BarChart3,
      title: 'Cost Efficiency',
      description: 'API cost reduction mode saves 60-80% on expenses with flexible switching between free and premium models.',
      color: 'from-warning-500 to-warning-600',
      expandedContent: {
        title: 'Intelligent Cost Optimization',
        details: [
          '60-80% API cost savings through smart model selection',
          'Automated switching between free and premium models',
          'Usage analytics and cost forecasting tools',
          'Resource pooling for enterprise-wide efficiency',
          'Transparent pricing with no hidden fees',
          'ROI tracking and optimization recommendations'
        ],
        contact: 'For cost optimization consultation: support@yoforex.co.in'
      }
    },
    {
      id: 'professional-support',
      icon: Shield,
      title: 'Professional Support',
      description: 'Free setup assistance, dedicated community access, and comprehensive documentation for all users.',
      color: 'from-error-500 to-error-600',
      expandedContent: {
        title: 'Enterprise-Grade Support',
        details: [
          'Free professional setup assistance and onboarding',
          'Dedicated support team with 2-4 hour response time',
          'Comprehensive documentation and API references',
          'Private community access for enterprise users',
          'Regular training webinars and best practice sessions',
          'Priority feature requests and development input'
        ],
        contact: 'Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India'
      }
    },
    {
      id: 'multi-platform',
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Seamless MT5 integration with dual notifications, web search capabilities, and prop firm compliance.',
      color: 'from-neutral-600 to-neutral-700',
      expandedContent: {
        title: 'Comprehensive Integration Ecosystem',
        details: [
          'RESTful APIs for seamless system integration',
          'Webhook support for real-time notifications',
          'Enterprise SSO and authentication integration',
          'Cloud platform compatibility (AWS, Azure, GCP)',
          'Database connectors for popular systems',
          'Custom integration development services'
        ],
        contact: 'For integration support: support@yoforex.co.in'
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

                {/* Learn More Button */}
                <motion.button
                  onClick={() => toggleBenefit(benefit.id)}
                  className="mt-4 flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">
                    {expandedBenefit === benefit.id ? 'Show Less' : 'Learn More'}
                  </span>
                  {expandedBenefit === benefit.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </motion.button>

                {/* Expanded Content */}
                {expandedBenefit === benefit.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-800/20 rounded-lg p-4"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {benefit.expandedContent.title}
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {benefit.expandedContent.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                          <span className="text-neutral-300 text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-primary-400 text-sm mb-4">
                      {benefit.expandedContent.contact}
                    </p>
                    <motion.button
                      onClick={() => toggleBenefit(benefit.id)}
                      className="text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Collapse
                    </motion.button>
                  </motion.div>
                )}

                {/* Check Icon */}
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-5 h-5 text-success-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;