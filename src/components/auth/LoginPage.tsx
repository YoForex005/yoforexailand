import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock,
  ArrowLeft,
  Zap,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
  Alert,
  CircularProgress,
  Link,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface LoginPageProps {
  onNavigateToSignup: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOTP: (data: { phone?: string; email?: string }) => void;
  onNavigateBack: () => void;
}

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onNavigateToSignup,
  onNavigateToDashboard,
  onNavigateToOTP,
  onNavigateBack
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const handleLogin = async (data: LoginForm) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock validation - accept demo credentials
      if (data.email === 'demo@yoforex.ai' && data.password === 'Demo123!') {
        toast.success('Welcome back to YoForex AI!');
        
        // Store login state
        if (typeof window !== 'undefined') {
          localStorage.setItem('isLoggedIn', 'true');
          if (data.rememberMe) {
            localStorage.setItem('rememberMe', 'true');
          }
        }
        
        onNavigateToDashboard();
      } else {
        setError('Invalid email or password. Try demo@yoforex.ai / Demo123!');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotPasswordEmail) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Password reset link sent to your email');
      setShowForgotPassword(false);
      setForgotPasswordEmail('');
    } catch (err) {
      toast.error('Failed to send reset email');
    }
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
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
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
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
              Welcome Back
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Sign in to access your AI trading dashboard
            </Typography>
          </Box>

          {/* Error Alert */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ marginBottom: 16 }}
              >
                <Alert severity="error" sx={{ backgroundColor: 'rgba(244, 67, 54, 0.1)' }}>
                  {error}
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Forgot Password Modal */}
          <AnimatePresence>
            {showForgotPassword && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 50,
                  borderRadius: 12
                }}
                onClick={() => setShowForgotPassword(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: 'rgba(38, 38, 38, 0.95)',
                    padding: 24,
                    borderRadius: 12,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    width: '90%',
                    maxWidth: 400
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                    Reset Password
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                    Enter your email address and we'll send you a reset link.
                  </Typography>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: '#0ea5e9' }
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': { color: '#0ea5e9' }
                      }
                    }}
                  />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      onClick={() => setShowForgotPassword(false)}
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleForgotPassword}
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #d946ef 100%)',
                        textTransform: 'none'
                      }}
                    >
                      Send Reset Link
                    </Button>
                  </Box>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit(handleLogin)} sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              margin="normal"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={20} color="rgba(255, 255, 255, 0.5)" />
                  </InputAdornment>
                )
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                  '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                  '&.Mui-focused fieldset': { borderColor: '#0ea5e9' }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': { color: '#0ea5e9' }
                }
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              {...register('password', {
                required: 'Password is required'
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock size={20} color="rgba(255, 255, 255, 0.5)" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                  '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                  '&.Mui-focused fieldset': { borderColor: '#0ea5e9' }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': { color: '#0ea5e9' }
                }
              }}
            />

            {/* Remember Me & Forgot Password */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('rememberMe')}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      '&.Mui-checked': { color: '#0ea5e9' }
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Remember me
                  </Typography>
                }
              />
              <Link
                component="button"
                type="button"
                onClick={() => setShowForgotPassword(true)}
                sx={{
                  color: '#0ea5e9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={{
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
                  },
                  '&:disabled': {
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {isLoading ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={20} color="inherit" />
                    <span>Signing In...</span>
                  </Box>
                ) : (
                  'Sign In'
                )}
              </Button>
            </motion.div>
          </Box>

          {/* Footer */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Don't have an account?{' '}
              <Link
                component="button"
                type="button"
                onClick={onNavigateToSignup}
                sx={{
                  color: '#0ea5e9',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Sign up for free
              </Link>
            </Typography>
          </Box>

          {/* Demo Credentials */}
          <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: 2 }}>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', display: 'block', mb: 1, fontWeight: 600 }}>
              Demo Credentials:
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'block' }}>
              Email: demo@yoforex.ai
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'block' }}>
              Password: Demo123!
            </Typography>
          </Box>

          {/* Beta Notice */}
          <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(255, 193, 7, 0.1)', borderRadius: 2, border: '1px solid rgba(255, 193, 7, 0.2)' }}>
            <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
              <AlertTriangle size={16} color="#ffc107" style={{ marginTop: 2 }} />
              <Box>
                <Typography variant="caption" sx={{ color: '#ffc107', fontWeight: 600, display: 'block' }}>
                  Beta Testing Phase
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', display: 'block' }}>
                  We're currently in beta. Your feedback helps us improve the platform for all traders.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default LoginPage;