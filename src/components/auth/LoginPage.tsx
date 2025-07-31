import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Phone, 
  Lock,
  ArrowLeft,
  Zap
} from 'lucide-react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  Paper,
  Divider,
  Alert,
  CircularProgress,
  Link
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import toast from 'react-hot-toast';

interface LoginPageProps {
  onNavigateToSignup: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOTP: (data: { phone?: string; email?: string }) => void;
  onNavigateBack: () => void;
}

interface EmailLoginForm {
  email: string;
  password: string;
}

interface PhoneLoginForm {
  phone: string;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onNavigateToSignup,
  onNavigateToDashboard,
  onNavigateToOTP,
  onNavigateBack
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const emailForm = useForm<EmailLoginForm>();
  const phoneForm = useForm<PhoneLoginForm>();

  const handleEmailLogin = async (data: EmailLoginForm) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock validation
      if (data.email === 'demo@yoforex.ai' && data.password === 'Demo123!') {
        toast.success('Login successful!');
        onNavigateToDashboard();
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneLogin = async (data: PhoneLoginForm) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Validate phone number
      if (!isValidPhoneNumber(data.phone)) {
        setError('Please enter a valid phone number');
        return;
      }

      const phoneNumber = parsePhoneNumber(data.phone);
      const formattedPhone = phoneNumber.formatInternational();

      // Simulate sending OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(`OTP sent to ${formattedPhone}`);
      onNavigateToOTP({ phone: formattedPhone });
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast.success(`${provider} login initiated`);
    // Simulate social login
    setTimeout(() => {
      onNavigateToDashboard();
    }, 1000);
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
              Sign in to access your trading dashboard
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

          {/* Login Tabs */}
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            sx={{
              mb: 3,
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 600,
                '&.Mui-selected': {
                  color: '#0ea5e9'
                }
              },
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)',
                height: 3,
                borderRadius: 2
              }
            }}
          >
            <Tab label="Email / Password" />
            <Tab label="Phone / OTP" />
          </Tabs>

          {/* Email Login Form */}
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="email-login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Box component="form" onSubmit={emailForm.handleSubmit(handleEmailLogin)} sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    margin="normal"
                    {...emailForm.register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    error={!!emailForm.formState.errors.email}
                    helperText={emailForm.formState.errors.email?.message}
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
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0ea5e9'
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': {
                          color: '#0ea5e9'
                        }
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    margin="normal"
                    {...emailForm.register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      }
                    })}
                    error={!!emailForm.formState.errors.password}
                    helperText={emailForm.formState.errors.password?.message}
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
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0ea5e9'
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': {
                          color: '#0ea5e9'
                        }
                      }
                    }}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isLoading}
                      sx={{
                        mt: 3,
                        mb: 2,
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
                      {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            )}

            {/* Phone Login Form */}
            {activeTab === 1 && (
              <motion.div
                key="phone-login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Box component="form" onSubmit={phoneForm.handleSubmit(handlePhoneLogin)} sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    margin="normal"
                    placeholder="+1 234 567 8900"
                    {...phoneForm.register('phone', {
                      required: 'Phone number is required',
                      validate: (value) => {
                        try {
                          return isValidPhoneNumber(value) || 'Please enter a valid phone number with country code';
                        } catch {
                          return 'Please enter a valid phone number with country code';
                        }
                      }
                    })}
                    error={!!phoneForm.formState.errors.phone}
                    helperText={phoneForm.formState.errors.phone?.message || 'Include country code (e.g., +1 for US)'}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone size={20} color="rgba(255, 255, 255, 0.5)" />
                        </InputAdornment>
                      )
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0ea5e9'
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': {
                          color: '#0ea5e9'
                        }
                      },
                      '& .MuiFormHelperText-root': {
                        color: 'rgba(255, 255, 255, 0.6)'
                      }
                    }}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isLoading}
                      sx={{
                        mt: 3,
                        mb: 2,
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
                      {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Send OTP'}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Login */}
          <Box sx={{ mb: 3 }}>
            <Divider sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.3)' }}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                Or continue with
              </Typography>
            </Divider>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <motion.div style={{ flex: 1 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleSocialLogin('Google')}
                  sx={{
                    py: 1.5,
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  Google
                </Button>
              </motion.div>

              <motion.div style={{ flex: 1 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleSocialLogin('GitHub')}
                  sx={{
                    py: 1.5,
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  GitHub
                </Button>
              </motion.div>
            </Box>
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
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', display: 'block', mb: 1 }}>
              Demo Credentials:
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'block' }}>
              Email: demo@yoforex.ai | Password: Demo123!
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default LoginPage;