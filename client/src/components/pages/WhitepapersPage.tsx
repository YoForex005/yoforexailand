import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, FileText, Download, Calendar, User, Clock, BarChart3, Shield } from 'lucide-react';

interface WhitepapersPageProps {
  onNavigateBack: () => void;
}

const WhitepapersPage: React.FC<WhitepapersPageProps> = ({ onNavigateBack }) => {
  const whitepapers = [
    {
      icon: BarChart3,
      title: 'Scalable AI Workflows for Financial Data Analysis',
      description: 'Comprehensive guide to architectural frameworks, performance benchmarks, and best practices for implementing AI-driven analytics in financial services.',
      author: 'YoForex AI Research Team',
      publishDate: '2024-12-15',
      readTime: '25 min read',
      pages: 42,
      topics: ['AI Architecture', 'Performance Optimization', 'Scalability', 'Best Practices'],
      abstract: 'This whitepaper explores the technical foundations of building scalable AI workflows specifically designed for financial data analysis. It covers architectural patterns, performance optimization techniques, and real-world implementation strategies.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Shield,
      title: 'Automating Compliance Reporting with AI Platforms',
      description: 'In-depth analysis of how SaaS platforms can simplify and de-risk regulatory processes through intelligent automation and AI-powered validation.',
      author: 'Compliance & Technology Team',
      publishDate: '2024-11-20',
      readTime: '18 min read',
      pages: 28,
      topics: ['Regulatory Compliance', 'Automation', 'Risk Management', 'AI Validation'],
      abstract: 'This paper examines the intersection of artificial intelligence and regulatory compliance, providing frameworks for automating complex reporting requirements while maintaining accuracy and auditability.',
      color: 'from-success-500 to-success-600'
    }
  ];

  const [selectedPaper, setSelectedPaper] = React.useState<number | null>(null);

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
                <span className="text-sm text-neutral-400 ml-2">Whitepapers</span>
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
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Whitepapers</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Download authoritative technical briefings on AI-powered analytics, workflow automation, and enterprise software architecture.
          </p>
        </motion.div>

        {/* Whitepapers Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {whitepapers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-neutral-700/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${paper.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <paper.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                      {paper.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-neutral-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-6">{paper.description}</p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-neutral-400">
                    <Clock className="w-4 h-4" />
                    <span>{paper.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-400">
                    <FileText className="w-4 h-4" />
                    <span>{paper.pages} pages</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-300 mb-3">Key Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {paper.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded-full border border-neutral-700/50"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-300 mb-2">Abstract</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{paper.abstract}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 pb-8">
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${paper.color} hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPaper(index)}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Whitepaper</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Form Modal */}
        {selectedPaper !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPaper(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Download Whitepaper</h3>
              <p className="text-neutral-400 mb-6">
                Complete the form below to receive your complimentary download of "{whitepapers[selectedPaper].title}".
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-3 mt-6">
                  <motion.button
                    type="button"
                    onClick={() => setSelectedPaper(null)}
                    className="px-4 py-2 text-neutral-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for <span className="bg-gradient-primary bg-clip-text text-transparent">Custom Research?</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Our research team can create custom whitepapers and technical documentation for your specific use cases.
            </p>
            <div className="text-primary-400 font-medium">
              Email: support@yoforex.net
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default WhitepapersPage;