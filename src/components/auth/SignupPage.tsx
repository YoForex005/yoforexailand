import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  User, 
  Mail, 
  Phone, 
  Lock,
  ArrowLeft,
  CheckCircle,
  Zap,
  AlertTriangle,
  Globe,
  Check,
  X
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
  LinearProgress,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import toast from 'react-hot-toast';

interface SignupPageProps {
  onNavigateToLogin: () => void;
  onNavigateToOTP: (data: { phone?: string; email?: string }) => void;
  onNavigateBack: () => void;
  onNavigateToWelcome: () => void;
}

interface SignupForm {
  fullName: string;
  email: string;
  whatsappNumber: string;
  countryCode: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const SignupPage: React.FC<SignupPageProps> = ({
  onNavigateToLogin,
  onNavigateToOTP,
  onNavigateBack,
  onNavigateToWelcome
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm<SignupForm>();
  const watchedPassword = watch('password');

  const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+61', country: 'AU', flag: '🇦🇺' }
  ];

  const getPasswordStrength = (password: string): { score: number; text: string; color: string } => {
    if (!password || password.length === 0) {
      return { score: 0, text: '', color: '' };
    }
    
    let score = 0;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    };

    score = Object.values(checks).filter(Boolean).length;

    if (score < 2) return { score: score * 20, text: 'Weak', color: '#f44336' };
    if (score < 4) return { score: score * 20, text: 'Medium', color: '#ff9800' };
    if (score >= 4) return { score: score * 20, text: 'Strong', color: '#4caf50' };
    return { score: 100, text: 'Very Strong', color: '#2e7d32' };
  };

  const passwordStrength = watchedPassword ? getPasswordStrength(watchedPassword) : { score: 0, text: '', color: '' };

  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    return nameRegex.test(name) && name.length >= 2;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const onSubmit = async (data: SignupForm) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Validate phone number with country code
      const fullPhoneNumber = `${data.countryCode}${data.whatsappNumber}`;
      if (!isValidPhoneNumber(fullPhoneNumber)) {
        setError('Please enter a valid WhatsApp number');
        return;
      }

      const phoneNumber = parsePhoneNumber(fullPhoneNumber);
      const formattedPhone = phoneNumber.formatInternational();

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success state
      setSignupSuccess(true);
      toast.success('Account created successfully!');
      
      // Start countdown
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            onNavigateToWelcome();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (signupSuccess) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={24}
            sx={{
              p: 6,
              maxWidth: 480,
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              textAlign: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <CheckCircle size={64} color="#4caf50" style={{ marginBottom: 24 }} />
            </motion.div>
            
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
              Welcome to YoForex AI!
            </Typography>
            
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4 }}>
              Your account has been created successfully. You'll receive a confirmation email shortly.
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 2 }}>
                Redirecting to sign in page in {countdown} seconds...
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={(3 - countdown) * 33.33} 
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#4caf50'
                  }
                }}
              />
            </Box>
            
            <Button
              onClick={onNavigateToWelcome}
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #d946ef 100%)',
                fontWeight: 600,
                textTransform: 'none',
                px: 4,
                py: 1.5
              }}
            >
              Continue to Welcome
            </Button>
          </Paper>
        </motion.div>
      </Box>
    );
  }

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
            maxWidth: 520,
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
              Start Your AI Trading Journey
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Join thousands of traders using AI-powered market analysis
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

          {/* Signup Form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 3 }}>
            {/* Full Name */}
            <TextField
              fullWidth
              label="Full Name *"
              margin="normal"
              {...register('fullName', {
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                },
                validate: (value) => validateName(value) || 'Please enter a valid name (letters, spaces, hyphens, apostrophes only)'
              })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <User size={20} color="rgba(255, 255, 255, 0.5)" />
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

            {/* Email */}
            <TextField
              fullWidth
              label="Email Address *"
              type="email"
              margin="normal"
              {...register('email', {
                required: 'Email is required',
                validate: (value) => validateEmail(value) || 'Please enter a valid email address'
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

            {/* WhatsApp Number with Country Code */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2, mb: 1 }}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Country</InputLabel>
                <Select
                  {...register('countryCode', { required: 'Country code is required' })}
                  defaultValue="+1"
                  label="Country"
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#0ea5e9' }
                  }}
                >
                  {countryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="WhatsApp Number *"
                type="tel"
                placeholder="1234567890"
                {...register('whatsappNumber', {
                  required: 'WhatsApp number is required',
                  pattern: {
                    value: /^[0-9]{7,15}$/,
                    message: 'Please enter a valid phone number (7-15 digits)'
                  }
                })}
                error={!!errors.whatsappNumber}
                helperText={errors.whatsappNumber?.message || 'Enter number without country code'}
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
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                    '&.Mui-focused fieldset': { borderColor: '#0ea5e9' }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': { color: '#0ea5e9' }
                  },
                  '& .MuiFormHelperText-root': { color: 'rgba(255, 255, 255, 0.6)' }
                }}
              />
            </Box>

            {/* Password */}
            <TextField
              fullWidth
              label="Password *"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                },
                validate: (value) => {
                  if (!value || value.length === 0) {
                    return 'Password is required';
                  }
                  if (value.length < 8) {
                    return 'Password must be at least 8 characters';
                  }
                  const strength = getPasswordStrength(value);
                  return strength.score >= 20 || 'Password must be at least weak strength';
                }
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

            {/* Password Strength Indicator */}
            {watchedPassword && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                style={{ marginTop: 8 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Password Strength:
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: passwordStrength.color,
                      fontWeight: 600
                    }}
                  >
                    {passwordStrength.text}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={passwordStrength.score}
                  sx={{
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: passwordStrength.color,
                      borderRadius: 2
                    }
                  }}
                />
                <Box sx={{ display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap' }}>
                  {[
                    { check: watchedPassword.length >= 8, text: '8+ chars' },
                    { check: /[A-Z]/.test(watchedPassword), text: 'Uppercase' },
                    { check: /[a-z]/.test(watchedPassword), text: 'Lowercase' },
                    { check: /[0-9]/.test(watchedPassword), text: 'Number' },
                    { check: /[^A-Za-z0-9]/.test(watchedPassword), text: 'Special' }
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {item.check ? (
                        <Check size={12} color="#4caf50" />
                      ) : (
                        <X size={12} color="#f44336" />
                      )}
                      <Typography variant="caption" sx={{ color: item.check ? '#4caf50' : '#f44336' }}>
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            )}

            {/* Confirm Password */}
            <TextField
              fullWidth
              label="Confirm Password *"
              type={showConfirmPassword ? 'text' : 'password'}
              margin="normal"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => {
                  if (!value || value.length === 0) {
                    return 'Please confirm your password';
                  }
                  return value === watchedPassword || 'Passwords do not match';
                }
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock size={20} color="rgba(255, 255, 255, 0.5)" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                      sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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

            {/* Terms & Conditions */}
            <FormControlLabel
              control={
                <Checkbox
                  {...register('agreeToTerms', {
                    required: 'You must agree to the terms and conditions'
                  })}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    '&.Mui-checked': { color: '#0ea5e9' }
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  I agree to the{' '}
                  <Link href="#" sx={{ color: '#0ea5e9', textDecoration: 'none' }}>
                    Terms & Conditions
                  </Link>
                  {' '}and{' '}
                  <Link href="#" sx={{ color: '#0ea5e9', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </Typography>
              }
              sx={{ mt: 2, mb: 1 }}
            />
            {errors.agreeToTerms && (
              <Typography variant="caption" sx={{ color: '#f44336', display: 'block', mt: 1 }}>
                {errors.agreeToTerms.message}
              </Typography>
            )}

            {/* Submit Button */}
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
                {isLoading ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={20} color="inherit" />
                    <span>Creating Account...</span>
                  </Box>
                ) : (
                  'Create Free Account'
                )}
              </Button>
            </motion.div>
          </Box>

          {/* Footer */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Already have an account?{' '}
              <Link
                component="button"
                type="button"
                onClick={onNavigateToLogin}
                sx={{
                  color: '#0ea5e9',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Sign in here
              </Link>
            </Typography>
          </Box>

          {/* Benefits Preview */}
          <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: 2 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 600, mb: 2 }}>
              What you get with your free account:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                '5 AI analyses per day using top free models',
                'Access to 10+ professional trading strategies',
                'Basic SL/TP recommendations',
                'Community forum access',
                'Email support'
              ].map((benefit, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle size={14} color="#4caf50" />
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default SignupPage;