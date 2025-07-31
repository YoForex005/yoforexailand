import { motion } from 'framer-motion';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', to: "/features" },
        { name: 'Pricing', to: '/pricing' },
        { name: 'API Documentation', to: "/API-documentation" },
        { name: 'Integrations', to: "/integrations" },
        { name: 'Status Page', to: "/status" }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'User Manual', to: "/user-manual" },
        { name: 'Blog', to: "/blog" },
        { name: 'Case Studies', to: "/case-studies" },
        { name: 'Whitepapers', to: "/whitepapers" },
        { name: 'Webinars', to: "/webinars" }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', to: "/help-center" },
        { name: 'Community Forum', to: "/community-forum" },
        { name: 'Contact Support', to: "/contact-support" },
        { name: 'Community', to: "/community" },
        //  { name: 'About Us', onClick: onNavigateToAboutUs }
      ]
    },
    // {
    //   title: 'Company',
    //   links: [

    //     { name: 'Careers', onClick: onNavigateToCareers },
    //     { name: 'Press Kit', onClick: onNavigateToPressKit },
    //     { name: 'Partners', onClick: onNavigateToPartners }
    //   ]
    // },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', to: "/privacy-policy" },
        { name: 'Terms & Conditions', to: "/terms-conditions" },
        { name: 'Return Policy', to: "/return-policy" }
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
                Leading B2B2C SaaS platform for AI-powered analytics and workflow automation.
                Empowering businesses with intelligent data processing and automated insights.
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
                    {/* ( */}
                    <Link to={link.to}>
                      <motion.button
                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-left"
                        whileHover={{ x: 2 }}
                      >
                        {link.name}
                      </motion.button>
                    </Link>
                    {/* ) : (
                      <motion.a
                        href={link.href}
                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                        whileHover={{ x: 2 }}
                      >
                        {link.name}
                      </motion.a>
                    )} */}
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
              © 2025 YoForex AI. All rights reserved. Professional SaaS platform for analytics and workflow automation.
            </div>
            <div className="text-neutral-500 text-xs">
              No trading advice provided. Software services only.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;