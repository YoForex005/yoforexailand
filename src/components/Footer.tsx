import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigateToResources: () => void;
  onNavigateToUserManual: () => void;
  onNavigateToBlog: () => void;
  onNavigateToCommunity: () => void;
  onNavigateToSupport: () => void;
  onNavigateToPrivacyPolicy: () => void;
  onNavigateToTermsConditions: () => void;
  onNavigateToReturnPolicy: () => void;
  onNavigateToAPIDocumentation: () => void;
  onNavigateToIntegrations: () => void;
  onNavigateToCaseStudies: () => void;
  onNavigateToWhitepapers: () => void;
  onNavigateToWebinars: () => void;
  onNavigateToHelpCenter: () => void;
  onNavigateToCommunityForum: () => void;
  onNavigateToContactSupport: () => void;
  onNavigateToStatusPage: () => void;
  onNavigateToAboutUs: () => void;
  onNavigateToCareers: () => void;
  onNavigateToPressKit: () => void;
  onNavigateToPartners: () => void;
  onNavigateToStrategyBuilder: () => void;
  onNavigateToBacktestingTools: () => void;
  onNavigateToRiskCalculator: () => void;
  onNavigateToMarketScanner: () => void;
  onNavigateToIntegrationGuide: () => void;
  onNavigateToTroubleshooting: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNavigateToResources,
  onNavigateToUserManual,
  onNavigateToBlog,
  onNavigateToCommunity,
  onNavigateToSupport,
  onNavigateToPrivacyPolicy,
  onNavigateToTermsConditions,
  onNavigateToReturnPolicy,
  onNavigateToAPIDocumentation,
  onNavigateToIntegrations,
  onNavigateToCaseStudies,
  onNavigateToWhitepapers,
  onNavigateToWebinars,
  onNavigateToHelpCenter,
  onNavigateToCommunityForum,
  onNavigateToContactSupport,
  onNavigateToStatusPage,
  onNavigateToAboutUs,
  onNavigateToCareers,
  onNavigateToPressKit,
  onNavigateToPartners,
  onNavigateToStrategyBuilder,
  onNavigateToBacktestingTools,
  onNavigateToRiskCalculator,
  onNavigateToMarketScanner,
  onNavigateToIntegrationGuide,
  onNavigateToTroubleshooting
}) => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', onClick: onNavigateToResources },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API Documentation', onClick: onNavigateToAPIDocumentation },
        { name: 'Integrations', onClick: onNavigateToIntegrations },
        { name: 'Status Page', onClick: onNavigateToStatusPage }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'User Manual', onClick: onNavigateToUserManual },
        { name: 'Blog', onClick: onNavigateToBlog },
        { name: 'Case Studies', onClick: onNavigateToCaseStudies },
        { name: 'Whitepapers', onClick: onNavigateToWhitepapers },
        { name: 'Webinars', onClick: onNavigateToWebinars },
        { name: 'Integration Guide', onClick: onNavigateToIntegrationGuide },
        { name: 'Troubleshooting', onClick: onNavigateToTroubleshooting }
      ]
    },
    {
      title: 'Tools',
      links: [
        { name: 'Strategy Builder', onClick: onNavigateToStrategyBuilder },
        { name: 'Backtesting Tools', onClick: onNavigateToBacktestingTools },
        { name: 'Risk Calculator', onClick: onNavigateToRiskCalculator },
        { name: 'Market Scanner', onClick: onNavigateToMarketScanner }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', onClick: onNavigateToHelpCenter },
        { name: 'Community Forum', onClick: onNavigateToCommunityForum },
        { name: 'Contact Support', onClick: onNavigateToContactSupport },
        { name: 'Community', onClick: onNavigateToCommunity }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', onClick: onNavigateToAboutUs },
        { name: 'Careers', onClick: onNavigateToCareers },
        { name: 'Press Kit', onClick: onNavigateToPressKit },
        { name: 'Partners', onClick: onNavigateToPartners }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', onClick: onNavigateToPrivacyPolicy },
        { name: 'Terms & Conditions', onClick: onNavigateToTermsConditions },
        { name: 'Return Policy', onClick: onNavigateToReturnPolicy }
      ]
    }
  ];

  return (
    <footer className="bg-neutral-900/50 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  YoForex AI
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6">
                The world's first universal AI-powered trading analysis platform. 
                Empowering traders with intelligent market analysis and AI-backed trade recommendations.
              </p>
            </motion.div>

            {/* Primary WhatsApp Contact */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-success-500/20 to-success-600/20 border border-success-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-success-400" />
                  <span className="text-success-400 font-semibold">WhatsApp Support</span>
                </div>
                <a
                  href="https://wa.me/443300272265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-medium hover:text-success-400 transition-colors"
                >
                  +44 330 027 2265
                </a>
                <p className="text-neutral-400 text-sm mt-1">
                  Click to start WhatsApp conversation
                </p>
              </div>
              
              {/* Additional Contact Methods */}
              <div className="flex items-center space-x-3 text-neutral-400">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>support@yoforexai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-400">
                <Phone className="w-4 h-4 text-accent-400" />
                <span>+44 330 027 2265</span>
              </div>
              <div className="flex items-start space-x-3 text-neutral-400">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <span>B2007-127, 33rd floor, Latifa Tower, Trade Center first, Sheikh Zayed Road, Dubai-UAE</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.onClick ? (
                      <motion.button
                        onClick={link.onClick}
                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-left"
                        whileHover={{ x: 2 }}
                      >
                        {link.name}
                      </motion.button>
                    ) : (
                      <motion.a
                        href={link.href}
                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                        whileHover={{ x: 2 }}
                      >
                        {link.name}
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* WhatsApp CTA */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/443300272265?text=Hello%2C%20I%27m%20interested%20in%20YoForex%20AI%20trading%20platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-success-500/20 hover:bg-success-500/30 border border-success-500/50 text-success-400 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
            
            {/* Legal & Copyright */}
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2025 YoForex AI. All rights reserved. This website is operated by YoForex, an entity registered under the laws of the Republic of Cyprus, with registration number HE 442382.
            </div>
          </div>
          
          {/* Regulatory Compliance Notice */}
          <div className="mt-6 pt-6 border-t border-neutral-800/30">
            <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-lg p-4 mb-4">
              <div className="text-neutral-300 text-xs leading-relaxed">
                <strong>Legal Entity:</strong> This website is operated by YoForex, an entity registered under the laws of the Republic of Cyprus, with registration number HE 442382, having its registered address at B2007-127, 33rd floor, Latifa Tower, Trade Center first, Sheikh Zayed Road, Dubai-UAE.
              </div>
            </div>
            <div className="bg-warning-500/10 border border-warning-500/20 rounded-lg p-4 mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 rounded-full bg-warning-400 mt-2 flex-shrink-0" />
                <div className="text-warning-400 text-xs leading-relaxed">
                  <strong>Risk Disclosure:</strong> Trading involves substantial risk of loss and may not be suitable for all investors. 
                  YoForex AI provides educational analysis tools only - not investment advice. All AI outputs are for informational purposes. 
                  Past performance does not guarantee future results. Please consider your risk tolerance before trading.
                </div>
              </div>
            </div>
            <div className="text-neutral-500 text-xs text-center">
              Educational and informational purposes only. Trading involves risk. Registered in Cyprus: HE 442382.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;