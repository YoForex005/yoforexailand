import React from 'react';
import { useLocation } from 'wouter';
import Header from '../Header';
import Hero from '../Hero';
import HowItWorks from '../HowItWorks';
import Features from '../Features';
import WhyChooseUs from '../WhyChooseUs';
import StartTrading from '../StartTrading';
import Pricing from '../Pricing';
import Footer from '../Footer';
import SEOHead from '../SEOHead';

const LandingPage: React.FC = () => {
  const [, setLocation] = useLocation();

  const handleNavigateToSignup = () => setLocation('/signup');
  const handleNavigateToLogin = () => setLocation('/login');
  const handleNavigateToDashboard = () => setLocation('/dashboard');
  const handleNavigateToFeatures = () => setLocation('/features');
  const handleNavigateToResources = () => setLocation('/resources');
  const handleNavigateToLiveDemo = () => setLocation('/live-demo');
  const handleNavigateToUserManual = () => setLocation('/docs/user-manual');
  const handleNavigateToBlog = () => setLocation('/blog');
  const handleNavigateToCommunity = () => setLocation('/community');
  const handleNavigateToSupport = () => setLocation('/support');
  const handleNavigateToPrivacyPolicy = () => setLocation('/legal/privacy');
  const handleNavigateToTermsConditions = () => setLocation('/legal/terms');
  const handleNavigateToReturnPolicy = () => setLocation('/legal/returns');
  const handleNavigateToAPIDocumentation = () => setLocation('/docs/api');
  const handleNavigateToIntegrations = () => setLocation('/integrations');
  const handleNavigateToCaseStudies = () => setLocation('/resources/case-studies');
  const handleNavigateToWhitepapers = () => setLocation('/resources/whitepapers');
  const handleNavigateToWebinars = () => setLocation('/resources/webinars');
  const handleNavigateToHelpCenter = () => setLocation('/help');
  const handleNavigateToCommunityForum = () => setLocation('/community/forum');
  const handleNavigateToContactSupport = () => setLocation('/contact');
  const handleNavigateToStatusPage = () => setLocation('/status');
  const handleNavigateToAboutUs = () => setLocation('/about');
  const handleNavigateToCareers = () => setLocation('/careers');
  const handleNavigateToPressKit = () => setLocation('/press');
  const handleNavigateToPartners = () => setLocation('/partners');
  const handleNavigateToStrategyBuilder = () => setLocation('/tools/strategy-builder');
  const handleNavigateToBacktestingTools = () => setLocation('/tools/backtesting');
  const handleNavigateToRiskCalculator = () => setLocation('/tools/risk-calculator');
  const handleNavigateToMarketScanner = () => setLocation('/tools/market-scanner');
  const handleNavigateToIntegrationGuide = () => setLocation('/docs/integration-guide');
  const handleNavigateToTroubleshooting = () => setLocation('/docs/troubleshooting');

  return (
    <>
      <SEOHead
        title="YoForex AI | World's Most Advanced AI Forex Trading Platform"
        description="Access 392+ AI models for forex trading analysis. Get precise SL/TP levels, multi-AI consensus signals, and professional trading strategies. Start with 5 free daily analyses."
        keywords="forex trading, AI forex, trading platform, YoForex AI, AI trading signals, forex analysis, automated trading, currency trading, forex education, trading algorithms"
      />
      
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
            onNavigateToDashboard={handleNavigateToSignup}
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
    </>
  );
};

export default LandingPage;