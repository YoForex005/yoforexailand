import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  Shield,
  Calculator,
  DollarSign,
  Percent,
  TrendingUp,
  AlertTriangle,
  Target,
  BarChart3
} from 'lucide-react';

interface RiskCalculatorPageProps {
  onNavigateBack: () => void;
}

const RiskCalculatorPage: React.FC<RiskCalculatorPageProps> = ({ onNavigateBack }) => {
  const [accountBalance, setAccountBalance] = useState(10000);
  const [riskPercentage, setRiskPercentage] = useState(2);
  const [entryPrice, setEntryPrice] = useState(1.0850);
  const [stopLoss, setStopLoss] = useState(1.0800);
  const [takeProfit, setTakeProfit] = useState(1.0950);

  const calculateRisk = () => {
    const riskAmount = (accountBalance * riskPercentage) / 100;
    const pipValue = Math.abs(entryPrice - stopLoss) * 10000;
    const positionSize = riskAmount / (pipValue * 10); // Assuming $10 per pip for standard lot
    const potentialProfit = Math.abs(takeProfit - entryPrice) * positionSize * 10000;
    const riskRewardRatio = potentialProfit / riskAmount;

    return {
      riskAmount,
      pipValue,
      positionSize: Math.max(0.01, positionSize),
      potentialProfit,
      riskRewardRatio
    };
  };

  const calculations = calculateRisk();

  const riskLevels = [
    { level: 'Conservative', percentage: 1, color: 'text-success-400', description: 'Safest approach for beginners' },
    { level: 'Moderate', percentage: 2, color: 'text-warning-400', description: 'Balanced risk for most traders' },
    { level: 'Aggressive', percentage: 3, color: 'text-error-400', description: 'Higher risk for experienced traders' },
    { level: 'Very Aggressive', percentage: 5, color: 'text-error-500', description: 'Maximum recommended risk' }
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
                <span className="text-sm text-neutral-400 ml-2">Risk Calculator</span>
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
            Risk <span className="bg-gradient-primary bg-clip-text text-transparent">Calculator</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Calculate optimal position sizes, risk-reward ratios, and manage your trading risk with professional-grade tools. Educational purposes only—not financial advice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-primary-400" />
                <h2 className="text-xl font-bold text-white">Trade Parameters</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Account Balance ($)
                  </label>
                  <input
                    type="number"
                    value={accountBalance}
                    onChange={(e) => setAccountBalance(Number(e.target.value))}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Risk Per Trade (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={riskPercentage}
                    onChange={(e) => setRiskPercentage(Number(e.target.value))}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Entry Price
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value))}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Stop Loss
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(Number(e.target.value))}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Take Profit
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    value={takeProfit}
                    onChange={(e) => setTakeProfit(Number(e.target.value))}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
            </motion.div>

            {/* Risk Level Guide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
            >
              <h3 className="font-bold text-white mb-4">Risk Level Guide</h3>
              <div className="space-y-3">
                {riskLevels.map((level, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-neutral-800/30 rounded">
                    <div>
                      <div className={`font-medium ${level.color}`}>{level.level}</div>
                      <div className="text-xs text-neutral-400">{level.description}</div>
                    </div>
                    <div className={`font-bold ${level.color}`}>{level.percentage}%</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calculation Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Calculation Results</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="text-center p-6 bg-neutral-800/30 rounded-lg">
                    <DollarSign className="w-8 h-8 text-error-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-error-400 mb-1">
                      ${calculations.riskAmount.toFixed(2)}
                    </div>
                    <div className="text-sm text-neutral-400">Risk Amount</div>
                  </div>

                  <div className="text-center p-6 bg-neutral-800/30 rounded-lg">
                    <Target className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary-400 mb-1">
                      {calculations.positionSize.toFixed(2)}
                    </div>
                    <div className="text-sm text-neutral-400">Position Size (Lots)</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-neutral-800/30 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-success-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-success-400 mb-1">
                      ${calculations.potentialProfit.toFixed(2)}
                    </div>
                    <div className="text-sm text-neutral-400">Potential Profit</div>
                  </div>

                  <div className="text-center p-6 bg-neutral-800/30 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-warning-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-warning-400 mb-1">
                      1:{calculations.riskRewardRatio.toFixed(2)}
                    </div>
                    <div className="text-sm text-neutral-400">Risk:Reward Ratio</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-neutral-800/30 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Trade Summary</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Pip Value:</span>
                      <span className="text-white">{calculations.pipValue.toFixed(1)} pips</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Risk %:</span>
                      <span className="text-white">{riskPercentage}%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Profit %:</span>
                      <span className="text-success-400">
                        {((calculations.potentialProfit / accountBalance) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Break Even:</span>
                      <span className="text-neutral-300">{entryPrice.toFixed(4)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Risk Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Risk Assessment</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className={`text-center p-4 rounded-lg ${riskPercentage <= 2 ? 'bg-success-500/20 border border-success-500/50' :
                  riskPercentage <= 3 ? 'bg-warning-500/20 border border-warning-500/50' :
                    'bg-error-500/20 border border-error-500/50'
                  }`}>
                  <Shield className={`w-8 h-8 mx-auto mb-2 ${riskPercentage <= 2 ? 'text-success-400' :
                    riskPercentage <= 3 ? 'text-warning-400' :
                      'text-error-400'
                    }`} />
                  <div className="font-semibold text-white mb-1">
                    {riskPercentage <= 2 ? 'Low Risk' :
                      riskPercentage <= 3 ? 'Moderate Risk' :
                        'High Risk'}
                  </div>
                  <div className="text-xs text-neutral-400">Current risk level</div>
                </div>

                <div className="text-center p-4 bg-neutral-800/30 rounded-lg">
                  <Percent className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <div className="font-semibold text-white mb-1">
                    {calculations.riskRewardRatio >= 2 ? 'Excellent' :
                      calculations.riskRewardRatio >= 1.5 ? 'Good' :
                        'Poor'}
                  </div>
                  <div className="text-xs text-neutral-400">Risk:Reward rating</div>
                </div>

                <div className="text-center p-4 bg-neutral-800/30 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-warning-400 mx-auto mb-2" />
                  <div className="font-semibold text-white mb-1">
                    {calculations.positionSize <= 1 ? 'Safe' :
                      calculations.positionSize <= 2 ? 'Moderate' :
                        'Large'}
                  </div>
                  <div className="text-xs text-neutral-400">Position size</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-warning-500/10 border border-warning-500/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-warning-400 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-warning-400">Risk Disclaimer</div>
                    <div className="text-xs text-neutral-300 mt-1">
                      This calculator is for educational purposes only. Past performance does not guarantee future results.
                      Always consider your risk tolerance and never risk more than you can afford to lose.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Position Sizing Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Position Sizing Methods</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-400 mb-2">Fixed Percentage</h4>
                  <p className="text-neutral-300 text-sm mb-2">
                    Risk the same percentage of your account on every trade.
                  </p>
                  <div className="text-xs text-neutral-400">
                    Current: {riskPercentage}% = ${calculations.riskAmount.toFixed(2)}
                  </div>
                </div>

                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-success-400 mb-2">Kelly Criterion</h4>
                  <p className="text-neutral-300 text-sm mb-2">
                    Optimal position size based on win rate and average win/loss.
                  </p>
                  <div className="text-xs text-neutral-400">
                    Recommended: 1.8% (based on historical data)
                  </div>
                </div>

                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-warning-400 mb-2">Fixed Dollar</h4>
                  <p className="text-neutral-300 text-sm mb-2">
                    Risk the same dollar amount on every trade.
                  </p>
                  <div className="text-xs text-neutral-400">
                    Example: Always risk $200 per trade
                  </div>
                </div>

                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-accent-400 mb-2">Volatility-Based</h4>
                  <p className="text-neutral-300 text-sm mb-2">
                    Adjust position size based on market volatility.
                  </p>
                  <div className="text-xs text-neutral-400">
                    Lower size during high volatility periods
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RiskCalculatorPage;