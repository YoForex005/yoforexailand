import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { 
  ArrowLeft,
  Zap,
  Brain,
  Target,
  BarChart3,
  Shield,
  Globe,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Activity
} from 'lucide-react';
import SEOHead from '../SEOHead';
import { navigate } from 'wouter/use-browser-location';

const FeaturesPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const [activeFeature, setActiveFeature] = useState<string>('ai-models');

  const features = [
    {
      id: 'ai-models',
      icon: Zap,
      title: 'Access 392+ AI Models',
      description: 'Choose from the world\'s largest collection of AI models for trading analysis',
      color: 'from-primary-500 to-primary-600',
      details: [
        'Free Models: Mistral, Claude Haiku, DeepSeek, Llama, and more',
        'Premium Models: Grok, OpenAI O3, Claude Opus 4, Gemini Ultra',
        'Specialized Trading Models: Fine-tuned for forex market analysis',
        'Regular Updates: New AI models added weekly',
        'Flexible Selection: Mix and match models for optimal results',
        'Performance Tracking: See which models work best for your style'
      ],
      benefits: [
        'Never limited to one AI perspective',
        'Cost control with free model options',
        'Access to cutting-edge AI technology',
        'Diversified analysis approaches'
      ],
      pricing: {
        free: 'Access to 50+ free models',
        pro: 'All models + premium features',
        max: 'All models + reduced credit costs'
      }
    },
    {
      id: 'multi-ai-consensus',
      icon: Target,
      title: 'Multi-AI Consensus Engine',
      description: 'Run identical analysis across multiple AIs to get consensus signals with confidence scoring',
      color: 'from-success-500 to-success-600',
      details: [
        'Simultaneous Analysis: Same prompt across 2-10 AI models',
        'Consensus Scoring: Percentage agreement between AIs',
        'Confidence Levels: Individual AI confidence ratings (1-5)',
        'Debate Visualization: See how AIs "discuss" trade setups',
        'Signal Strength: Stronger signals when multiple AIs agree',
        'Transparent Results: View each AI\'s individual reasoning'
      ],
      benefits: [
        'Reduced false signals through AI validation',
        'Higher accuracy with multi-model approach',
        'Clear confidence metrics for decision making',
        'Educational insights from AI reasoning'
      ],
      pricing: {
        free: 'Single model analysis only',
        pro: 'Up to 5 models simultaneously',
        max: 'Up to 10 models + advanced metrics'
      }
    },
    {
      id: 'trading-strategies',
      icon: BarChart3,
      title: '10+ Professional Trading Strategies',
      description: 'Built-in strategies plus custom upload capabilities for personalized analysis',
      color: 'from-accent-500 to-violet-600',
      details: [
        'Built-in Strategies: Breakout, Trend Following, Mean Reversion',
        'Advanced Methods: Smart Money Concepts, ICT Logic, Order Blocks',
        'Technical Analysis: Fibonacci, Support/Resistance, Chart Patterns',
        'Multi-Timeframe: H1, H4, Daily, Weekly analysis combined',
        'Custom Uploads: Import your strategies via PDF or text',
        'Strategy Blending: Combine multiple approaches for better signals'
      ],
      benefits: [
        'Professional-grade trading methodologies',
        'Flexibility to use your own strategies',
        'Multi-layered analysis approach',
        'Time-tested trading concepts'
      ],
      pricing: {
        free: 'Basic strategies included',
        pro: 'All strategies + custom uploads',
        max: 'All features + advanced combinations'
      }
    },
    {
      id: 'precise-signals',
      icon: Activity,
      title: 'Precise Entry/Exit Signals',
      description: 'Get exact price levels, stop loss, take profit, and detailed trade reasoning',
      color: 'from-warning-500 to-warning-600',
      details: [
        'Exact Entry Points: Specific price levels for trade execution',
        'Stop Loss Calculation: AI-calculated risk management levels',
        'Take Profit Targets: Multiple TP levels with probability',
        'Risk-Reward Ratios: Calculated R:R for every trade setup',
        'Trade Reasoning: Detailed explanations for each recommendation',
        'Market Context: Why this setup works in current conditions'
      ],
      benefits: [
        'No guesswork in trade execution',
        'Professional risk management',
        'Clear profit expectations',
        'Educational value in AI explanations'
      ],
      pricing: {
        free: 'Basic SL/TP recommendations',
        pro: 'Detailed levels + full reasoning',
        max: 'Advanced calculations + market context'
      }
    },
    {
      id: 'real-time-analysis',
      icon: Clock,
      title: 'Real-Time Market Analysis',
      description: 'Live market scanning with instant notifications and alerts',
      color: 'from-blue-500 to-blue-600',
      details: [
        'Live Market Scanning: Continuous monitoring of currency pairs',
        'Instant Alerts: Real-time notifications for trade opportunities',
        'Custom Watchlists: Monitor your preferred currency pairs',
        'News Integration: Market-moving news factored into analysis',
        'Correlation Analysis: Multi-pair relationship insights',
        'Session Analysis: London, New York, Asian session specifics'
      ],
      benefits: [
        'Never miss trading opportunities',
        'Stay informed of market changes',
        'Automated opportunity detection',
        'Session-specific insights'
      ],
      pricing: {
        free: 'Basic market alerts',
        pro: 'Custom alerts + advanced scanning',
        max: 'Real-time everything + priority delivery'
      }
    },
    {
      id: 'educational-content',
      icon: Brain,
      title: 'AI-Powered Trading Education',
      description: 'Learn from AI explanations and improve your trading skills continuously',
      color: 'from-purple-500 to-purple-600',
      details: [
        'Trade Explanations: Why each AI recommends specific trades',
        'Strategy Breakdowns: How different strategies work',
        'Market Education: Understanding forex market dynamics',
        'Risk Management: Learn proper position sizing and risk control',
        'Psychology Insights: Trading mindset and emotional control',
        'Performance Analysis: Track and improve your trading results'
      ],
      benefits: [
        'Continuous learning from AI insights',
        'Improve trading decision making',
        'Understand market mechanics',
        'Develop consistent trading habits'
      ],
      pricing: {
        free: 'Basic explanations included',
        pro: 'Detailed educational content',
        max: 'Personalized learning paths'
      }
    }
  ];

  const activeFeatureData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <>
      <SEOHead
        title="AI Forex Trading Features | 392+ Models, Multi-AI Consensus & Professional Strategies"
        description="Explore YoForex AI's advanced features: 392+ AI models, Multi-AI consensus engine, 10+ trading strategies, precise signals, and real-time analysis. Start free today."
        keywords="AI forex features, multi-AI consensus, forex trading strategies, AI trading signals, forex analysis tools, trading platform features"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "YoForex AI Trading Features",
          "description": "Advanced AI-powered forex trading features including 392+ AI models, multi-AI consensus engine, and professional trading strategies",
          "provider": {
            "@type": "Organization",
            "name": "YoForex AI"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Trading Features",
            "itemListElement": features.map(feature => ({
              "@type": "Offer",
              "name": feature.title,
              "description": feature.description
            }))
          }
        }}
      />
      
      <div className="min-h-screen bg-neutral-950 text-white font-inter">
        {/* Header */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            {/* <motion.button
              onClick={() => setLocation('/')}
              className="flex items-center space-x-2 text-neutral-400 hover:text-white mb-8 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button> */}

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI Trading <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
                Discover the most comprehensive AI forex trading platform with 392+ models, multi-AI consensus, and professional-grade analysis tools.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">392+</div>
                  <div className="text-sm text-neutral-400">AI Models</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-400">10+</div>
                  <div className="text-sm text-neutral-400">Strategies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">24/7</div>
                  <div className="text-sm text-neutral-400">Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning-400">5</div>
                  <div className="text-sm text-neutral-400">Free Daily</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Navigation */}
        <div className="bg-neutral-900/50 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-4 space-x-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeFeature === feature.id
                      ? 'bg-gradient-primary text-white'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Feature Details */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Feature Details */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${activeFeatureData.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <activeFeatureData.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  {activeFeatureData.title}
                </h2>
                
                <p className="text-xl text-neutral-300 mb-8">
                  {activeFeatureData.description}
                </p>

                {/* Feature Details */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-white">Feature Details:</h3>
                  {activeFeatureData.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Benefits:</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {activeFeatureData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Star className="w-4 h-4 text-warning-400" />
                        <span className="text-neutral-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => setLocation('/welcome')}
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Pricing Comparison */}
              <motion.div
                key={`${activeFeature}-pricing`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Plan Comparison for This Feature
                </h3>

                <div className="space-y-6">
                  {/* Free Plan */}
                  <div className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-700/50">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-neutral-500 rounded-full" />
                      <span className="font-semibold text-white">Free Plan</span>
                      <span className="text-sm text-neutral-400">$0/month</span>
                    </div>
                    <p className="text-neutral-300 text-sm">{activeFeatureData.pricing.free}</p>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-6 border border-primary-500/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-primary-500 rounded-full" />
                      <span className="font-semibold text-white">Pro Plan</span>
                      <span className="text-sm text-primary-400">$69/month</span>
                    </div>
                    <p className="text-neutral-300 text-sm">{activeFeatureData.pricing.pro}</p>
                  </div>

                  {/* Max Plan */}
                  <div className="bg-gradient-to-r from-accent-500/10 to-warning-500/10 rounded-2xl p-6 border border-accent-500/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-accent-500 rounded-full" />
                      <span className="font-semibold text-white">Max Plan</span>
                      <span className="text-sm text-accent-400">$139/month</span>
                    </div>
                    <p className="text-neutral-300 text-sm">{activeFeatureData.pricing.max}</p>
                  </div>
                </div>

                {/* View Full Pricing */}
                <div className="text-center mt-6">
                  <button
                    onClick={() => setLocation('/#pricing')}
                    className="text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                  >
                    View Full Pricing Details →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Quick Features Grid */}
        <div className="py-16 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              All Features at a <span className="bg-gradient-primary bg-clip-text text-transparent">Glance</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer ${
                    activeFeature === feature.id ? 'ring-2 ring-primary-500/50' : ''
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-3xl p-12 relative overflow-hidden"
            >
              {/* Background Animation */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Experience <span className="bg-gradient-primary bg-clip-text text-transparent">Professional AI Trading?</span>
                </h2>
                <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Start with 5 free daily analyses using our advanced AI models. No credit card required.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => navigate('/welcome')}
                    className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Start Free Trial</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setLocation('/live-demo')}
                    className="bg-gradient-glass backdrop-blur-sm border border-neutral-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Activity className="w-5 h-5" />
                    <span>View Live Demo</span>
                  </motion.button>
                </div>
                
                <p className="text-sm text-neutral-400 mt-6">
                  Join 10,000+ traders using AI-powered analysis
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPage;