import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  Search,
  ChevronDown,
  ChevronRight,
  Book,
  Video,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface SupportPageProps {
  onNavigateBack: () => void;
}

const SupportPage: React.FC<SupportPageProps> = ({ onNavigateBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string>('setup');
  const [expandedSupportCard, setExpandedSupportCard] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const toggleSupportCard = (cardId: string) => {
    setExpandedSupportCard(expandedSupportCard === cardId ? null : cardId);
  };

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      color: 'from-primary-500 to-primary-600',
      action: 'Start Chat',
      id: 'live-chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      color: 'from-success-500 to-success-600',
      action: 'Send Email',
      id: 'email-support'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'from-warning-500 to-warning-600',
      action: 'Call Now',
      id: 'phone-support'
    },
    {
      icon: Video,
      title: 'Screen Share',
      description: 'Get personalized setup assistance',
      availability: 'By appointment',
      color: 'from-accent-500 to-violet-600',
      action: 'Schedule',
      id: 'screen-share'
    }
  ];

  const faqSections = [
    {
      id: 'setup',
      title: 'Setup & Installation',
      icon: Book,
      questions: [
        {
          question: 'How do I install YoForex AI on MT5?',
          answer: 'Download the EA file from your account dashboard, copy it to your MT5 experts folder, restart MT5, and drag the EA onto your chart. Our setup guide provides detailed step-by-step instructions.'
        },
        {
          question: 'What API keys do I need?',
          answer: 'You need API keys from OpenAI, Anthropic (Claude), and Google (Gemini) at minimum. Optional keys include X.AI (Grok) and DeepSeek for additional models. All keys are configured in the EA settings panel.'
        },
        {
          question: 'How do I configure my first trading strategy?',
          answer: 'Start with the default settings, choose your preferred trading pairs, set your risk level (1-5), and enable either Automated or Interactive mode. The EA will guide you through the initial configuration.'
        }
      ]
    },
    {
      id: 'trading',
      title: 'Trading & Signals',
      icon: FileText,
      questions: [
        {
          question: 'How accurate are the AI trading signals?',
          answer: 'Our multi-model consensus approach achieves 73%+ win rates on average. Signal accuracy varies by market conditions, with confidence scores (1-5) indicating reliability for each trade recommendation.'
        },
        {
          question: 'Can I customize the AI models used?',
          answer: 'Yes, you can select from 392 available models, switch between free and premium options, and adjust the consensus requirements. The cost reduction mode helps optimize API expenses while maintaining quality.'
        },
        {
          question: 'How does the recovery mode work?',
          answer: 'Recovery mode uses AI to analyze losing positions and suggests strategic averaging or hedging approaches. It includes drawdown protection and smart lot sizing to minimize risk while maximizing recovery potential.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      icon: AlertCircle,
      questions: [
        {
          question: 'The EA is not connecting to AI models',
          answer: 'Check your API keys are correctly entered and have sufficient credits. Verify your internet connection and MT5 settings allow external URLs. Use the built-in API tester to diagnose connection issues.'
        },
        {
          question: 'Why are my notifications not working?',
          answer: 'Ensure MT5 mobile notifications are enabled in your terminal settings. For Telegram, verify your bot token is correct and the bot is added to your chat. Check notification settings in the EA panel.'
        },
        {
          question: 'How do I update to the latest version?',
          answer: 'Download the latest version from your account dashboard and replace the existing EA file. Your settings will be preserved automatically. Check the changelog for new features and improvements.'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Account',
      icon: CheckCircle,
      questions: [
        {
          question: 'How does the pricing work?',
          answer: 'We offer three tiers: Basic ($19.99/mo), Pro ($59.99/mo), and Enterprise ($199/mo). All plans include free setup assistance and community access. API costs are separate and optimized through our cost reduction features.'
        },
        {
          question: 'Can I change my subscription plan?',
          answer: 'Yes, you can upgrade or downgrade your plan anytime from your account dashboard. Changes take effect immediately, with prorated billing adjustments applied to your next invoice.'
        },
        {
          question: 'What is your refund policy?',
          answer: 'We offer a 14-day money-back guarantee for all new subscriptions. If you\'re not satisfied, contact support within 14 days for a full refund. API costs are non-refundable as they are third-party charges.'
        }
      ]
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
  };

  const filteredFaqs = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(
      q => searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

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
                <span className="text-sm text-neutral-400 ml-2">Support</span>
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
            Help & <span className="bg-gradient-primary bg-clip-text text-transparent">Support</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Get the help you need to maximize your YoForex AI trading experience. Our expert team is here to assist you 24/7.
          </p>
        </motion.div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${option.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <option.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
              <p className="text-neutral-400 text-sm mb-3">{option.description}</p>
              <div className="flex items-center justify-center space-x-1 text-xs text-success-400 mb-4">
                <Clock className="w-3 h-3" />
                <span>{option.availability}</span>
              </div>
              <motion.button
                className={`w-full py-2 rounded-lg font-medium text-white bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.action}
              </motion.button>

              {/* Learn More Button */}
              <motion.button
                onClick={() => toggleSupportCard(option.id)}
                className="w-full mt-2 flex items-center justify-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">
                  {expandedSupportCard === option.id ? 'Show Less' : 'Learn More'}
                </span>
                {expandedSupportCard === option.id ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </motion.button>

              {/* Expanded Content */}
              {expandedSupportCard === option.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-800/20 rounded-lg p-4"
                >
                  {option.id === 'live-chat' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Live Chat Support</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• Instant technical assistance for API integration issues</p>
                        <p className="text-sm text-neutral-300">• Real-time troubleshooting for workflow automation</p>
                        <p className="text-sm text-neutral-300">• Screen sharing available for complex setup procedures</p>
                        <p className="text-sm text-neutral-300">• Multi-language support for global enterprise teams</p>
                        <p className="text-sm text-neutral-300">• Priority queue for Pro and Enterprise customers</p>
                      </div>
                      <p className="text-primary-400 text-sm">
                        Available 24/7 via app.yoforex.co.in chat widget
                      </p>
                    </div>
                  )}

                  {option.id === 'email-support' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Email Support Details</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• Detailed technical documentation and code examples</p>
                        <p className="text-sm text-neutral-300">• Step-by-step integration guides for enterprise systems</p>
                        <p className="text-sm text-neutral-300">• Custom workflow configuration assistance</p>
                        <p className="text-sm text-neutral-300">• API troubleshooting with log analysis</p>
                        <p className="text-sm text-neutral-300">• Response within 2-4 hours for priority issues</p>
                      </div>
                      <p className="text-success-400 text-sm">
                        Email: support@yoforex.co.in with detailed issue description
                      </p>
                    </div>
                  )}

                  {option.id === 'phone-support' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Phone Support Services</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• Direct consultation with senior technical engineers</p>
                        <p className="text-sm text-neutral-300">• Enterprise architecture planning and optimization</p>
                        <p className="text-sm text-neutral-300">• Escalation procedures for critical system issues</p>
                        <p className="text-sm text-neutral-300">• Custom SLA discussions for enterprise customers</p>
                        <p className="text-sm text-neutral-300">• Scheduled calls for ongoing project support</p>
                      </div>
                      <p className="text-warning-400 text-sm">
                        Business hours: Mon-Fri 9AM-6PM IST | Emergency support for Enterprise
                      </p>
                    </div>
                  )}

                  {option.id === 'screen-share' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Screen Share Assistance</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• Personalized setup assistance for complex integrations</p>
                        <p className="text-sm text-neutral-300">• Live debugging sessions with development team</p>
                        <p className="text-sm text-neutral-300">• Custom workflow design and optimization</p>
                        <p className="text-sm text-neutral-300">• Team training sessions for enterprise onboarding</p>
                        <p className="text-sm text-neutral-300">• Secure remote access with enterprise-grade security</p>
                      </div>
                      <p className="text-accent-400 text-sm">
                        Schedule via app.yoforex.co.in/support | Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India
                      </p>
                    </div>
                  )}

                  <motion.button
                    onClick={() => toggleSupportCard(option.id)}
                    className="mt-4 text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Collapse
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
              </h2>

              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              {/* FAQ Sections */}
              <div className="space-y-4">
                {filteredFaqs.map((section) => (
                  <div key={section.id} className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden">
                    <motion.button
                      onClick={() => setExpandedFaq(expandedFaq === section.id ? '' : section.id)}
                      className="w-full p-6 flex items-center justify-between hover:bg-neutral-800/20 transition-colors duration-300"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-4">
                        <section.icon className="w-6 h-6 text-primary-400" />
                        <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedFaq === section.id ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-6 h-6 text-neutral-400" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedFaq === section.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-neutral-800/50"
                        >
                          <div className="p-6 space-y-6">
                            {section.questions.map((faq, index) => (
                              <div key={index} className="border-b border-neutral-800/30 last:border-b-0 pb-4 last:pb-0">
                                <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                                <p className="text-neutral-400 text-sm leading-relaxed">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Support</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Priority</label>
                  <select
                    value={contactForm.priority}
                    onChange={(e) => setContactForm({...contactForm, priority: e.target.value})}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows={4}
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>

              </form>
              <div className="mt-6 pt-6 border-t border-neutral-800/50">
                <div className="space-y-2 text-sm text-neutral-300">
                  <p>📧 support@yoforex.co.in</p>
                    <p>📞 +1 (555) 123-4567</p>
                    <p>💬 Live chat available 24/7</p>
                  <p>📍 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India</p>
                </div>
                </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportPage;