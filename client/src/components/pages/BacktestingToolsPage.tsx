import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  BarChart3, 
  Calendar,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Clock,
  DollarSign,
  Percent,
  Play
} from 'lucide-react';

interface BacktestingToolsPageProps {
  onNavigateBack: () => void;
}

const BacktestingToolsPage: React.FC<BacktestingToolsPageProps> = ({ onNavigateBack }) => {
  const [selectedPair, setSelectedPair] = useState('EURUSD');
  const [selectedPeriod, setSelectedPeriod] = useState('1year');

  const currencyPairs = ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'BTCUSD'];
  const timePeriods = [
    { id: '3months', label: '3 Months' },
    { id: '6months', label: '6 Months' },
    { id: '1year', label: '1 Year' },
    { id: '2years', label: '2 Years' },
    { id: '5years', label: '5 Years' }
  ];

  const backtestResults = {
    totalTrades: 156,
    winRate: 73.2,
    totalReturn: 23.5,
    maxDrawdown: -8.2,
    sharpeRatio: 1.42,
    profitFactor: 1.85,
    avgWin: 45.30,
    avgLoss: -24.50,
    largestWin: 180.75,
    largestLoss: -95.20
  };

  const monthlyReturns = [
    { month: 'Jan', return: 2.3 },
    { month: 'Feb', return: -1.2 },
    { month: 'Mar', return: 4.1 },
    { month: 'Apr', return: 1.8 },
    { month: 'May', return: 3.2 },
    { month: 'Jun', return: -0.8 },
    { month: 'Jul', return: 2.9 },
    { month: 'Aug', return: 1.5 },
    { month: 'Sep', return: 3.7 },
    { month: 'Oct', return: 2.1 },
    { month: 'Nov', return: 1.9 },
    { month: 'Dec', return: 2.0 }
  ];

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
                <span className="text-sm text-neutral-400 ml-2">Backtesting Tools</span>
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
            Backtesting <span className="bg-gradient-primary bg-clip-text text-transparent">Tools</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Test your AI trading strategies with years of historical market data. Validate performance, optimize parameters, and build confidence before live trading.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-6">Backtest Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Currency Pair
                  </label>
                  <select 
                    value={selectedPair}
                    onChange={(e) => setSelectedPair(e.target.value)}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  >
                    {currencyPairs.map(pair => (
                      <option key={pair} value={pair}>{pair}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Time Period
                  </label>
                  <div className="space-y-2">
                    {timePeriods.map(period => (
                      <label key={period.id} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="period"
                          value={period.id}
                          checked={selectedPeriod === period.id}
                          onChange={(e) => setSelectedPeriod(e.target.value)}
                          className="text-primary-500"
                        />
                        <span className="text-neutral-300">{period.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Strategy
                  </label>
                  <select className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white">
                    <option>Trend Following + Breakout</option>
                    <option>Smart Money Concepts</option>
                    <option>ICT Logic</option>
                    <option>Fibonacci Strategy</option>
                    <option>Custom Strategy</option>
                  </select>
                </div>

                <motion.button
                  className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4" />
                  <span>Run Backtest</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
            >
              <h3 className="font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Data Points:</span>
                  <span className="text-primary-400">2.3M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Timeframes:</span>
                  <span className="text-primary-400">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">AI Models:</span>
                  <span className="text-primary-400">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Processing:</span>
                  <span className="text-success-400">Real-time</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Backtest Results</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-400 mb-1">
                    +{backtestResults.totalReturn}%
                  </div>
                  <div className="text-sm text-neutral-400">Total Return</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-1">
                    {backtestResults.winRate}%
                  </div>
                  <div className="text-sm text-neutral-400">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning-400 mb-1">
                    {backtestResults.sharpeRatio}
                  </div>
                  <div className="text-sm text-neutral-400">Sharpe Ratio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-error-400 mb-1">
                    {backtestResults.maxDrawdown}%
                  </div>
                  <div className="text-sm text-neutral-400">Max Drawdown</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-white mb-4">Trade Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Total Trades:</span>
                      <span className="text-white">{backtestResults.totalTrades}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Profit Factor:</span>
                      <span className="text-success-400">{backtestResults.profitFactor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Average Win:</span>
                      <span className="text-success-400">${backtestResults.avgWin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Average Loss:</span>
                      <span className="text-error-400">${backtestResults.avgLoss}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-4">Extremes</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Largest Win:</span>
                      <span className="text-success-400">${backtestResults.largestWin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Largest Loss:</span>
                      <span className="text-error-400">${backtestResults.largestLoss}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Best Month:</span>
                      <span className="text-success-400">+4.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Worst Month:</span>
                      <span className="text-error-400">-1.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Monthly Returns Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Monthly Returns</h3>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                {monthlyReturns.map((month, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className={`h-16 rounded mb-2 flex items-end justify-center ${
                        month.return > 0 ? 'bg-success-500/20' : 'bg-error-500/20'
                      }`}
                    >
                      <div 
                        className={`w-full rounded ${
                          month.return > 0 ? 'bg-success-400' : 'bg-error-400'
                        }`}
                        style={{ height: `${Math.abs(month.return) * 10}px` }}
                      />
                    </div>
                    <div className="text-xs text-neutral-400">{month.month}</div>
                    <div className={`text-xs font-medium ${
                      month.return > 0 ? 'text-success-400' : 'text-error-400'
                    }`}>
                      {month.return > 0 ? '+' : ''}{month.return}%
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strategy Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Strategy Analysis</h3>
              <div className="space-y-4">
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-success-400 mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-neutral-300">
                    <li>• Consistent performance across different market conditions</li>
                    <li>• Strong risk-adjusted returns (Sharpe ratio 1.42)</li>
                    <li>• Manageable drawdown periods</li>
                    <li>• High win rate with favorable risk-reward</li>
                  </ul>
                </div>
                
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-warning-400 mb-2">Areas for Improvement</h4>
                  <ul className="space-y-1 text-sm text-neutral-300">
                    <li>• Consider tighter stop losses during volatile periods</li>
                    <li>• Optimize position sizing for better risk management</li>
                    <li>• Add market regime filters for trending vs ranging markets</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BacktestingToolsPage;