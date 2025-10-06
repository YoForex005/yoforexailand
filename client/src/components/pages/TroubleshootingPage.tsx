import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Search,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Mail,
  ExternalLink
} from 'lucide-react';

interface TroubleshootingPageProps {
  onNavigateBack: () => void;
}

const TroubleshootingPage: React.FC<TroubleshootingPageProps> = ({ onNavigateBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string>('');

  const troubleshootingSections = [
    {
      id: 'account-setup',
      icon: CheckCircle,
      title: 'Account & Setup Issues',
      color: 'from-primary-500 to-primary-600',
      problems: [
        {
          issue: 'Cannot log in to my account',
          solution: 'Reset your password using the "Forgot Password" link. If issues persist, check if your email is verified. Contact support if you still cannot access your account.',
          steps: [
            'Click "Forgot Password" on login page',
            'Check your email for reset link',
            'Create a new strong password',
            'Try logging in again'
          ]
        },
        {
          issue: 'Email verification not received',
          solution: 'Check your spam/junk folder. Add support@yoforex.co.in to your contacts. Request a new verification email from your account settings.',
          steps: [
            'Check spam/junk email folders',
            'Add our domain to safe senders',
            'Request new verification email',
            'Contact support if still not received'
          ]
        },
        {
          issue: 'Subscription not activated after payment',
          solution: 'Payment processing can take up to 10 minutes. Check your payment method and contact support with your transaction ID if the issue persists.',
          steps: [
            'Wait 10 minutes for processing',
            'Check payment confirmation email',
            'Refresh your account page',
            'Contact support with transaction details'
          ]
        }
      ]
    },
    {
      id: 'ai-analysis',
      icon: AlertTriangle,
      title: 'AI Analysis Issues',
      color: 'from-warning-500 to-warning-600',
      problems: [
        {
          issue: 'AI analysis taking too long or timing out',
          solution: 'High demand can cause delays. Try using fewer AI models or a simpler strategy. Check your internet connection and try again during off-peak hours.',
          steps: [
            'Reduce number of AI models selected',
            'Use simpler strategy (avoid combining multiple)',
            'Check internet connection stability',
            'Try again during off-peak hours (US evening)'
          ]
        },
        {
          issue: 'Low confidence scores on all analyses',
          solution: 'Market conditions may be uncertain. Try different timeframes, ensure chart quality is good, and consider using multiple strategies for better consensus.',
          steps: [
            'Upload higher quality chart images',
            'Try different timeframes (4H, D1)',
            'Use multiple strategies for consensus',
            'Check if market is in consolidation phase'
          ]
        },
        {
          issue: 'AI models giving conflicting signals',
          solution: 'This is normal and shows the AI is working correctly. Conflicting signals often indicate uncertain market conditions. Wait for higher consensus or use additional confirmation.',
          steps: [
            'Look for 70%+ consensus before trading',
            'Add more AI models for better consensus',
            'Use additional timeframe analysis',
            'Consider waiting for clearer market conditions'
          ]
        }
      ]
    },
    {
      id: 'notifications',
      icon: MessageCircle,
      title: 'Notification & Integration Issues',
      color: 'from-accent-500 to-violet-600',
      problems: [
        {
          issue: 'Not receiving Telegram notifications',
          solution: 'Verify your bot token and chat ID are correct. Ensure the bot is not blocked and you have sent /start command. Check notification settings in your account.',
          steps: [
            'Verify bot token in settings',
            'Send /start to your bot',
            'Check if bot is blocked or muted',
            'Test with sample notification'
          ]
        },
        {
          issue: 'Discord webhook not working',
          solution: 'Check webhook URL is correct and the channel exists. Verify Discord server permissions allow webhooks. Test with a simple message first.',
          steps: [
            'Verify webhook URL is complete',
            'Check channel permissions',
            'Test webhook with simple message',
            'Regenerate webhook if needed'
          ]
        },
        {
          issue: 'Mobile push notifications not working',
          solution: 'Enable notifications in device settings and app settings. Check if Do Not Disturb is enabled. Reinstall the app if issues persist.',
          steps: [
            'Enable notifications in device settings',
            'Check app notification permissions',
            'Disable Do Not Disturb mode',
            'Restart app or reinstall if needed'
          ]
        }
      ]
    },
    {
      id: 'performance',
      icon: HelpCircle,
      title: 'Performance & Technical Issues',
      color: 'from-success-500 to-success-600',
      problems: [
        {
          issue: 'Platform loading slowly or freezing',
          solution: 'Clear browser cache and cookies. Disable browser extensions. Try using a different browser or incognito mode. Check your internet connection speed.',
          steps: [
            'Clear browser cache and cookies',
            'Disable ad blockers and extensions',
            'Try incognito/private browsing mode',
            'Test with different browser'
          ]
        },
        {
          issue: 'Charts not uploading properly',
          solution: 'Ensure image is under 10MB and in supported format (PNG, JPG, WebP). Try compressing the image or taking a new screenshot.',
          steps: [
            'Check image size (max 10MB)',
            'Use supported formats: PNG, JPG, WebP',
            'Compress image if too large',
            'Try uploading from different device'
          ]
        },
        {
          issue: 'API rate limit exceeded',
          solution: 'You have reached your plan limits. Upgrade your plan for higher limits or wait for the limit to reset. Consider using fewer AI models to conserve usage.',
          steps: [
            'Check your current plan limits',
            'Wait for daily/hourly reset',
            'Upgrade to higher plan if needed',
            'Optimize AI model selection'
          ]
        }
      ]
    }
  ];

  const filteredSections = troubleshootingSections.map(section => ({
    ...section,
    problems: section.problems.filter(
      problem => searchQuery === '' ||
        problem.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.solution.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.problems.length > 0);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
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
                <span className="text-sm text-neutral-400 ml-2">Troubleshooting</span>
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
            Troubleshooting <span className="bg-gradient-primary bg-clip-text text-transparent">Guide</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Find solutions to common issues with YoForex AI platform, AI analysis, notifications, and integrations. Get back to trading quickly with step-by-step solutions.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search for solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* Troubleshooting Sections */}
        <div className="space-y-6">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
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
                  <h2 className="text-xl font-bold text-white text-left">{section.title}</h2>
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
                      {section.problems.map((problem, problemIndex) => (
                        <div key={problemIndex} className="bg-neutral-800/30 rounded-lg p-6">
                          <h3 className="font-semibold text-white mb-3 flex items-start space-x-2">
                            <AlertTriangle className="w-5 h-5 text-warning-400 mt-0.5 flex-shrink-0" />
                            <span>{problem.issue}</span>
                          </h3>

                          <div className="mb-4">
                            <h4 className="font-medium text-success-400 mb-2">Solution:</h4>
                            <p className="text-neutral-300 leading-relaxed">{problem.solution}</p>
                          </div>

                          <div>
                            <h4 className="font-medium text-primary-400 mb-3">Step-by-step:</h4>
                            <div className="space-y-2">
                              {problem.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start space-x-3">
                                  <div className={`w-6 h-6 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-0.5`}>
                                    {stepIndex + 1}
                                  </div>
                                  <span className="text-neutral-300 text-sm leading-relaxed">{step}</span>
                                </div>
                              ))}
                            </div>
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

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Need <span className="bg-gradient-primary bg-clip-text text-transparent">Help?</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Can't find a solution? Our support team is here to help with any technical issues or questions about YoForex AI.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <Mail className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Email Support</h4>
                <p className="text-neutral-400 text-sm mb-3">Get detailed help via email</p>
                <div className="text-primary-400 text-sm">support@yoforex.co.in</div>
                <div className="text-primary-400 text-sm">support@yoforex.net</div>
              </div>

              <div className="bg-neutral-800/30 rounded-lg p-4">
                <MessageCircle className="w-8 h-8 text-success-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Live Chat</h4>
                <p className="text-neutral-400 text-sm mb-3">Instant help from our team</p>
                <div className="text-success-400 text-sm">Available 24/7</div>
              </div>

              <div className="bg-neutral-800/30 rounded-lg p-4">
                <ExternalLink className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Community</h4>
                <p className="text-neutral-400 text-sm mb-3">Get help from other traders</p>
                <div className="text-accent-400 text-sm">Discord & Telegram</div>
              </div>
            </div>

            <motion.button
              onClick={() => {
                // Open contact support modal or navigate to support page
                window.location.href = 'mailto:support@yoforex.net?subject=Technical Support Request';
              }}
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </motion.button>

            <div className="mt-4 text-sm text-neutral-400">
              Response time: 2-4 hours for priority support • Dubai Operations Center
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TroubleshootingPage;