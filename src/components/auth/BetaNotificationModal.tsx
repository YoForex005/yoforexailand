import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Zap, 
  Clock, 
  MessageCircle, 
  Mail, 
  Users,
  Sparkles,
  CheckCircle,
  Bell
} from 'lucide-react';

interface BetaNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

const BetaNotificationModal: React.FC<BetaNotificationModalProps> = ({
  isOpen,
  onClose,
  userEmail
}) => {
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
          {[...Array(8)].map((_, i) => (
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
                <Clock className="w-4 h-4 mr-2" />
                BETA TESTING PHASE
                <Clock className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Thank You for Your{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Interest!
                </span>
              </h2>
              
              <div className="bg-gradient-to-r from-warning-500/10 to-accent-500/10 border border-warning-500/30 rounded-2xl p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warning-500/20 rounded-xl">
                    <Bell className="w-6 h-6 text-warning-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-2">We're Currently in Beta Testing</h3>
                    <p className="text-lg text-neutral-300 leading-relaxed mb-4">
                      Our team is carefully selecting beta testers to ensure the best possible experience. 
                      You will be notified if you are selected to join our exclusive beta program.
                    </p>
                    <div className="bg-neutral-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-400 mb-2">How You'll Be Notified:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-4 h-4 text-success-400" />
                          <span className="text-neutral-300 text-sm">WhatsApp message to your registered number</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-primary-400" />
                          <span className="text-neutral-300 text-sm">Email notification to {userEmail || 'your registered email'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What's Coming */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                What's Coming in <span className="bg-gradient-primary bg-clip-text text-transparent">Beta</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Sparkles className="w-5 h-5 text-primary-400" />
                    <span className="font-semibold text-white">392+ AI Models</span>
                  </div>
                  <p className="text-neutral-400 text-sm">Access to the world's largest AI model marketplace for trading analysis</p>
                </div>
                
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="w-5 h-5 text-success-400" />
                    <span className="font-semibold text-white">Multi-AI Consensus</span>
                  </div>
                  <p className="text-neutral-400 text-sm">Get consensus signals from multiple AI models for higher accuracy</p>
                </div>
                
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-accent-400" />
                    <span className="font-semibold text-white">Professional Strategies</span>
                  </div>
                  <p className="text-neutral-400 text-sm">10+ built-in strategies including SMC, ICT, and Fibonacci analysis</p>
                </div>
                
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <MessageCircle className="w-5 h-5 text-warning-400" />
                    <span className="font-semibold text-white">Premium Community</span>
                  </div>
                  <p className="text-neutral-400 text-sm">Exclusive Discord and Telegram communities for beta testers</p>
                </div>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center"
            >
              <motion.button
                onClick={onClose}
                className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle className="w-5 h-5" />
                <span>Got It, Thanks!</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              
              <p className="text-neutral-400 text-sm mt-4">
                We'll contact you soon if selected for beta testing
              </p>
            </motion.div>

            {/* Beta Tester Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              className="text-center mt-6"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-warning-500/20 to-accent-500/20 border border-warning-500/50 rounded-full">
                <Sparkles className="w-5 h-5 text-warning-400 mr-2" />
                <span className="text-warning-400 font-semibold">BETA CANDIDATE</span>
                <Sparkles className="w-5 h-5 text-warning-400 ml-2" />
              </div>
              <p className="text-neutral-500 text-sm mt-2">
                Your application is under review by our team
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

export default BetaNotificationModal;