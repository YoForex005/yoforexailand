import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Cpu, TrendingUp, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Choose Your Mode',
      description: 'Select Automated Mode for 24/7 hands-free signals or Interactive Assistant Mode for real-time AI chat and analysis.',
      color: 'from-primary-500 to-primary-600',
      delay: 0.2
    },
    {
      icon: Cpu,
      title: 'Multi-AI Processing',
      description: 'Access 392 AI models with flexible switching between 67 free and 325 premium options. AI Position Management monitors and adjusts in real-time.',
      color: 'from-accent-500 to-violet-600',
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: 'Execute & Manage',
      description: 'Receive automated signals with AI-calculated TP/SL levels, smart recovery options, and dual notifications via MT5 mobile and Telegram.',
      color: 'from-success-500 to-success-600',
      delay: 0.6
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
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to access the world's most comprehensive AI trading ecosystem with automated signals and interactive intelligence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative group"
            >
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-neutral-700 to-transparent z-0">
                  <motion.div
                    className="h-full bg-gradient-primary"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: step.delay + 0.3 }}
                  />
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center group-hover:border-neutral-700/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.description}</p>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            <span>Try It Now - Upload Your First Chart</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;