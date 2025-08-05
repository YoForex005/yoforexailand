import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Users, MessageCircle, TrendingUp, Pin, Clock, User, ThumbsUp, Eye } from 'lucide-react';

interface CommunityForumPageProps {
  onNavigateBack: () => void;
}

const CommunityForumPage: React.FC<CommunityForumPageProps> = ({ onNavigateBack }) => {
  const forumCategories = [
    {
      icon: TrendingUp,
      title: 'Integration How-tos',
      description: 'Share scripts, guides, and integration examples',
      posts: 234,
      lastActivity: '2 hours ago',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'Automation & Reporting',
      description: 'Best practices for workflow automation and reporting',
      posts: 189,
      lastActivity: '4 hours ago',
      color: 'from-success-500 to-success-600'
    },
    {
      icon: MessageCircle,
      title: 'Product Roadmap',
      description: 'Feature requests, feedback, and product discussions',
      posts: 156,
      lastActivity: '1 hour ago',
      color: 'from-accent-500 to-violet-600'
    },
    {
      icon: Pin,
      title: 'General Discussion',
      description: 'Platform tips, troubleshooting, and community chat',
      posts: 312,
      lastActivity: '30 minutes ago',
      color: 'from-warning-500 to-warning-600'
    }
  ];

  const recentPosts = [
    {
      title: 'Best practices for API rate limit handling',
      author: 'TechLead_Sarah',
      category: 'Integration How-tos',
      replies: 12,
      views: 245,
      lastReply: '2 hours ago',
      isPinned: false,
      hasNewReplies: true
    },
    {
      title: 'Feature Request: Bulk data export functionality',
      author: 'DataAnalyst_Mike',
      category: 'Product Roadmap',
      replies: 8,
      views: 156,
      lastReply: '4 hours ago',
      isPinned: true,
      hasNewReplies: false
    },
    {
      title: 'Automated reporting setup guide',
      author: 'AutomationPro',
      category: 'Automation & Reporting',
      replies: 15,
      views: 389,
      lastReply: '6 hours ago',
      isPinned: false,
      hasNewReplies: true
    },
    {
      title: 'Troubleshooting webhook delivery issues',
      author: 'DevOps_Alex',
      category: 'General Discussion',
      replies: 6,
      views: 123,
      lastReply: '1 day ago',
      isPinned: false,
      hasNewReplies: false
    }
  ];

  const forumStats = [
    { label: 'Total Members', value: '2,847', icon: Users },
    { label: 'Posts This Month', value: '1,234', icon: MessageCircle },
    { label: 'Active Discussions', value: '89', icon: TrendingUp },
    { label: 'Solutions Provided', value: '456', icon: ThumbsUp }
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
                <span className="text-sm text-neutral-400 ml-2">Community Forum</span>
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
            Community <span className="bg-gradient-primary bg-clip-text text-transparent">Forum</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Learn from other users and our staff. Categories include integration how-tos, automation best practices, product roadmap discussions, and general platform tips.
          </p>
        </motion.div>

        {/* Forum Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {forumStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Forum Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Forum <span className="bg-gradient-primary bg-clip-text text-transparent">Categories</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-neutral-400 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-neutral-400">
                  <span>{category.posts} posts</span>
                  <span>Last activity: {category.lastActivity}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Recent <span className="bg-gradient-primary bg-clip-text text-transparent">Discussions</span>
          </h2>
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden">
            <div className="divide-y divide-neutral-800/50">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-neutral-800/20 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {post.isPinned && <Pin className="w-4 h-4 text-warning-400" />}
                        <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                          {post.title}
                        </h3>
                        {post.hasNewReplies && (
                          <span className="w-2 h-2 bg-primary-400 rounded-full" />
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-neutral-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <span className="px-2 py-1 bg-neutral-800/50 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-neutral-400">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.lastReply}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-warning-500/20 to-error-500/20 border border-warning-500/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-warning-400 mb-4">Community Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-300">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1 h-1 rounded-full bg-warning-400 mt-2 flex-shrink-0" />
                  <span>Focus on technical integrations and platform usage</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1 h-1 rounded-full bg-warning-400 mt-2 flex-shrink-0" />
                  <span>Share automation and reporting best practices</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1 h-1 rounded-full bg-warning-400 mt-2 flex-shrink-0" />
                  <span>Provide constructive feedback on product roadmap</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1 h-1 rounded-full bg-error-400 mt-2 flex-shrink-0" />
                  <span>NO stock tips or trading advice discussions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1 h-1 rounded-full bg-error-400 mt-2 flex-shrink-0" />
                  <span>Keep discussions professional and respectful</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1 h-1 rounded-full bg-error-400 mt-2 flex-shrink-0" />
                  <span>Search before posting to avoid duplicates</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the <span className="bg-gradient-primary bg-clip-text text-transparent">Discussion?</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Contribute, share, and troubleshoot with the YoForex AI community of developers and analysts.
            </p>
            <motion.button
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              <span>Join Community</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CommunityForumPage;