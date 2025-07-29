'use client'

import React from 'react';
import LoginPage from '../../src/components/auth/LoginPage';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleNavigateToSignup = () => router.push('/signup');
  const handleNavigateToDashboard = () => router.push('/dashboard');
  const handleNavigateToOTP = (data: { phone?: string; email?: string }) => {
    // Store OTP data in sessionStorage for the verify-otp page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('otpData', JSON.stringify(data));
    }
    router.push('/verify-otp');
  };
  const handleNavigateBack = () => router.push('/');

  return (
    <LoginPage 
      onNavigateToSignup={handleNavigateToSignup}
      onNavigateToDashboard={handleNavigateToDashboard}
      onNavigateToOTP={handleNavigateToOTP}
      onNavigateBack={handleNavigateBack}
    />
  );
}