import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useStore } from '../stores/useStore';

const LiveQuoteTicker: React.FC = () => {
  const { watchlist, liveQuotes, updateLiveQuotes } = useStore();
  const [tickerWidth, setTickerWidth] = useState(0);

  // Simulate live quote updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newQuotes: Record<string, { bid: number; ask: number; change: number }> = {};
      
      watchlist.forEach(pair => {
        const basePrice = getBasePrice(pair);
        const spread = basePrice * 0.0001; // 1 pip spread
        const change = (Math.random() - 0.5) * 0.002; // ±0.2% change
        
        newQuotes[pair] = {
          bid: basePrice + change,
          ask: basePrice + change + spread,
          change: change
        };
      });
      
      updateLiveQuotes(newQuotes);
    }, 1000);

    return () => clearInterval(interval);
  }, [watchlist, updateLiveQuotes]);

  const getBasePrice = (pair: string): number => {
    const basePrices: Record<string, number> = {
      'EURUSD': 1.0850,
      'GBPUSD': 1.2650,
      'USDJPY': 149.50,
      'XAUUSD': 2050.00,
      'BTCUSD': 43500.00
    };
    return basePrices[pair] || 1.0000;
  };

  return (
    <div className="bg-neutral-900/50 border-b border-neutral-800/50 overflow-hidden">
      <motion.div
        className="flex items-center space-x-8 py-2 px-4"
        animate={{ x: [-tickerWidth, window.innerWidth] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        onAnimationComplete={() => setTickerWidth(0)}
      >
        {watchlist.map(pair => {
          const quote = liveQuotes[pair];
          if (!quote) return null;

          return (
            <div key={pair} className="flex items-center space-x-3 whitespace-nowrap">
              <span className="font-medium text-white">{pair}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-neutral-300">
                  {quote.bid.toFixed(pair.includes('JPY') ? 2 : 4)}
                </span>
                <span className="text-xs text-neutral-500">/</span>
                <span className="text-sm text-neutral-300">
                  {quote.ask.toFixed(pair.includes('JPY') ? 2 : 4)}
                </span>
              </div>
              <div className={`flex items-center space-x-1 ${
                quote.change >= 0 ? 'text-success-400' : 'text-error-400'
              }`}>
                {quote.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span className="text-xs">
                  {quote.change >= 0 ? '+' : ''}{(quote.change * 100).toFixed(2)}%
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LiveQuoteTicker;