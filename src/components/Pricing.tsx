import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Users, TrendingUp, Shield } from 'lucide-react';

interface PricingProps {
  onNavigateToSignup: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateToSignup }) => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with AI trading analysis',
      features: [
        'Up to 5 AI analyses per day',
        'Access to free AI models (Mistral, Claude Haiku, DeepSeek)',
        'Basic TP/SL recommendations',
        'Single timeframe analysis',
        'Community forum access',
        'Basic trading strategies'
      ],
      cta: 'Start Free',
      popular: false,
      icon: TrendingUp
    },
    {
      name: 'Pro',
      price: '$69',
      period: '/month',
      description: 'Advanced AI trading analysis for serious traders',
      features: [
        '20 analyses per day',
        'Premium AI APIs (always updated)',
        'Multi-timeframe analysis (H1, H4, D1, W1)',
        '10+ professional strategies (SMC, ICT, Fibonacci)',
        'AI explains every trade with full rationale',
        'Personalized training (upload history, journal, PDFs)',
        'Multi-AI consensus engine',
        'Private Discord & Telegram channels',
        'Priority support',
        'Advanced SL/TP with risk management'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      icon: Zap
    },
    {
      name: 'Max',
      price: '$140',
      period: '/month',
      description: 'Unlimited AI power for professional traders',
      features: [
        'Unlimited analyses per day',
        'All premium APIs (Grok, OpenAI O3, Gemini Ultra, Claude Opus)',
        'Pay-as-you-go for hyper-premium APIs',
        'Multi-modal analysis (text, images, PDFs)',
        'AI confidence levels & full consensus mechanism',
        'Zero manual effort - hands-free trading AI',
        'Advanced journaling & self-adaptive learning',
        'Unlimited strategy blending & custom prompts',
        'Premium Discord & Telegram communities',
        'All future updates & beta features',
        'REST API access for automation'
      ],
      cta: 'Start Max Trial',
      popular: false,
      icon: Star
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
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
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">AI Trading</span> Plan
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            From free AI analysis to unlimited professional trading intelligence. 
            Scale your trading with the power of multiple AI models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                    : 'border-neutral-700/50 hover:border-neutral-600/50'
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

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onNavigateToSignup}
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center space-x-8 text-neutral-400">
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
          
          <div className="mt-8 p-6 bg-neutral-800/30 rounded-xl border border-neutral-700/50 max-w-4xl mx-auto">
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