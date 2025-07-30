import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Search, 
  Filter,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  Target,
  Star,
  RefreshCw,
  Bell
} from 'lucide-react';

interface MarketScannerPageProps {
  onNavigateBack: () => void;
}

const MarketScannerPage: React.FC<MarketScannerPageProps> = ({ onNavigateBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('4H');
  const [selectedStrategy, setSelectedStrategy] = useState('all');
  const [isScanning, setIsScanning] = useState(false);

  const timeframes = ['1H', '4H', 'D1', 'W1'];
  const strategies = [
    { id: 'all', name: 'All Strategies' },
    { id: 'breakout', name: 'Breakout' },
    { id: 'trend', name: 'Trend Following' },
    { id: 'smc', name: 'Smart Money' },
    { id: 'fibonacci', name: 'Fibonacci' }
  ];

  const scanResults = [
    {
      pair: 'EUR/USD',
      signal: 'BUY',
      confidence: 87,
      strategy: 'Breakout + Trend',
      timeframe: '4H',
      entry: '1.0856',
      sl: '1.0802',
      tp: '1.0950',
      riskReward: '1:1.74',
      lastUpdate: '2 min ago'
    },
    {
      pair: 'GBP/USD',
      signal: 'SELL',
      confidence: 92,
      strategy: 'Smart Money Concepts',
      timeframe: '4H',
      entry: '1.2634',
      sl: '1.2685',
      tp: '1.2550',
      riskReward: '1:1.65',
      lastUpdate: '5 min ago'
    },
    {
      pair: 'XAU/USD',
      signal: 'BUY',
      confidence: 78,
      strategy: 'Fibonacci + Trend',
      timeframe: '4H',
      entry: '2052.30',
      sl: '2035.00',
      tp: '2085.00',
      riskReward: '1:1.89',
      lastUpdate: '8 min ago'
    },
    {
      pair: 'BTC/USD',
      signal: 'BUY',
      confidence: 95,
      strategy: 'Breakout',
      timeframe: '4H',
      entry: '43500',
      sl: '42000',
      tp: '46000',
      riskReward: '1:1.67',
      lastUpdate: '12 min ago'
    }
  ];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  const getSignalColor = (signal: string) => {
    return signal === 'BUY' ? 'text-success-400' : 'text-error-400';
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-success-400';
    if (confidence >= 75) return 'text-warning-400';
    return 'text-error-400';
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
                <span className="text-sm text-neutral-400 ml-2">Market Scanner</span>
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
            Market <span className="bg-gradient-primary bg-clip-text text-transparent">Scanner</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Scan 50+ currency pairs and crypto markets for AI-identified trading opportunities. Get real-time alerts for high-probability setups across multiple timeframes.
          </p>
        </motion.div>

        {/* Scanner Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white">Scanner Configuration</h2>
            <motion.button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 disabled:opacity-50"
              whileHover={{ scale: isScanning ? 1 : 1.05 }}
              whileTap={{ scale: isScanning ? 1 : 0.95 }}
            >
              <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'Scanning...' : 'Scan Markets'}</span>
            </motion.button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Timeframe
              </label>
              <div className="flex flex-wrap gap-2">
                {timeframes.map((tf) => (
                  <motion.button
                    key={tf}
                    onClick={() => setSelectedTimeframe(tf)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedTimeframe === tf
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

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Strategy Filter
              </label>
              <select 
                value={selectedStrategy}
                onChange={(e) => setSelectedStrategy(e.target.value)}
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white"
              >
                {strategies.map(strategy => (
                  <option key={strategy.id} value={strategy.id}>{strategy.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Min Confidence
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
                <span>95%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Notifications
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-primary-500" defaultChecked />
                  <span className="text-neutral-300 text-sm">Email alerts</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-primary-500" defaultChecked />
                  <span className="text-neutral-300 text-sm">Push notifications</span>
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scan Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-neutral-800/50">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Scan Results</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-success-400" />
                  <span className="text-success-400 text-sm">Live Scanning</span>
                </div>
                <div className="text-neutral-400 text-sm">
                  Last updated: {isScanning ? 'Scanning...' : '2 min ago'}
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800/50">
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">Pair</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">Signal</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">Confidence</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">Strategy</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">Entry</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">SL/TP</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">R:R</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">Updated</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-neutral-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {scanResults.map((result, index) => (
                  <motion.tr
                    key={result.pair}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-neutral-800/50 hover:bg-neutral-800/20 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="font-medium text-white">{result.pair}</div>
                      <div className="text-xs text-neutral-400">{result.timeframe}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        result.signal === 'BUY' ? 'bg-success-500/20 text-success-400' : 'bg-error-500/20 text-error-400'
                      }`}>
                        {result.signal}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <div className={`font-bold ${getConfidenceColor(result.confidence)}`}>
                          {result.confidence}%
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(result.confidence / 20) ? 'text-warning-400 fill-current' : 'text-neutral-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-neutral-300 text-sm">{result.strategy}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-white font-medium">{result.entry}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-xs">
                        <div className="text-error-400">SL: {result.sl}</div>
                        <div className="text-success-400">TP: {result.tp}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-primary-400 font-medium">{result.riskReward}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-xs text-neutral-400">
                        <Clock className="w-3 h-3" />
                        <span>{result.lastUpdate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <motion.button
                          className="p-1 text-primary-400 hover:text-primary-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="View Analysis"
                        >
                          <Search className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-1 text-warning-400 hover:text-warning-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Set Alert"
                        >
                          <Bell className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Scanner Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-8"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center">
            <Search className="w-8 h-8 text-primary-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">52</div>
            <div className="text-sm text-neutral-400">Markets Scanned</div>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-success-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">4</div>
            <div className="text-sm text-neutral-400">Opportunities Found</div>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-warning-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">87%</div>
            <div className="text-sm text-neutral-400">Avg Confidence</div>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center">
            <Clock className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">2.3s</div>
            <div className="text-sm text-neutral-400">Scan Duration</div>
          </div>
        </motion.div>

        {/* Alert Setup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Never Miss an <span className="bg-gradient-primary bg-clip-text text-transparent">Opportunity</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Set up custom alerts to get notified instantly when high-probability setups are detected across your favorite markets.
            </p>
            <motion.button
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
              <span>Setup Custom Alerts</span>
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MarketScannerPage;