import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Cpu, 
  Globe, 
  Settings, 
  Bell, 
  User, 
  Search,
  Filter,
  Download,
  RefreshCw,
  Zap,
  Target,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Activity,
  DollarSign,
  Percent,
  Clock,
  Eye,
  Play,
  Pause,
  MoreVertical,
  Users,
  PieChart,
  Command,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { useStore } from '../stores/useStore';
import CommandPalette from './CommandPalette';
import LiveQuoteTicker from './LiveQuoteTicker';
import StrategyBuilder from './StrategyBuilder';
import RiskAnalytics from './RiskAnalytics';
import SocialFeed from './SocialFeed';
import TeamManagement from './TeamManagement';

interface DashboardProps {
  onNavigateToLanding: () => void;
}

interface AIModel {
  name: string;
  status: 'active' | 'inactive' | 'processing';
  confidence: number;
  signal: 'BUY' | 'SELL' | 'HOLD';
  latency: number;
}

interface Trade {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  entry: number;
  current: number;
  pnl: number;
  confidence: number;
  timestamp: Date;
  status: 'open' | 'closed' | 'pending';
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigateToLanding }) => {
  const { 
    user, 
    notifications, 
    addNotification, 
    markNotificationRead,
    toggleCommandPalette,
    sidebarCollapsed,
    toggleSidebar
  } = useStore();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedChart, setUploadedChart] = useState<string | null>(null);
  const [selectedPair, setSelectedPair] = useState('EURUSD');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  // Real-time data simulation
  const [aiModels, setAiModels] = useState<AIModel[]>([
    { name: 'X.AI Grok', status: 'active', confidence: 4.2, signal: 'BUY', latency: 45 },
    { name: 'GPT-4 Turbo', status: 'active', confidence: 3.8, signal: 'BUY', latency: 52 },
    { name: 'Claude 4 Sonnet', status: 'active', confidence: 4.5, signal: 'BUY', latency: 38 },
    { name: 'Gemini 2.5 Pro', status: 'processing', confidence: 0, signal: 'HOLD', latency: 0 },
    { name: 'Mistral Large', status: 'active', confidence: 3.9, signal: 'SELL', latency: 41 },
    { name: 'DeepSeek R1', status: 'active', confidence: 4.1, signal: 'BUY', latency: 47 },
    { name: 'o4-mini-high', status: 'inactive', confidence: 0, signal: 'HOLD', latency: 0 },
    { name: 'Anthropic Opus', status: 'active', confidence: 4.3, signal: 'BUY', latency: 43 }
  ]);

  const [trades, setTrades] = useState<Trade[]>([
    {
      id: '1',
      pair: 'EURUSD',
      type: 'BUY',
      entry: 1.0845,
      current: 1.0867,
      pnl: 220.50,
      confidence: 4.2,
      timestamp: new Date(Date.now() - 3600000),
      status: 'open'
    },
    {
      id: '2',
      pair: 'GBPUSD',
      type: 'SELL',
      entry: 1.2634,
      current: 1.2618,
      pnl: 160.75,
      confidence: 3.8,
      timestamp: new Date(Date.now() - 7200000),
      status: 'open'
    },
    {
      id: '3',
      pair: 'XAUUSD',
      type: 'BUY',
      entry: 2045.30,
      current: 2052.80,
      pnl: 375.00,
      confidence: 4.5,
      timestamp: new Date(Date.now() - 1800000),
      status: 'open'
    }
  ]);

  const [metrics, setMetrics] = useState({
    totalPnL: 756.25,
    winRate: 73.2,
    activeSignals: 12,
    apiUptime: 99.94,
    dailyAnalyses: 247,
    consensusStrength: 4.1
  });

  // Simulate real-time updates
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      // Update AI models
      setAiModels(prev => prev.map(model => ({
        ...model,
        confidence: model.status === 'active' ? 
          Math.max(1, Math.min(5, model.confidence + (Math.random() - 0.5) * 0.2)) : 
          model.confidence,
        latency: model.status === 'active' ? 
          Math.max(20, Math.min(100, model.latency + (Math.random() - 0.5) * 10)) : 
          model.latency
      })));

      // Update trades
      setTrades(prev => prev.map(trade => ({
        ...trade,
        current: trade.current + (Math.random() - 0.5) * 0.001,
        pnl: trade.pnl + (Math.random() - 0.5) * 10
      })));

      // Update metrics
      setMetrics(prev => ({
        ...prev,
        totalPnL: prev.totalPnL + (Math.random() - 0.5) * 20,
        dailyAnalyses: prev.dailyAnalyses + Math.floor(Math.random() * 3),
        consensusStrength: Math.max(1, Math.min(5, prev.consensusStrength + (Math.random() - 0.5) * 0.1))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedChart(e.target?.result as string);
        setIsAnalyzing(true);
        
        // Simulate analysis
        setTimeout(() => {
          setIsAnalyzing(false);
          addNotification({
            type: 'success',
            title: 'Analysis Complete',
            message: 'Chart analysis complete! 6/8 models suggest BUY with 4.2/5 confidence.'
          });
        }, 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const getConsensusSignal = () => {
    const activeModels = aiModels.filter(m => m.status === 'active');
    const buyCount = activeModels.filter(m => m.signal === 'BUY').length;
    const sellCount = activeModels.filter(m => m.signal === 'SELL').length;
    
    if (buyCount > sellCount) return { signal: 'BUY', strength: buyCount / activeModels.length };
    if (sellCount > buyCount) return { signal: 'SELL', strength: sellCount / activeModels.length };
    return { signal: 'HOLD', strength: 0.5 };
  };

  const consensus = getConsensusSignal();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'analysis', label: 'AI Analysis', icon: Cpu },
    { id: 'trades', label: 'Active Trades', icon: TrendingUp },
    { id: 'strategy', label: 'Strategy Builder', icon: Target },
    { id: 'risk', label: 'Risk Analytics', icon: Shield },
    { id: 'social', label: 'Social Feed', icon: Users },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Live Quote Ticker */}
      <LiveQuoteTicker />

      {/* Header */}
      <header className="bg-gradient-glass backdrop-blur-sm border-b border-neutral-800/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sidebarCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
              </motion.button>
              
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  YoForex AI
                </span>
                <span className="text-sm text-neutral-400 ml-2">Dashboard</span>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search or press ⌘K..."
                  onClick={toggleCommandPalette}
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
                  readOnly
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`p-2 rounded-lg transition-colors ${
                  autoRefresh ? 'bg-success-500/20 text-success-400' : 'bg-neutral-800/50 text-neutral-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
              </motion.button>

              <div className="relative">
                <motion.button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-white transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bell className="w-4 h-4" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-12 w-80 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl z-50"
                    >
                      <div className="p-4 border-b border-neutral-800">
                        <h3 className="font-semibold">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="p-4 text-neutral-400 text-sm">No new notifications</div>
                        ) : (
                          notifications.slice(0, 5).map((notification) => (
                            <div 
                              key={notification.id} 
                              className={`p-4 border-b border-neutral-800/50 last:border-b-0 cursor-pointer hover:bg-neutral-800/20 ${
                                !notification.read ? 'bg-primary-500/5' : ''
                              }`}
                              onClick={() => markNotificationRead(notification.id)}
                            >
                              <div className="flex items-start space-x-2">
                                {notification.type === 'success' && <CheckCircle className="w-4 h-4 text-success-400 mt-0.5" />}
                                {notification.type === 'warning' && <AlertTriangle className="w-4 h-4 text-warning-400 mt-0.5" />}
                                {notification.type === 'error' && <XCircle className="w-4 h-4 text-error-400 mt-0.5" />}
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-neutral-300">{notification.title}</p>
                                  <p className="text-xs text-neutral-400 mt-1">{notification.message}</p>
                                  <p className="text-xs text-neutral-500 mt-1">
                                    {notification.timestamp.toLocaleTimeString()}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-1" />
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={onNavigateToLanding}
                className="p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 bg-neutral-800/30 rounded-lg p-1 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-700/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-4 h-4 text-success-400" />
                    <span className="text-sm text-neutral-400">Total P&L</span>
                  </div>
                  <div className="text-2xl font-bold text-success-400">
                    ${metrics.totalPnL.toFixed(2)}
                  </div>
                </div>

                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Percent className="w-4 h-4 text-primary-400" />
                    <span className="text-sm text-neutral-400">Win Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-400">
                    {metrics.winRate.toFixed(1)}%
                  </div>
                </div>

                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-4 h-4 text-accent-400" />
                    <span className="text-sm text-neutral-400">Active Signals</span>
                  </div>
                  <div className="text-2xl font-bold text-accent-400">
                    {metrics.activeSignals}
                  </div>
                </div>

                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-success-400" />
                    <span className="text-sm text-neutral-400">API Uptime</span>
                  </div>
                  <div className="text-2xl font-bold text-success-400">
                    {metrics.apiUptime.toFixed(2)}%
                  </div>
                </div>

                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="w-4 h-4 text-warning-400" />
                    <span className="text-sm text-neutral-400">Daily Analyses</span>
                  </div>
                  <div className="text-2xl font-bold text-warning-400">
                    {metrics.dailyAnalyses}
                  </div>
                </div>

                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Cpu className="w-4 h-4 text-primary-400" />
                    <span className="text-sm text-neutral-400">Consensus</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-400">
                    {metrics.consensusStrength.toFixed(1)}/5
                  </div>
                </div>
              </div>

              {/* Consensus Panel */}
              <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">AI Consensus</h2>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    consensus.signal === 'BUY' ? 'bg-success-500/20 text-success-400' :
                    consensus.signal === 'SELL' ? 'bg-error-500/20 text-error-400' :
                    'bg-neutral-500/20 text-neutral-400'
                  }`}>
                    {consensus.signal} Signal
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Consensus Meter */}
                  <div>
                    <div className="flex justify-between text-sm text-neutral-400 mb-2">
                      <span>SELL</span>
                      <span>Strength: {(consensus.strength * 100).toFixed(0)}%</span>
                      <span>BUY</span>
                    </div>
                    <div className="relative h-4 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full rounded-full ${
                          consensus.signal === 'BUY' ? 'bg-gradient-to-r from-success-500 to-success-400' :
                          consensus.signal === 'SELL' ? 'bg-gradient-to-r from-error-500 to-error-400' :
                          'bg-gradient-to-r from-neutral-500 to-neutral-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${consensus.strength * 100}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>

                  {/* Model Status */}
                  <div className="grid grid-cols-2 gap-2">
                    {aiModels.slice(0, 4).map((model) => (
                      <div key={model.name} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-300">{model.name.split(' ')[0]}</span>
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${
                            model.status === 'active' ? 'bg-success-400' :
                            model.status === 'processing' ? 'bg-warning-400 animate-pulse' :
                            'bg-neutral-500'
                          }`} />
                          <span className={`text-xs ${
                            model.signal === 'BUY' ? 'text-success-400' :
                            model.signal === 'SELL' ? 'text-error-400' :
                            'text-neutral-400'
                          }`}>
                            {model.signal}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Trades */}
              <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Recent Trades</h2>
                  <motion.button
                    onClick={() => setActiveTab('trades')}
                    className="text-primary-400 hover:text-primary-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    View All →
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {trades.slice(0, 3).map((trade) => (
                    <div key={trade.id} className="flex items-center justify-between p-4 bg-neutral-800/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          trade.type === 'BUY' ? 'bg-success-400' : 'bg-error-400'
                        }`} />
                        <div>
                          <div className="font-medium">{trade.pair}</div>
                          <div className="text-sm text-neutral-400">
                            {trade.type} @ {trade.entry.toFixed(4)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${
                          trade.pnl >= 0 ? 'text-success-400' : 'text-error-400'
                        }`}>
                          {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                        </div>
                        <div className="text-sm text-neutral-400">
                          Confidence: {trade.confidence.toFixed(1)}/5
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analysis' && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Chart Upload */}
              <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">Upload Chart for Analysis</h2>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Upload Area */}
                  <div>
                    <label className="block w-full">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <div className="border-2 border-dashed border-neutral-700 rounded-lg p-8 text-center hover:border-primary-500 transition-colors cursor-pointer">
                        <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                        <p className="text-neutral-300 mb-2">Drop your chart here or click to upload</p>
                        <p className="text-sm text-neutral-500">Supports PNG, JPG, WebP up to 10MB</p>
                      </div>
                    </label>

                    {uploadedChart && (
                      <div className="mt-4">
                        <img
                          src={uploadedChart}
                          alt="Uploaded chart"
                          className="w-full h-48 object-cover rounded-lg border border-neutral-700"
                        />
                      </div>
                    )}
                  </div>

                  {/* Analysis Status */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-300">Analysis Status</span>
                      {isAnalyzing ? (
                        <div className="flex items-center space-x-2 text-warning-400">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-success-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>Ready</span>
                        </div>
                      )}
                    </div>

                    {isAnalyzing && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>67%</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '67%' }}
                            transition={{ duration: 2 }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="text-sm text-neutral-400">
                      {isAnalyzing ? 
                        'Running analysis across 8 AI models...' : 
                        'Upload a chart to begin AI analysis'
                      }
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Models Grid */}
              <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">AI Model Status</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                    <span className="text-sm text-neutral-400">Live Updates</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {aiModels.map((model) => (
                    <motion.div
                      key={model.name}
                      className="bg-neutral-800/30 rounded-lg p-4 border border-neutral-700/50"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-sm">{model.name}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          model.status === 'active' ? 'bg-success-400' :
                          model.status === 'processing' ? 'bg-warning-400 animate-pulse' :
                          'bg-neutral-500'
                        }`} />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-400">Signal</span>
                          <span className={`font-medium ${
                            model.signal === 'BUY' ? 'text-success-400' :
                            model.signal === 'SELL' ? 'text-error-400' :
                            'text-neutral-400'
                          }`}>
                            {model.signal}
                          </span>
                        </div>

                        {model.status === 'active' && (
                          <>
                            <div className="flex justify-between text-xs">
                              <span className="text-neutral-400">Confidence</span>
                              <span className="text-primary-400">{model.confidence.toFixed(1)}/5</span>
                            </div>

                            <div className="flex justify-between text-xs">
                              <span className="text-neutral-400">Latency</span>
                              <span className="text-neutral-300">{model.latency}ms</span>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'trades' && (
            <motion.div
              key="trades"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Trades Table */}
              <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Active Trades</h2>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={() => addNotification({
                        type: 'success',
                        title: 'New Trade Signal',
                        message: 'New trade signal detected for GBPJPY'
                      })}
                      className="bg-gradient-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      New Trade
                    </motion.button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-800">
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Pair</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Type</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Entry</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Current</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">P&L</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Confidence</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Time</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trades.map((trade) => (
                        <motion.tr
                          key={trade.id}
                          className="border-b border-neutral-800/50 hover:bg-neutral-800/20"
                          whileHover={{ backgroundColor: 'rgba(64, 64, 64, 0.1)' }}
                        >
                          <td className="py-4 px-4 font-medium">{trade.pair}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              trade.type === 'BUY' ? 'bg-success-500/20 text-success-400' : 'bg-error-500/20 text-error-400'
                            }`}>
                              {trade.type}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-neutral-300">{trade.entry.toFixed(4)}</td>
                          <td className="py-4 px-4 text-neutral-300">{trade.current.toFixed(4)}</td>
                          <td className="py-4 px-4">
                            <span className={`font-medium ${
                              trade.pnl >= 0 ? 'text-success-400' : 'text-error-400'
                            }`}>
                              {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-primary-400">{trade.confidence.toFixed(1)}/5</td>
                          <td className="py-4 px-4 text-neutral-400 text-sm">
                            {trade.timestamp.toLocaleTimeString()}
                          </td>
                          <td className="py-4 px-4">
                            <motion.button
                              className="text-neutral-400 hover:text-white"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <MoreVertical className="w-4 h-4" />
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'strategy' && <StrategyBuilder />}
          {activeTab === 'risk' && <RiskAnalytics />}
          {activeTab === 'social' && <SocialFeed />}
          {activeTab === 'team' && <TeamManagement />}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Settings Panels */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* API Settings */}
                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">API Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Primary API Key
                      </label>
                      <input
                        type="password"
                        value="sk-••••••••••••••••••••••••••••••••"
                        className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Backup API Key
                      </label>
                      <input
                        type="password"
                        value="sk-••••••••••••••••••••••••••••••••"
                        className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
                        readOnly
                      />
                    </div>
                    <motion.button
                      className="bg-primary-500/20 text-primary-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-500/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Test Connection
                    </motion.button>
                  </div>
                </div>

                {/* Trading Settings */}
                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Trading Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-300">Auto-trading</span>
                      <motion.button
                        className="relative w-12 h-6 bg-neutral-700 rounded-full"
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
                      </motion.button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-300">Risk Management</span>
                      <motion.button
                        className="relative w-12 h-6 bg-primary-500 rounded-full"
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                      </motion.button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Max Risk per Trade (%)
                      </label>
                      <input
                        type="number"
                        value="2.5"
                        className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Command Palette */}
      <CommandPalette />
    </div>
  );
};

export default Dashboard;