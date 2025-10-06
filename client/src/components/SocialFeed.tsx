import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Copy, TrendingUp, TrendingDown, Star, MessageCircle, Share, Eye } from 'lucide-react';
import { useStore } from '../stores/useStore';

interface Signal {
  id: string;
  trader: {
    name: string;
    avatar: string;
    verified: boolean;
    winRate: number;
    followers: number;
  };
  pair: string;
  type: 'BUY' | 'SELL';
  entry: number;
  target: number;
  stopLoss: number;
  confidence: number;
  reasoning: string;
  timestamp: Date;
  likes: number;
  comments: number;
  copies: number;
  isFollowing: boolean;
}

const SocialFeed: React.FC = () => {
  const { addNotification } = useStore();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [signals] = useState<Signal[]>([
    {
      id: '1',
      trader: {
        name: 'AlphaTrader_Pro',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100&fit=crop&crop=face',
        verified: true,
        winRate: 78.5,
        followers: 12400
      },
      pair: 'EURUSD',
      type: 'BUY',
      entry: 1.0845,
      target: 1.0920,
      stopLoss: 1.0790,
      confidence: 4.2,
      reasoning: 'Strong bullish divergence on 4H RSI, ECB dovish stance weakening. Target resistance at 1.0920.',
      timestamp: new Date(Date.now() - 1800000),
      likes: 156,
      comments: 23,
      copies: 89,
      isFollowing: false
    },
    {
      id: '2',
      trader: {
        name: 'GoldMaster_88',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=100&h=100&fit=crop&crop=face',
        verified: true,
        winRate: 82.1,
        followers: 8900
      },
      pair: 'XAUUSD',
      type: 'SELL',
      entry: 2052.30,
      target: 2035.00,
      stopLoss: 2065.00,
      confidence: 3.8,
      reasoning: 'Overbought conditions, DXY showing strength. Expecting pullback to 2035 support.',
      timestamp: new Date(Date.now() - 3600000),
      likes: 203,
      comments: 45,
      copies: 134,
      isFollowing: true
    },
    {
      id: '3',
      trader: {
        name: 'CryptoKing_2024',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face',
        verified: false,
        winRate: 71.3,
        followers: 5600
      },
      pair: 'BTCUSD',
      type: 'BUY',
      entry: 43500,
      target: 46000,
      stopLoss: 42000,
      confidence: 4.5,
      reasoning: 'Bitcoin breaking above key resistance, institutional buying pressure increasing. ETF approval momentum.',
      timestamp: new Date(Date.now() - 7200000),
      likes: 89,
      comments: 12,
      copies: 67,
      isFollowing: false
    }
  ]);

  const filters = [
    { id: 'all', label: 'All Signals', count: signals.length },
    { id: 'following', label: 'Following', count: signals.filter(s => s.isFollowing).length },
    { id: 'forex', label: 'Forex', count: signals.filter(s => !s.pair.includes('USD') || s.pair.includes('USD')).length },
    { id: 'crypto', label: 'Crypto', count: signals.filter(s => s.pair.includes('BTC')).length }
  ];

  const copyTrade = (signal: Signal) => {
    addNotification({
      type: 'success',
      title: 'Trade Copied',
      message: `Successfully copied ${signal.trader.name}'s ${signal.type} signal for ${signal.pair}`
    });
  };

  const followTrader = (traderId: string) => {
    addNotification({
      type: 'success',
      title: 'Following Trader',
      message: 'You will now receive notifications for their new signals'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Community Signals</h2>
          <p className="text-neutral-400">Follow top traders and copy their strategies</p>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-4 h-4" />
            <span>Find Traders</span>
          </motion.button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-1 bg-neutral-800/30 rounded-lg p-1">
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              selectedFilter === filter.id
                ? 'bg-gradient-primary text-white shadow-lg'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-700/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{filter.label}</span>
            <span className="text-xs bg-neutral-700 px-2 py-0.5 rounded-full">
              {filter.count}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Signals Feed */}
      <div className="space-y-4">
        {signals.map((signal) => (
          <motion.div
            key={signal.id}
            className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Trader Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={signal.trader.avatar}
                  alt={signal.trader.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-white">{signal.trader.name}</span>
                    {signal.trader.verified && (
                      <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-neutral-400">
                    <span>Win Rate: {signal.trader.winRate}%</span>
                    <span>{signal.trader.followers.toLocaleString()} followers</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => followTrader(signal.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    signal.isFollowing
                      ? 'bg-success-500/20 text-success-400'
                      : 'bg-primary-500/20 text-primary-400 hover:bg-primary-500/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {signal.isFollowing ? 'Following' : 'Follow'}
                </motion.button>
                <span className="text-xs text-neutral-500">
                  {signal.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>

            {/* Signal Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Pair</span>
                  <span className="font-medium text-white">{signal.pair}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Signal</span>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    signal.type === 'BUY' ? 'bg-success-500/20 text-success-400' : 'bg-error-500/20 text-error-400'
                  }`}>
                    {signal.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Entry</span>
                  <span className="font-medium text-white">{signal.entry.toFixed(4)}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Target</span>
                  <span className="font-medium text-success-400">{signal.target.toFixed(4)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Stop Loss</span>
                  <span className="font-medium text-error-400">{signal.stopLoss.toFixed(4)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Confidence</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(signal.confidence) ? 'text-warning-400 fill-current' : 'text-neutral-600'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-neutral-400 ml-1">{signal.confidence}/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reasoning */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-neutral-300 mb-2">Analysis</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">{signal.reasoning}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <div className="flex items-center space-x-6 text-sm text-neutral-400">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{signal.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{signal.comments}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Copy className="w-4 h-4" />
                  <span>{signal.copies}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => copyTrade(signal)}
                  className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Trade</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;