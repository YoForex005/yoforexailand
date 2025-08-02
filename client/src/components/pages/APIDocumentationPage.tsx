import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Code, 
  Key, 
  Globe, 
  Shield,
  ChevronDown,
  ChevronRight,
  Copy,
  CheckCircle,
  AlertTriangle,
  Book,
  Webhook,
  Database
} from 'lucide-react';

interface APIDocumentationPageProps {
  onNavigateBack: () => void;
}

const APIDocumentationPage: React.FC<APIDocumentationPageProps> = ({ onNavigateBack }) => {
  const [expandedSection, setExpandedSection] = useState<string>('authentication');
  const [copiedCode, setCopiedCode] = useState<string>('');

  const apiSections = [
    {
      id: 'authentication',
      icon: Key,
      title: 'Authentication',
      color: 'from-primary-500 to-primary-600',
      content: {
        description: 'All API requests require authentication using API keys.',
        codeExample: `// Authentication Header
Authorization: Bearer YOUR_API_KEY

// Example Request
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.yoforex.co.in/v1/analytics`,
        details: [
          'API keys are available in your dashboard',
          'Include the Authorization header in all requests',
          'Keys are rate-limited based on your subscription plan',
          'Rotate keys regularly for security'
        ]
      }
    },
    {
      id: 'endpoints',
      icon: Globe,
      title: 'API Endpoints',
      color: 'from-success-500 to-success-600',
      content: {
        description: 'Core endpoints for data analytics and workflow automation.',
        codeExample: `// Get Analytics Data
GET /v1/analytics?symbol=EURUSD&timeframe=1h

// Create Workflow
POST /v1/workflows
{
  "name": "Market Analysis",
  "triggers": ["data_update"],
  "actions": ["generate_report"]
}

// Get Reports
GET /v1/reports?date=2025-01-15`,
        details: [
          'Base URL: https://api.yoforex.co.in/v1/',
          'All responses are in JSON format',
          'Timestamps are in UTC',
          'Pagination available for large datasets'
        ]
      }
    },
    {
      id: 'webhooks',
      icon: Webhook,
      title: 'Webhooks',
      color: 'from-accent-500 to-violet-600',
      content: {
        description: 'Real-time notifications for data updates and workflow events.',
        codeExample: `// Webhook Configuration
POST /v1/webhooks
{
  "url": "https://your-app.com/webhook",
  "events": ["data_update", "workflow_complete"],
  "secret": "your_webhook_secret"
}

// Webhook Payload Example
{
  "event": "data_update",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "symbol": "EURUSD",
    "analysis": {...}
  }
}`,
        details: [
          'Webhooks are sent via HTTP POST',
          'Include signature verification',
          'Retry logic for failed deliveries',
          'Configure events in dashboard'
        ]
      }
    },
    {
      id: 'limits',
      icon: Shield,
      title: 'Rate Limits & Best Practices',
      color: 'from-warning-500 to-warning-600',
      content: {
        description: 'API usage limits and optimization guidelines.',
        codeExample: `// Rate Limit Headers
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642694400

// Error Response (429)
{
  "error": "rate_limit_exceeded",
  "message": "Too many requests",
  "retry_after": 60
}`,
        details: [
          'Basic: 1,000 requests/hour',
          'Pro: 10,000 requests/hour',
          'Enterprise: Custom limits',
          'Use caching to reduce API calls',
          'Implement exponential backoff'
        ]
      }
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
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
                <span className="text-sm text-neutral-400 ml-2">API Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-primary-400 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              API <span className="bg-gradient-primary bg-clip-text text-transparent">Documentation</span>
            </h1>
          </div>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive developer documentation for integrating YoForex AI's analytics and automation platform into your applications.
          </p>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Key className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">1. Get API Key</h3>
              <p className="text-sm text-neutral-400">Generate your API key from the dashboard</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-success-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">2. Make Request</h3>
              <p className="text-sm text-neutral-400">Include authentication header</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">3. Process Data</h3>
              <p className="text-sm text-neutral-400">Handle JSON responses</p>
            </div>
          </div>
        </motion.div>

        {/* API Sections */}
        <div className="space-y-4">
          {apiSections.map((section, index) => (
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
                    <div className="p-6">
                      <p className="text-neutral-300 mb-6">{section.content.description}</p>
                      
                      {/* Code Example */}
                      <div className="bg-neutral-900/50 rounded-lg p-4 mb-6 relative">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-neutral-400">Example</span>
                          <motion.button
                            onClick={() => copyCode(section.content.codeExample, section.id)}
                            className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {copiedCode === section.id ? (
                              <CheckCircle className="w-4 h-4 text-success-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                            <span className="text-xs">{copiedCode === section.id ? 'Copied!' : 'Copy'}</span>
                          </motion.button>
                        </div>
                        <pre className="text-sm text-neutral-300 overflow-x-auto">
                          <code>{section.content.codeExample}</code>
                        </pre>
                      </div>

                      {/* Details */}
                      <div className="space-y-2">
                        {section.content.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2 flex-shrink-0`} />
                            <span className="text-neutral-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-neutral-400 mb-6">
              Our technical team is here to help you integrate YoForex AI into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact API Support
              </motion.button>
              <motion.button
                className="bg-transparent border border-neutral-700 text-neutral-300 px-6 py-3 rounded-lg font-medium hover:border-neutral-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Examples
              </motion.button>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              Email: support@yoforexai.com | Response time: 2-4 hours
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default APIDocumentationPage;