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
      id: 'universal-ai-access',
      icon: Cpu,
      title: 'Universal AI Access',
      description: 'Access 392+ AI models including free options (Mistral, Claude Haiku, DeepSeek) and premium models (Grok, OpenAI O3, Gemini Ultra) for comprehensive trading analysis.',
      color: 'from-primary-500 to-primary-600',
      expandedContent: {
        details: [
          'Free AI Models: Mistral, Claude Haiku, DeepSeek, and other free APIs',
          'Premium Models: Grok, OpenAI O3, Claude Opus 4, Gemini Ultra for advanced analysis',
          'Multi-Model Consensus: Run same analysis across multiple AIs for stronger signals',
          'Flexible Model Selection: Choose specific AIs for different trading strategies',
          'Performance Tracking: Monitor which models work best for your trading style',
          'Regular Updates: New AI models added as they become available'
        ],
      }
    },
    {
      id: 'strategy-library',
      icon: Users,
      title: '10+ Trading Strategies',
      description: 'Built-in professional strategies including Breakout, Trend Following, SMC, ICT Logic, Fibonacci analysis, plus ability to upload your own custom strategies.',
      color: 'from-accent-500 to-violet-600',
      expandedContent: {
        details: [
          'Breakout Strategy: Identify and trade breakout patterns with AI confirmation',
          'Trend Following: Multi-timeframe trend analysis with entry/exit optimization',
          'Smart Money Concepts: Advanced market structure and liquidity analysis',
          'ICT Logic: Inner Circle Trader methodologies and market maker moves',
          'Fibonacci Analysis: Retracement, extension, and confluence trading',
          'Custom Strategy Upload: Import your own strategies in PDF or prompt format'
        ],
      }
    },
    {
      id: 'personalized-ai',
      icon: TrendingUp,
      title: 'Personalized AI Training',
      description: 'Upload your trading history, journal, or custom strategies to train your personal AI agent for more accurate and personalized recommendations.',
      color: 'from-success-500 to-success-600',
      expandedContent: {
        details: [
          'Trading History Analysis: Upload past trades for AI to learn your patterns',
          'Journal Integration: Import trading journals for personalized insights',
          'Custom Strategy Training: Train AI on your specific methodologies',
          'Performance Learning: AI adapts based on your SL/TP results and feedback',
          'Pattern Recognition: AI identifies your most successful setups',
          'Continuous Improvement: AI refines recommendations based on your trading results'
        ],
      }
    },
    {
      id: 'flexible-pricing',
      icon: BarChart3,
      title: 'Flexible Pricing Plans',
      description: 'Choose from Free (5 analyses/day), Pro ($69/mo, 20 analyses), or Max ($140/mo, unlimited) plans with access to different AI models and features.',
      color: 'from-warning-500 to-warning-600',
      expandedContent: {
        details: [
          'Free Plan: 5 daily analyses using free AI models like Mistral and Claude Haiku',
          'Pro Plan: 20 daily analyses with premium models and advanced features',
          'Max Plan: Unlimited analyses with all AI models including pay-as-you-go options',
          'Transparent Pricing: No hidden fees, clear usage limits and model access',
          'Flexible Upgrades: Change plans anytime based on your trading needs',
          'Community Access: Pro/Max users get Discord and Telegram community access'
        ],
      }
    },
    {
      id: 'community-support',
      icon: Shield,
      title: 'Community & Support',
      description: 'Join premium Discord/Telegram communities, get 24/7 support, and access comprehensive trading education and AI model training resources.',
      color: 'from-error-500 to-error-600',
      expandedContent: {
        details: [
          'Premium Communities: Discord and Telegram access for Pro/Max users',
          'Educational Resources: Trading courses, AI model guides, and strategy tutorials',
          '24/7 Support: Priority support for Pro/Max users, standard for free users',
          'Strategy Sharing: Learn from other traders and share successful AI setups',
          'Regular Updates: New AI models, strategies, and features added regularly',
          'Transparent Platform: See AI reasoning and model performance for every trade'
        ],
      }
    },
    {
      id: 'risk-transparency',
      icon: Globe,
      title: 'Risk & Transparency',
      description: 'Non-custodial platform that never touches your funds. All AI outputs are for educational purposes only - you maintain full control over your trading decisions.',
      color: 'from-neutral-600 to-neutral-700',
      expandedContent: {
        details: [
          'Non-Custodial: Platform never handles or touches your trading funds',
          'Educational Purpose: All AI outputs are for informational and educational use',
          'Full Control: You make all final trading decisions and execute trades yourself',
          'Transparent AI: See detailed reasoning and confidence scores for every analysis',
          'Risk Disclosure: Clear communication that trading involves risk of loss',
          'No Guarantees: Platform provides analysis tools, not investment advice'
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-gradient-primary bg-clip-text">YoForex AI</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Experience the future of trading with our comprehensive AI-powered platform
          </p>
        </motion.div>

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
                      <p className="text-primary-400 text-xs">support@yoforex.net</p>
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