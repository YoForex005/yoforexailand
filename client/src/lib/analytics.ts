// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
export const GA_TRACKING_ID = 'G-G4EVQMQ9EJ';

// Check if the script is running in the browser (not during server-side rendering)
export const isBrowser = typeof window !== 'undefined';

// Check if GA is initialized
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: Record<string, any>[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (!isBrowser || !GA_TRACKING_ID) return;

  // Initialize the data layer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Define the gtag function
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Configure gtag with the tracking ID
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
    transport_type: 'beacon',
  });

  // Add the GA script to the document
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);
};

// Track page views
export const trackPageView = (url: string) => {
  if (!isBrowser || !window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });};

// Track events
export const trackEvent = (action: string, params: Record<string, any> = {}) => {
  if (!isBrowser || !window.gtag) return;
  
  window.gtag('event', action, {
    ...params,
    event_category: params.category || 'general',
    event_label: params.label || 'N/A',
    value: params.value || 1,
  });
};

// Track exceptions
export const trackException = (description: string, fatal = false) => {
  if (!isBrowser || !window.gtag) return;
  
  window.gtag('event', 'exception', {
    description,
    fatal,
  });
};
