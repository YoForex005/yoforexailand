import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  Plug,
  Database,
  Cloud,
  Shield,
  Webhook,
  MessageSquare,
  Mail,
  BarChart3,
  Globe,
  Code,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface IntegrationsPageProps {
  onNavigateBack: () => void;
}

const IntegrationsPage: React.FC<IntegrationsPageProps> = ({ onNavigateBack }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const integrationCategories = [
    {
      title: 'Enterprise SaaS',
      description: 'Connect with popular business platforms',
      icon: Cloud,
      color: 'from-primary-500 to-primary-600',
      id: 'enterprise-saas',
      integrations: [
        { name: 'Salesforce', description: 'CRM data integration', status: 'available' },
        { name: 'Microsoft 365', description: 'Office suite integration', status: 'available' },
        { name: 'Google Workspace', description: 'Productivity tools', status: 'available' },
        { name: 'HubSpot', description: 'Marketing automation', status: 'beta' },
        { name: 'Zendesk', description: 'Customer support', status: 'coming-soon' },
        { name: 'Jira', description: 'Project management', status: 'available' }
      ]
    },
    {
      title: 'Data Platforms',
      description: 'Integrate with data sources and warehouses',
      icon: Database,
      color: 'from-success-500 to-success-600',
      id: 'data-platforms',
      integrations: [
        { name: 'Snowflake', description: 'Cloud data warehouse', status: 'available' },
        { name: 'Amazon S3', description: 'Object storage', status: 'available' },
        { name: 'Google BigQuery', description: 'Analytics warehouse', status: 'available' },
        { name: 'PostgreSQL', description: 'Relational database', status: 'available' },
        { name: 'MongoDB', description: 'Document database', status: 'beta' },
        { name: 'Redis', description: 'In-memory cache', status: 'available' }
      ]
    },
    {
      title: 'Communication',
      description: 'Workflow notifications and messaging',
      icon: MessageSquare,
      color: 'from-accent-500 to-violet-600',
      id: 'communication',
      integrations: [
        { name: 'Slack', description: 'Team messaging', status: 'available' },
        { name: 'Microsoft Teams', description: 'Collaboration platform', status: 'available' },
        { name: 'Discord', description: 'Community chat', status: 'beta' },
        { name: 'Telegram', description: 'Instant messaging', status: 'available' },
        { name: 'Email SMTP', description: 'Email notifications', status: 'available' },
        { name: 'WhatsApp Business', description: 'Business messaging', status: 'coming-soon' }
      ]
    },
    {
      title: 'Developer Tools',
      description: 'APIs and development integrations',
      icon: Code,
      color: 'from-warning-500 to-warning-600',
      id: 'developer-tools',
      integrations: [
        { name: 'REST API', description: 'Full platform API', status: 'available' },
        { name: 'GraphQL', description: 'Query language API', status: 'beta' },
        { name: 'Webhooks', description: 'Real-time notifications', status: 'available' },
        { name: 'GitHub', description: 'Code repository', status: 'available' },
        { name: 'Docker', description: 'Containerization', status: 'available' },
        { name: 'Kubernetes', description: 'Container orchestration', status: 'beta' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-success-400 bg-success-500/20';
      case 'beta': return 'text-warning-400 bg-warning-500/20';
      case 'coming-soon': return 'text-neutral-400 bg-neutral-500/20';
      default: return 'text-neutral-400 bg-neutral-500/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'beta': return 'Beta';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Unknown';
    }
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
                <span className="text-sm text-neutral-400 ml-2">Integrations</span>
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
          <div className="flex items-center justify-center mb-6">
            <Plug className="w-12 h-12 text-primary-400 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Platform <span className="bg-gradient-primary bg-clip-text text-transparent">Integrations</span>
            </h1>
          </div>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Connect YoForex AI with your existing tools and workflows. Secure integrations with enterprise-grade platforms and developer-friendly APIs.
          </p>
        </motion.div>

        {/* Integration Categories */}
        <div className="space-y-12">
          {integrationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <p className="text-neutral-400">{category.description}</p>
                </div>
              </div>

              {/* Integrations Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.integrations.map((integration, integrationIndex) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: integrationIndex * 0.05 }}
                    className="bg-neutral-800/30 rounded-lg p-4 hover:bg-neutral-800/50 transition-colors duration-200 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {integration.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                        {getStatusText(integration.status)}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mb-3">{integration.description}</p>
                    {integration.status === 'available' && (
                      <div className="flex items-center text-primary-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Configure</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Learn More Button */}
              <motion.button
                onClick={() => toggleCategory(category.id)}
                className="mt-6 flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">
                  {expandedCategory === category.id ? 'Show Less' : 'Learn More'}
                </span>
                {expandedCategory === category.id ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </motion.button>

              {/* Expanded Content */}
              {expandedCategory === category.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-800/20 rounded-lg p-4"
                >
                  {category.id === 'enterprise-saas' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Enterprise SaaS Integrations</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• Seamless data synchronization with CRM and productivity platforms</p>
                        <p className="text-sm text-neutral-300">• Single sign-on (SSO) integration for enterprise authentication</p>
                        <p className="text-sm text-neutral-300">• Real-time workflow triggers based on business events</p>
                        <p className="text-sm text-neutral-300">• Custom field mapping and data transformation capabilities</p>
                        <p className="text-sm text-neutral-300">• Automated reporting and dashboard synchronization</p>
                      </div>
                      <p className="text-primary-400 text-sm">
                        Enterprise SaaS setup: support@yoforex.co.in
                      </p>
                    </div>
                  )}

                  {category.id === 'data-platforms' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Data Platform Connectivity</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• High-performance connectors for cloud data warehouses</p>
                        <p className="text-sm text-neutral-300">• Real-time data streaming and batch processing capabilities</p>
                        <p className="text-sm text-neutral-300">• Automated data quality validation and cleansing</p>
                        <p className="text-sm text-neutral-300">• Support for structured and unstructured data sources</p>
                        <p className="text-sm text-neutral-300">• Enterprise-grade security and encryption for data transfers</p>
                      </div>
                      <p className="text-success-400 text-sm">
                        Data platform integrations support enterprise-scale analytics workflows
                      </p>
                    </div>
                  )}

                  {category.id === 'communication' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Communication & Notifications</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• Multi-channel notification delivery with intelligent routing</p>
                        <p className="text-sm text-neutral-300">• Custom message templates and branding options</p>
                        <p className="text-sm text-neutral-300">• Escalation procedures and on-call management</p>
                        <p className="text-sm text-neutral-300">• Rich media support for charts, reports, and attachments</p>
                        <p className="text-sm text-neutral-300">• Integration with enterprise communication policies</p>
                      </div>
                      <p className="text-accent-400 text-sm">
                        Communication setup ensures your team stays informed of critical workflow events
                      </p>
                    </div>
                  )}

                  {category.id === 'developer-tools' && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Developer Tools & APIs</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-neutral-300">• Comprehensive RESTful API with OpenAPI documentation</p>
                        <p className="text-sm text-neutral-300">• SDKs available for Python, Node.js, Java, and .NET</p>
                        <p className="text-sm text-neutral-300">• Webhook support for real-time event notifications</p>
                        <p className="text-sm text-neutral-300">• GraphQL endpoint for flexible data querying</p>
                        <p className="text-sm text-neutral-300">• CI/CD integration for automated deployment workflows</p>
                      </div>
                      <p className="text-warning-400 text-sm">
                        Developer documentation: app.yoforex.co.in/docs | UK: London Office | Dubai: Business Bay Operations Center
                      </p>
                    </div>
                  )}

                  <motion.button
                    onClick={() => toggleCategory(category.id)}
                    className="mt-4 text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Collapse
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="w-8 h-8 text-success-400" />
              <div>
                <h2 className="text-2xl font-bold text-white">Security & Compliance</h2>
                <p className="text-neutral-400">Enterprise-grade security for all integrations</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-success-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-success-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">SOC 2 Compliant</h3>
                <p className="text-sm text-neutral-400">Audited security controls</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Data Encryption</h3>
                <p className="text-sm text-neutral-400">End-to-end encryption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warning-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-warning-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">GDPR Ready</h3>
                <p className="text-sm text-neutral-400">Privacy compliance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Webhook className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Secure APIs</h3>
                <p className="text-sm text-neutral-400">OAuth 2.0 & JWT</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Custom Integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Need a <span className="bg-gradient-primary bg-clip-text text-transparent">Custom Integration?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Our team can build custom integrations for your specific workflow requirements and enterprise systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Integration Team</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.button>

                <motion.button
                  className="bg-transparent border-2 border-primary-500/50 text-primary-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-500/10 transition-colors duration-300 inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="w-5 h-5" />
                  <span>View API Docs</span>
                </motion.button>
              </div>
              <div className="mt-6 text-sm text-neutral-500">
                Email: support@yoforex.net | Custom integration timeline: 2-4 weeks
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default IntegrationsPage;