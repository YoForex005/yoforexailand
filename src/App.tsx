import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import OTPVerificationPage from './components/auth/OTPVerificationPage';

type ViewType = 'landing' | 'dashboard' | 'login' | 'signup' | 'otp-verification';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [otpData, setOtpData] = useState<{ phone?: string; email?: string } | null>(null);

  const handleNavigateToLogin = () => setCurrentView('login');
  const handleNavigateToSignup = () => setCurrentView('signup');
  const handleNavigateToDashboard = () => setCurrentView('dashboard');
  const handleNavigateToLanding = () => setCurrentView('landing');
  
  const handleNavigateToOTP = (data: { phone?: string; email?: string }) => {
    setOtpData(data);
    setCurrentView('otp-verification');
  };

  // Authentication flow views
  if (currentView === 'login') {
    return (
      <LoginPage 
        onNavigateToSignup={handleNavigateToSignup}
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToOTP={handleNavigateToOTP}
        onNavigateBack={handleNavigateToLanding}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignupPage 
        onNavigateToLogin={handleNavigateToLogin}
        onNavigateToOTP={handleNavigateToOTP}
        onNavigateBack={handleNavigateToLanding}
      />
    );
  }

  if (currentView === 'otp-verification') {
    return (
      <OTPVerificationPage 
        phone={otpData?.phone}
        email={otpData?.email}
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateBack={() => setCurrentView(otpData?.phone ? 'login' : 'signup')}
      />
    );
  }

  if (currentView === 'dashboard') {
    return <Dashboard onNavigateToLanding={handleNavigateToLanding} />;
  }

  // Landing page
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Header 
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToLogin={handleNavigateToLogin}
        onNavigateToSignup={handleNavigateToSignup}
      />
      <main>
        <Hero 
          onNavigateToDashboard={handleNavigateToSignup} // Start Free Trial goes to signup
          onNavigateToSignup={handleNavigateToSignup}
        />
        <HowItWorks />
        <Features />
        <Pricing onNavigateToSignup={handleNavigateToSignup} />
      </main>
      <Footer />
    </div>
  );
}

export default App;