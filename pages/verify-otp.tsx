import React, { useState, useEffect } from 'react';
import OTPVerificationPage from '../src/components/auth/OTPVerificationPage';
import { useRouter } from 'next/router';

export default function VerifyOTP() {
  const router = useRouter();
  const [otpData, setOtpData] = useState<{ phone?: string; email?: string } | null>(null);

  useEffect(() => {
    // Retrieve OTP data from sessionStorage
    const storedData = sessionStorage.getItem('otpData');
    if (storedData) {
      setOtpData(JSON.parse(storedData));
    } else {
      // If no OTP data, redirect to signup
      router.replace('/signup');
    }
  }, [router]);

  const handleNavigateToDashboard = () => {
    // Clear OTP data and redirect to dashboard
    sessionStorage.removeItem('otpData');
    router.push('/dashboard');
  };

  const handleNavigateBack = () => {
    // Clear OTP data and go back to signup
    sessionStorage.removeItem('otpData');
    router.push('/signup');
  };

  if (!otpData) {
    return <div>Loading...</div>;
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