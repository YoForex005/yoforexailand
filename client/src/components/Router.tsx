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

// Redirect component helper
const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const [, setLocation] = useLocation();
  React.useEffect(() => {
    setLocation(to);
  }, [setLocation, to]);
  return null;
};

const AppRouter: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
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
          <Route path="/demo/sample-analysis" component={SampleAnalysisPage} />
          
          {/* Resource Routes */}
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/blog" component={BlogPage} />
          
          {/* Redirect routes - will redirect to relevant pages */}
          <Route path="/docs/user-manual" component={() => <Redirect to="/resources" />} />
          <Route path="/community" component={() => <Redirect to="/resources" />} />
          <Route path="/support" component={() => <Redirect to="/resources" />} />
          <Route path="/tools/strategy-builder" component={() => <Redirect to="/resources" />} />
          <Route path="/tools/backtesting" component={() => <Redirect to="/resources" />} />
          <Route path="/tools/risk-calculator" component={() => <Redirect to="/resources" />} />
          <Route path="/tools/market-scanner" component={() => <Redirect to="/resources" />} />
          <Route path="/docs/api" component={() => <Redirect to="/resources" />} />
          <Route path="/integrations" component={() => <Redirect to="/resources" />} />
          <Route path="/docs/integration-guide" component={() => <Redirect to="/resources" />} />
          <Route path="/docs/troubleshooting" component={() => <Redirect to="/resources" />} />
          <Route path="/about" component={() => <Redirect to="/" />} />
          <Route path="/careers" component={() => <Redirect to="/" />} />
          <Route path="/press" component={() => <Redirect to="/" />} />
          <Route path="/partners" component={() => <Redirect to="/" />} />
          <Route path="/legal/privacy" component={() => <Redirect to="/" />} />
          <Route path="/legal/terms" component={() => <Redirect to="/" />} />
          <Route path="/legal/returns" component={() => <Redirect to="/" />} />
          <Route path="/resources/case-studies" component={() => <Redirect to="/resources" />} />
          <Route path="/resources/whitepapers" component={() => <Redirect to="/resources" />} />
          <Route path="/resources/webinars" component={() => <Redirect to="/resources" />} />
          <Route path="/help" component={() => <Redirect to="/resources" />} />
          <Route path="/community/forum" component={() => <Redirect to="/resources" />} />
          <Route path="/contact" component={() => <Redirect to="/resources" />} />
          <Route path="/status" component={() => <Redirect to="/" />} />
          
          {/* Blog Post Routes */}
          <Route path="/blog/:id" component={() => <Redirect to="/blog" />} />
          
          {/* 404 - Must be last */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </HelmetProvider>
  );
};

export default AppRouter;