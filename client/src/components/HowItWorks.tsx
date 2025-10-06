import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Cpu, TrendingUp, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface HowItWorksProps {
  onNavigateToSignup: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigateToSignup }) => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const steps = [
    {
      id: 'choose-mode',
      icon: Upload,
      title: 'Choose Your AI Models',
      description: 'Select from 392+ AI models including free options (Mistral, Claude Haiku, DeepSeek) or premium models (Grok, OpenAI O3, Gemini Ultra) for your trading analysis.',
      color: 'from-primary-500 to-primary-600',
      delay: 0.2,
      expandedContent: {
        details: [
          'Free Models: Access Mistral, Claude Haiku, DeepSeek, and other free AI models',
          'Premium Models: Grok, OpenAI O3, Claude Opus 4, Gemini Ultra for advanced analysis',
          'Multi-Model Consensus: Run same analysis across multiple AIs for stronger signals',
          'Custom Model Selection: Choose specific models for different trading strategies',
          'Flexible API Usage: Switch between free and premium based on your needs',
          'Model Performance Tracking: See which AIs perform best for your trading style'
        ],
      }
    },
    {
      id: 'multi-ai',
      icon: Cpu,
      title: 'AI Trading Analysis',
      description: 'Upload charts, select strategies (breakout, trend following, SMC, ICT, Fibonacci), and get comprehensive trade analysis with entry/exit points, SL/TP levels, and detailed reasoning.',
      color: 'from-accent-500 to-violet-600',
      delay: 0.4,
      expandedContent: {
        details: [
          '10+ Built-in Strategies: Breakout, Trend Following, Mean Reversion, SMC, ICT Logic',
          'Multi-Timeframe Analysis: Hourly, 4H, daily, and weekly chart analysis combined',
          'Custom Strategy Upload: Import your own trading strategies in PDF or prompt format',
          'Image + Text Analysis: Upload charts, screenshots, and text for comprehensive review',
          'AI Confidence Scoring: Get confidence levels (1-5) for every trade recommendation',
          'Detailed Trade Rationale: Understand why the AI recommends each trade setup'
        ],
      }
    },
    {
      id: 'execute-manage',
      icon: TrendingUp,
      title: 'Get Actionable Signals',
      description: 'Receive detailed trade recommendations with precise entry points, stop loss, take profit levels, and comprehensive reasoning. Join premium Discord/Telegram communities for discussion.',
      color: 'from-success-500 to-success-600',
      delay: 0.6,
      expandedContent: {
        details: [
          'Precise Entry/Exit Points: Get exact price levels for trade execution',
          'Stop Loss & Take Profit: AI-calculated risk management levels for every trade',
          'Multi-Model Consensus: See how different AIs "debate" and agree on trades',
          'Trade Reasoning: Detailed explanations of technical and fundamental factors',
          'Community Access: Join Discord/Telegram groups with other AI-powered traders',
          'Educational Content: Learn from AI explanations and improve your trading skills'
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
            How AI Forex Trading <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to access the world's most comprehensive AI forex trading analysis platform with multi-model consensus and detailed forex signals for currency trading success.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative group"
            >
              {/* Connecting Line (Desktop) */}
              <motion.div
                onHoverStart={() => setHoveredStep(step.id)}
                onHoverEnd={() => setHoveredStep(null)}
              >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-neutral-700 to-transparent z-0">
                  <motion.div
                    className="h-full bg-gradient-primary"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: step.delay + 0.3 }}
                  />
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center group-hover:border-neutral-700/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                
                {/* Visual indicator for interactivity */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-400 opacity-50" />
                  <div className="w-2 h-2 rounded-full bg-primary-400 opacity-30 mx-1" />
                  <div className="w-2 h-2 rounded-full bg-primary-400 opacity-50" />
                </div>
              </div>
              </motion.div>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 shadow-2xl max-w-sm mx-auto"
                  >
                    <div className="space-y-2">
                      {step.expandedContent.details.map((detail, index) => (
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
          <p className="text-neutral-400 text-sm">Tap any step to view detailed process information</p>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={onNavigateToSignup}
            className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            <span>Start Free Trial</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;