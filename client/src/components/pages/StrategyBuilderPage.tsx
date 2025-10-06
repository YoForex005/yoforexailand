import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Target, 
  Plus, 
  Settings,
  BarChart3,
  TrendingUp,
  Brain,
  Save,
  Play,
  RefreshCw
} from 'lucide-react';

interface StrategyBuilderPageProps {
  onNavigateBack: () => void;
}

const StrategyBuilderPage: React.FC<StrategyBuilderPageProps> = ({ onNavigateBack }) => {
  const [selectedStrategy, setSelectedStrategy] = useState('breakout');

  const strategies = [
    { id: 'breakout', name: 'Breakout', description: 'Trade breakouts from key levels' },
    { id: 'trend', name: 'Trend Following', description: 'Follow established market trends' },
    { id: 'smc', name: 'Smart Money Concepts', description: 'Institutional trading logic' },
    { id: 'ict', name: 'ICT Logic', description: 'Inner Circle Trader methodology' },
    { id: 'fibonacci', name: 'Fibonacci', description: 'Retracement and extension levels' },
    { id: 'custom', name: 'Custom Strategy', description: 'Build your own approach' }
  ];

  const timeframes = ['1M', '5M', '15M', '1H', '4H', 'D1', 'W1'];
  const aiModels = ['Mistral Large', 'Claude Haiku', 'GPT-4', 'Gemini Pro', 'Grok'];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      {/* Header */}
      {/* <header className="bg-gradient-glass backdrop-blur-sm border-b border-neutral-800/50 sticky top-0 z-40">
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
                <span className="text-sm text-neutral-400 ml-2">Strategy Builder</span>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Strategy <span className="bg-gradient-primary bg-clip-text text-transparent">Builder</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Create custom AI trading strategies by combining built-in approaches, selecting AI models, and configuring risk parameters for personalized market analysis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Strategy Configuration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Base Strategy Selection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-6 h-6 text-primary-400" />
                <h2 className="text-2xl font-bold text-white">Base Strategy</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {strategies.map((strategy) => (
                  <motion.div
                    key={strategy.id}
                    onClick={() => setSelectedStrategy(strategy.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedStrategy === strategy.id
                        ? 'border-primary-500 bg-primary-500/10'
                        : 'border-neutral-700 bg-neutral-800/30 hover:border-neutral-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="font-semibold text-white mb-2">{strategy.name}</h3>
                    <p className="text-neutral-400 text-sm">{strategy.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI Model Selection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-6 h-6 text-accent-400" />
                <h2 className="text-2xl font-bold text-white">AI Models</h2>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-400">Select which AI models to use for analysis:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {aiModels.map((model, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-neutral-800/30 rounded-lg">
                      <input type="checkbox" className="w-4 h-4 text-primary-500" defaultChecked={index < 3} />
                      <span className="text-neutral-300">{model}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Timeframe Configuration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-6 h-6 text-success-400" />
                <h2 className="text-2xl font-bold text-white">Timeframes</h2>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-400">Select timeframes for multi-timeframe analysis:</p>
                <div className="flex flex-wrap gap-3">
                  {timeframes.map((tf, index) => (
                    <motion.button
                      key={tf}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        index < 4
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50'
                          : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700/50 hover:border-neutral-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tf}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Risk Parameters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="w-6 h-6 text-warning-400" />
                <h2 className="text-2xl font-bold text-white">Risk Parameters</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Minimum Confidence Level
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="95"
                    defaultValue="75"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-1">
                    <span>50%</span>
                    <span>75%</span>
                    <span>95%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Risk-Reward Ratio
                  </label>
                  <select className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white">
                    <option value="1:1">1:1</option>
                    <option value="1:1.5">1:1.5</option>
                    <option value="1:2" selected>1:2</option>
                    <option value="1:3">1:3</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Strategy Preview */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-6">Strategy Preview</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-300 mb-2">Configuration</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Base Strategy:</span>
                      <span className="text-primary-400 capitalize">{selectedStrategy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">AI Models:</span>
                      <span className="text-primary-400">3 selected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Timeframes:</span>
                      <span className="text-primary-400">4 selected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Min Confidence:</span>
                      <span className="text-primary-400">75%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <h4 className="font-semibold text-neutral-300 mb-2">Expected Output</h4>
                  <div className="bg-neutral-800/30 rounded-lg p-3 text-xs text-neutral-400">
                    Multi-AI consensus analysis using {selectedStrategy} strategy across 4 timeframes with detailed SL/TP levels and reasoning.
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <motion.button
                    className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Strategy</span>
                  </motion.button>
                  
                  <motion.button
                    className="w-full bg-success-500/20 text-success-400 border border-success-500/50 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4" />
                    <span>Test Strategy</span>
                  </motion.button>
                  
                  <motion.button
                    className="w-full bg-warning-500/20 text-warning-400 border border-warning-500/50 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Backtest</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Strategy Templates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Popular <span className="bg-gradient-primary bg-clip-text text-transparent">Strategy Templates</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-800/30 rounded-lg p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Scalping Master</h3>
                <p className="text-neutral-400 text-sm mb-4">1M/5M timeframes with high-frequency AI analysis</p>
                <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
                  Load Template
                </button>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-6 text-center">
                <BarChart3 className="w-8 h-8 text-success-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Swing Trader</h3>
                <p className="text-neutral-400 text-sm mb-4">4H/D1 analysis with trend following and SMC</p>
                <button className="text-success-400 hover:text-success-300 text-sm font-medium">
                  Load Template
                </button>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-6 text-center">
                <Target className="w-8 h-8 text-warning-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Position Trader</h3>
                <p className="text-neutral-400 text-sm mb-4">D1/W1 long-term trend analysis</p>
                <button className="text-warning-400 hover:text-warning-300 text-sm font-medium">
                  Load Template
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default StrategyBuilderPage;