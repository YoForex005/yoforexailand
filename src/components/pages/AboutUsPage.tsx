import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Users, 
  Target, 
  Award, 
  Globe,
  Shield,
  Cpu,
  TrendingUp,
  Heart,
  MapPin,
  Mail,
  Linkedin
} from 'lucide-react';

interface AboutUsPageProps {
  onNavigateBack: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigateBack }) => {
  const values = [
    {
      icon: Cpu,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to deliver cutting-edge solutions for modern businesses.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.',
      color: 'from-success-500 to-success-600'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Our customers\' success drives our innovation and shapes our product development.',
      color: 'from-accent-500 to-violet-600'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building solutions that scale globally while maintaining local relevance and compliance.',
      color: 'from-warning-500 to-warning-600'
    }
  ];

  const leadership = [
    {
      name: 'Rajesh Kumar',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Engineering at leading fintech companies. 15+ years in AI and financial technology.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      bio: 'AI researcher and former Google engineer. PhD in Machine Learning from IIT Delhi.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Amit Patel',
      role: 'Chief Product Officer',
      bio: 'Product strategy expert with 12+ years building enterprise SaaS platforms.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Sneha Gupta',
      role: 'Chief Operating Officer',
      bio: 'Operations and scaling expert. Former McKinsey consultant specializing in technology companies.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to democratize AI analytics' },
    { year: '2021', title: 'First Product Launch', description: 'Released MVP with 10 AI models' },
    { year: '2022', title: 'Series A Funding', description: 'Raised ₹50 crores to scale operations' },
    { year: '2023', title: 'Enterprise Expansion', description: 'Launched enterprise features and SOC 2 compliance' },
    { year: '2024', title: 'Global Reach', description: '10,000+ customers across 50+ countries' },
    { year: '2025', title: 'AI Innovation', description: '392 AI models and advanced automation platform' }
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
                <span className="text-sm text-neutral-400 ml-2">About Us</span>
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
            About <span className="bg-gradient-primary bg-clip-text text-transparent">YoForex AI</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We're building the future of AI-powered business intelligence and workflow automation, empowering organizations with cutting-edge technology.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="w-8 h-8 text-primary-400" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              To democratize access to advanced AI analytics and automation tools, enabling businesses of all sizes to harness the power of artificial intelligence for better decision-making and operational efficiency. We provide professional software solutions, not financial advice.
            </p>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Award className="w-8 h-8 text-success-400" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              To become the global leader in AI-powered business intelligence platforms, creating a world where every organization can leverage sophisticated AI capabilities to drive innovation, efficiency, and growth in their respective industries.
            </p>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300 group"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Leadership <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <motion.a
                    href={leader.linkedin}
                    className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-primary-400 text-sm mb-3">{leader.role}</p>
                <p className="text-neutral-400 text-xs leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-neutral-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h3>
            <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with AI-powered analytics? We'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-primary-400" />
                <span className="text-neutral-300">support@yoforex.co.in</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-success-400" />
                <span className="text-neutral-300">28, Gopi Bose Lane, Kolkata 700012, West Bengal, India</span>
              </div>
            </div>

            <motion.button
              className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Join Our Team</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AboutUsPage;