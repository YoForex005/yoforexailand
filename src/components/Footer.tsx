import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

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

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-400">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>support@yoforex.co.in</span>
              </div>
              <div className="flex items-start space-x-3 text-neutral-400">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <span>28, Gopi Bose Lane, Kolkata 700012, West Bengal, India</span>
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2025 YoForex AI. All rights reserved. AI-powered trading analysis and strategies for global traders. No trading advice or execution provided.
            </div>
            <div className="text-neutral-500 text-xs">
              Educational and informational purposes only. Trading involves risk.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;