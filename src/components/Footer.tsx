import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

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
}

const Footer: React.FC<FooterProps> = ({
  onNavigateToResources,
  onNavigateToUserManual,
  onNavigateToBlog,
  onNavigateToCommunity,
  onNavigateToSupport: () => void;
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
  onNavigateToPartners
}) => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API Documentation', href: '#api', onClick: onNavigateToAPIDocumentation },
        { name: 'Integrations', href: '#integrations', onClick: onNavigateToIntegrations }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog', onClick: onNavigateToBlog },
        { name: 'User Manual', href: '#manual', onClick: onNavigateToUserManual },
        { name: 'Case Studies', href: '#case-studies', onClick: onNavigateToCaseStudies },
        { name: 'Whitepapers', href: '#whitepapers', onClick: onNavigateToWhitepapers },
        { name: 'Webinars', href: '#webinars', onClick: onNavigateToWebinars },
        { name: 'All Resources', href: '#resources', onClick: onNavigateToResources }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help', onClick: onNavigateToHelpCenter },
        { name: 'Community Forum', href: '#forum', onClick: onNavigateToCommunityForum },
        { name: 'Contact Support', href: '#support', onClick: onNavigateToContactSupport },
        { name: 'Status Page', href: '#status', onClick: onNavigateToStatusPage }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about', onClick: onNavigateToAboutUs },
        { name: 'Careers', href: '#careers', onClick: onNavigateToCareers },
        { name: 'Press Kit', href: '#press', onClick: onNavigateToPressKit },
        { name: 'Partners', href: '#partners', onClick: onNavigateToPartners },
        { name: 'Privacy Policy', href: '#privacy', onClick: onNavigateToPrivacyPolicy },
        { name: 'Terms and Conditions', href: '#terms', onClick: onNavigateToTermsConditions },
        { name: 'Return Policy', href: '#return', onClick: onNavigateToReturnPolicy }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Zap className="w-8 h-8 text-primary-400" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  YoForex AI
                </span>
              </div>

              {/* Description */}
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Advanced B2B2C SaaS platform for AI-powered analytics and workflow automation. Professional software tools with enterprise-grade reliability - no trading advice provided.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-neutral-400">
                  <Mail className="w-4 h-4" />
                  <span>support@yoforex.co.in</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-400">
                  <MapPin className="w-4 h-4" />
                  <span>28, Gopi Bose Lane, Kolkata 700012, West Bengal, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.onClick) {
                          e.preventDefault();
                          link.onClick();
                        }
                      }}
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-neutral-800/50"
        >
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-400 mb-4">
              Get the latest AI trading insights and product updates delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <motion.button
                className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
        >
          {/* Copyright */}
          <p className="text-neutral-500 text-sm">
            © 2025 YoForex AI. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-neutral-500 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-neutral-500 hover:text-neutral-400 transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-neutral-500 hover:text-neutral-400 transition-colors">
              Cookie Policy
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-neutral-500 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-neutral-800/50"
        >
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 lg:space-y-0">
            <div className="text-neutral-500 text-sm">SOC 2 Compliant</div>
            <div className="text-neutral-500 text-sm">ISO 27001 Certified</div>
            <div className="text-neutral-500 text-sm">GDPR Compliant</div>
            <div className="text-neutral-500 text-sm">99.9% Uptime SLA</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;