import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, RotateCcw, CreditCard, Building, AlertCircle, Clock } from 'lucide-react';

interface ReturnPolicyPageProps {
  onNavigateBack: () => void;
}

const ReturnPolicyPage: React.FC<ReturnPolicyPageProps> = ({ onNavigateBack }) => {
  const sections = [
    {
      icon: CreditCard,
      title: 'SaaS Plans',
      content: [
        'Monthly/annual subscriptions can be canceled at any time, but are non-refundable for the current billing period.',
        'Your access will continue through the paid term, and will not renew if canceled.'
      ]
    },
    {
      icon: Building,
      title: 'Enterprise and Custom Deployments',
      content: [
        'Subject to custom contract terms.',
        'Contact support@yoforex.co.in for specific terms.'
      ]
    },
    {
      icon: RotateCcw,
      title: 'Refunds',
      content: [
        'Refunds are only provided in cases of double-billing or proven technical errors that prevent service delivery.',
        'Must be requested within 14 days of the charge.',
        'For all return or billing queries, contact: support@yoforex.co.in'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Non-Refundable Services',
      content: [
        'No refunds are provided for consulting, setup, or integration fees.',
        'API costs are non-refundable as they are third-party charges.'
      ]
    }
  ];

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
                <span className="text-sm text-neutral-400 ml-2">Return Policy</span>
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Return <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            All purchases of YoForex AI software subscriptions and related services are subject to the following policy:
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                    <p className="text-neutral-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-warning-500/20 to-error-500/20 border border-warning-500/50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-warning-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-warning-400 mb-2">14-Day Refund Window</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  All refund requests must be submitted within 14 days of the original charge. Requests submitted after this period will not be eligible for refunds except in cases of technical errors that prevent service delivery.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help with Returns or Billing?</h3>
            <p className="text-neutral-400 mb-6">
              Our support team is here to help with any billing questions or return requests.
            </p>
            <div className="text-primary-400 font-medium">
              Email: support@yoforexai.com
            </div>
            <div className="text-neutral-400 text-sm mt-2">
              Address: B2007-127, 33rd floor, Latifa Tower, Trade Center first, Sheikh Zayed Road, Dubai-UAE
            </div>
            <div className="text-neutral-500 text-xs mt-2">
              Legal Entity: YoForex, registered in Cyprus (HE 442382)
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ReturnPolicyPage;