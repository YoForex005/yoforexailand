'use client'

import React, { useEffect } from 'react';
import Dashboard from '../../src/components/Dashboard';
import { useRouter } from 'next/navigation';

// Mock authentication check - replace with your actual auth logic
const useAuth = () => {
  // This is a mock - replace with your actual authentication logic
  const isLoggedIn = typeof window !== 'undefined' ? 
    localStorage.getItem('isLoggedIn') === 'true' : false;
  return { isLoggedIn };
};

export default function DashboardPage() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (typeof window !== 'undefined' && !isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn, router]);

  const handleNavigateToLanding = () => {
    // Clear auth state and redirect to home
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
    }
    router.push('/');
  };

  // Show loading while checking auth
  if (typeof window !== 'undefined' && !isLoggedIn) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return <Dashboard onNavigateToLanding={handleNavigateToLanding} />;
}