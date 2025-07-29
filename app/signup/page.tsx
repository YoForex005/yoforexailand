'use client'

import React from 'react';
import SignupPage from '../../src/components/auth/SignupPage';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();

  const handleNavigateToLogin = () => router.push('/login');
  const handleNavigateToOTP = (data: { phone?: string; email?: string }) => {
    // Store OTP data in sessionStorage for the verify-otp page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('otpData', JSON.stringify(data));
    }
    router.push('/verify-otp');
  };
  const handleNavigateBack = () => router.push('/');

  return (
    <SignupPage 
      onNavigateToLogin={handleNavigateToLogin}
      onNavigateToOTP={handleNavigateToOTP}
      onNavigateBack={handleNavigateBack}
    />
  );
}