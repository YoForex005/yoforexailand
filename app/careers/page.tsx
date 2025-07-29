'use client'

import React from 'react';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import CareersPage from '../../src/components/pages/CareersPage';
import { useRouter } from 'next/navigation';

export default function Careers() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/');
  const handleNavigateToDashboard = () => router.push('/dashboard');
  const handleNavigateToLogin = () => router.push('/login');
  const handleNavigateToSignup = () => router.push('/signup');
  const handleNavigateToFeatures = () => router.push('/features');
  const handleNavigateToResources = () => router.push('/resources');

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Header 
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToLogin={handleNavigateToLogin}
        onNavigateToSignup={handleNavigateToSignup}
        onNavigateToFeatures={handleNavigateToFeatures}
        onNavigateToResources={handleNavigateToResources}
      />
      <CareersPage onNavigateBack={handleNavigateBack} />
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