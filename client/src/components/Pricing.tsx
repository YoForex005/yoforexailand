import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Users, TrendingUp, Shield, Crown, Target, Brain } from 'lucide-react';
import { navigate } from 'wouter/use-browser-location';

interface PricingProps {
  onNavigateToSignup: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateToSignup }) => {
  const plans = [
    {
      name: 'Free (Basics)',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with AI trading analysis',
      features: [
        '5 AI analyses per day (hard limit with reset timer)',
        'Access to free AI models (Mistral, Claude Haiku, DeepSeek)',
        '10+ professional strategies (premium strategies locked)',
        'Basic SL/TP recommendations',
        'AI trade explanations for basic strategies only',
        'Access to public Discord & Telegram channels',
        'Basic market alerts',
        'Standard customer support (48-hour response)'
      ],
      cta: 'Start Free',
      popular: false,
      icon: TrendingUp,
      limitations: [
        'Premium strategies locked',
        'Basic explanations only',
        'No multi-AI consensus',
        'Limited timeframe analysis'
      ]
    },
    {
      name: 'Pro',
      price: '$69',
      period: '/month',
      description: 'Advanced AI trading analysis for serious traders',
      features: [
        '2,500 credits per day for Multi AI Consensus Engine',
        'Single AI analysis: 150 credits',
        'Multi-AI analysis (5 AIs): 750 credits',
        'Text analysis: 150 credits, Image: 300 credits',
        'Combined text + image: 450 credits',
        'All Free plan features unlocked',
        'Premium AI models with frequent updates',
        'Multi-timeframe analysis (H1, H4, D1, W1)',
        'AI explains every trade with full rationale',
        'Personalized training (upload history, journal, PDFs)',
        'Multi-AI consensus engine',
        'Private Discord & Telegram channels',
        'Priority customer support (24-hour response)',
        'Advanced market alerts with customization',
        'Credit purchase: $25 per 1,000 additional credits'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      icon: Zap,
      creditSystem: {
        dailyCredits: 2500,
        singleAI: 150,
        multiAI: 750,
        textOnly: 150,
        imageOnly: 300,
        combined: 450,
        additionalCreditPrice: 25
      }
    },
    {
      name: 'Max (Premium)',
      price: '$139',
      period: '/month',
      description: 'Unlimited AI power for professional traders',
      features: [
        '10,000 credits per day (effectively unlimited)',
        'Reduced credit consumption rates:',
        'Single AI analysis: 100 credits',
        'Multi-AI analysis (5 AIs): 500 credits',
        'Text + Image analysis: 100 credits (combined rate)',
        'All Pro plan features included',
        'Multi-timeframe analysis capabilities',
        'Correlation analysis (XAGUSD, XAUUSD, etc.)',
        'Pay-as-you-go for hyper-premium APIs (Grok, OpenAI O3)',
        'Multi-modal analysis (text, images, PDFs)',
        'AI confidence levels & full consensus mechanism',
        'Zero manual effort - hands-free trading AI',
        'Advanced journaling & self-adaptive learning',
        'Unlimited strategy blending & custom prompts',
        'Premium Discord & Telegram communities',
        'White-glove customer support (4-hour response)',
        'Custom strategy development consultation',
        'Premium credit purchase: $20 per 1,000 credits'
      ],
      cta: 'Start Max Trial',
      popular: false,
      icon: Crown,
      creditSystem: {
        dailyCredits: 10000,
        singleAI: 100,
        multiAI: 500,
        combined: 100,
        additionalCreditPrice: 20
      }
    }
  ];

  const creditCalculator = (plan: any) => {
    if (!plan.creditSystem) return null;
    
    const { dailyCredits, singleAI, multiAI } = plan.creditSystem;
    const singleAnalyses = Math.floor(dailyCredits / singleAI);
    const multiAnalyses = Math.floor(dailyCredits / multiAI);
    
    return {
      singleAnalyses,
      multiAnalyses,
      mixedExample: `${Math.floor(dailyCredits / 2 / singleAI)} single + ${Math.floor(dailyCredits / 2 / multiAI)} multi-AI`
    };
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">AI Forex Trading</span> Plan
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            From free AI forex analysis to unlimited professional forex trading intelligence. 
            Scale your currency trading with the power of multiple AI models and credit-based usage for automated trading success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const calculator = creditCalculator(plan);
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 group ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:border-blue-400/70' 
                    : plan.name === 'Free (Basics)'
                      ? 'border-neutral-700/50 hover:border-green-500/70 hover:shadow-2xl hover:shadow-green-500/30'
                      : 'border-neutral-700/50 hover:border-purple-500/70 hover:shadow-2xl hover:shadow-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-neutral-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-neutral-400 text-sm">{plan.description}</p>
                </div>

                {/* Credit System Info */}
                {calculator && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg border border-primary-500/20">
                    <h4 className="text-primary-400 font-semibold mb-2">Daily Credit Allowance</h4>
                    <div className="space-y-1 text-sm text-neutral-300">
                      <div>• {calculator.singleAnalyses} single AI analyses</div>
                      <div>• {calculator.multiAnalyses} multi-AI consensus analyses</div>
                      <div>• Mix & match: {calculator.mixedExample}</div>
                    </div>
                    <div className="mt-2 text-xs text-neutral-400">
                      Additional credits: ${plan.creditSystem?.additionalCreditPrice}/1,000 credits
                    </div>
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Limitations for Free Plan */}
                {plan.limitations && (
                  <div className="mb-6 p-3 bg-neutral-700/30 rounded-lg border border-neutral-600/30">
                    <h4 className="text-neutral-400 font-medium mb-2 text-sm">Limitations:</h4>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                          <span className="text-neutral-400 text-xs">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => window.location.href = 'https://app.yoforexai.com/auth'}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'bg-neutral-700 text-white hover:bg-neutral-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Credit System Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              How the <span className="bg-gradient-primary bg-clip-text text-transparent">Credit System</span> Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <Brain className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-2">Single AI Analysis</h4>
                <p className="text-neutral-400 text-sm">One AI model analyzes your trade setup</p>
                <div className="mt-2 text-primary-400 font-bold">Pro: 150 credits | Max: 100 credits</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-2">Multi-AI Consensus</h4>
                <p className="text-neutral-400 text-sm">5 AI models debate and reach consensus</p>
                <div className="mt-2 text-accent-400 font-bold">Pro: 750 credits | Max: 500 credits</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-success-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-2">Image + Text Analysis</h4>
                <p className="text-neutral-400 text-sm">Upload charts with custom questions</p>
                <div className="mt-2 text-success-400 font-bold">Pro: 450 credits | Max: 100 credits</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">
              Credits reset daily at midnight UTC. Unused credits don't roll over. 
              Purchase additional credits anytime for extended usage.
            </p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center space-x-8 text-neutral-400 mb-8">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">Non-custodial & Secure</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm">10,000+ Active Traders</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
          </div>
          
          <div className="p-6 bg-neutral-800/30 rounded-xl border border-neutral-700/50 max-w-4xl mx-auto">
            <p className="text-neutral-400 text-sm leading-relaxed">
              <strong className="text-white">Risk Disclaimer:</strong> YoForex AI provides AI-powered trading analysis and educational content only. 
              We do not provide investment advice, signal guarantees, or execute trades on your behalf. 
              All AI outputs are for informational purposes only—final trading decisions are your responsibility. 
              Trading involves substantial risk and may not be suitable for all investors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;