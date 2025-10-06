import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  TrendingUp,
  Brain,
  BarChart3,
  Globe,
  Star,
  ArrowRight,
  Search
} from 'lucide-react';
import SEOHead from '../SEOHead';

const BlogPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai-trading', name: 'AI Trading', count: 12 },
    { id: 'market-analysis', name: 'Market Analysis', count: 8 },
    { id: 'tutorials', name: 'Tutorials', count: 6 },
    { id: 'news', name: 'News & Updates', count: 4 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Forex Trading in 2025',
      excerpt: 'Discover how artificial intelligence is transforming currency markets and creating new opportunities for traders worldwide.',
      category: 'ai-trading',
      author: 'Dr. Sarah Chen',
      date: '2025-01-28',
      readTime: '8 min read',
      image: '/blog-ai-forex.jpg',
      featured: true,
      tags: ['AI', 'Forex', 'Trading', 'Technology']
    },
    {
      id: 2,
      title: 'Multi-AI Consensus: The Future of Trading Signals',
      excerpt: 'Learn why combining multiple AI models produces more accurate trading signals than relying on a single AI system.',
      category: 'ai-trading',
      author: 'Michael Rodriguez',
      date: '2025-01-25',
      readTime: '6 min read',
      image: '/blog-multi-ai.jpg',
      featured: true,
      tags: ['Multi-AI', 'Consensus', 'Signals']
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: 'EUR/USD Analysis: AI Predicts Major Breakout',
      excerpt: 'Our AI models are showing strong consensus for a potential EUR/USD breakout. Here\'s what the data reveals.',
      category: 'market-analysis',
      author: 'James Wilson',
      date: '2025-01-22',
      readTime: '5 min read',
      tags: ['EUR/USD', 'Breakout', 'Analysis']
    },
    {
      id: 4,
      title: 'Getting Started with YoForex AI: Complete Tutorial',
      excerpt: 'Step-by-step guide to setting up your first AI trading analysis and understanding the results.',
      category: 'tutorials',
      author: 'Lisa Zhang',
      date: '2025-01-20',
      readTime: '12 min read',
      tags: ['Tutorial', 'Beginner', 'Setup']
    },
    {
      id: 5,
      title: 'Platform Update: New AI Models Added',
      excerpt: 'We\'ve added 15 new AI models to our platform, including the latest from OpenAI and Anthropic.',
      category: 'news',
      author: 'YoForex Team',
      date: '2025-01-18',
      readTime: '3 min read',
      tags: ['Update', 'New Features', 'AI Models']
    },
    {
      id: 6,
      title: 'Risk Management in AI Trading: Best Practices',
      excerpt: 'Essential risk management strategies when using AI for forex trading decisions.',
      category: 'tutorials',
      author: 'Robert Kim',
      date: '2025-01-15',
      readTime: '9 min read',
      tags: ['Risk Management', 'Best Practices', 'Trading']
    },
    {
      id: 7,
      title: 'GBP/JPY Weekly Outlook: AI Market Sentiment',
      excerpt: 'Weekly analysis of GBP/JPY using our advanced AI sentiment analysis and technical indicators.',
      category: 'market-analysis',
      author: 'Emma Thompson',
      date: '2025-01-12',
      readTime: '7 min read',
      tags: ['GBP/JPY', 'Weekly', 'Sentiment']
    },
    {
      id: 8,
      title: 'The Psychology of AI Trading: Human vs Machine',
      excerpt: 'Exploring the psychological aspects of trading with AI assistance and how to maintain discipline.',
      category: 'ai-trading',
      author: 'Dr. Alex Morgan',
      date: '2025-01-10',
      readTime: '11 min read',
      tags: ['Psychology', 'AI Trading', 'Discipline']
    }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-trading': return Brain;
      case 'market-analysis': return BarChart3;
      case 'tutorials': return Star;
      case 'news': return Globe;
      default: return TrendingUp;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-trading': return 'from-primary-500 to-primary-600';
      case 'market-analysis': return 'from-success-500 to-success-600';
      case 'tutorials': return 'from-warning-500 to-warning-600';
      case 'news': return 'from-accent-500 to-violet-600';
      default: return 'from-neutral-500 to-neutral-600';
    }
  };

  return (
    <>
      <SEOHead
        title="Trading Blog | AI Forex Insights & Market Analysis | YoForex AI"
        description="Stay updated with the latest AI forex trading insights, market analysis, tutorials, and platform updates. Expert trading knowledge and AI technology insights."
        keywords="forex blog, AI trading blog, market analysis, trading tutorials, forex insights, YoForex news, trading education"
      />

      <div className="min-h-screen bg-neutral-950 text-white font-inter">
        {/* Header */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            {/* <motion.button
              onClick={() => setLocation('/resources')}
              className="flex items-center space-x-2 text-neutral-400 hover:text-white mb-8 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Resources</span>
            </motion.button> */}

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Trading <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
                Expert insights on AI forex trading, market analysis, platform updates, and educational content from our team of trading professionals.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-3 bg-neutral-900/50 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-500 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-neutral-900/50 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-6 space-x-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg whitespace-nowrap transition-all ${selectedCategory === category.id
                      ? 'bg-gradient-primary text-white'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-neutral-700'
                    }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
                </h2>
                <p className="text-neutral-400">Our most popular and insightful content</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer"
                    onClick={() => setLocation(`/blog/${post.id}`)}
                  >
                    {/* Featured Image */}
                    <div className="h-48 bg-gradient-to-br from-neutral-800 to-neutral-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(post.category)}`} />
                        <span className="text-sm text-neutral-400 capitalize">
                          {post.category.replace('-', ' ')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:text-primary-400 transition-colors" />
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedCategory === 'all' ? 'Latest' : categories.find(c => c.id === selectedCategory)?.name} <span className="bg-gradient-primary bg-clip-text text-transparent">Posts</span>
              </h2>
              <p className="text-neutral-400">Stay updated with our latest insights and analysis</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer"
                    onClick={() => setLocation(`/blog/${post.id}`)}
                  >
                    {/* Category Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(post.category)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <motion.button
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-700 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Articles
              </motion.button>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="py-16 bg-neutral-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-3xl p-12 relative overflow-hidden"
            >
              {/* Background Animation */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Stay <span className="bg-gradient-primary bg-clip-text text-transparent">Informed</span>
                </h2>
                <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Get the latest trading insights and AI analysis delivered to your inbox weekly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-500 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                  <motion.button
                    className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>

                <p className="text-sm text-neutral-400 mt-4">
                  No spam, unsubscribe anytime. Join 10,000+ traders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;