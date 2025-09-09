import React, { Suspense } from 'react';
import { Router, Route, Switch, useLocation } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';

// Lazily-loaded route components (page-level and heavy components)
const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignupPage = React.lazy(() => import('./pages/SignupPage'));
const OTPVerificationPage = React.lazy(() => import('./auth/OTPVerificationPage'));
const WelcomePage = React.lazy(() => import('./auth/WelcomePage'));

// Feature Pages
const FeaturesPage = React.lazy(() => import('./pages/FeaturesPage'));
const LiveDemoPage = React.lazy(() => import('./pages/LiveDemoPage'));

// Resource Pages
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));

// 404 Page
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
import Header from './Header';
import Footer from './Footer';
const Pricing = React.lazy(() => import('./Pricing'));
import GoToTop from './GoToTop';
import SEOHead from './SEOHead'; // Importing the SEOHead component
const APIDocumentationPage = React.lazy(() => import('./pages/APIDocumentationPage'));
const IntegrationsPage = React.lazy(() => import('./pages/IntegrationsPage'));
const StatusPage = React.lazy(() => import('./pages/StatusPage'));
const UserManualPage = React.lazy(() => import('./pages/UserManualPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const WhitepapersPage = React.lazy(() => import('./pages/WhitepapersPage'));
const WebinarsPage = React.lazy(() => import('./pages/WebinarsPage'));
const IntegrationGuidePage = React.lazy(() => import('./pages/IntegrationGuidePage'));
const TroubleshootingPage = React.lazy(() => import('./pages/TroubleshootingPage'));
const StrategyBuilderPage = React.lazy(() => import('./pages/StrategyBuilderPage'));
const BacktestingToolsPage = React.lazy(() => import('./pages/BacktestingToolsPage'));
const RiskCalculatorPage = React.lazy(() => import('./pages/RiskCalculatorPage'));
const MarketScannerPage = React.lazy(() => import('./pages/MarketScannerPage'));
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenterPage'));
const CommunityForumPage = React.lazy(() => import('./pages/CommunityForumPage'));
const ContactSupportPage = React.lazy(() => import('./pages/ContactSupportPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'));
const CareersPage = React.lazy(() => import('./pages/CareersPage'));
const PressKitPage = React.lazy(() => import('./pages/PressKitPage'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = React.lazy(() => import('./pages/TermsConditionsPage'));
const ReturnPolicyPage = React.lazy(() => import('./pages/ReturnPolicyPage'));
const SupportPage = React.lazy(() => import('./pages/SupportPage'));

// Redirect component helper
const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const [, setLocation] = useLocation();
  React.useEffect(() => {
    setLocation(to);
  }, [setLocation, to]);
  return null;
};

const AppRouter: React.FC = () => {
  const [location, setLocation] = useLocation();

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

  // Wrapper for routes that need WelcomePage with navigation callbacks
  const WelcomeDemoRoute: React.FC = () => (
    <WelcomePage
      onNavigateToDashboard={handleNavigateToDashboard}
      onNavigateToFeatures={handleNavigateToFeatures}
    />
  );

  // Adapted version of the Dashboard component
  const AdaptedDashboard: React.FC = () => <Dashboard onNavigateToLanding={() => {}} />;

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
      <SEOHead
        title="YoForex AI - Revolutionizing Forex Trading"
        description="Revolutionize your forex trading with YoForex AI's cutting-edge signals, strategy backtesting, and risk analytics."
        keywords="forex trading, AI forex, trading platform, YoForex AI, AI trading signals, forex analysis, automated trading"
        h1={location === '/' ? 'YoForex AI — Advanced AI Forex Trading Platform' : undefined}
        h2={undefined}
      />
      <Router>
        <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>
          <Switch>
            {/* Main Routes */}
            <Route path="/">{() => <LandingPage />}</Route>
            <Route path="/dashboard">{() => <AdaptedDashboard />}</Route>

            {/* Authentication Routes */}
            <Route path="/login">{() => <LoginPage />}</Route>
            <Route path="/signup">{() => <SignupPage />}</Route>
            <Route path="/auth/verify">{() => <OTPVerificationPage onNavigateToDashboard={handleNavigateToDashboard} onNavigateBack={() => setLocation('/login')} />}</Route>
            <Route path="/welcome">{() => <WelcomePage onNavigateToDashboard={handleNavigateToDashboard} onNavigateToFeatures={handleNavigateToFeatures} />}</Route>

            {/* Feature Routes */}
            <Route path="/features">{() => <FeaturesPage />}</Route>
            <Route path="/live-demo">{() => <LiveDemoPage />}</Route>
            <Route path="/pricing">{() => <Pricing onNavigateToSignup={handleNavigateToSignup} />}</Route>
            <Route path="/demo/sample-analysis">{() => <WelcomeDemoRoute />}</Route>

            {/* Resource Routes */}
            <Route path="/resources">{() => <ResourcesPage />}</Route>
            <Route path="/blog">{() => <BlogPage />}</Route>
            <Route path="/docs/api">{() => <APIDocumentationPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/integrations">{() => <IntegrationsPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/status">{() => <StatusPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/docs/user-manual">{() => <UserManualPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            
            <Route path="/resources/case-studies">{() => <CaseStudiesPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/resources/whitepapers">{() => <WhitepapersPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/resources/webinars">{() => <WebinarsPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/docs/integration-guide">{() => <IntegrationGuidePage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/docs/troubleshooting">{() => <TroubleshootingPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/tools/strategy-builder">{() => <StrategyBuilderPage onNavigateBack={() => setLocation('/features')} />}</Route>
            <Route path="/tools/backtesting">{() => <BacktestingToolsPage onNavigateBack={() => setLocation('/features')} />}</Route>
            <Route path="/tools/risk-calculator">{() => <RiskCalculatorPage onNavigateBack={() => setLocation('/features')} />}</Route>
            <Route path="/tools/market-scanner">{() => <MarketScannerPage onNavigateBack={() => setLocation('/features')} />}</Route>
            <Route path="/help">{() => <HelpCenterPage onNavigateBack={() => setLocation('/resources')} />}</Route>
            <Route path="/community/forum">{() => <CommunityForumPage onNavigateBack={() => setLocation('/community')} />}</Route>
            <Route path="/contact">{() => <ContactSupportPage onNavigateBack={() => setLocation('/support')} />}</Route>
            <Route path="/community">{() => <CommunityPage onNavigateBack={() => setLocation('/')} />}</Route>
            <Route path="/about">{() => <AboutUsPage onNavigateBack={() => setLocation('/')} />}</Route>
            <Route path="/careers">{() => <CareersPage onNavigateBack={() => setLocation('/about')} />}</Route>
            <Route path="/press">{() => <PressKitPage onNavigateBack={() => setLocation('/about')} />}</Route>
            <Route path="/partners">{() => <PartnersPage onNavigateBack={() => setLocation('/about')} />}</Route>
            <Route path="/legal/privacy">{() => <PrivacyPolicyPage onNavigateBack={() => setLocation('/')} />}</Route>
            <Route path="/legal/terms">{() => <TermsConditionsPage onNavigateBack={() => setLocation('/')} />}</Route>
            <Route path="/legal/returns">{() => <ReturnPolicyPage onNavigateBack={() => setLocation('/')} />}</Route>
            <Route path="/support">{() => <SupportPage onNavigateBack={() => setLocation('/')} />}</Route>
            <Route>{() => <NotFoundPage />}</Route>
          </Switch>
        </Suspense>
      </Router>
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