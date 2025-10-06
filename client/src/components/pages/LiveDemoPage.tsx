import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { 
  ArrowLeft,
  Play,
  TrendingUp,
  Brain,
  Target,
  BarChart3,
  Clock,
  Star
} from 'lucide-react';
import SEOHead from '../SEOHead';
import DemoVideo from '../DemoVideo';
import { navigate } from 'wouter/use-browser-location';

const LiveDemoPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const demoFeatures = [
    {
      icon: Brain,
      title: 'Multi-AI Analysis',
      description: 'See how different AI models analyze the same forex chart',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Target,
      title: 'Precise Entry/Exit Points',
      description: 'Get exact price levels with stop loss and take profit',
      color: 'from-success-500 to-success-600'
    },
    {
      icon: BarChart3,
      title: 'Strategy Combination',
      description: 'Multiple trading strategies working together',
      color: 'from-accent-500 to-violet-600'
    },
    {
      icon: Clock,
      title: 'Real-Time Analysis',
      description: 'Live market data with instant AI processing',
      color: 'from-warning-500 to-warning-600'
    }
  ];

  return (
    <>
      <SEOHead
        title="Live Demo | YoForex AI Trading Platform"
        description="Experience YoForex AI live demo with real forex analysis. See 392+ AI models, multi-AI consensus, and professional trading strategies in action."
        keywords="forex demo, AI trading demo, live forex analysis, YoForex AI demo, trading platform demo"
      />
      
      <div className="min-h-screen bg-neutral-950 text-white font-inter">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Experience <span className="bg-gradient-primary bg-clip-text text-transparent">AI Trading</span> Live
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
                Watch our AI models analyze real forex charts and generate professional trading signals with precise entry, stop loss, and take profit levels.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Demo Features */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {demoFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Main Demo Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-3xl p-8 lg:p-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Interactive <span className="bg-gradient-primary bg-clip-text text-transparent">AI Analysis</span>
                </h2>
                <p className="text-neutral-300">
                  Click below to see a sample analysis with real market data
                </p>
              </div>
              
              {/* Simple YouTube Video Section */}
              {/* <div className="bg-neutral-900/50 rounded-2xl p-8 mb-8 text-center">
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden mb-6">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/NpJ0JUy4VV0?rel=0&modestbranding=1&controls=1&showinfo=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YoForex AI Trading Demo"
                  ></iframe>
                </div>
                
                <motion.button
                  onClick={() => setLocation('/demo/sample-analysis')}
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 mx-auto hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  <span>Start Demo Analysis</span>
                </motion.button>
              </div>
                 */}

                 <DemoVideo />
              {/* Demo Results Preview */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-neutral-900/30 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-5 h-5 text-warning-400" />
                    <span className="font-semibold text-white">AI Confidence</span>
                  </div>
                  <div className="text-2xl font-bold text-warning-400">94%</div>
                  <p className="text-sm text-neutral-400">Multi-model consensus</p>
                </div>
                
                <div className="bg-neutral-900/30 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="w-5 h-5 text-success-400" />
                    <span className="font-semibold text-white">Risk:Reward</span>
                  </div>
                  <div className="text-2xl font-bold text-success-400">1:2.67</div>
                  <p className="text-sm text-neutral-400">Optimal trade setup</p>
                </div>
                
                <div className="bg-neutral-900/30 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="w-5 h-5 text-primary-400" />
                    <span className="font-semibold text-white">AI Models</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-400">3/3</div>
                  <p className="text-sm text-neutral-400">Models in agreement</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* What You'll See Section */}
        <div className="py-16 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What You'll <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Our demo showcases real AI analysis capabilities with authentic market data
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white">Live Analysis Features:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-white">Multi-AI Consensus Engine</h4>
                      <p className="text-neutral-400 text-sm">Watch multiple AI models analyze the same chart and reach consensus</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-white">Precise Entry/Exit Levels</h4>
                      <p className="text-neutral-400 text-sm">Get exact price points for trade execution with calculated risk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-white">Strategy Combination</h4>
                      <p className="text-neutral-400 text-sm">See how multiple trading strategies work together</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warning-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-white">AI Reasoning</h4>
                      <p className="text-neutral-400 text-sm">Understand why each AI model makes its recommendations</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Demo Includes:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-neutral-300 text-sm">Real EUR/USD chart analysis</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-success-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-neutral-300 text-sm">3 AI models (Gemini, Mistral, Claude)</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-neutral-300 text-sm">Multi-timeframe analysis</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-warning-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-neutral-300 text-sm">Professional trading strategies</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-neutral-300 text-sm">Detailed trade reasoning</span>
                  </div>
                </div>
              </motion.div>
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
                  Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Trade Smarter?</span>
                </h2>
                <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Experience the full power of AI trading analysis. Start with 5 free daily analyses and see the difference professional AI makes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => navigate("/welcome")}
                    className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Start Free Trial</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setLocation('/demo/sample-analysis')}
                    className="bg-gradient-glass backdrop-blur-sm border border-neutral-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5" />
                    <span>View Sample Analysis</span>
                  </motion.button>
                </div>
                
                <p className="text-sm text-neutral-400 mt-6">
                  No credit card required • 5 free analyses daily • Cancel anytime
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveDemoPage;