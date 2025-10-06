import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  Plug,
  MessageSquare,
  Smartphone,
  BarChart3,
  Code,
  CheckCircle,
  ExternalLink,
  Copy,
  Settings
} from 'lucide-react';

interface IntegrationGuidePageProps {
  onNavigateBack: () => void;
}

const IntegrationGuidePage: React.FC<IntegrationGuidePageProps> = ({ onNavigateBack }) => {
  const [activeTab, setActiveTab] = useState('telegram');

  const integrations = [
    {
      id: 'telegram',
      name: 'Telegram',
      icon: MessageSquare,
      description: 'Get instant trade alerts on your phone',
      color: 'from-primary-500 to-primary-600',
      steps: [
        'Create a new Telegram bot using @BotFather',
        'Copy your bot token from BotFather',
        'Add the bot token to your YoForex AI settings',
        'Start a chat with your bot and send /start',
        'Copy your chat ID and add it to settings',
        'Test the connection with a sample alert'
      ],
      code: `// Example bot setup
1. Message @BotFather: /newbot
2. Choose bot name: YourTradingBot
3. Copy token: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz
4. Add to YoForex AI settings
5. Test with /start command`
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: MessageSquare,
      description: 'Share alerts with your trading community',
      color: 'from-accent-500 to-violet-600',
      steps: [
        'Create a Discord webhook in your server',
        'Go to Server Settings > Integrations > Webhooks',
        'Click "New Webhook" and copy the URL',
        'Paste the webhook URL in YoForex AI settings',
        'Choose which alerts to send to Discord',
        'Test the integration with a sample message'
      ],
      code: `// Discord webhook URL format
https://discord.com/api/webhooks/123456789/abcdefghijklmnop

// Add to YoForex AI settings:
- Webhook URL: [paste URL above]
- Channel: #trading-alerts
- Alerts: All signals, High confidence only`
    },
    {
      id: 'mt5',
      name: 'MetaTrader 5',
      icon: BarChart3,
      description: 'Connect with your MT5 platform',
      color: 'from-success-500 to-success-600',
      steps: [
        'Enable "Allow WebRequest" in MT5 settings',
        'Add YoForex AI to allowed URLs list',
        'Install the YoForex AI Expert Advisor',
        'Configure your API key in EA settings',
        'Set up notification preferences',
        'Test connection with demo account first'
      ],
      code: `// MT5 EA Configuration
- API Key: [Your YoForex AI API key]
- Server URL: api.yoforex.co.in
- Notifications: Push, Email, Sound
- Risk Management: 2% per trade
- Auto-trading: Disabled (analysis only)`
    },
    {
      id: 'tradingview',
      name: 'TradingView',
      icon: BarChart3,
      description: 'Overlay AI signals on TradingView charts',
      color: 'from-warning-500 to-warning-600',
      steps: [
        'Install YoForex AI TradingView indicator',
        'Add your API key to indicator settings',
        'Configure signal display preferences',
        'Set up alert conditions for notifications',
        'Customize signal appearance and colors',
        'Save your chart template for future use'
      ],
      code: `// TradingView Pine Script Integration
//@version=5
indicator("YoForex AI Signals", overlay=true)

// API Configuration
api_key = input.string("", "YoForex AI API Key")
show_signals = input.bool(true, "Show AI Signals")
confidence_min = input.int(75, "Min Confidence %")`
    },
    {
      id: 'mobile',
      name: 'Mobile Apps',
      icon: Smartphone,
      description: 'Get push notifications on iOS/Android',
      color: 'from-error-500 to-error-600',
      steps: [
        'Download YoForex AI mobile app',
        'Log in with your account credentials',
        'Enable push notifications in app settings',
        'Configure notification preferences',
        'Set quiet hours and priority levels',
        'Test notifications with sample alert'
      ],
      code: `// Mobile App Features
- Real-time push notifications
- Offline signal history
- Quick trade calculator
- Community chat access
- Dark/light theme options
- Biometric authentication`
    },
    {
      id: 'api',
      name: 'Custom API',
      icon: Code,
      description: 'Build your own integrations',
      color: 'from-neutral-600 to-neutral-700',
      steps: [
        'Generate API key in your dashboard',
        'Review API documentation and endpoints',
        'Set up authentication headers',
        'Implement webhook endpoints for alerts',
        'Test with sandbox environment first',
        'Deploy to production with rate limiting'
      ],
      code: `// API Integration Example
curl -X POST https://api.yoforex.co.in/v1/analysis \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "pair": "EURUSD",
    "timeframe": "4H",
    "strategy": "breakout"
  }'`
    }
  ];

  const activeIntegration = integrations.find(i => i.id === activeTab);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

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
                <span className="text-sm text-neutral-400 ml-2">Integration Guide</span>
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
            Integration <span className="bg-gradient-primary bg-clip-text text-transparent">Guide</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Connect YoForex AI with your favorite trading platforms, messaging apps, and tools. Get instant notifications and seamless workflow integration.
          </p>
        </motion.div>

        {/* Integration Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-neutral-800/30 rounded-lg p-2">
            {integrations.map((integration) => (
              <motion.button
                key={integration.id}
                onClick={() => setActiveTab(integration.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === integration.id
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-700/50'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <integration.icon className="w-4 h-4" />
                <span>{integration.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Integration Content */}
        {activeIntegration && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Setup Steps */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 mb-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${activeIntegration.color} rounded-xl`}>
                    <activeIntegration.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{activeIntegration.name} Integration</h2>
                    <p className="text-neutral-400">{activeIntegration.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Setup Steps</h3>
                  {activeIntegration.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-neutral-800/30 rounded-lg">
                      <div className={`w-8 h-8 bg-gradient-to-r ${activeIntegration.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-neutral-300 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Code Example */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Configuration Example</h3>
                  <motion.button
                    onClick={() => copyCode(activeIntegration.code)}
                    className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Copy className="w-4 h-4" />
                    <span className="text-xs">Copy</span>
                  </motion.button>
                </div>
                <div className="bg-neutral-900/50 rounded-lg p-4">
                  <pre className="text-sm text-neutral-300 overflow-x-auto whitespace-pre-wrap">
                    <code>{activeIntegration.code}</code>
                  </pre>
                </div>
              </motion.div>
            </div>

            {/* Integration Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 sticky top-24"
              >
                <h3 className="text-lg font-bold text-white mb-4">Integration Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span className="text-neutral-300 text-sm">Real-time notifications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span className="text-neutral-300 text-sm">Customizable alerts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span className="text-neutral-300 text-sm">Multi-device support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span className="text-neutral-300 text-sm">Secure connections</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    <span className="text-neutral-300 text-sm">Easy setup process</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <h4 className="font-semibold text-white mb-3">Need Help?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-primary-400" />
                      <span className="text-neutral-300">Live chat support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4 text-primary-400" />
                      <span className="text-neutral-300">Video tutorials</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-primary-400" />
                      <span className="text-neutral-300">Setup assistance</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  className={`w-full mt-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${activeIntegration.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Integration
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Popular Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Popular <span className="bg-gradient-primary bg-clip-text text-transparent">Integration Combinations</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-800/30 rounded-lg p-6 text-center">
                <div className="flex justify-center space-x-2 mb-3">
                  <MessageSquare className="w-6 h-6 text-primary-400" />
                  <BarChart3 className="w-6 h-6 text-success-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Telegram + MT5</h3>
                <p className="text-neutral-400 text-sm">Get alerts on phone, execute on desktop</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-6 text-center">
                <div className="flex justify-center space-x-2 mb-3">
                  <MessageSquare className="w-6 h-6 text-accent-400" />
                  <BarChart3 className="w-6 h-6 text-warning-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Discord + TradingView</h3>
                <p className="text-neutral-400 text-sm">Community alerts with chart analysis</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-6 text-center">
                <div className="flex justify-center space-x-2 mb-3">
                  <Smartphone className="w-6 h-6 text-error-400" />
                  <Code className="w-6 h-6 text-neutral-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Mobile + API</h3>
                <p className="text-neutral-400 text-sm">Custom notifications with automation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default IntegrationGuidePage;