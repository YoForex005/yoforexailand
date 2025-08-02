import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Video, Calendar, Clock, Users, Play, Bell, User } from 'lucide-react';

interface WebinarsPageProps {
  onNavigateBack: () => void;
}

const WebinarsPage: React.FC<WebinarsPageProps> = ({ onNavigateBack }) => {
  const upcomingWebinars = [
    {
      title: 'Ask the CTO—Enterprise Workflow Automation',
      description: 'Join our CTO for an interactive session on scaling AI workflows for enterprise environments.',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      presenter: 'Priya Sharma, CTO',
      attendees: 245,
      topics: ['Enterprise Architecture', 'Scalability', 'Best Practices', 'Q&A Session'],
      status: 'upcoming'
    },
    {
      title: 'Building Secure API Integrations',
      description: 'Learn advanced techniques for implementing secure, scalable API integrations with YoForex AI.',
      date: '2025-02-28',
      time: '11:00 AM EST',
      duration: '45 minutes',
      presenter: 'Technical Team',
      attendees: 189,
      topics: ['API Security', 'Authentication', 'Rate Limiting', 'Error Handling'],
      status: 'upcoming'
    }
  ];

  const pastWebinars = [
    {
      title: 'How to Build Secure Integrations with YoForex AI APIs',
      description: 'Comprehensive guide to implementing secure, production-ready integrations.',
      date: '2024-12-10',
      duration: '50 minutes',
      presenter: 'Security Team',
      views: 1247,
      topics: ['API Security', 'OAuth Implementation', 'Data Protection'],
      status: 'recorded'
    },
    {
      title: 'Scaling SaaS Infrastructure for 99.9% Uptime',
      description: 'Behind-the-scenes look at our infrastructure and reliability engineering practices.',
      date: '2024-11-15',
      duration: '40 minutes',
      presenter: 'DevOps Team',
      views: 892,
      topics: ['Infrastructure', 'Monitoring', 'Incident Response'],
      status: 'recorded'
    },
    {
      title: 'AI-Powered Analytics: From Data to Insights',
      description: 'Explore how to transform raw data into actionable business insights using AI.',
      date: '2024-10-20',
      duration: '55 minutes',
      presenter: 'Data Science Team',
      views: 1456,
      topics: ['Data Analytics', 'Machine Learning', 'Business Intelligence'],
      status: 'recorded'
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
                <span className="text-sm text-neutral-400 ml-2">Webinars</span>
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
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Webinars</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Join our technology and analytics webinars—live and recorded sessions on AI/ML, workflow automation, and SaaS best practices.
          </p>
        </motion.div>

        {/* Upcoming Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Upcoming <span className="bg-gradient-primary bg-clip-text text-transparent">Webinars</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-neutral-700/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-success-500/20 text-success-400 text-sm font-medium rounded-full">
                      Upcoming
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-neutral-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{webinar.attendees} registered</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                  {webinar.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed mb-6">{webinar.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-neutral-300">
                    <Calendar className="w-4 h-4 text-primary-400" />
                    <span>{new Date(webinar.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-300">
                    <Clock className="w-4 h-4 text-primary-400" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-300">
                    <User className="w-4 h-4 text-primary-400" />
                    <span>{webinar.presenter}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-300">
                    <Clock className="w-4 h-4 text-primary-400" />
                    <span>{webinar.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-300 mb-3">Topics Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded-full border border-neutral-700/50"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-primary hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Bell className="w-4 h-4" />
                  <span>Register Now</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            On-Demand <span className="bg-gradient-primary bg-clip-text text-transparent">Sessions</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-success-500 to-success-600 rounded-lg">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-neutral-500/20 text-neutral-400 text-xs font-medium rounded-full">
                      Recorded
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-neutral-400">
                    <Users className="w-3 h-3" />
                    <span className="text-xs">{webinar.views} views</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                  {webinar.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{webinar.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-xs text-neutral-300">
                    <Calendar className="w-3 h-3 text-success-400" />
                    <span>{new Date(webinar.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-neutral-300">
                    <Clock className="w-3 h-3 text-success-400" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-neutral-300">
                    <User className="w-3 h-3 text-success-400" />
                    <span>{webinar.presenter}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {webinar.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full border border-neutral-700/50"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full py-2 rounded-lg font-medium text-white bg-gradient-to-r from-success-500 to-success-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-3 h-3" />
                  <span>Watch Now</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Never Miss a <span className="bg-gradient-primary bg-clip-text text-transparent">Webinar</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Sign up for webinar invites and get notified about upcoming sessions on AI, automation, and SaaS best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <motion.button
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-4 h-4" />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default WebinarsPage;