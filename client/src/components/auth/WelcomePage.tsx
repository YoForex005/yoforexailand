import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Zap, 
  TrendingUp, 
  Users, 
  MessageCircle,
  ArrowRight,
  Star,
  BarChart3,
  Target
} from 'lucide-react';
import {
  Box,
  Typography,
  Button,
  Paper
} from '@mui/material';

interface WelcomePageProps {
  onNavigateToDashboard: () => void;
  onNavigateToFeatures: () => void;
  userEmail?: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({
  onNavigateToDashboard,
  onNavigateToFeatures,
  userEmail
}) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStep(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: '5 Free Daily Analyses',
      description: 'Start with AI-powered trade analysis using top free models'
    },
    {
      icon: BarChart3,
      title: '10+ Trading Strategies',
      description: 'Access professional strategies like SMC, ICT, and Fibonacci'
    },
    {
      icon: Target,
      title: 'Precise SL/TP Levels',
      description: 'Get exact stop loss and take profit recommendations'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our Discord and Telegram trading communities'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Paper
          elevation={24}
          sx={{
            p: 6,
            maxWidth: 600,
            width: '100%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
            textAlign: 'center'
          }}
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle size={80} color="#4caf50" style={{ marginBottom: 24 }} />
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
              <Zap size={32} color="#0ea5e9" style={{ marginRight: 8 }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #d946ef 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                YoForex AI
              </Typography>
            </Box>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 600, mb: 3 }}>
              Welcome to the Future of Trading!
            </Typography>
            
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2, fontWeight: 500 }}>
              Thank you for your interest!
            </Typography>
            
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, lineHeight: 1.6 }}>
              We will notify you via WhatsApp and email. This is currently in beta testing phase - 
              please show your interest in this advanced trading solution.
            </Typography>

            {userEmail && (
              <Box sx={{ mb: 4, p: 2, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Confirmation sent to: <strong style={{ color: '#0ea5e9' }}>{userEmail}</strong>
                </Typography>
              </Box>
            )}
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: animationStep >= 1 ? 1 : 0, y: animationStep >= 1 ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
              What's Waiting for You:
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 4 }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <Box sx={{ 
                    p: 3, 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                    borderRadius: 2,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'left'
                  }}>
                    <feature.icon size={24} color="#0ea5e9" style={{ marginBottom: 8 }} />
                    <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onNavigateToDashboard}
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={20} />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #d946ef 100%)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 50%, #c026d3 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)'
                    }
                  }}
                >
                  Continue to Dashboard
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onNavigateToFeatures}
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'white'
                    }
                  }}
                >
                  Explore Features
                </Button>
              </motion.div>
            </Box>
          </motion.div>

          {/* Beta Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Star size={16} color="#ffc107" />
              <Typography variant="caption" sx={{ color: '#ffc107', fontWeight: 600 }}>
                BETA TESTER
              </Typography>
              <Star size={16} color="#ffc107" />
            </Box>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'block', mt: 1 }}>
              You're among the first to experience next-generation AI trading analysis
            </Typography>
          </motion.div>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default WelcomePage;