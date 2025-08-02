import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { 
  ArrowLeft, 
  Zap, 
  TrendingUp, 
  Brain, 
  Target,
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Star,
  Activity
} from 'lucide-react';
import SEOHead from '../SEOHead';

const SampleAnalysisPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const [selectedExample, setSelectedExample] = useState(0);

  const analysisExamples = [
    {
      pair: 'EUR/USD',
      strategy: 'Trend Following + Breakout + Fibonacci',
      models: ['Gemini 2.5 Pro', 'Mistral 8x22B', 'Claude Haiku'],
      timeframes: ['1H', '4H', 'D1'],
      direction: 'LONG',
      entry: '1.0856',
      stopLoss: '1.0802',
      takeProfit: '1.1000',
      confidence: 94,
      reasoning: 'All models agree: institutional volume confirmed, price held moving average cluster, and news sentiment improving. Fibonacci level retest aligns with trend breakout.',
      consensus: 'All 3 models recommended long, Twitter news sentiment also positive, backtest alignment 8/10 last similar setups led to profit.',
      riskReward: '1:2.67',
      probability: '78%'
    },
    {
      pair: 'XAU/USD (Gold)',
      strategy: 'Smart Money Concepts + ICT Logic',
      models: ['OpenAI GPT-4', 'Claude Opus', 'Gemini Ultra'],
      timeframes: ['4H', 'D1', 'W1'],
      direction: 'SHORT',
      entry: '2052.30',
      stopLoss: '2065.00',
      takeProfit: '2035.00',
      confidence: 87,
      reasoning: 'Smart money distribution detected at weekly resistance. ICT order block formed with liquidity sweep above highs. DXY showing strength correlation.',
      consensus: '2/3 models agree on short bias, with Gemini suggesting wait for lower timeframe confirmation. High probability setup based on institutional flow.',
      riskReward: '1:1.36',
      probability: '71%'
    },
    {
      pair: 'BTC/USD',
      strategy: 'Multi-Timeframe + Volatility Break',
      models: ['Mistral Large', 'Claude Haiku', 'DeepSeek'],
      timeframes: ['1H', '4H', 'D1'],
      direction: 'LONG',
      entry: '43,500',
      stopLoss: '42,000',
      takeProfit: '46,000',
      confidence: 91,
      reasoning: 'Bitcoin breaking above key resistance with institutional buying pressure. ETF approval momentum and on-chain metrics support bullish continuation.',
      consensus: 'Strong consensus across all free models. Volume profile and market structure align for upward move. News sentiment extremely positive.',
      riskReward: '1:1.67',
      probability: '82%'
    }
  ];

  const currentAnalysis = analysisExamples[selectedExample];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-success-400';
    if (confidence >= 75) return 'text-warning-400';
    return 'text-error-400';
  };

  const getDirectionColor = (direction: string) => {
    return direction === 'LONG' ? 'text-success-400' : 'text-error-400';
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
                <span className="text-sm text-neutral-400 ml-2">Sample Analysis</span>
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
            Real AI <span className="bg-gradient-primary bg-clip-text text-transparent">Trading Analysis</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            See exactly what you'll receive with YoForex AI—detailed trade analysis with precise entry/exit levels and comprehensive AI reasoning.
          </p>
        </motion.div>

        {/* Example Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-center space-x-4 mb-8">
            {analysisExamples.map((example, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedExample(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedExample === index
                    ? 'bg-gradient-primary text-white'
                    : 'bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {example.pair}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Analysis Display */}
        <motion.div
          key={selectedExample}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Main Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trade Overview */}
            <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{currentAnalysis.pair} Analysis</h2>
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-primary-400" />
                  <span className="text-primary-400 font-medium">Live Analysis</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-neutral-300 mb-3">Trade Setup</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Direction:</span>
                      <span className={`font-bold ${getDirectionColor(currentAnalysis.direction)}`}>
                        {currentAnalysis.direction}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Entry:</span>
                      <span className="text-white font-medium">{currentAnalysis.entry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Stop Loss:</span>
                      <span className="text-error-400 font-medium">{currentAnalysis.stopLoss}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Take Profit:</span>
                      <span className="text-success-400 font-medium">{currentAnalysis.takeProfit}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-300 mb-3">Risk Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Risk:Reward:</span>
                      <span className="text-primary-400 font-medium">{currentAnalysis.riskReward}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Win Probability:</span>
                      <span className="text-success-400 font-medium">{currentAnalysis.probability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Confidence:</span>
                      <span className={`font-bold ${getConfidenceColor(currentAnalysis.confidence)}`}>
                        {currentAnalysis.confidence}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-neutral-300 mb-3">Strategy Applied</h3>
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <span className="text-primary-400 font-medium">{currentAnalysis.strategy}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-300 mb-3">AI Reasoning</h3>
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <p className="text-neutral-300 leading-relaxed">{currentAnalysis.reasoning}</p>
                </div>
              </div>
            </div>

            {/* Multi-AI Consensus */}
            <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-6 h-6 text-accent-400" />
                <h2 className="text-2xl font-bold text-white">Multi-AI Consensus</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {currentAnalysis.models.map((model, index) => (
                  <div key={index} className="bg-neutral-800/30 rounded-lg p-4 text-center">
                    <div className="w-3 h-3 bg-success-400 rounded-full mx-auto mb-2" />
                    <h4 className="font-medium text-white mb-1">{model}</h4>
                    <span className="text-success-400 text-sm">Agrees</span>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Consensus Summary</h4>
                <p className="text-neutral-300 leading-relaxed">{currentAnalysis.consensus}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeframes */}
            <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-primary-400" />
                <h3 className="font-bold text-white">Timeframes Analyzed</h3>
              </div>
              <div className="space-y-2">
                {currentAnalysis.timeframes.map((tf, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-neutral-800/30 rounded">
                    <span className="text-neutral-300">{tf}</span>
                    <CheckCircle className="w-4 h-4 text-success-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Confidence Meter */}
            <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-5 h-5 text-warning-400" />
                <h3 className="font-bold text-white">AI Confidence</h3>
              </div>
              <div className="relative">
                <div className="w-full bg-neutral-800 rounded-full h-4 mb-2">
                  <motion.div
                    className={`h-4 rounded-full bg-gradient-to-r ${
                      currentAnalysis.confidence >= 90 ? 'from-success-500 to-success-400' :
                      currentAnalysis.confidence >= 75 ? 'from-warning-500 to-warning-400' :
                      'from-error-500 to-error-400'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${currentAnalysis.confidence}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="text-center">
                  <span className={`text-2xl font-bold ${getConfidenceColor(currentAnalysis.confidence)}`}>
                    {currentAnalysis.confidence}%
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Analysis Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Models Used:</span>
                  <span className="text-primary-400">{currentAnalysis.models.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Timeframes:</span>
                  <span className="text-primary-400">{currentAnalysis.timeframes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Analysis Time:</span>
                  <span className="text-primary-400">2.3s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Strategy Layers:</span>
                  <span className="text-primary-400">3</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why This Analysis Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Why This <span className="bg-gradient-primary bg-clip-text text-transparent">Analysis Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Multi-AI Validation</h3>
                <p className="text-neutral-400 text-sm">Multiple AI models independently reach the same conclusion</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-success-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Multi-Timeframe Confluence</h3>
                <p className="text-neutral-400 text-sm">Signals align across multiple timeframes for higher probability</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warning-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-warning-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Precise Risk Management</h3>
                <p className="text-neutral-400 text-sm">Clear SL/TP levels with favorable risk-reward ratios</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
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
                Ready to Get <span className="bg-gradient-primary bg-clip-text text-transparent">Your Own Analysis?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Start with 5 free daily analyses using top AI models. No credit card required—see the power of AI trading analysis for yourself.
              </p>
              <motion.button
                onClick={() => setLocation('/signup')}
                className="bg-gradient-primary text-white px-12 py-6 rounded-2xl font-bold text-xl relative overflow-hidden group inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-6 h-6" />
                <span>Start Free Trial</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              <div className="mt-4 text-sm text-neutral-400">
                Join 10,000+ traders using AI-powered analysis
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default SampleAnalysisPage;