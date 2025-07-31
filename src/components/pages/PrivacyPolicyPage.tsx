import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Shield, Lock, Eye, Database, Globe } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateBack: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateBack }) => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal and business identification (name, contact info, company name) upon signup or contact.',
        'Usage data for platform improvements and troubleshooting.',
        'Technical data such as IP address, browser type, device data, and log files.',
        'No confidential financial account or trading signal data is collected, as YoForex AI is strictly a SaaS analytics and workflow platform.'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve platform features and customer support.',
        'For account setup, billing, and service communication.',
        'For aggregated analytics to enhance user experience and product development.',
        'We never sell or share data with third parties for marketing purposes.'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: [
        'All user data is stored using industry-standard security (TLS, encryption at rest, SOC 2-compliant infrastructure).',
        'We restrict access to data to authorized personnel only.'
      ]
    },
    {
      icon: Shield,
      title: 'User Rights',
      content: [
        'You may request access to, or deletion of, your data at any time.',
        'For all inquiries, contact: support@yoforex.co.in'
      ]
    },
    {
      icon: Globe,
      title: 'Policy Updates',
      content: [
        'We may revise this policy to meet regulatory or business requirements.',
        'The latest version will always be posted here.'
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
                <span className="text-sm text-neutral-400 ml-2">Privacy Policy</span>
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
            Privacy <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            YoForex AI is committed to safeguarding your privacy and protecting your personal and organizational data. This Privacy Policy explains how we collect, use, disclose, and secure information across our platform and related services.
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

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Privacy Policy?</h3>
            <p className="text-neutral-400 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="text-primary-400 font-medium">
              Email: support@yoforex.co.in
            </div>
            <div className="text-neutral-400 text-sm mt-2">
              Address: UK: London Office | Dubai: Business Bay Operations Center
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;