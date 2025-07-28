import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Globe,
  ArrowRight,
  Play,
  Upload,
  BarChart3,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface HeroProps {
  onNavigateToDashboard: () => void;
  onNavigateToSignup: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToDashboard, onNavigateToSignup }) => {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const [metrics, setMetrics] = useState({
    traders: 47832,
    analyses: 1247893,
    winRate: 73.2,
    uptime: 99.94
  });

  const metricDetails = {
    traders: {
      details: [
        'Growing community of IT professionals and data analysts',
        'Enterprise teams across 50+ countries worldwide',
        'Daily active users leveraging workflow automation',
        'Diverse industries: fintech, healthcare, manufacturing',
        'Professional community focused on technical excellence',
        'Regular user feedback driving platform improvements'
      ],
    },
    analyses: {
      details: [
        'Over 1M+ successful workflow executions',
        'Real-time data processing across multiple AI models',
        'Enterprise-scale analytics operations daily',
        'High-volume data processing with 99.9% success rate',
        'Automated insights generation and reporting',
        'Continuous learning and model optimization'
      ],
    },
    winRate: {
      details: [
        '73.2% average workflow success rate across all operations',
        'Continuous performance monitoring and optimization',
        'Multi-AI model consensus for improved accuracy',
        'Real-time performance tracking and reporting',
        'Automated error detection and recovery systems',
        'Performance benchmarking against industry standards'
      ],
    },
    uptime: {
      details: [
        'Achieved through multi-region cloud infrastructure',
        'Automatic failovers and redundancy systems',
        'SOC 2 compliance with enterprise security standards',
        'Real-time monitoring via comprehensive status tools',
        'Reliable SaaS performance for critical analytics workflows',
        '24/7 infrastructure monitoring and maintenance'
      ],
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        traders: prev.traders + Math.floor(Math.random() * 3),
        analyses: prev.analyses + Math.floor(Math.random() * 12),
        winRate: 73.2 + (Math.random() - 0.5) * 0.1,
        uptime: 99.94 + (Math.random() - 0.5) * 0.01
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const aiModels = [
    'X.AI Grok', 'OpenAI GPT-4', 'Claude 4 Sonnet', 'Gemini 2.5 Pro', 
    'Mistral Large', 'DeepSeek R1', 'Anthropic Opus', 'o4-mini-high'
  ];

  return (
    <section className="relative min-h-screen bg-neutral-950 overflow-hidden pt-20 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating AI Models */}
      <div className="absolute inset-0 overflow-hidden">
        {aiModels.map((model, index) => (
          <motion.div
            key={model}
            className="absolute text-xs text-neutral-600 font-mono"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              y: [100, -100],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 8,
              delay: index * 1.2,
              repeat: Infinity,
              repeatDelay: 4
            }}
            style={{
              left: `${10 + (index * 11) % 80}%`,
              top: '80%'
            }}
          >
            {model}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-glass backdrop-blur-sm border border-primary-500/20 rounded-full px-4 py-2 text-sm"
            >
              <Shield className="w-4 h-4 text-success-400" />
              <span className="text-neutral-300">50K+ Traders • 1M+ Analyses • 99.9% Uptime • SOC 2 Compliant</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">YoForex AI:</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI-Powered Analytics
                </span>
                <br />
                <span className="text-white">Platform for</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Workflow Automation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-neutral-300 leading-relaxed max-w-2xl"
              >
                Revolutionary B2B2C SaaS platform combining advanced AI analytics with workflow automation. Access 392+ AI models for comprehensive market intelligence, data processing, and business automation - no trading advice provided, only professional software tools.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={onNavigateToSignup}
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Upload className="w-5 h-5" />
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>

              <motion.button
                className="bg-transparent border-2 border-primary-500/50 text-primary-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-500/10 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Live Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <motion.div 
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4 text-center cursor-pointer hover:border-neutral-700/50 transition-all duration-300 relative"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredMetric('traders')}
                onHoverEnd={() => setHoveredMetric(null)}
              >
                <div className="text-2xl font-bold text-primary-400">{metrics.traders.toLocaleString()}</div>
                <div className="text-xs text-neutral-400">Active Users</div>
                
                {/* Hover Tooltip */}
                <AnimatePresence>
                <motion.div className="mt-2 flex items-center justify-center">
                  {expandedMetric === 'traders' ? (
                    <ChevronUp className="w-3 h-3 text-primary-400" />
                  ) : (
                    <ChevronDown className="w-3 h-3 text-primary-400" />
                  )}
                </motion.div>
                  {hoveredMetric === 'traders' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-3 shadow-2xl min-w-64"
                    >
                      <div className="space-y-2">
                        {metricDetails.traders.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                            <span className="text-neutral-300 text-xs leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div 
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4 text-center cursor-pointer hover:border-neutral-700/50 transition-all duration-300 relative"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredMetric('analyses')}
                onHoverEnd={() => setHoveredMetric(null)}
              >
                <div className="text-2xl font-bold text-success-400">{metrics.analyses.toLocaleString()}</div>
                <div className="text-xs text-neutral-400">Analyses Done</div>
                
                {/* Hover Tooltip */}
                <AnimatePresence>
                <motion.div className="mt-2 flex items-center justify-center">
                  {expandedMetric === 'analyses' ? (
                    <ChevronUp className="w-3 h-3 text-success-400" />
                  ) : (
                    <ChevronDown className="w-3 h-3 text-success-400" />
                  )}
                </motion.div>
                  {hoveredMetric === 'analyses' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-3 shadow-2xl min-w-64"
                    >
                      <div className="space-y-2">
                        {metricDetails.analyses.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-success-400 mt-1.5 flex-shrink-0" />
                            <span className="text-neutral-300 text-xs leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div 
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4 text-center cursor-pointer hover:border-neutral-700/50 transition-all duration-300 relative"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredMetric('winRate')}
                onHoverEnd={() => setHoveredMetric(null)}
              >
                <div className="text-2xl font-bold text-accent-400">{metrics.winRate.toFixed(1)}%</div>
                <div className="text-xs text-neutral-400">Success Rate</div>
                
                {/* Hover Tooltip */}
                <AnimatePresence>
                <motion.div className="mt-2 flex items-center justify-center">
                  {expandedMetric === 'winRate' ? (
                    <ChevronUp className="w-3 h-3 text-accent-400" />
                  ) : (
                    <ChevronDown className="w-3 h-3 text-accent-400" />
                  )}
                </motion.div>
                  {hoveredMetric === 'winRate' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-3 shadow-2xl min-w-64"
                    >
                      <div className="space-y-2">
                        {metricDetails.winRate.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-1.5 flex-shrink-0" />
                            <span className="text-neutral-300 text-xs leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div 
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4 text-center cursor-pointer hover:border-neutral-700/50 transition-all duration-300 relative"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredMetric('uptime')}
                onHoverEnd={() => setHoveredMetric(null)}
              >
                <div className="text-2xl font-bold text-primary-400">{metrics.uptime.toFixed(2)}%</div>
                <div className="text-xs text-neutral-400">Uptime</div>
                
                {/* Hover Tooltip */}
                <AnimatePresence>
                <motion.div className="mt-2 flex items-center justify-center">
                  {expandedMetric === 'uptime' ? (
                    <ChevronUp className="w-3 h-3 text-primary-400" />
                  ) : (
                    <ChevronDown className="w-3 h-3 text-primary-400" />
                  )}
                </motion.div>
                  {hoveredMetric === 'uptime' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-3 shadow-2xl min-w-64"
                    >
                      <div className="space-y-2">
                        {metricDetails.uptime.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                            <span className="text-neutral-300 text-xs leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Preview */}
            <div className="relative bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 shadow-2xl">
              {/* Mock Chart */}
              <div className="aspect-video bg-neutral-900/50 rounded-xl p-4 mb-4 relative overflow-hidden">
                {/* Animated Trading Lines */}
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <motion.path
                    d="M 0 120 Q 50 80 100 100 T 200 60 T 300 80 T 400 40"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.path
                    d="M 0 140 Q 60 160 120 140 T 240 120 T 360 100 T 400 80"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* AI Analysis Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute top-4 right-4 bg-success-500/20 border border-success-500/50 rounded-lg p-2 text-xs"
                >
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span className="text-success-400 font-medium">BUY Signal</span>
                  </div>
                  <div className="text-neutral-300 mt-1">Confidence: 4.2/5</div>
                </motion.div>
              </div>

              {/* AI Models Status */}
              <div className="grid grid-cols-2 gap-2">
                {['Grok', 'GPT-4', 'Claude', 'Gemini'].map((model, index) => (
                  <motion.div
                    key={model}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 + index * 0.1 }}
                    className="bg-neutral-800/50 rounded-lg p-2 flex items-center justify-between text-xs"
                  >
                    <span className="text-neutral-300">{model}</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-success-400 rounded-full animate-pulse" />
                      <span className="text-success-400">Active</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-primary p-3 rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-success-500 to-accent-500 p-3 rounded-full shadow-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BarChart3 className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;