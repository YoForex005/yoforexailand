import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Download, Image, FileText, User, Mail, Calendar } from 'lucide-react';

interface PressKitPageProps {
  onNavigateBack: () => void;
}

const PressKitPage: React.FC<PressKitPageProps> = ({ onNavigateBack }) => {
  const pressAssets = [
    {
      category: 'Logos',
      items: [
        { name: 'YoForex AI Logo (SVG)', format: 'SVG', size: '2KB', description: 'Vector logo for print and digital use' },
        { name: 'YoForex AI Logo (PNG High-res)', format: 'PNG', size: '45KB', description: '2000x2000px transparent background' },
        { name: 'YoForex AI Logo (PNG Standard)', format: 'PNG', size: '12KB', description: '500x500px transparent background' },
        { name: 'YoForex AI Wordmark', format: 'SVG', size: '3KB', description: 'Text-only logo variant' }
      ]
    },
    {
      category: 'Brand Guidelines',
      items: [
        { name: 'Brand Style Guide', format: 'PDF', size: '2.1MB', description: 'Complete brand guidelines and usage rules' },
        { name: 'Color Palette', format: 'PDF', size: '156KB', description: 'Official brand colors and codes' },
        { name: 'Typography Guide', format: 'PDF', size: '234KB', description: 'Font specifications and usage' }
      ]
    },
    {
      category: 'Product Screenshots',
      items: [
        { name: 'Dashboard Overview', format: 'PNG', size: '890KB', description: 'Main analytics dashboard interface' },
        { name: 'API Documentation', format: 'PNG', size: '567KB', description: 'Developer documentation interface' },
        { name: 'Integration Setup', format: 'PNG', size: '445KB', description: 'Platform integration workflow' }
      ]
    }
  ];

  const executiveBios = [
    {
      name: 'Rajesh Kumar',
      title: 'Chief Executive Officer',
      bio: 'Rajesh brings over 15 years of experience in fintech and AI technology. Previously VP of Engineering at leading financial technology companies, he has led teams building scalable platforms serving millions of users. He holds an MBA from IIM Bangalore and a B.Tech in Computer Science.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      title: 'Chief Technology Officer',
      bio: 'Priya is an AI researcher and former Google engineer with a PhD in Machine Learning from IIT Delhi. She has published 20+ papers on AI applications in financial services and holds 8 patents in machine learning algorithms. She leads our technical vision and product development.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Amit Patel',
      title: 'Chief Product Officer',
      bio: 'Amit is a product strategy expert with 12+ years building enterprise SaaS platforms. He previously led product teams at major cloud infrastructure companies and has deep expertise in developer tools and API platforms. He holds an MS in Computer Science from Stanford.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const companyBoilerplate = `YoForex AI is a leading SaaS provider specializing in AI-powered analytics and workflow automation for enterprise teams. Established in Kolkata, India, we empower organizations to deliver real-time data insights, orchestrate complex analytics jobs, and automate mission-critical workflows.

Our platform combines advanced artificial intelligence with enterprise-grade security and reliability, serving businesses across financial services, technology, and data-driven industries. With 99.9% uptime SLA and SOC 2 compliance, YoForex AI enables organizations to harness the power of AI for better decision-making and operational efficiency.

Founded in 2020, YoForex AI is headquartered in Kolkata, West Bengal, India, and serves customers globally through our cloud-native platform.`;

  const recentNews = [
    {
      date: '2024-12-15',
      title: 'YoForex AI Achieves SOC 2 Type II Compliance',
      summary: 'Platform security and data protection measures validated by independent auditors.'
    },
    {
      date: '2024-11-20',
      title: 'New Multi-Model AI Analytics Engine Launched',
      summary: 'Enhanced platform now supports 392 AI models for comprehensive data analysis.'
    },
    {
      date: '2024-10-10',
      title: 'YoForex AI Expands Enterprise Features',
      summary: 'New workflow automation capabilities and team collaboration tools released.'
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
                <span className="text-sm text-neutral-400 ml-2">Press Kit</span>
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
            Press <span className="bg-gradient-primary bg-clip-text text-transparent">Kit</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Download approved logos, brand guidelines, executive bios, and company information for media use.
          </p>
        </motion.div>

        {/* Press Assets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Brand <span className="bg-gradient-primary bg-clip-text text-transparent">Assets</span>
          </h2>
          <div className="space-y-8">
            {pressAssets.map((category, categoryIndex) => (
              <div key={category.category} className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="flex items-center justify-between p-4 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-500/20 rounded-lg">
                          {item.format === 'PDF' ? (
                            <FileText className="w-4 h-4 text-primary-400" />
                          ) : (
                            <Image className="w-4 h-4 text-primary-400" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{item.name}</h4>
                          <p className="text-sm text-neutral-400">{item.description}</p>
                          <div className="flex items-center space-x-2 text-xs text-neutral-500 mt-1">
                            <span>{item.format}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        className="p-2 bg-primary-500/20 text-primary-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-500/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Executive Bios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Executive <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {executiveBios.map((exec, index) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center"
              >
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-1">{exec.name}</h3>
                <p className="text-primary-400 font-medium mb-4">{exec.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{exec.bio}</p>
                <motion.button
                  className="mt-4 p-2 bg-primary-500/20 text-primary-400 rounded-lg hover:bg-primary-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Boilerplate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Company Boilerplate</h2>
              <motion.button
                className="p-2 bg-primary-500/20 text-primary-400 rounded-lg hover:bg-primary-500/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="bg-neutral-800/30 rounded-lg p-6">
              <p className="text-neutral-300 leading-relaxed whitespace-pre-line">{companyBoilerplate}</p>
            </div>
          </div>
        </motion.div>

        {/* Recent News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Recent <span className="bg-gradient-primary bg-clip-text text-transparent">News</span>
          </h2>
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden">
            <div className="divide-y divide-neutral-800/50">
              {recentNews.map((news, index) => (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-neutral-800/20 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-neutral-400">{new Date(news.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2">{news.title}</h3>
                      <p className="text-neutral-400 text-sm">{news.summary}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Media Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Media <span className="bg-gradient-primary bg-clip-text text-transparent">Inquiries</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              For press inquiries, interviews, or additional information, please contact our media team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-primary-400">
                <Mail className="w-5 h-5" />
                <span className="font-medium">support@yoforex.co.in</span>
              </div>
              <div className="text-neutral-400">
                Response within 24 hours
              </div>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              UK: London Office | Dubai: Business Bay Operations Center
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PressKitPage;