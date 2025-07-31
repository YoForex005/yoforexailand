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

interface FeaturesProps {
  onNavigateToSignup: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigateToSignup }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: 'ai-model-marketplace',
      icon: Zap,
      title: 'AI Model Marketplace',
      description: 'Choose from 392+ AI models including free options (Mistral, Claude Haiku, DeepSeek) and premium models (Grok, OpenAI O3, Gemini Ultra) for your trading analysis.',
      color: 'from-primary-500 to-primary-600',
      delay: 0.1,
      expandedContent: {
        details: [
          'Free Models: Access to Mistral, Claude Haiku, DeepSeek, and other free AI APIs',
          'Premium Models: Grok, OpenAI O3, Claude Opus 4, Gemini Ultra for advanced analysis',
          'Flexible Selection: Choose specific models for different trading strategies',
          'Performance Tracking: Monitor which AIs work best for your trading style',
          'Cost Control: Switch between free and premium models based on your budget',
          'Regular Updates: New AI models added as they become available'
        ],
      }
    },
    {
      id: 'multi-ai-consensus',
      icon: Target,
      title: 'Multi-AI Consensus',
      description: 'Run the same analysis across multiple AI models to get consensus signals with confidence scoring and detailed reasoning from each AI.',
      color: 'from-success-500 to-success-600',
      delay: 0.2,
      expandedContent: {
        details: [
          'Multi-Model Analysis: Same prompt runs across multiple selected AI models',
          'Consensus Scoring: See how different AIs agree or disagree on trade setups',
          'AI Debate Visualization: Watch AIs "discuss" and validate trade ideas',
          'Confidence Levels: Get 1-5 confidence scores for every trade recommendation',
          'Transparent Results: See individual AI outputs and reasoning',
          'Signal Strength: Stronger signals when multiple AIs agree on direction'
        ],
      }
    },
    {
      id: 'strategy-library',
      icon: BarChart3,
      title: 'Strategy Library',
      description: '10+ professional trading strategies including Breakout, Trend Following, SMC, ICT Logic, Fibonacci analysis, and custom strategy uploads.',
      color: 'from-accent-500 to-violet-600',
      delay: 0.3,
      expandedContent: {
        details: [
          'Built-in Strategies: Breakout, Trend Following, Mean Reversion, Smart Money Concepts',
          'ICT Logic: Inner Circle Trader methodologies and market structure analysis',
          'Fibonacci Tools: Retracement, extension, and confluence analysis',
          'Multi-Timeframe: Combine signals from multiple timeframes for stronger setups',
          'Custom Uploads: Import your own strategies in PDF or prompt format',
          'Strategy Blending: Combine built-in strategies with your custom approaches'
        ],
      }
    },
    {
      id: 'personalized-training',
      icon: Brain,
      title: 'Personalized AI Training',
      description: 'Upload your trading history, journal, or custom strategies to train your personal AI agent for more accurate and personalized trade recommendations.',
      color: 'from-warning-500 to-warning-600',
      delay: 0.4,
      expandedContent: {
        details: [
          'Trading History Upload: Import past trades to help AI learn your patterns',
          'Journal Integration: Upload trading journals for personalized insights',
          'Custom Strategy Training: Train AI on your specific trading methodologies',
          'Performance Learning: AI adapts based on your SL/TP hit rates and feedback',
          'Pattern Recognition: AI identifies your most successful trade setups',
          'Continuous Improvement: AI refines recommendations based on your results'
        ],
      }
    },
    {
      id: 'sl-tp-reasoning',
      icon: RefreshCw,
      title: 'SL/TP & Reasoning',
      description: 'Get precise stop loss and take profit levels with comprehensive trade rationale explaining technical analysis, market structure, and risk factors.',
      color: 'from-error-500 to-error-600',
      delay: 0.5,
      expandedContent: {
        details: [
          'Precise Risk Management: AI-calculated stop loss levels based on market structure',
          'Profit Targets: Multiple take profit levels with probability analysis',
          'Risk-Reward Ratios: Optimal risk-reward calculations for each trade setup',
          'Technical Reasoning: Detailed explanation of support/resistance levels',
          'Market Context: Analysis of current market conditions and volatility',
          'Entry Timing: Optimal entry points based on technical confluence'
        ],
      }
    },
    {
      id: 'community-access',
      icon: Globe,
      title: 'Premium Community',
      description: 'Join exclusive Discord and Telegram communities with Pro/Max users to share AI-backed trades, discuss strategies, and learn from global traders.',
      color: 'from-neutral-600 to-neutral-700',
      delay: 0.6,
      expandedContent: {
        details: [
          'Discord Community: Real-time chat with AI-powered traders worldwide',
          'Telegram Groups: Mobile-friendly trading discussions and signal sharing',
          'Educational Content: Learn from experienced traders and AI insights',
          'Strategy Sharing: Share and discover profitable AI-backed trading approaches',
          'Market Discussions: Daily market analysis and AI consensus discussions',
          'Moderated Environment: Professional, educational trading community'
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
            Advanced AI Forex Trading <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Advanced AI forex trading analysis features powered by 392+ AI models and multi-timeframe technical analysis for professional currency trading.
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
                Ready to Experience <span className="bg-gradient-primary bg-clip-text text-transparent">AI Trading Analysis?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Try our platform with real market data and see how our multi-AI consensus system analyzes trades in real-time.
              </p>
              <motion.button
                onClick={onNavigateToSignup}
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Cpu className="w-5 h-5" />
                <span>Start Free Trial</span>
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