import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Calendar, 
  User, 
  Clock, 
  TrendingUp,
  Brain,
  BarChart3,
  Target,
  ArrowRight
} from 'lucide-react';

interface BlogPageProps {
  onNavigateBack: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigateBack }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Powered Analytics: Multi-Model Architecture',
      excerpt: 'Discover how combining multiple AI models creates more reliable business intelligence and reduces false positives in data analysis.',
      author: 'YoForex AI Team',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI Analytics',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Maximizing Efficiency with AI Workflow Automation',
      excerpt: 'Learn advanced techniques for using AI to automate business workflows, including smart data processing and dynamic reporting systems.',
      author: 'Workflow Strategist',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Automation',
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Cost-Effective AI Analytics: Reducing API Expenses by 80%',
      excerpt: 'Practical tips for optimizing your AI analytics costs while maintaining data quality through smart model selection and usage patterns.',
      author: 'Technical Team',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Cost Optimization',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Understanding Business Intelligence with AI Web Search',
      excerpt: 'How real-time web search integration enhances business decisions by incorporating news sentiment and market intelligence.',
      author: 'Market Analyst',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Business Intelligence',
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Enterprise Compliance with YoForex AI: Security Guide',
      excerpt: 'Essential guidelines for using AI analytics platforms while maintaining compliance with enterprise security and data management requirements.',
      author: 'Compliance Expert',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Compliance',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Interactive vs Automated: Choosing Your Analytics Mode',
      excerpt: 'Compare the benefits of automated analytics versus interactive AI assistance to find the perfect workflow approach for your business.',
      author: 'Product Manager',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Getting Started',
      image: 'https://images.pexels.com/photos/6802045/pexels-photo-6802045.jpeg?w=400&h=250&fit=crop'
    }
  ];

  const categories = ['All', 'AI Analytics', 'Automation', 'Business Intelligence', 'Getting Started', 'Cost Optimization', 'Compliance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Trading': return Brain;
      case 'Strategy': return Target;
      case 'Market Analysis': return BarChart3;
      case 'Getting Started': return TrendingUp;
      default: return BarChart3;
    }
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
                <span className="text-sm text-neutral-400 ml-2">Blog</span>
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
            Trading <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Latest insights, strategies, and updates from the world of AI-powered trading.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-neutral-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-neutral-400" />
                      <span className="text-neutral-300 text-sm">{blogPosts[0].author}</span>
                      <Clock className="w-4 h-4 text-neutral-400 ml-4" />
                      <span className="text-neutral-300 text-sm">{blogPosts[0].readTime}</span>
                    </div>
                    <motion.button
                      className="text-primary-400 hover:text-primary-300 flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(selectedCategory === 'All' ? 1 : 0).map((post, index) => {
            const CategoryIcon = getCategoryIcon(post.category);
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-neutral-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-neutral-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <CategoryIcon className="w-3 h-3 text-primary-400" />
                      <span className="text-primary-400 text-xs font-medium">{post.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-neutral-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-neutral-400" />
                      <span className="text-neutral-300 text-sm">{post.author}</span>
                    </div>
                    <motion.button
                      className="text-primary-400 hover:text-primary-300 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm">Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with <span className="bg-gradient-primary bg-clip-text text-transparent">AI Trading</span>
            </h3>
            <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
              Get the latest insights, strategies, and updates delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <motion.button
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPage;