import React from 'react';
import SEOHead from '../src/components/SEOHead';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import HowItWorks from '../src/components/HowItWorks';
import Features from '../src/components/Features';
import WhyChooseUs from '../src/components/WhyChooseUs';
import StartTrading from '../src/components/StartTrading';
import Pricing from '../src/components/Pricing';
import Footer from '../src/components/Footer';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  const handleNavigateToDashboard = () => router.push('/dashboard');
  const handleNavigateToLogin = () => router.push('/login');
  const handleNavigateToSignup = () => router.push('/signup');
  const handleNavigateToFeatures = () => router.push('/features');
  const handleNavigateToResources = () => router.push('/resources');

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <SEOHead
        title="YoForex AI | World's Most Advanced AI Forex Trading Platform"
        description="Access 392+ AI models for forex trading analysis. Get precise SL/TP levels, multi-AI consensus signals, and professional trading strategies. Start with 5 free daily analyses."
        keywords="forex trading, AI forex, trading course, YoForex AI, AI trading chart, forex signals, automated trading, currency trading, forex education, trading algorithms"
      />
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
        onNavigateToUserManual={() => router.push('/resources/user-manual')}
        onNavigateToBlog={() => router.push('/resources/blog')}
        onNavigateToCommunity={() => router.push('/resources/community')}
        onNavigateToSupport={() => router.push('/resources/support')}
        onNavigateToPrivacyPolicy={() => router.push('/privacy-policy')}
        onNavigateToTermsConditions={() => router.push('/terms-conditions')}
        onNavigateToReturnPolicy={() => router.push('/return-policy')}
        onNavigateToAPIDocumentation={() => router.push('/resources/api-documentation')}
        onNavigateToIntegrations={() => router.push('/resources/integrations')}
        onNavigateToCaseStudies={() => router.push('/resources/case-studies')}
        onNavigateToWhitepapers={() => router.push('/resources/whitepapers')}
        onNavigateToWebinars={() => router.push('/resources/webinars')}
        onNavigateToHelpCenter={() => router.push('/resources/help-center')}
        onNavigateToCommunityForum={() => router.push('/resources/community-forum')}
        onNavigateToContactSupport={() => router.push('/resources/contact-support')}
        onNavigateToStatusPage={() => router.push('/status')}
        onNavigateToAboutUs={() => router.push('/about')}
        onNavigateToCareers={() => router.push('/careers')}
        onNavigateToPressKit={() => router.push('/press-kit')}
        onNavigateToPartners={() => router.push('/partners')}
      />
    </div>
  );
}