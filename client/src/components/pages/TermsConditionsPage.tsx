import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, FileText, Shield, CreditCard, Copyright, AlertTriangle, Headphones, RefreshCw } from 'lucide-react';

interface TermsConditionsPageProps {
  onNavigateBack: () => void;
}

const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onNavigateBack }) => {
  const sections = [
    {
      icon: FileText,
      title: 'Service Scope',
      content: [
        'YoForex AI is a workflow automation and analytics SaaS platform.',
        'No trading or investment advice/tips are provided.',
        'All analyses and signals are strictly for informational and research purposes.'
      ]
    },
    {
      icon: Shield,
      title: 'Account Usage',
      content: [
        'You are responsible for keeping your login and API credentials secure.',
        'Do not share your account with unauthorized users.'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payments & Billing',
      content: [
        'All prices are exclusive of applicable taxes.',
        'Subscriptions are billed monthly in INR.',
        'Upgrade, downgrade, and cancellation policies are available on your My Account page or by contacting support.'
      ]
    },
    {
      icon: Copyright,
      title: 'Intellectual Property',
      content: [
        'All software, analytics models, and documentation are property of YoForex AI.',
        'Content may not be resold, reverse engineered, or redistributed.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        'YoForex AI is not responsible for business losses caused by platform unavailability exceeding published SLA.',
        'Not liable for outcomes of analytics reports/actions taken by users.',
        'The platform is not liable for any trading or investment losses as we are not a financial advisory service.'
      ]
    },
    {
      icon: Headphones,
      title: 'Support',
      content: [
        'For all technical issues, contact support@yoforex.co.in.'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Updates',
      content: [
        'We reserve the right to amend these terms.',
        'Continued use of the service indicates acceptance.'
      ]
    }
  ];

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
                <span className="text-sm text-neutral-400 ml-2">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Terms & <span className="bg-gradient-primary bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to YoForex AI. By using our SaaS software and IT solutions platform, you agree to the following terms:
          </p>
        </motion.div>

        {/* Terms Sections */}
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

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
            <p className="text-neutral-400 mb-6">
              If you have any questions about these Terms and Conditions, please contact us.
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

export default TermsConditionsPage;