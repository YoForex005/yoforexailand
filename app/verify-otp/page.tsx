'use client'

import React, { useState, useEffect } from 'react';
import OTPVerificationPage from '../../src/components/auth/OTPVerificationPage';
import { useRouter } from 'next/navigation';

export default function VerifyOTP() {
  const router = useRouter();
  const [otpData, setOtpData] = useState<{ phone?: string; email?: string } | null>(null);

  useEffect(() => {
    // Retrieve OTP data from sessionStorage
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('otpData');
      if (storedData) {
        setOtpData(JSON.parse(storedData));
      } else {
        // If no OTP data, redirect to signup
        router.replace('/signup');
      }
    }
  }, [router]);

  const handleNavigateToDashboard = () => {
    // Clear OTP data and redirect to dashboard
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('otpData');
    }
    router.push('/dashboard');
  };

  const handleNavigateBack = () => {
    // Clear OTP data and go back to signup
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('otpData');
    }
    router.push('/signup');
  };

  if (!otpData) {
    return <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  return (
    <OTPVerificationPage 
      phone={otpData.phone}
      email={otpData.email}
      onNavigateToDashboard={handleNavigateToDashboard}
      onNavigateBack={handleNavigateBack}
    />
  );
}