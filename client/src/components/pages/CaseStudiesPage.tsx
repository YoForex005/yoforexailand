import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Building, TrendingUp, Shield, BarChart3, Users, Clock, CheckCircle } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigateBack: () => void;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigateBack }) => {
  const caseStudies = [
    {
      icon: Building,
      title: 'Enterprise BFSI Analytics',
      company: 'Regional Bank',
      industry: 'Banking & Financial Services',
      challenge: 'Manual regulatory reporting processes taking weeks to complete',
      solution: 'Automated analytics orchestration with YoForex AI platform',
      results: [
        '80% reduction in manual effort',
        'Compliance reporting time reduced from weeks to hours',
        'Improved accuracy and consistency in reports',
        'Enhanced regulatory compliance tracking'
      ],
      metrics: {
        efficiency: '80%',
        timeReduction: '90%',
        accuracy: '99.5%'
      },
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: TrendingUp,
      title: 'FinTech SaaS Scaling',
      company: 'Mid-sized SaaS Business',
      industry: 'Financial Technology',
      challenge: 'Scaling real-time analytics to support 10x daily data loads',
      solution: 'YoForex AI APIs for automated data processing and analytics',
      results: [
        'Successfully scaled to handle 10x data volume',
        'Real-time analytics processing maintained',
        'Reduced infrastructure costs by 40%',
        'Improved system reliability and uptime'
      ],
      metrics: {
        scalability: '10x',
        costReduction: '40%',
        uptime: '99.9%'
      },
      color: 'from-success-500 to-success-600'
    },
    {
      icon: Shield,
      title: 'Compliance Automation',
      company: 'Insurance Partner',
      industry: 'Insurance',
      challenge: 'Complex compliance reporting requiring extensive manual oversight',
      solution: 'Automated compliance reporting with AI-powered validation',
      results: [
        'Automated 95% of compliance workflows',
        'Reduced submission time from weeks to hours',
        'Enhanced accuracy and audit trail',
        'Improved regulatory relationship management'
      ],
      metrics: {
        automation: '95%',
        timeReduction: '85%',
        accuracy: '99.8%'
      },
      color: 'from-warning-500 to-warning-600'
    }
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
                <span className="text-sm text-neutral-400 ml-2">Case Studies</span>
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
            Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Explore how organizations maximize efficiency and data insights with YoForex AI's analytics and workflow automation platform.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left Column - Overview */}
                <div className="lg:col-span-1 p-8 bg-neutral-800/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${study.color} rounded-xl`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      <p className="text-neutral-400 text-sm">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary-400 mb-2">Challenge</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-success-400 mb-2">Solution</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Results */}
                <div className="lg:col-span-1 p-8">
                  <h4 className="font-semibold text-white mb-6 flex items-center">
                    <CheckCircle className="w-5 h-5 text-success-400 mr-2" />
                    Key Results
                  </h4>
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-success-400 mt-2 flex-shrink-0" />
                        <p className="text-neutral-300 text-sm leading-relaxed">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Metrics */}
                <div className="lg:col-span-1 p-8 bg-neutral-800/10">
                  <h4 className="font-semibold text-white mb-6 flex items-center">
                    <BarChart3 className="w-5 h-5 text-primary-400 mr-2" />
                    Impact Metrics
                  </h4>
                  <div className="space-y-6">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-1`}>
                          {value}
                        </div>
                        <div className="text-neutral-400 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your <span className="bg-gradient-primary bg-clip-text text-transparent">Success Story?</span>
            </h3>
            <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
              Contact us for detailed case studies and learn how YoForex AI can support your business's IT operations and analytics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5" />
                <span>Contact Sales</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              
              <motion.button
                className="bg-transparent border-2 border-primary-500/50 text-primary-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-500/10 transition-colors duration-300 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock className="w-5 h-5" />
                <span>Schedule Demo</span>
              </motion.button>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              Email: support@yoforex.net
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;