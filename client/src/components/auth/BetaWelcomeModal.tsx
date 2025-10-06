import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Zap, 
  Star, 
  MessageCircle, 
  Mail, 
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface BetaWelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueToDashboard: () => void;
  userEmail?: string;
}

const BetaWelcomeModal: React.FC<BetaWelcomeModalProps> = ({
  isOpen,
  onClose,
  onContinueToDashboard,
  userEmail
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset state when modal opens
      setCurrentStep(0);
      setShowContactOptions(false);
      
      // Auto-advance through steps
      const timer1 = setTimeout(() => setCurrentStep(1), 1000);
      const timer2 = setTimeout(() => setCurrentStep(2), 2000);
      const timer3 = setTimeout(() => setShowContactOptions(true), 3000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
          className="relative bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/50 rounded-3xl p-8 w-full max-w-2xl mx-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated Background Glow */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
              animate={{ 
                x: ['-100%', '100%'],
                rotate: [0, 360]
              }}
              transition={{ 
                x: { duration: 8, repeat: Infinity, ease: "linear" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
              animate={{
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 300 - 150],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`
              }}
            />
          ))}

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-700/50 transition-colors z-10"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="relative z-10">
            {/* Header with Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                animate={{ 
                  scale: [1, 1.05, 1],
                  filter: [
                    'drop-shadow(0 0 20px rgba(14, 165, 233, 0.5))',
                    'drop-shadow(0 0 30px rgba(217, 70, 239, 0.8))',
                    'drop-shadow(0 0 20px rgba(14, 165, 233, 0.5))'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-12 h-12 text-primary-400 mr-3" />
                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  YoForex AI
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center px-4 py-2 bg-warning-500/20 border border-warning-500/50 rounded-full text-warning-400 text-sm font-medium mb-4"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                BETA TESTING PHASE
                <Sparkles className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>

            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Welcome to the Future of{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Trading!
                </span>
              </h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: currentStep >= 1 ? 1 : 0 }}
                className="text-xl text-neutral-300 leading-relaxed mb-6"
              >
                Thank you for your interest! We will notify you via WhatsApp and email.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: currentStep >= 2 ? 1 : 0 }}
                className="text-lg text-neutral-400 leading-relaxed"
              >
                This is currently in <span className="text-warning-400 font-semibold">beta testing phase</span> - 
                please show your interest in this advanced trading solution.
              </motion.p>
            </motion.div>

            {/* Contact Preferences */}
            <AnimatePresence>
              {showContactOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-white text-center mb-6">
                    How would you like to be notified?
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-glass backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 cursor-pointer hover:border-primary-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-success-500/20 rounded-xl group-hover:bg-success-500/30 transition-colors">
                          <MessageCircle className="w-6 h-6 text-success-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-success-400 transition-colors">
                            WhatsApp Updates
                          </h4>
                          <p className="text-neutral-400 text-sm">
                            Get instant notifications on your phone
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success-400" />
                        <span className="text-success-400 text-sm font-medium">Preferred</span>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-glass backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 cursor-pointer hover:border-primary-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary-500/20 rounded-xl group-hover:bg-primary-500/30 transition-colors">
                          <Mail className="w-6 h-6 text-primary-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                            Email Updates
                          </h4>
                          <p className="text-neutral-400 text-sm">
                            Detailed updates in your inbox
                          </p>
                          {userEmail && (
                            <p className="text-primary-400 text-xs mt-1">{userEmail}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Beta Features Preview */}
                  <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      <Star className="w-5 h-5 text-warning-400 mr-2" />
                      What's Coming in Beta
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full" />
                          <span className="text-neutral-300 text-sm">392+ AI Models Access</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-success-400 rounded-full" />
                          <span className="text-neutral-300 text-sm">Multi-AI Consensus Engine</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent-400 rounded-full" />
                          <span className="text-neutral-300 text-sm">10+ Professional Strategies</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-warning-400 rounded-full" />
                          <span className="text-neutral-300 text-sm">Personalized AI Training</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-error-400 rounded-full" />
                          <span className="text-neutral-300 text-sm">Premium Community Access</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                          <span className="text-neutral-300 text-sm">Advanced Risk Management</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      onClick={onContinueToDashboard}
                      className="flex-1 bg-gradient-primary text-white px-6 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Zap className="w-5 h-5" />
                      <span>Continue to Dashboard</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.button>
                    
                    <motion.button
                      onClick={onClose}
                      className="flex-1 bg-transparent border-2 border-primary-500/50 text-primary-400 px-6 py-4 rounded-xl font-semibold text-lg hover:bg-primary-500/10 transition-colors duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Users className="w-5 h-5" />
                      <span>Explore Features</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Beta Tester Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              className="text-center mt-6"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-warning-500/20 to-accent-500/20 border border-warning-500/50 rounded-full">
                <Star className="w-5 h-5 text-warning-400 mr-2" />
                <span className="text-warning-400 font-semibold">EXCLUSIVE BETA TESTER</span>
                <Star className="w-5 h-5 text-warning-400 ml-2" />
              </div>
              <p className="text-neutral-500 text-sm mt-2">
                You're among the first to experience next-generation AI trading analysis
              </p>
            </motion.div>
          </div>

          {/* Glow Effects */}
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BetaWelcomeModal;