import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Play, 
  TrendingUp, 
  Brain, 
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Activity
} from 'lucide-react';

interface LiveDemoPageProps {
  onNavigateBack: () => void;
  onNavigateToSignup: () => void;
  onNavigateToSampleAnalysis: () => void;
}

const LiveDemoPage: React.FC<LiveDemoPageProps> = ({ 
  onNavigateBack, 
  onNavigateToSignup, 
  onNavigateToSampleAnalysis 
}) => {
  const demoFeatures = [
    {
      icon: Brain,
      title: 'Multi-AI Consensus',
      description: 'Watch multiple AI models analyze the same trade and reach consensus',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Target,
      title: 'Precise SL/TP Levels',
      description: 'Get exact stop loss and take profit recommendations with reasoning',
      color: 'from-success-500 to-success-600'
    },
    {
      icon: BarChart3,
      title: 'Multi-Timeframe Analysis',
      description: 'See how AI combines signals from multiple timeframes',
      color: 'from-accent-500 to-violet-600'
    },
    {
      icon: Activity,
      title: 'Strategy Integration',
      description: 'Experience how built-in strategies enhance AI analysis',
      color: 'from-warning-500 to-warning-600'
    }
  ];

  const testimonials = [
    {
      quote: "I've never felt more confident in my trade entries—YoForex AI's explanations and SL/TP levels are better than any course I paid for!",
      author: "Sarah M.",
      role: "Day Trader"
    },
    {
      quote: "Uploading my trading journal led to the AI picking up my best setups—I doubled my win rate!",
      author: "Marcus R.",
      role: "Swing Trader"
    },
    {
      quote: "The community's feedback and direct AI access is a game-changer.",
      author: "Emma T.",
      role: "Forex Trader"
    }
  ];

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
                <span className="text-sm text-neutral-400 ml-2">Live Demo</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Experience YoForex AI's <span className="bg-gradient-primary bg-clip-text text-transparent">Trading Analysis—Live</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Test-drive AI-powered trading analysis. Receive up to 5 free daily analyses using leading models like Mistral or Claude Haiku. No credit card required.
          </p>

          {/* Primary CTA */}
          <motion.button
            onClick={onNavigateToSignup}
            className="bg-gradient-primary text-white px-12 py-6 rounded-2xl font-bold text-xl relative overflow-hidden group inline-flex items-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6" />
            <span>Try Free - Start Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>

          {/* Secondary CTA */}
          <div className="text-center">
            <motion.button
              onClick={onNavigateToSampleAnalysis}
              className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>Need a walkthrough? See Sample Analysis below</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Demo Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What You'll <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Demo Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How the Demo Works</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">1</div>
                <h3 className="font-semibold text-white mb-2">Sign Up Free</h3>
                <p className="text-neutral-400 text-sm">Create account in 30 seconds</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">2</div>
                <h3 className="font-semibold text-white mb-2">Choose AI Model</h3>
                <p className="text-neutral-400 text-sm">Select from free models</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">3</div>
                <h3 className="font-semibold text-white mb-2">Upload Chart</h3>
                <p className="text-neutral-400 text-sm">Share your trading setup</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">4</div>
                <h3 className="font-semibold text-white mb-2">Get Analysis</h3>
                <p className="text-neutral-400 text-sm">Receive detailed AI insights</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">5</div>
                <h3 className="font-semibold text-white mb-2">Trade Smart</h3>
                <p className="text-neutral-400 text-sm">Execute with confidence</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Traders <span className="bg-gradient-primary bg-clip-text text-transparent">Are Saying</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Analysis CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              See a <span className="bg-gradient-primary bg-clip-text text-transparent">Real Analysis</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              View an actual AI trading analysis with detailed reasoning, SL/TP levels, and multi-model consensus.
            </p>
            <motion.button
              onClick={onNavigateToSampleAnalysis}
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BarChart3 className="w-5 h-5" />
              <span>View Sample Analysis</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
                Ready to Start <span className="bg-gradient-primary bg-clip-text text-transparent">Trading Smarter?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Join thousands of traders using AI-powered analysis. Start with 5 free daily analyses—no credit card required.
              </p>
              <motion.button
                onClick={onNavigateToSignup}
                className="bg-gradient-primary text-white px-12 py-6 rounded-2xl font-bold text-xl relative overflow-hidden group inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle className="w-6 h-6" />
                <span>Get Started Free</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              <div className="mt-4 text-sm text-neutral-400">
                No credit card required • 5 free analyses daily • Upgrade anytime
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LiveDemoPage;