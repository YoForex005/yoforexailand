import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Key, 
  Settings, 
  MessageSquare, 
  Bell,
  Keyboard,
  Activity,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Code,
  Smartphone
} from 'lucide-react';

interface UserManualPageProps {
  onNavigateBack: () => void;
}

const UserManualPage: React.FC<UserManualPageProps> = ({ onNavigateBack }) => {
  const [expandedSection, setExpandedSection] = useState<string>('api-keys');

  const manualSections = [
    {
      id: 'api-keys',
      icon: Key,
      title: 'API Key Requirements',
      color: 'from-primary-500 to-primary-600',
      content: [
        {
          subtitle: 'Required API Keys',
          items: [
            'OpenAI API key for GPT models access',
            'Anthropic API key for Claude models',
            'Google API key for Gemini models',
            'X.AI API key for Grok models (optional)',
            'DeepSeek API key for advanced models (optional)'
          ]
        },
        {
          subtitle: 'Setup Instructions',
          items: [
            'Obtain API keys from respective providers',
            'Configure keys in YoForex AI settings panel',
            'Test connection using built-in API tester',
            'Enable cost reduction mode for 60-80% savings',
            'Set up backup keys for failover protection'
          ]
        }
      ]
    },
    {
      id: 'modes',
      icon: Settings,
      title: 'Trading Modes',
      color: 'from-accent-500 to-violet-600',
      content: [
        {
          subtitle: 'Automated Mode',
          items: [
            'Fully hands-free trading signals',
            'Multi-pair support (AUDCAD, AUDNZD, NZDCAD)',
            'Confidence level control (0-5 scale)',
            'Advanced filtering with RSI and trend analysis',
            'Smart recovery and position management',
            'Prop firm compliance features'
          ]
        },
        {
          subtitle: 'Interactive Assistant Mode',
          items: [
            'Real-time AI chat interface',
            'On-demand market analysis',
            'Custom query capabilities',
            'Web search integration',
            'Visual trading controls',
            'Keyboard shortcut support'
          ]
        }
      ]
    },
    {
      id: 'controls',
      icon: MessageSquare,
      title: 'Main Control Buttons',
      color: 'from-success-500 to-success-600',
      content: [
        {
          subtitle: 'Interface Buttons',
          items: [
            'Analyst: Scan for trading opportunities',
            'Assistant: Manage existing positions',
            'Custom: Ask specific questions with web search',
            'Forecast: Get weekly market overviews',
            'Settings: Configure TP/SL and lot sizes',
            'Symbol Selector: Quick pair switching'
          ]
        },
        {
          subtitle: 'Button Functions',
          items: [
            'Single click for quick actions',
            'Hold for advanced options menu',
            'Right-click for context menus',
            'Drag and drop for position management',
            'Color coding for signal strength',
            'Real-time status indicators'
          ]
        }
      ]
    },
    {
      id: 'shortcuts',
      icon: Keyboard,
      title: 'Keyboard Shortcuts',
      color: 'from-warning-500 to-warning-600',
      content: [
        {
          subtitle: 'Navigation Shortcuts',
          items: [
            'S - Open symbol selector',
            'M - Minimize/maximize interface',
            'C - Open custom query dialog',
            'ESC - Close current dialog',
            'Arrow keys - Navigate interface elements',
            'Enter - Confirm actions'
          ]
        },
        {
          subtitle: 'Trading Shortcuts',
          items: [
            'Ctrl+B - Quick buy signal',
            'Ctrl+S - Quick sell signal',
            'Ctrl+C - Close all positions',
            'Ctrl+R - Refresh market data',
            'F1 - Open help documentation',
            'F5 - Reload AI models'
          ]
        }
      ]
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Notification Setup',
      color: 'from-error-500 to-error-600',
      content: [
        {
          subtitle: 'MT5 Mobile Notifications',
          items: [
            'Enable push notifications in MT5 mobile app',
            'Configure signal alerts for entry/exit points',
            'Set up position management notifications',
            'Customize alert frequency and timing',
            'Test notification delivery system'
          ]
        },
        {
          subtitle: 'Telegram Integration',
          items: [
            'Create Telegram bot for notifications',
            'Configure bot token in YoForex AI',
            'Set up channel or direct message alerts',
            'Customize message format and content',
            'Enable/disable specific alert types'
          ]
        }
      ]
    },
    {
      id: 'volatility',
      icon: Activity,
      title: 'Volatility Now Monitoring',
      color: 'from-neutral-600 to-neutral-700',
      content: [
        {
          subtitle: 'Real-Time Alerts',
          items: [
            'Forex Factory news integration',
            'High-impact event notifications',
            'Volatility spike detection',
            'Market sentiment analysis',
            'Economic calendar alerts',
            'Custom volatility thresholds'
          ]
        },
        {
          subtitle: 'Configuration Options',
          items: [
            'Set volatility sensitivity levels',
            'Choose notification methods',
            'Filter by currency pairs',
            'Schedule monitoring hours',
            'Enable/disable weekend alerts',
            'Customize alert messages'
          ]
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
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
                <span className="text-sm text-neutral-400 ml-2">User Manual</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-primary-400 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              User <span className="bg-gradient-primary bg-clip-text text-transparent">Manual</span>
            </h1>
          </div>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Complete guide to setting up and using YoForex AI for automated trading and interactive market analysis.
          </p>
        </motion.div>

        {/* Manual Sections */}
        <div className="space-y-4">
          {manualSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden"
            >
              {/* Section Header */}
              <motion.button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-neutral-800/20 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${section.color} rounded-xl`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-left">{section.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedSection === section.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-6 h-6 text-neutral-400" />
                </motion.div>
              </motion.button>

              {/* Section Content */}
              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-neutral-800/50"
                  >
                    <div className="p-6 space-y-6">
                      {section.content.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h4 className="text-lg font-semibold text-primary-400 mb-4">
                            {subsection.subtitle}
                          </h4>
                          <div className="space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.05 }}
                                className="flex items-start space-x-3 p-3 rounded-lg bg-neutral-800/20"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0`} />
                                <span className="text-neutral-300 text-sm leading-relaxed">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Quick Reference Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Reference</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary-400 mb-4">Essential Shortcuts</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-300">Symbol Selector</span>
                    <code className="bg-neutral-800 px-2 py-1 rounded text-primary-400">S</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-300">Custom Query</span>
                    <code className="bg-neutral-800 px-2 py-1 rounded text-primary-400">C</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-300">Minimize</span>
                    <code className="bg-neutral-800 px-2 py-1 rounded text-primary-400">M</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-300">Close Dialog</span>
                    <code className="bg-neutral-800 px-2 py-1 rounded text-primary-400">ESC</code>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-success-400 mb-4">Support Contacts</h4>
                <div className="space-y-2 text-sm text-neutral-300">
                  <div>📧 support@yoforexai.com</div>
                  <div>💬 Community Forum</div>
                  <div>📱 Telegram Support Bot</div>
                  <div>🔧 Free Setup Assistance</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UserManualPage;