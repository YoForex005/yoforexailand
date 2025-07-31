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
import WelcomePage from './components/auth/WelcomePage';
import FeaturesPage from './components/pages/FeaturesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import UserManualPage from './components/pages/UserManualPage';
import BlogPage from './components/pages/BlogPage';
import CommunityPage from './components/pages/CommunityPage';
import SupportPage from './components/pages/SupportPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsConditionsPage from './components/pages/TermsConditionsPage';
import ReturnPolicyPage from './components/pages/ReturnPolicyPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import WhitepapersPage from './components/pages/WhitepapersPage';
import WebinarsPage from './components/pages/WebinarsPage';
import HelpCenterPage from './components/pages/HelpCenterPage';
import CommunityForumPage from './components/pages/CommunityForumPage';
import ContactSupportPage from './components/pages/ContactSupportPage';
import StatusPage from './components/pages/StatusPage';
import CareersPage from './components/pages/CareersPage';
import PressKitPage from './components/pages/PressKitPage';
import PartnersPage from './components/pages/PartnersPage';
import AboutUsPage from './components/pages/AboutUsPage';
import IntegrationsPage from './components/pages/IntegrationsPage';
import APIDocumentationPage from './components/pages/APIDocumentationPage';
import LiveDemoPage from './components/pages/LiveDemoPage';
import SampleAnalysisPage from './components/pages/SampleAnalysisPage';
import StrategyBuilderPage from './components/pages/StrategyBuilderPage';
import BacktestingToolsPage from './components/pages/BacktestingToolsPage';
import RiskCalculatorPage from './components/pages/RiskCalculatorPage';
import MarketScannerPage from './components/pages/MarketScannerPage';
import IntegrationGuidePage from './components/pages/IntegrationGuidePage';
import TroubleshootingPage from './components/pages/TroubleshootingPage';

type ViewType = 'landing' | 'dashboard' | 'login' | 'signup' | 'otp-verification' | 'welcome' | 'features' | 'resources' | 'user-manual' | 'blog' | 'community' | 'support' | 'privacy-policy' | 'terms-conditions' | 'return-policy' | 'api-documentation' | 'integrations' | 'case-studies' | 'whitepapers' | 'webinars' | 'help-center' | 'community-forum' | 'contact-support' | 'status-page' | 'about-us' | 'careers' | 'press-kit' | 'partners' | 'live-demo' | 'sample-analysis' | 'strategy-builder' | 'backtesting-tools' | 'risk-calculator' | 'market-scanner' | 'integration-guide' | 'troubleshooting';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [otpData, setOtpData] = useState<{ phone?: string; email?: string } | null>(null);

  const handleNavigateToLogin = () => setCurrentView('login');
  const handleNavigateToSignup = () => setCurrentView('signup');
  const handleNavigateToDashboard = () => setCurrentView('dashboard');
  const handleNavigateToWelcome = () => setCurrentView('welcome');
  const handleNavigateToLanding = () => setCurrentView('landing');
  
  const handleNavigateToOTP = (data: { phone?: string; email?: string }) => {
    setOtpData(data);
    setCurrentView('welcome');
  };
  
  const handleNavigateToFeatures = () => setCurrentView('features');
  const handleNavigateToResources = () => setCurrentView('resources');
  const handleNavigateToUserManual = () => setCurrentView('user-manual');
  const handleNavigateToBlog = () => setCurrentView('blog');
  const handleNavigateToCommunity = () => setCurrentView('community');
  const handleNavigateToSupport = () => setCurrentView('support');
  const handleNavigateToPrivacyPolicy = () => setCurrentView('privacy-policy');
  const handleNavigateToTermsConditions = () => setCurrentView('terms-conditions');
  const handleNavigateToReturnPolicy = () => setCurrentView('return-policy');
  const handleNavigateToAPIDocumentation = () => setCurrentView('api-documentation');
  const handleNavigateToIntegrations = () => setCurrentView('integrations');
  const handleNavigateToCaseStudies = () => setCurrentView('case-studies');
  const handleNavigateToWhitepapers = () => setCurrentView('whitepapers');
  const handleNavigateToWebinars = () => setCurrentView('webinars');
  const handleNavigateToHelpCenter = () => setCurrentView('help-center');
  const handleNavigateToCommunityForum = () => setCurrentView('community-forum');
  const handleNavigateToContactSupport = () => setCurrentView('contact-support');
  const handleNavigateToStatusPage = () => setCurrentView('status-page');
  const handleNavigateToAboutUs = () => setCurrentView('about-us');
  const handleNavigateToCareers = () => setCurrentView('careers');
  const handleNavigateToPressKit = () => setCurrentView('press-kit');
  const handleNavigateToPartners = () => setCurrentView('partners');
  const handleNavigateToLiveDemo = () => setCurrentView('live-demo');
  const handleNavigateToSampleAnalysis = () => setCurrentView('sample-analysis');
  const handleNavigateToStrategyBuilder = () => setCurrentView('strategy-builder');
  const handleNavigateToBacktestingTools = () => setCurrentView('backtesting-tools');
  const handleNavigateToRiskCalculator = () => setCurrentView('risk-calculator');
  const handleNavigateToMarketScanner = () => setCurrentView('market-scanner');
  const handleNavigateToIntegrationGuide = () => setCurrentView('integration-guide');
  const handleNavigateToTroubleshooting = () => setCurrentView('troubleshooting');

  // Authentication flow views
  if (currentView === 'login') {
    return (
      <LoginPage 
        onNavigateToSignup={handleNavigateToSignup}
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToOTP={handleNavigateToOTP}
        onNavigateBack={handleNavigateToLanding}
        onNavigateToWelcome={handleNavigateToWelcome}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignupPage 
        onNavigateToLogin={handleNavigateToLogin}
        onNavigateToOTP={handleNavigateToOTP}
        onNavigateBack={handleNavigateToLanding}
        onNavigateToWelcome={handleNavigateToWelcome}
        onNavigateToWelcome={handleNavigateToWelcome}
      />
    );
  }

  if (currentView === 'welcome') {
    return (
      <WelcomePage 
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToFeatures={handleNavigateToFeatures}
        userEmail={otpData?.email}
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
  
  if (currentView === 'privacy-policy') {
    return <PrivacyPolicyPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'terms-conditions') {
    return <TermsConditionsPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'return-policy') {
    return <ReturnPolicyPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'api-documentation') {
    return <APIDocumentationPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'integrations') {
    return <IntegrationsPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'case-studies') {
    return <CaseStudiesPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'whitepapers') {
    return <WhitepapersPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'webinars') {
    return <WebinarsPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'help-center') {
    return <HelpCenterPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'community-forum') {
    return <CommunityForumPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'contact-support') {
    return <ContactSupportPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'status-page') {
    return <StatusPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'about-us') {
    return <AboutUsPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'careers') {
    return <CareersPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'press-kit') {
    return <PressKitPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'partners') {
    return <PartnersPage onNavigateBack={handleNavigateToLanding} />;
  }
  
  if (currentView === 'live-demo') {
    return <LiveDemoPage 
      onNavigateBack={handleNavigateToLanding}
      onNavigateToSignup={handleNavigateToSignup}
      onNavigateToSampleAnalysis={handleNavigateToSampleAnalysis}
    />;
  }
  
  if (currentView === 'sample-analysis') {
    return <SampleAnalysisPage 
      onNavigateBack={() => setCurrentView('live-demo')}
      onNavigateToSignup={handleNavigateToSignup}
    />;
  }
  
  if (currentView === 'strategy-builder') {
    return <StrategyBuilderPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'backtesting-tools') {
    return <BacktestingToolsPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'risk-calculator') {
    return <RiskCalculatorPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'market-scanner') {
    return <MarketScannerPage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'integration-guide') {
    return <IntegrationGuidePage onNavigateBack={handleNavigateToResources} />;
  }
  
  if (currentView === 'troubleshooting') {
    return <TroubleshootingPage onNavigateBack={handleNavigateToResources} />;
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
        onNavigateToLiveDemo={handleNavigateToLiveDemo}
      />
      <main>
        <Hero 
          onNavigateToDashboard={handleNavigateToSignup} // Start Free Trial goes to signup
          onNavigateToSignup={handleNavigateToSignup}
          onNavigateToLiveDemo={handleNavigateToLiveDemo}
        />
        <HowItWorks onNavigateToSignup={handleNavigateToSignup} />
        <Features onNavigateToSignup={handleNavigateToSignup} />
        <WhyChooseUs />
        <StartTrading onNavigateToSignup={handleNavigateToSignup} />
        <Pricing onNavigateToSignup={handleNavigateToSignup} />
      </main>
      <Footer 
        onNavigateToResources={handleNavigateToResources}
        onNavigateToUserManual={handleNavigateToUserManual}
        onNavigateToBlog={handleNavigateToBlog}
        onNavigateToCommunity={handleNavigateToCommunity}
        onNavigateToSupport={handleNavigateToSupport}
        onNavigateToPrivacyPolicy={handleNavigateToPrivacyPolicy}
        onNavigateToTermsConditions={handleNavigateToTermsConditions}
        onNavigateToReturnPolicy={handleNavigateToReturnPolicy}
        onNavigateToAPIDocumentation={handleNavigateToAPIDocumentation}
        onNavigateToIntegrations={handleNavigateToIntegrations}
        onNavigateToCaseStudies={handleNavigateToCaseStudies}
        onNavigateToWhitepapers={handleNavigateToWhitepapers}
        onNavigateToWebinars={handleNavigateToWebinars}
        onNavigateToHelpCenter={handleNavigateToHelpCenter}
        onNavigateToCommunityForum={handleNavigateToCommunityForum}
        onNavigateToContactSupport={handleNavigateToContactSupport}
        onNavigateToStatusPage={handleNavigateToStatusPage}
        onNavigateToAboutUs={handleNavigateToAboutUs}
        onNavigateToCareers={handleNavigateToCareers}
        onNavigateToPressKit={handleNavigateToPressKit}
        onNavigateToPartners={handleNavigateToPartners}
        onNavigateToStrategyBuilder={handleNavigateToStrategyBuilder}
        onNavigateToBacktestingTools={handleNavigateToBacktestingTools}
        onNavigateToRiskCalculator={handleNavigateToRiskCalculator}
        onNavigateToMarketScanner={handleNavigateToMarketScanner}
        onNavigateToIntegrationGuide={handleNavigateToIntegrationGuide}
        onNavigateToTroubleshooting={handleNavigateToTroubleshooting}
      />
    </div>
  );
}

export default App;