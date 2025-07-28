import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe,
  Cpu,
  BarChart3
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Cpu,
      title: 'Complete AI Solution',
      description: 'Extensive library of 392 AI models with both automated signals and interactive assistant capabilities.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'User-Friendly Interface',
      description: 'Intuitive on-screen controls with keyboard shortcuts and visual trading buttons for seamless operation.',
      color: 'from-accent-500 to-violet-600'
    },
    {
      icon: TrendingUp,
      title: 'Proven Strategies',
      description: 'Advanced features including trend following, mean reversion, breakout detection, and smart recovery options.',
      color: 'from-success-500 to-success-600'
    },
    {
      icon: BarChart3,
      title: 'Cost Efficiency',
      description: 'API cost reduction mode saves 60-80% on expenses with flexible switching between free and premium models.',
      color: 'from-warning-500 to-warning-600'
    },
    {
      icon: Shield,
      title: 'Professional Support',
      description: 'Free setup assistance, dedicated community access, and comprehensive documentation for all users.',
      color: 'from-error-500 to-error-600'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Seamless MT5 integration with dual notifications, web search capabilities, and prop firm compliance.',
      color: 'from-neutral-600 to-neutral-700'
    }
  ];

  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">YoForex AI</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            The world's most comprehensive AI trading ecosystem combining automation with intelligence for professional traders.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 h-full hover:border-neutral-700/50 transition-all duration-300 overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  whileHover={{ scale: 1.02 }}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Check Icon */}
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-5 h-5 text-success-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;