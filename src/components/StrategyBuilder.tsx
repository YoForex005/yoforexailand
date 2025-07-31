import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Plus, Play, Save, Trash2, BarChart3, TrendingUp } from 'lucide-react';

interface Rule {
  id: string;
  type: 'indicator' | 'condition' | 'action';
  indicator?: string;
  condition?: string;
  value?: number;
  action?: string;
}

const StrategyBuilder: React.FC = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [strategyName, setStrategyName] = useState('');
  const [isBacktesting, setIsBacktesting] = useState(false);
  const [backtestResults, setBacktestResults] = useState<any>(null);

  const indicators = [
    { value: 'rsi', label: 'RSI (Relative Strength Index)' },
    { value: 'sma', label: 'SMA (Simple Moving Average)' },
    { value: 'ema', label: 'EMA (Exponential Moving Average)' },
    { value: 'macd', label: 'MACD' },
    { value: 'bollinger', label: 'Bollinger Bands' }
  ];

  const conditions = [
    { value: 'greater_than', label: 'Greater Than' },
    { value: 'less_than', label: 'Less Than' },
    { value: 'crosses_above', label: 'Crosses Above' },
    { value: 'crosses_below', label: 'Crosses Below' },
    { value: 'equals', label: 'Equals' }
  ];

  const actions = [
    { value: 'buy', label: 'BUY' },
    { value: 'sell', label: 'SELL' },
    { value: 'close', label: 'CLOSE POSITION' },
    { value: 'alert', label: 'SEND ALERT' }
  ];

  const addRule = (type: 'indicator' | 'condition' | 'action') => {
    const newRule: Rule = {
      id: Date.now().toString(),
      type
    };
    setRules([...rules, newRule]);
  };

  const updateRule = (id: string, updates: Partial<Rule>) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, ...updates } : rule
    ));
  };

  const removeRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const runBacktest = async () => {
    setIsBacktesting(true);
    
    // Simulate backtest
    setTimeout(() => {
      setBacktestResults({
        totalReturn: 23.5,
        maxDrawdown: -8.2,
        winRate: 67.3,
        sharpeRatio: 1.42,
        totalTrades: 156,
        profitFactor: 1.85
      });
      setIsBacktesting(false);
    }, 3000);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(rules);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setRules(items);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Strategy Builder</h2>
          <p className="text-neutral-400">Create custom trading strategies with drag-and-drop rules</p>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button
            onClick={runBacktest}
            disabled={rules.length === 0 || isBacktesting}
            className="bg-accent-500/20 text-accent-400 px-4 py-2 rounded-lg font-medium hover:bg-accent-500/30 transition-colors disabled:opacity-50 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{isBacktesting ? 'Running...' : 'Backtest'}</span>
          </motion.button>
          <motion.button
            className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Save className="w-4 h-4" />
            <span>Save Strategy</span>
          </motion.button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Strategy Builder */}
        <div className="lg:col-span-2 space-y-6">
          {/* Strategy Name */}
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Strategy Name
            </label>
            <input
              type="text"
              value={strategyName}
              onChange={(e) => setStrategyName(e.target.value)}
              placeholder="Enter strategy name..."
              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500"
            />
          </div>

          {/* Rule Builder */}
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Strategy Rules</h3>
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => addRule('indicator')}
                  className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-lg text-sm hover:bg-primary-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  + Indicator
                </motion.button>
                <motion.button
                  onClick={() => addRule('condition')}
                  className="bg-accent-500/20 text-accent-400 px-3 py-1 rounded-lg text-sm hover:bg-accent-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  + Condition
                </motion.button>
                <motion.button
                  onClick={() => addRule('action')}
                  className="bg-success-500/20 text-success-400 px-3 py-1 rounded-lg text-sm hover:bg-success-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  + Action
                </motion.button>
              </div>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="rules">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
                    {rules.map((rule, index) => (
                      <Draggable key={rule.id} draggableId={rule.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-4 rounded-lg border-2 border-dashed ${
                              rule.type === 'indicator' ? 'border-primary-500/50 bg-primary-500/10' :
                              rule.type === 'condition' ? 'border-accent-500/50 bg-accent-500/10' :
                              'border-success-500/50 bg-success-500/10'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className={`text-sm font-medium ${
                                rule.type === 'indicator' ? 'text-primary-400' :
                                rule.type === 'condition' ? 'text-accent-400' :
                                'text-success-400'
                              }`}>
                                {rule.type.toUpperCase()}
                              </span>
                              <motion.button
                                onClick={() => removeRule(rule.id)}
                                className="text-error-400 hover:text-error-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Trash2 className="w-4 h-4" />
                              </motion.button>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              {rule.type === 'indicator' && (
                                <>
                                  <select
                                    value={rule.indicator || ''}
                                    onChange={(e) => updateRule(rule.id, { indicator: e.target.value })}
                                    className="bg-neutral-800/50 border border-neutral-700 rounded px-3 py-2 text-sm text-white"
                                  >
                                    <option value="">Select Indicator</option>
                                    {indicators.map(ind => (
                                      <option key={ind.value} value={ind.value}>{ind.label}</option>
                                    ))}
                                  </select>
                                  <input
                                    type="number"
                                    placeholder="Period"
                                    value={rule.value || ''}
                                    onChange={(e) => updateRule(rule.id, { value: Number(e.target.value) })}
                                    className="bg-neutral-800/50 border border-neutral-700 rounded px-3 py-2 text-sm text-white"
                                  />
                                </>
                              )}

                              {rule.type === 'condition' && (
                                <>
                                  <select
                                    value={rule.condition || ''}
                                    onChange={(e) => updateRule(rule.id, { condition: e.target.value })}
                                    className="bg-neutral-800/50 border border-neutral-700 rounded px-3 py-2 text-sm text-white"
                                  >
                                    <option value="">Select Condition</option>
                                    {conditions.map(cond => (
                                      <option key={cond.value} value={cond.value}>{cond.label}</option>
                                    ))}
                                  </select>
                                  <input
                                    type="number"
                                    placeholder="Value"
                                    value={rule.value || ''}
                                    onChange={(e) => updateRule(rule.id, { value: Number(e.target.value) })}
                                    className="bg-neutral-800/50 border border-neutral-700 rounded px-3 py-2 text-sm text-white"
                                  />
                                </>
                              )}

                              {rule.type === 'action' && (
                                <select
                                  value={rule.action || ''}
                                  onChange={(e) => updateRule(rule.id, { action: e.target.value })}
                                  className="bg-neutral-800/50 border border-neutral-700 rounded px-3 py-2 text-sm text-white col-span-2"
                                >
                                  <option value="">Select Action</option>
                                  {actions.map(action => (
                                    <option key={action.value} value={action.value}>{action.label}</option>
                                  ))}
                                </select>
                              )}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {rules.length === 0 && (
              <div className="text-center py-12 text-neutral-400">
                <Plus className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No rules added yet. Start building your strategy!</p>
              </div>
            )}
          </div>
        </div>

        {/* Backtest Results */}
        <div className="space-y-6">
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Backtest Results</h3>
            
            {isBacktesting ? (
              <div className="text-center py-8">
                <motion.div
                  className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-neutral-400">Running backtest...</p>
              </div>
            ) : backtestResults ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-success-400">
                      +{backtestResults.totalReturn}%
                    </div>
                    <div className="text-xs text-neutral-400">Total Return</div>
                  </div>
                  <div className="bg-neutral-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-error-400">
                      {backtestResults.maxDrawdown}%
                    </div>
                    <div className="text-xs text-neutral-400">Max Drawdown</div>
                  </div>
                  <div className="bg-neutral-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary-400">
                      {backtestResults.winRate}%
                    </div>
                    <div className="text-xs text-neutral-400">Win Rate</div>
                  </div>
                  <div className="bg-neutral-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-accent-400">
                      {backtestResults.sharpeRatio}
                    </div>
                    <div className="text-xs text-neutral-400">Sharpe Ratio</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-800">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Total Trades</span>
                    <span className="text-white">{backtestResults.totalTrades}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-neutral-400">Profit Factor</span>
                    <span className="text-white">{backtestResults.profitFactor}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-neutral-400">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Run a backtest to see results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyBuilder;