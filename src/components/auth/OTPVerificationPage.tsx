import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft,
  RotateCcw,
  CheckCircle,
  Zap
} from 'lucide-react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Alert,
  CircularProgress,
  Link,
  Button
} from '@mui/material';
import toast from 'react-hot-toast';

interface OTPVerificationPageProps {
  phone?: string;
  email?: string;
  onNavigateToDashboard: () => void;
  onNavigateBack: () => void;
}

const OTPVerificationPage: React.FC<OTPVerificationPageProps> = ({
  phone,
  email,
  onNavigateToDashboard,
  onNavigateBack
}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    // Start resend cooldown
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple characters
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every(digit => digit !== '') && newOtp.join('').length === 4) {
      handleVerifyOtp(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    const newOtp = pastedData.split('').concat(['', '', '', '']).slice(0, 4);
    setOtp(newOtp);
    
    if (pastedData.length === 4) {
      handleVerifyOtp(pastedData);
    }
  };

  const handleVerifyOtp = async (otpCode: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock validation - accept 1234 for demo
      if (otpCode === '1234') {
        toast.success('Verification successful!');
        onNavigateToDashboard();
      } else {
        setError('Invalid verification code. Please try again.');
        setOtp(['', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    
    setResendCooldown(30);
    toast.success(`New verification code sent to ${phone || email}`);
  };

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

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ position: 'absolute', top: 24, left: 24, zIndex: 10 }}
      >
        <IconButton
          onClick={onNavigateBack}
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white'
            }
          }}
        >
          <ArrowLeft size={20} />
        </IconButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={24}
          sx={{
            p: 4,
            maxWidth: 480,
            width: '100%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
            textAlign: 'center'
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
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
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
              Verify Your {phone ? 'Phone' : 'Email'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              We've sent a 4-digit verification code to
            </Typography>
            <Typography variant="body1" sx={{ color: '#0ea5e9', fontWeight: 600, mt: 1 }}>
              {phone || email}
            </Typography>
          </Box>

          {/* Error Alert */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ marginBottom: 24 }}
              >
                <Alert severity="error" sx={{ backgroundColor: 'rgba(244, 67, 54, 0.1)' }}>
                  {error}
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          {/* OTP Input */}
          <Box sx={{ mb: 4 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 2, 
                justifyContent: 'center',
                mb: 3
              }}
              onPaste={handlePaste}
            >
              {otp.map((digit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    component="input"
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    disabled={isLoading}
                    sx={{
                      width: 60,
                      height: 60,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      '&:focus': {
                        borderColor: '#0ea5e9',
                        backgroundColor: 'rgba(14, 165, 233, 0.1)',
                        transform: 'scale(1.05)'
                      },
                      '&:disabled': {
                        opacity: 0.5
                      }
                    }}
                    inputProps={{
                      maxLength: 1,
                      pattern: '[0-9]',
                      inputMode: 'numeric'
                    }}
                  />
                </motion.div>
              ))}
            </Box>

            {/* Loading Indicator */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ marginBottom: 16 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <CircularProgress size={20} sx={{ color: '#0ea5e9' }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Verifying...
                    </Typography>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Manual Verify Button */}
            {otp.every(digit => digit !== '') && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleVerifyOtp(otp.join(''))}
                  startIcon={<CheckCircle size={20} />}
                  sx={{
                    py: 1.5,
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #d946ef 100%)',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 50%, #c026d3 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)'
                    }
                  }}
                >
                  Verify Code
                </Button>
              </motion.div>
            )}
          </Box>

          {/* Resend Code */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
              Didn't receive the code?
            </Typography>
            
            {resendCooldown > 0 ? (
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                Resend code in {resendCooldown}s
              </Typography>
            ) : (
              <Link
                component="button"
                type="button"
                onClick={handleResendOtp}
                sx={{
                  color: '#0ea5e9',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                <RotateCcw size={16} />
                Resend Code
              </Link>
            )}
          </Box>

          {/* Demo Info */}
          <Box sx={{ mt: 4, p: 2, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: 2 }}>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', display: 'block' }}>
              Demo: Use code <strong>1234</strong> to verify
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default OTPVerificationPage;