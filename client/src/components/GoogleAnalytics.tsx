import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { initGA, trackPageView } from '../lib/analytics';

const GoogleAnalytics = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    
    // Track initial page view
    trackPageView(location);
  }, []);

  useEffect(() => {
    // Track page view on route change
    trackPageView(location);
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
