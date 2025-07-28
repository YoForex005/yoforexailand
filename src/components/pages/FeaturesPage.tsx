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
        'Real-time sentiment analysis display'
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
        'Volatility Now monitoring for real-time alerts',
        'Forex Factory integration for market events'
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
        'Model-specific confidence scoring'
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
        'Custom strategy builder interface'
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
            Advanced <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Explore the comprehensive capabilities of YoForex AI's dual-function trading system with automated signals and interactive intelligence.
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