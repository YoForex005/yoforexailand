import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import StartTrading from './components/StartTrading';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import OTPVerificationPage from './components/auth/OTPVerificationPage';
import FeaturesPage from './components/pages/FeaturesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import UserManualPage from './components/pages/UserManualPage';
import BlogPage from './components/pages/BlogPage';
import CommunityPage from './components/pages/CommunityPage';
import SupportPage from './components/pages/SupportPage';

type ViewType = 'landing' | 'dashboard' | 'login' | 'signup' | 'otp-verification' | 'features' | 'resources' | 'user-manual' | 'blog' | 'community' | 'support';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [otpData, setOtpData] = useState<{ phone?: string; email?: string } | null>(null);

  const handleNavigateToLogin = () => window.open('https://app.yoforex.co.in', '_blank');
  const handleNavigateToSignup = () => window.open('https://app.yoforex.co.in', '_blank');
  const handleNavigateToDashboard = () => window.open('https://app.yoforex.co.in', '_blank');
  const handleNavigateToLanding = () => setCurrentView('landing');
  
  const handleNavigateToOTP = (data: { phone?: string; email?: string }) => {
    setOtpData(data);
    setCurrentView('otp-verification');
  };
  
  const handleNavigateToFeatures = () => setCurrentView('features');
  const handleNavigateToResources = () => setCurrentView('resources');
  const handleNavigateToUserManual = () => setCurrentView('user-manual');
  const handleNavigateToBlog = () => setCurrentView('blog');
  const handleNavigateToCommunity = () => setCurrentView('community');
  const handleNavigateToSupport = () => setCurrentView('support');

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
  
  if (currentView === 'features') {
    return <FeaturesPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'resources') {
    return <ResourcesPage 
      onNavigateBack={handleNavigateToLanding}
      onNavigateToUserManual={handleNavigateToUserManual}
      onNavigateToBlog={handleNavigateToBlog}
      onNavigateToCommunity={handleNavigateToCommunity}
      onNavigateToSupport={handleNavigateToSupport}
    />;
  }
  
  if (currentView === 'user-manual') {
    return <UserManualPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'blog') {
    return <BlogPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'community') {
    return <CommunityPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'support') {
    return <SupportPage onNavigateBack={handleNavigateToResources} />;
  }

  // Landing page
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Header 
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToLogin={handleNavigateToLogin}
        onNavigateToSignup={handleNavigateToSignup}
        onNavigateToFeatures={handleNavigateToFeatures}
        onNavigateToResources={handleNavigateToResources}
      />
      <main>
        <Hero 
          onNavigateToDashboard={handleNavigateToSignup} // Start Free Trial goes to signup
          onNavigateToSignup={handleNavigateToSignup}
        />
        <HowItWorks />
        <Features />
        <WhyChooseUs />
        <StartTrading />
        <Pricing onNavigateToSignup={handleNavigateToSignup} />
      </main>
      <Footer 
        onNavigateToResources={handleNavigateToResources}
        onNavigateToUserManual={handleNavigateToUserManual}
        onNavigateToBlog={handleNavigateToBlog}
        onNavigateToCommunity={handleNavigateToCommunity}
        onNavigateToSupport={handleNavigateToSupport}
      />
    </div>
  );
}

export default App;