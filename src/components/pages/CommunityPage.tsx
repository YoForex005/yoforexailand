import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Users, 
  MessageCircle, 
  Trophy, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  ArrowRight,
  UserPlus,
  Calendar,
  BarChart3,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CommunityPageProps {
  onNavigateBack: () => void;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigateBack }) => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? null : tierId);
  };

  const communityStats = [
    { label: 'Active Members', value: '12,400+', icon: Users, color: 'text-primary-400' },
    { label: 'Daily Messages', value: '850+', icon: MessageCircle, color: 'text-success-400' },
    { label: 'Success Stories', value: '2,100+', icon: Trophy, color: 'text-warning-400' },
    { label: 'Countries', value: '85+', icon: Globe, color: 'text-accent-400' }
  ];

  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Expert Discussions',
      description: 'Join daily discussions with experienced traders and AI specialists',
      color: 'from-primary-500 to-primary-600',
      id: 'expert-discussions'
    },
    {
      icon: TrendingUp,
      title: 'Strategy Sharing',
      description: 'Share and discover profitable trading strategies from the community',
      color: 'from-success-500 to-success-600',
      id: 'strategy-sharing'
    },
    {
      icon: Shield,
      title: 'Verified Members',
      description: 'Connect with verified profitable traders and industry experts',
      color: 'from-warning-500 to-warning-600',
      id: 'verified-members'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Access community performance data and trading insights',
      color: 'from-accent-500 to-violet-600',
      id: 'performance-analytics'
    }
  ];

  const membershipTiers = [
    {
      name: 'Basic Community',
      price: 'Free',
      description: 'Access to general discussions and basic resources',
      features: [
        'General trading discussions',
        'Basic market updates',
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
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals sharing analytics insights, workflow strategies, and experiences in our exclusive community.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Community <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300 group"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => toggleFeature(feature.id)}
                  className="mt-4 flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">
                    {expandedFeature === feature.id ? 'Show Less' : 'Learn More'}
                  </span>
                  {expandedFeature === feature.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </motion.button>

                {/* Expanded Content */}
                {expandedFeature === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-800/20 rounded-lg p-4"
                  >
                    {feature.id === 'expert-discussions' && (
                      <div>

                  {/* Learn More Button */}
                  <motion.button
                    onClick={() => toggleTier(tier.name.toLowerCase().replace(' ', '-'))}
                    className="w-full mt-3 flex items-center justify-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium">
                      {expandedTier === tier.name.toLowerCase().replace(' ', '-') ? 'Show Less Details' : 'See Full Details'}
                    </span>
                    {expandedTier === tier.name.toLowerCase().replace(' ', '-') ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </motion.button>

                  {/* Expanded Content */}
                  {expandedTier === tier.name.toLowerCase().replace(' ', '-') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-neutral-700/50 bg-neutral-800/20 rounded-lg p-4"
                    >
                      {tier.name === 'Basic Community' && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Basic Community Access</h4>
                          <div className="space-y-2 mb-4">
                            <p className="text-sm text-neutral-300">• Access to general technical discussion forums</p>
                            <p className="text-sm text-neutral-300">• Weekly platform updates and feature announcements</p>
                            <p className="text-sm text-neutral-300">• Basic troubleshooting guides and documentation</p>
                            <p className="text-sm text-neutral-300">• Community-driven FAQ and knowledge base</p>
                            <p className="text-sm text-neutral-300">• Monthly virtual meetups and networking events</p>
                          </div>
                          <p className="text-neutral-400 text-sm">
                            Perfect for individual developers and small teams getting started
                          </p>
                        </div>
                      )}

                      {tier.name === 'Pro Community' && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Pro Community Benefits</h4>
                          <div className="space-y-2 mb-4">
                            <p className="text-sm text-neutral-300">• Priority access to technical experts and architects</p>
                            <p className="text-sm text-neutral-300">• Advanced integration workshops and training sessions</p>
                            <p className="text-sm text-neutral-300">• Direct feedback channel to product development team</p>
                            <p className="text-sm text-neutral-300">• Early access to beta features and new releases</p>
                            <p className="text-sm text-neutral-300">• Dedicated Slack channels for real-time collaboration</p>
                            <p className="text-sm text-neutral-300">• Monthly 1:1 consultation sessions with technical leads</p>
                          </div>
                          <p className="text-primary-400 text-sm">
                            Ideal for growing businesses and development teams
                          </p>
                        </div>
                      )}

                      {tier.name === 'VIP Community' && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">VIP Community Exclusive Access</h4>
                          <div className="space-y-2 mb-4">
                            <p className="text-sm text-neutral-300">• Personal technical advisor assigned to your account</p>
                            <p className="text-sm text-neutral-300">• Custom integration development and optimization</p>
                            <p className="text-sm text-neutral-300">• Quarterly business reviews and strategy sessions</p>
                            <p className="text-sm text-neutral-300">• Influence on product roadmap and feature prioritization</p>
                            <p className="text-sm text-neutral-300">• White-glove onboarding and training programs</p>
                            <p className="text-sm text-neutral-300">• Exclusive access to executive team and founders</p>
                          </div>
                          <p className="text-warning-400 text-sm">
                            Enterprise-grade support: support@yoforex.co.in | Address: 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India
                          </p>
                        </div>
                      )}

                      <motion.button
                        onClick={() => toggleTier(tier.name.toLowerCase().replace(' ', '-'))}
                        className="mt-4 text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        Collapse Details
                      </motion.button>
                    </motion.div>
                  )}
                        <h4 className="text-lg font-semibold text-white mb-3">Professional Technical Discussions</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• Daily technical discussions on API integrations and workflow optimization</p>
                          <p className="text-sm text-neutral-300">• Expert insights on enterprise automation best practices</p>
                          <p className="text-sm text-neutral-300">• Moderated forums focused on SaaS platform usage</p>
                          <p className="text-sm text-neutral-300">• Direct access to YoForex AI development team</p>
                          <p className="text-sm text-neutral-300">• Weekly technical webinars and Q&A sessions</p>
                        </div>
                        <p className="text-primary-400 text-sm">
                          Join professional discussions at app.yoforex.co.in/community
                        </p>
                      </div>
                    )}

                    {feature.id === 'strategy-sharing' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Workflow Strategy Sharing</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• Share automation workflows and integration patterns</p>
                          <p className="text-sm text-neutral-300">• Discover proven enterprise implementation strategies</p>
                          <p className="text-sm text-neutral-300">• Template library for common business use cases</p>
                          <p className="text-sm text-neutral-300">• Performance benchmarking and optimization tips</p>
                          <p className="text-sm text-neutral-300">• Code snippets and integration examples</p>
                        </div>
                        <p className="text-success-400 text-sm">
                          Contribute to our growing strategy library - purely technical content
                        </p>
                      </div>
                    )}

                    {feature.id === 'verified-members' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Verified Enterprise Members</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• Connect with verified IT professionals and system architects</p>
                          <p className="text-sm text-neutral-300">• Network with enterprise customers and implementation experts</p>
                          <p className="text-sm text-neutral-300">• Access to exclusive enterprise-only discussion channels</p>
                          <p className="text-sm text-neutral-300">• Mentorship opportunities with senior technical leaders</p>
                          <p className="text-sm text-neutral-300">• Priority access to beta features and early releases</p>
                        </div>
                        <p className="text-warning-400 text-sm">
                          Verification process ensures professional, enterprise-focused community
                        </p>
                      </div>
                    )}

                    {feature.id === 'performance-analytics' && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Community Analytics Dashboard</h4>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-neutral-300">• Real-time platform usage statistics and performance metrics</p>
                          <p className="text-sm text-neutral-300">• Community-driven benchmarking and best practice insights</p>
                          <p className="text-sm text-neutral-300">• Workflow efficiency comparisons across industries</p>
                          <p className="text-sm text-neutral-300">• ROI tracking and optimization recommendations</p>
                          <p className="text-sm text-neutral-300">• Custom reporting tools for enterprise teams</p>
                        </div>
                        <p className="text-accent-400 text-sm">
                          Access analytics dashboard: support@yoforex.co.in
                        </p>
                      </div>
                    )}

                    <motion.button
                      onClick={() => toggleFeature(feature.id)}
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
        </motion.div>

        {/* Membership Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Membership <span className="bg-gradient-primary bg-clip-text text-transparent">Tiers</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-glass backdrop-blur-sm border-2 ${tier.color} rounded-2xl p-8 ${
                  tier.popular ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-primary-400 mb-2">{tier.price}</div>
                  <p className="text-neutral-400 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-success-500/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success-400" />
                      </div>
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${tier.buttonColor}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join {tier.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Members Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
                Ready to Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Trading Community?</span>
              </h3>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Connect with successful traders, share strategies, and accelerate your trading journey with expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Join Community</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.button>
                
                <motion.button
                  className="bg-transparent border-2 border-primary-500/50 text-primary-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-500/10 transition-colors duration-300 inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CommunityPage;