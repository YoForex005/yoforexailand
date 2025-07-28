import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Crown, Building, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface PricingProps {
  onNavigateToSignup: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateToSignup }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [enterpriseSeats, setEnterpriseSeats] = useState(5);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      icon: Zap,
      description: 'Perfect for small teams getting started with AI analytics',
      monthlyPrice: 12800,
      annualPrice: 10240,
      color: 'from-primary-500 to-primary-600',
      features: [
        'Single-model AI analytics',
        'Basic workflow automation',
        '100 data analyses/month',
        'Access to 67 free AI models',
        'API cost reduction mode',
        'Email support',
        'Mobile app access',
        'Basic reporting tools',
        'Community access'
      ],
      cta: 'Start Free Trial',
      popular: false,
      expandedContent: {
        details: [
          'Core access to free AI models including DeepSeek R1, Gemini 2.5 Pro, and Llama variants',
          'Limited analytics runs (100/month) ideal for small-scale automation',
          'Basic automation tools for simple workflow orchestration',
          'Email support with 24-48 hour response time',
          'Community forum access for peer support',
          'Mobile app for monitoring workflows on-the-go',
          'Standard reporting with CSV/PDF export capabilities'
        ],
      }
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Crown,
      description: 'Most popular for growing businesses',
      monthlyPrice: 55000,
      annualPrice: 44000,
      color: 'from-accent-500 to-violet-600',
      features: [
        'Full multi-model analytics',
        'Advanced workflow automation',
        'Unlimited data analyses',
        'Access to all 392 AI models',
        '60-80% API cost savings',
        'Real-time data processing',
        'Real-time web search integration',
        'Advanced reporting suite',
        'Priority support',
        'Free setup assistance',
        'API access',
        'Custom indicators',
        'Private community access'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      expandedContent: {
        details: [
          'Access to all 392 AI models including premium options (Grok 4, OpenAI O3, Claude Opus 4)',
          'Unlimited analytics runs for enterprise-scale operations',
          'Advanced workflow automation with custom triggers and actions',
          'Real-time web search from 50+ sources for data enrichment',
          'Priority support with 2-4 hour response time',
          'Free professional setup assistance and onboarding',
          'Advanced reporting suite with custom dashboards',
          'API access for seamless integration with existing systems',
          'Private community access for exclusive networking'
        ],
      }
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Building,
      description: 'For large organizations and institutions',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      color: 'from-success-500 to-success-600',
      features: [
        'Everything in Pro',
        'Dedicated AI model training',
        'Custom API integrations',
        'White-label solutions',
        'Dedicated account manager',
        'Free professional setup',
        '99.9% SLA guarantee',
        'Advanced analytics dashboard',
        'Team collaboration tools',
        'Priority feature requests',
        'VIP community access'
      ],
      cta: 'Contact Sales',
      popular: false,
      expandedContent: {
        details: [
          'Dedicated AI model training for your specific use cases',
          'Custom API integrations with your existing enterprise systems',
          'White-label solutions for client-facing implementations',
          'Dedicated account manager and technical support team',
          '99.9% SLA with guaranteed uptime and performance',
          'Advanced analytics dashboard with custom KPIs',
          'Team collaboration tools with role-based access control',
          'Priority feature requests and development roadmap input',
          'VIP community access with direct developer interaction'
        ],
      }
    }
  ];

  const calculateEnterprisePrice = () => {
    const basePrice = isAnnual ? 159 : 199;
    const seatMultiplier = enterpriseSeats > 1 ? enterpriseSeats * 0.8 : 1;
    return (basePrice * seatMultiplier).toFixed(2);
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your trading needs. All plans include a 14-day free trial with full access.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-xl p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-gradient-primary text-white shadow-lg' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                isAnnual 
                  ? 'bg-gradient-primary text-white shadow-lg' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-success-500/20 text-success-400 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-warning-500/20 to-error-500/20 border border-warning-500/50 rounded-xl p-4 mb-12 text-center"
        >
          <p className="text-warning-400 font-medium">
            🔥 Lock in your rate—prices increase to $137.73/mo in 48 hours
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              <motion.div
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
              >
              {plan.popular && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${plan.color} text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg z-10`}>
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-gradient-glass backdrop-blur-sm border-2 ${
                plan.popular ? 'border-accent-500/50' : 'border-neutral-800/50'
              } rounded-2xl p-8 h-full hover:border-neutral-700/50 transition-all duration-300 overflow-hidden`}>
                
                {/* Background Glow */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-violet-500/10 rounded-2xl"
                    animate={{ opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <plan.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-neutral-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    {plan.name === 'Enterprise' ? (
                      <div>
                        <div className="text-4xl font-bold text-white mb-2">
                          ${calculateEnterprisePrice()}
                          <span className="text-lg text-neutral-400 font-normal">/mo</span>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm text-neutral-400 mb-2">Team Size:</label>
                          <input
                            type="range"
                            min="1"
                            max="50"
                            value={enterpriseSeats}
                            onChange={(e) => setEnterpriseSeats(parseInt(e.target.value))}
                            className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="text-center mt-2 text-neutral-400">{enterpriseSeats} seats</div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-4xl font-bold text-white mb-2">
                          {plan.name === 'Enterprise' ? 'Custom' : `₹${(isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString('en-IN')}`}
                          <span className="text-lg text-neutral-400 font-normal">/mo</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-success-400">
                            Save ₹{((plan.monthlyPrice as number - plan.annualPrice as number) * 12).toLocaleString('en-IN')}/year
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + featureIndex * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <Check className={`w-5 h-5 text-success-400 mt-0.5 flex-shrink-0`} />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    onClick={plan.name === 'Enterprise' ? undefined : onNavigateToSignup}
                    className={`w-full py-4 rounded-xl font-semibold text-lg relative overflow-hidden group transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-primary text-white shadow-lg hover:shadow-xl'
                        : 'bg-transparent border-2 border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}

                  </motion.button>
                </div>
              </div>
              </motion.div>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredPlan === plan.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 shadow-2xl max-w-sm mx-auto"
                  >
                    <div className="space-y-2 mb-3">
                      {plan.expandedContent.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                          <span className="text-neutral-300 text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-neutral-700/50">
                      <p className="text-primary-400 text-xs">support@yoforex.co.in</p>
                    </div>
                    
                    {/* Mobile tap indicator */}
                    <div className="md:hidden mt-3 pt-3 border-t border-neutral-700/50">
                      <p className="text-neutral-500 text-xs text-center">Tap card to toggle details</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="text-center mt-4 text-xs text-neutral-500">
                All prices exclusive of applicable taxes. INR pricing for Indian customers.
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile accessibility note */}
        <div className="md:hidden mt-8 text-center">
          <p className="text-neutral-400 text-sm">Tap any pricing card to view detailed features</p>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-neutral-400">
            All plans include a 14-day free trial. SaaS & IT software service subscriptions only—no trading tips or personalized investment advice provided.
          </p>
          <p className="text-sm text-neutral-500">
            Need a custom solution? <a href="#contact" className="text-primary-400 hover:text-primary-300 transition-colors">Contact our sales team</a> for enterprise pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;