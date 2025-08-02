import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { AlertTriangle, Shield, TrendingDown, Activity } from 'lucide-react';

const RiskAnalytics: React.FC = () => {
  // Mock correlation data
  const correlationData = [
    ['', 'EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'BTCUSD'],
    ['EURUSD', 1.00, 0.85, -0.72, 0.23, 0.15],
    ['GBPUSD', 0.85, 1.00, -0.68, 0.31, 0.22],
    ['USDJPY', -0.72, -0.68, 1.00, -0.18, -0.12],
    ['XAUUSD', 0.23, 0.31, -0.18, 1.00, 0.67],
    ['BTCUSD', 0.15, 0.22, -0.12, 0.67, 1.00]
  ];

  // Mock exposure data
  const exposureData = [
    { name: 'Forex', value: 65, color: '#0ea5e9' },
    { name: 'Commodities', value: 20, color: '#f59e0b' },
    { name: 'Crypto', value: 10, color: '#d946ef' },
    { name: 'Indices', value: 5, color: '#22c55e' }
  ];

  // Mock VaR data
  const varData = [
    { date: '2024-01-01', var95: -2.3, var99: -3.8 },
    { date: '2024-01-02', var95: -2.1, var99: -3.5 },
    { date: '2024-01-03', var95: -2.7, var99: -4.2 },
    { date: '2024-01-04', var95: -2.0, var99: -3.3 },
    { date: '2024-01-05', var95: -2.4, var99: -3.9 }
  ];

  const getCorrelationColor = (value: number): string => {
    if (value > 0.7) return 'bg-error-500';
    if (value > 0.3) return 'bg-warning-500';
    if (value > -0.3) return 'bg-neutral-600';
    if (value > -0.7) return 'bg-primary-500';
    return 'bg-success-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Risk & Exposure Analytics</h2>
          <p className="text-neutral-400">Monitor portfolio risk and correlations</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Correlation Matrix */}
        <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="w-5 h-5 text-primary-400" />
            <h3 className="text-lg font-bold text-white">Correlation Matrix</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {correlationData.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-1">
                        {i === 0 || j === 0 ? (
                          <div className="text-xs font-medium text-neutral-400 p-2 text-center">
                            {cell}
                          </div>
                        ) : (
                          <motion.div
                            className={`w-12 h-12 rounded flex items-center justify-center text-xs font-medium text-white ${
                              getCorrelationColor(cell as number)
                            }`}
                            whileHover={{ scale: 1.1 }}
                            title={`Correlation: ${cell}`}
                          >
                            {typeof cell === 'number' ? cell.toFixed(2) : cell}
                          </motion.div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-error-500 rounded"></div>
              <span>High (+0.7)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neutral-600 rounded"></div>
              <span>Neutral</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success-500 rounded"></div>
              <span>Inverse (-0.7)</span>
            </div>
          </div>
        </div>

        {/* Exposure Breakdown */}
        <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="w-5 h-5 text-success-400" />
            <h3 className="text-lg font-bold text-white">Portfolio Exposure</h3>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={exposureData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {exposureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Exposure']}
                  contentStyle={{
                    backgroundColor: '#262626',
                    border: '1px solid #404040',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2">
            {exposureData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-neutral-300">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* VaR Calculator */}
        <div className="lg:col-span-2 bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-warning-400" />
              <h3 className="text-lg font-bold text-white">Value at Risk (VaR)</h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-neutral-800/50 rounded-lg p-3">
                <div className="text-lg font-bold text-error-400">-2.4%</div>
                <div className="text-xs text-neutral-400">1-Day VaR (95%)</div>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-3">
                <div className="text-lg font-bold text-error-500">-3.9%</div>
                <div className="text-xs text-neutral-400">1-Day VaR (99%)</div>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={varData}>
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#a3a3a3', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#a3a3a3', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#262626',
                    border: '1px solid #404040',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="var95" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="VaR 95%"
                />
                <Line 
                  type="monotone" 
                  dataKey="var99" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="VaR 99%"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 p-4 bg-warning-500/10 border border-warning-500/20 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-warning-400 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-warning-400">Risk Alert</div>
                <div className="text-xs text-neutral-300 mt-1">
                  Current portfolio VaR exceeds recommended threshold. Consider reducing position sizes or diversifying exposure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalytics;