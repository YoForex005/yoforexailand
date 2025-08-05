import React from 'react';
import { Router, Route, Switch, useLocation } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';

// Main Pages
import LandingPage from './pages/LandingPage';
import Dashboard from './Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OTPVerificationPage from './auth/OTPVerificationPage';
import WelcomePage from './auth/WelcomePage';

// Feature Pages
import FeaturesPage from './pages/FeaturesPage';
import LiveDemoPage from './pages/LiveDemoPage';
import SampleAnalysisPage from './pages/SampleAnalysisPage';

// Resource Pages
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';

// 404 Page
import NotFoundPage from './pages/NotFoundPage';
import Header from './Header';
import Footer from './Footer';
import Pricing from './Pricing';
import GoToTop from './GoToTop';
import APIDocumentationPage from './pages/APIDocumentationPage';
import IntegrationsPage from './pages/IntegrationsPage';
import StatusPage from './pages/StatusPage';
import UserManualPage from './pages/UserManualPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import WhitepapersPage from './pages/WhitepapersPage';
import WebinarsPage from './pages/WebinarsPage';
import IntegrationGuidePage from './pages/IntegrationGuidePage';
import TroubleshootingPage from './pages/TroubleshootingPage';
import StrategyBuilderPage from './pages/StrategyBuilderPage';
import BacktestingToolsPage from './pages/BacktestingToolsPage';
import RiskCalculatorPage from './pages/RiskCalculatorPage';
import MarketScannerPage from './pages/MarketScannerPage';
import HelpCenterPage from './pages/HelpCenterPage';
import CommunityForumPage from './pages/CommunityForumPage';
import ContactSupportPage from './pages/ContactSupportPage';
import CommunityPage from './pages/CommunityPage';
import AboutUsPage from './pages/AboutUsPage';
import CareersPage from './pages/CareersPage';
import PressKitPage from './pages/PressKitPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import SupportPage from './pages/SupportPage';

// Redirect component helper
const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const [, setLocation] = useLocation();
  React.useEffect(() => {
    setLocation(to);
  }, [setLocation, to]);
  return null;
};

const AppRouter: React.FC = () => {

  const [, setLocation] = useLocation();

  const handleNavigateToSignup = () => setLocation('/signup');
  const handleNavigateToLogin = () => setLocation('/login');
  const handleNavigateToDashboard = () => setLocation('/dashboard');
  const handleNavigateToFeatures = () => setLocation('/features');
  const handleNavigateToResources = () => setLocation('/resources');
  const handleNavigateToLiveDemo = () => setLocation('/live-demo');
  const handleNavigateToPricing = () => setLocation('/pricing');
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
    <HelmetProvider>
      <GoToTop />
      <Header
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToLogin={handleNavigateToLogin}
        onNavigateToSignup={handleNavigateToSignup}
        onNavigateToFeatures={handleNavigateToFeatures}
        onNavigateToResources={handleNavigateToResources}
        onNavigateToLiveDemo={handleNavigateToLiveDemo}
        onNavigateToPricing={handleNavigateToPricing}
      />
      <Router>
        {/* <Header /> */}
        <Switch>
          {/* Main Routes */}
          <Route path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />

          {/* Authentication Routes */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/auth/verify" component={OTPVerificationPage} />
          <Route path="/welcome" component={WelcomePage} />

          {/* Feature Routes */}
          <Route path="/features" component={FeaturesPage} />
          <Route path="/live-demo" component={LiveDemoPage} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/demo/sample-analysis" component={SampleAnalysisPage} />

          {/* Resource Routes */}
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/docs/api" component={APIDocumentationPage} />
          <Route path="/integrations" component={IntegrationsPage} />
          <Route path="/status" component={StatusPage} />
          <Route path="/docs/user-manual" component={UserManualPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/resources/case-studies" component={CaseStudiesPage} />
          <Route path="/resources/whitepapers" component={WhitepapersPage} />
          <Route path="/resources/webinars" component={WebinarsPage} />
          <Route path="/docs/integration-guide" component={IntegrationGuidePage} />
          <Route path="/docs/troubleshooting" component={TroubleshootingPage} />
          <Route path="/tools/strategy-builder" component={StrategyBuilderPage} />
          <Route path="/tools/backtesting" component={BacktestingToolsPage} />
          <Route path="/tools/risk-calculator" component={RiskCalculatorPage} />
          <Route path="/tools/market-scanner" component={MarketScannerPage} />
          <Route path="/help" component={HelpCenterPage} />
          <Route path="/community/forum" component={CommunityForumPage} />
          <Route path="/contact" component={ContactSupportPage} />
          <Route path="/community" component={CommunityPage} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/careers" component={CareersPage} />
          <Route path="/press" component={PressKitPage} />
          <Route path="/partners" component={PartnersPage} />
          <Route path="/legal/privacy" component={PrivacyPolicyPage} />
          <Route path="/legal/terms" component={TermsConditionsPage} />
          <Route path="/legal/returns" component={ReturnPolicyPage} />
          <Route path="/support" component={SupportPage} />

          {/* Redirect routes - will redirect to relevant pages */}
          {/* <Route path="/docs/user-manual" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/community" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/support" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/tools/strategy-builder" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/tools/backtesting" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/tools/risk-calculator" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/tools/market-scanner" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/docs/api" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/integrations" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/docs/integration-guide" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/docs/troubleshooting" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/about" component={() => <Redirect to="/" />} /> */}
          {/* <Route path="/careers" component={() => <Redirect to="/" />} /> */}
          {/* <Route path="/press" component={() => <Redirect to="/" />} /> */}
          {/* <Route path="/partners" component={() => <Redirect to="/" />} /> */}
          {/* <Route path="/legal/privacy" component={() => <Redirect to="/" />} /> */}
          {/* <Route path="/legal/terms" component={() => <Redirect to="/" />} /> */}
          {/* <Route path="/legal/returns" component={() => <Redirect to="/" />} /> */}
          {/* <Route path="/resources/case-studies" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/resources/whitepapers" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/resources/webinars" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/help" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/community/forum" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/contact" component={() => <Redirect to="/resources" />} /> */}
          {/* <Route path="/status" component={() => <Redirect to="/" />} /> */}

          {/* Blog Post Routes */}
          {/* <Route path="/blog/:id" component={() => <Redirect to="/blog" />} /> */}

          {/* 404 - Must be last */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      {/* <Footer /> */}
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
        onNavigateToPricing={handleNavigateToPricing}
        onNavigateToFeatures={handleNavigateToFeatures}
      />
    </HelmetProvider>
  );
};

export default AppRouter;