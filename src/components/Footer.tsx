import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, ChevronDown, ChevronUp, X } from 'lucide-react';

interface FooterProps {}

interface ExpandableSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const Footer: React.FC<FooterProps> = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const expandableSections: ExpandableSection[] = [
    {
      id: 'features',
      title: 'Features',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">YoForex AI Platform Features</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            YoForex AI offers a robust suite of features designed for enterprise-grade workflow automation and analytics.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Core Features</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• <strong>Multi-AI Architecture:</strong> Leverage 392+ AI models (67 free, 325 premium) for automated data processing, predictive analytics, and custom workflow orchestration.</li>
                <li>• <strong>Automated Mode:</strong> 24/7 hands-free analytics jobs with multi-data source support, flexible model selection, and confidence-level controls (0-5) for tuning aggression in processing.</li>
                <li>• <strong>Interactive Assistant:</strong> On-screen tools for real-time queries, data analysis, and workflow customization, including buttons for analyst mode, assistant mode, custom prompts, and forecasts.</li>
                <li>• <strong>Enhanced Risk and Management Tools:</strong> AI Position Management (APM) with profiles (Relaxed, Balanced, Strict) for dynamic adjustments; integrated filters like RSI for data validation; drawdown controls and gain staging for optimized performance.</li>
                <li>• <strong>Web Search Integration:</strong> Real-time data fetching from 50+ sources for enriched analytics, with smart filtering and multi-source validation.</li>
                <li>• <strong>Notifications and Monitoring:</strong> Dual-channel alerts (MT5 mobile, Telegram) and Volatility Now monitoring for real-time system updates.</li>
                <li>• <strong>Security and Compliance:</strong> SOC 2 compliant, with prop firm-ready features, encryption, and uptime guarantees.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Note:</strong> YoForex AI is purely a software tool for IT automation—no advisory services provided.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      title: 'Pricing',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Transparent SaaS Pricing</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Our transparent pricing is tailored for SaaS users in India, billed in INR (exclusive of taxes).
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Basic</h4>
              <div className="text-3xl font-bold text-primary-400 mb-4">₹12,800<span className="text-sm text-neutral-400">/month</span></div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Access to core AI models</li>
                <li>• Limited analytics runs</li>
                <li>• Basic automation</li>
                <li>• Community support</li>
              </ul>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-6 border border-primary-500/50">
              <h4 className="text-lg font-bold text-white mb-2">Pro</h4>
              <div className="text-3xl font-bold text-primary-400 mb-4">₹55,000<span className="text-sm text-neutral-400">/month</span></div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Unlimited access to all models</li>
                <li>• Advanced workflows</li>
                <li>• Priority support</li>
                <li>• Custom integrations</li>
              </ul>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Enterprise</h4>
              <div className="text-3xl font-bold text-primary-400 mb-4">Custom</div>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Dedicated infrastructure</li>
                <li>• SLA guarantees</li>
                <li>• White-glove service</li>
                <li>• Custom pricing</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-neutral-800/30 rounded-lg">
              <h4 className="text-lg font-semibold text-success-400 mb-2">Billing Details</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• Monthly billing with easy upgrades/downgrades</li>
                <li>• Includes API cost reduction mode for 60-80% efficiency savings</li>
                <li>• All prices in INR, exclusive of applicable taxes</li>
                <li>• Software/IT services only</li>
              </ul>
            </div>
            
            <div className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
              <p className="text-primary-400 text-sm">
                <strong>Contact:</strong> support@yoforex.co.in<br/>
                <strong>Address:</strong> 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India<br/>
                All plans provide software access only, focused on analytics and automation tools.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'api-documentation',
      title: 'API Documentation',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">API Documentation</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Comprehensive guide to integrating YoForex AI's API for seamless workflow automation.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Authentication</h4>
              <p className="text-neutral-300 text-sm mb-2">Use Bearer tokens: Generate keys from your dashboard at app.yoforex.co.in.</p>
              <div className="bg-neutral-900/50 rounded-lg p-3">
                <code className="text-success-400 text-sm">Authorization: Bearer YOUR_API_KEY</code>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Key Endpoints</h4>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• <code className="text-success-400">POST /v1/workflows/run</code> - Initiate an automation job with parameters like model selection and data inputs</li>
                <li>• <code className="text-success-400">GET /v1/analytics/results/{id}</code> - Fetch processed data with pagination and filters</li>
                <li>• <code className="text-success-400">POST /v1/integrations/webhook</code> - Set up real-time notifications</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Usage Example</h4>
              <div className="bg-neutral-900/50 rounded-lg p-3">
                <pre className="text-success-400 text-sm overflow-x-auto">
{`import requests
headers = {'Authorization': 'Bearer YOUR_API_KEY'}
response = requests.post(
  'https://api.yoforex.co.in/v1/workflows/run',
  json={'model': 'Grok4', 'data': {...}},
  headers=headers
)`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Limits and Best Practices</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• Rate limits: 100 requests/min for Pro; handle errors with retries</li>
                <li>• Use pagination for large datasets</li>
                <li>• Implement exponential backoff for error handling</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Support:</strong> Full docs downloadable via support. Contact: support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'integrations',
      title: 'Integrations',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Platform Integrations</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            YoForex AI supports easy connections to enhance your IT ecosystem.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Supported Integrations</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">Data Platforms</h5>
                  <ul className="space-y-1 text-neutral-300 text-sm">
                    <li>• AWS S3, Google Cloud Storage</li>
                    <li>• Databases (SQL/NoSQL)</li>
                    <li>• Real-time data streams</li>
                  </ul>
                </div>
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">Workflow Tools</h5>
                  <ul className="space-y-1 text-neutral-300 text-sm">
                    <li>• Slack, Microsoft Teams</li>
                    <li>• Zapier, webhooks</li>
                    <li>• Custom automations</li>
                  </ul>
                </div>
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">Enterprise Systems</h5>
                  <ul className="space-y-1 text-neutral-300 text-sm">
                    <li>• CRM (Salesforce)</li>
                    <li>• ERP systems</li>
                    <li>• Secure API connectors</li>
                  </ul>
                </div>
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">Setup Guide</h5>
                  <ul className="space-y-1 text-neutral-300 text-sm">
                    <li>• Use our API to link systems</li>
                    <li>• Enable web search for real-time data</li>
                    <li>• Custom integration support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Custom Integrations:</strong> For custom integrations, email support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'blog',
      title: 'Blog',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Technology Blog</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Insights into AI, SaaS, and automation trends.
          </p>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400 mb-2">Recent Posts</h4>
            <div className="space-y-3">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">"Optimizing Workflows with Multi-AI Models"</h5>
                <p className="text-neutral-400 text-sm">Explore how hybrid AI setups boost efficiency in enterprise environments.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">"Achieving 99.9% Uptime in SaaS Platforms"</h5>
                <p className="text-neutral-400 text-sm">Technical deep dive into infrastructure reliability and monitoring.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">"Automation Best Practices for IT Teams"</h5>
                <p className="text-neutral-400 text-sm">Case examples and implementation strategies (non-advisory).</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              Full archives available; subscribe for updates at support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Success Stories</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Real-world examples of YoForex AI in action.
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Enterprise Automation Overhaul</h5>
              <p className="text-neutral-400 text-sm">A Kolkata-based firm reduced data processing time by 70% using our multi-model analytics platform for workflow automation.</p>
            </div>
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Scalable Analytics Deployment</h5>
              <p className="text-neutral-400 text-sm">Global IT company integrated our API for 10x faster workflows and improved operational efficiency.</p>
            </div>
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Compliance Automation</h5>
              <p className="text-neutral-400 text-sm">Financial services firm automated regulatory reporting, reducing manual effort by 85% while maintaining accuracy.</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Contact for more:</strong> support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'whitepapers',
      title: 'Whitepapers',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Technical Resources</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            In-depth technical resources and research papers.
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">"AI-Driven Workflow Automation in IT"</h5>
              <p className="text-neutral-400 text-sm mb-2">20-page guide with architectures, benchmarks, and implementation strategies for enterprise environments.</p>
              <span className="text-primary-400 text-xs">PDF • 2.1MB</span>
            </div>
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">"Securing SaaS Platforms for Enterprise Use"</h5>
              <p className="text-neutral-400 text-sm mb-2">Comprehensive guide focusing on compliance, encryption, and security best practices.</p>
              <span className="text-primary-400 text-xs">PDF • 1.8MB</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Download requests:</strong> support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'webinars',
      title: 'Webinars',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Educational Sessions</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Join our sessions on technology and automation topics.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-success-400 mb-2">Upcoming</h4>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">"Building Resilient AI Workflows"</h5>
                <p className="text-neutral-400 text-sm">July 30, 2025 • 2:00 PM IST • 60 minutes</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">On-Demand</h4>
              <div className="space-y-2">
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-1">"API Integrations Masterclass"</h5>
                  <p className="text-neutral-400 text-sm">45 minutes • 1,247 views</p>
                </div>
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-1">"Scaling SaaS Infrastructure"</h5>
                  <p className="text-neutral-400 text-sm">50 minutes • 892 views</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              Register via email: support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'help-center',
      title: 'Help Center',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Self-Service Support</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Comprehensive help resources and documentation.
          </p>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Account Setup</h5>
                <p className="text-neutral-400 text-sm">Step-by-step guides for getting started with YoForex AI platform.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Troubleshooting</h5>
                <p className="text-neutral-400 text-sm">Common API errors, fixes, and technical solutions.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Billing</h5>
                <p className="text-neutral-400 text-sm">Manage subscriptions, payments, and account settings.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">API Documentation</h5>
                <p className="text-neutral-400 text-sm">Complete developer guides and integration examples.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Need help?</strong> Email support@yoforex.co.in for personalized assistance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'community-forum',
      title: 'Community Forum',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Developer Community</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Discuss technical topics with other developers and our team.
          </p>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400 mb-2">Categories</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">API Tips</h5>
                <p className="text-neutral-400 text-sm">Integration guides and best practices</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">Workflow Ideas</h5>
                <p className="text-neutral-400 text-sm">Automation strategies and use cases</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">Feedback</h5>
                <p className="text-neutral-400 text-sm">Product suggestions and discussions</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-warning-500/10 border border-warning-500/20 rounded-lg">
            <p className="text-warning-400 text-sm">
              <strong>Community Guidelines:</strong> Focus on technical discussions, workflow automation, and platform usage. No trading advice or financial recommendations.
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Join at:</strong> app.yoforex.co.in/forum
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'contact-support',
      title: 'Contact Support',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Get Help</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Multiple ways to reach our support team for technical assistance.
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Email Support</h5>
              <p className="text-primary-400 mb-1">support@yoforex.co.in</p>
              <p className="text-neutral-400 text-sm">Response within 2-4 hours during business hours</p>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <p className="text-neutral-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p className="text-neutral-300 text-sm">Saturday - Sunday: Limited support</p>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Office Address</h5>
              <p className="text-neutral-300 text-sm">
                28, Gopi Bose Lane<br/>
                Kolkata 700012<br/>
                West Bengal, India
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>For urgent technical issues:</strong> Include your account details and error logs when contacting support.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'status-page',
      title: 'Status Page',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Real-time updates on platform uptime and incident history.
          </p>
          
          <div className="space-y-4">
            <div className="bg-success-500/10 border border-success-500/20 rounded-lg p-4">
              <h5 className="font-semibold text-success-400 mb-2">Current Status: Operational</h5>
              <p className="text-neutral-300 text-sm">All systems running normally</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-800/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success-400 mb-1">99.9%</div>
                <div className="text-neutral-400 text-sm">Current Uptime</div>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">45ms</div>
                <div className="text-neutral-400 text-sm">Avg Response</div>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-warning-400 mb-1">0</div>
                <div className="text-neutral-400 text-sm">Active Incidents</div>
              </div>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Recent Incidents</h5>
              <p className="text-neutral-400 text-sm">No recent incidents. Last maintenance: July 15, 2025</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Subscribe for alerts:</strong> Get notified about maintenance and incidents via support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'about-us',
      title: 'About Us',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">About YoForex AI</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            YoForex AI is a leading SaaS provider specializing in AI-powered analytics and workflow automation for enterprise teams.
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-primary-400 mb-2">Mission</h5>
              <p className="text-neutral-300 text-sm">Democratize enterprise-grade AI analytics and workflow automation for organizations of all sizes.</p>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-success-400 mb-2">Values</h5>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• Security and compliance first</li>
                <li>• Transparency in operations</li>
                <li>• Innovation in AI technology</li>
                <li>• Customer-focused development</li>
              </ul>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-warning-400 mb-2">Leadership</h5>
              <p className="text-neutral-300 text-sm">Built by experienced engineers, product managers, and AI specialists with backgrounds from leading technology companies.</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Headquarters:</strong> 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India<br/>
              <strong>Contact:</strong> support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'careers',
      title: 'Careers',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Join Our Team</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Open roles for software engineers, data scientists, and customer success professionals.
          </p>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400 mb-2">Open Roles</h4>
            <div className="space-y-3">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">Frontend Engineer (React/NextJS)</h5>
                <p className="text-neutral-400 text-sm">Build responsive user interfaces for our analytics platform. 3-5 years experience required.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">Backend Engineer (Python, Node, API)</h5>
                <p className="text-neutral-400 text-sm">Design scalable backend systems and APIs. 4-6 years experience with cloud platforms.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">QA Engineer</h5>
                <p className="text-neutral-400 text-sm">Ensure platform quality through comprehensive testing. 2-4 years experience.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">Customer Support Analyst</h5>
                <p className="text-neutral-400 text-sm">Provide technical support to enterprise customers. 1-3 years experience.</p>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-1">Cloud DevOps Engineer</h5>
                <p className="text-neutral-400 text-sm">Build and maintain cloud infrastructure. 3-5 years experience with AWS/Azure.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Apply:</strong> Send your CV to support@yoforex.co.in<br/>
              <strong>Location:</strong> Remote and on-site roles available at our Kolkata office
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'press-kit',
      title: 'Press Kit',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Media Resources</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Download approved logos, brand guidelines, and executive bios for media use.
          </p>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Brand Assets</h5>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>• High-res logos (SVG, PNG)</li>
                  <li>• Brand guidelines PDF</li>
                  <li>• Color palette specifications</li>
                  <li>• Typography guidelines</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Company Information</h5>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>• Executive bios and photos</li>
                  <li>• Company boilerplate</li>
                  <li>• Product screenshots</li>
                  <li>• Fact sheets</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-neutral-800/30 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">Company Boilerplate</h5>
              <p className="text-neutral-300 text-sm leading-relaxed">
                YoForex AI is a leading SaaS provider specializing in AI-powered analytics and workflow automation for enterprise teams. 
                Established in Kolkata, India, we empower organizations to deliver real-time data insights, orchestrate complex analytics jobs, 
                and automate mission-critical workflows with 99.9% uptime SLA and SOC 2 compliance.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Media Inquiries:</strong> support@yoforex.co.in<br/>
              <strong>Download Assets:</strong> Available upon request
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'partners',
      title: 'Partners',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Strategic Partnerships</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Collaborations with leading technology providers for enhanced platform capabilities.
          </p>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-primary-400 mb-2">Cloud Partners</h5>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>• Amazon Web Services (AWS)</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Microsoft Azure</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-success-400 mb-2">AI Partners</h5>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>• OpenAI (GPT models)</li>
                  <li>• Anthropic (Claude)</li>
                  <li>• Google AI (Gemini)</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-warning-400 mb-2">Integration Partners</h5>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>• Slack Technologies</li>
                  <li>• Microsoft Teams</li>
                  <li>• Zapier</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <h5 className="font-semibold text-accent-400 mb-2">Security Partners</h5>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>• SOC 2 compliance auditors</li>
                  <li>• Cybersecurity consultants</li>
                  <li>• Data protection specialists</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Partner with us:</strong> support@yoforex.co.in<br/>
              <strong>Partnership opportunities:</strong> Technology integrations, reseller programs, and strategic alliances
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Privacy Policy</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            YoForex AI is committed to safeguarding your privacy and protecting your personal and organizational data.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Information We Collect</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• Personal and business identification (name, contact info, company name) upon signup or contact</li>
                <li>• Usage data for platform improvements and troubleshooting</li>
                <li>• Technical data such as IP address, browser type, device data, and log files</li>
                <li>• No confidential financial account or trading signal data is collected, as YoForex AI is strictly a SaaS analytics and workflow platform</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-success-400 mb-2">How We Use Your Information</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• To provide, maintain, and improve platform features and customer support</li>
                <li>• For account setup, billing, and service communication</li>
                <li>• For aggregated analytics to enhance user experience and product development</li>
                <li>• We never sell or share data with third parties for marketing purposes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-warning-400 mb-2">Data Protection</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• All user data is stored using industry-standard security (TLS, encryption at rest, SOC 2-compliant infrastructure)</li>
                <li>• We restrict access to data to authorized personnel only</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-accent-400 mb-2">User Rights</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• You may request access to, or deletion of, your data at any time</li>
                <li>• For all inquiries, contact: support@yoforex.co.in</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Policy Updates:</strong> We may revise this policy to meet regulatory or business requirements. The latest version will always be posted here.<br/>
              <strong>Contact:</strong> support@yoforex.co.in
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'terms-conditions',
      title: 'Terms and Conditions',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Terms and Conditions</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Welcome to YoForex AI. By using our SaaS software and IT solutions platform, you agree to the following terms:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">1. Service Scope</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• YoForex AI is a workflow automation and analytics SaaS platform</li>
                <li>• No trading or investment advice/tips are provided</li>
                <li>• All analyses and signals are strictly for informational and research purposes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-success-400 mb-2">2. Account Usage</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• You are responsible for keeping your login and API credentials secure</li>
                <li>• Do not share your account with unauthorized users</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-warning-400 mb-2">3. Payments & Billing</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• All prices are exclusive of applicable taxes</li>
                <li>• Subscriptions are billed monthly in INR</li>
                <li>• Upgrade, downgrade, and cancellation policies are available on your My Account page or by contacting support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-accent-400 mb-2">4. Intellectual Property</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• All software, analytics models, and documentation are property of YoForex AI</li>
                <li>• Content may not be resold, reverse engineered, or redistributed</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-error-400 mb-2">5. Limitation of Liability</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• YoForex AI is not responsible for business losses caused by platform unavailability exceeding published SLA</li>
                <li>• Not liable for outcomes of analytics reports/actions taken by users</li>
                <li>• The platform is not liable for any trading or investment losses as we are not a financial advisory service</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Support:</strong> For all technical issues, contact support@yoforex.co.in<br/>
              <strong>Updates:</strong> We reserve the right to amend these terms. Continued use of the service indicates acceptance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'return-policy',
      title: 'Return Policy',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Return Policy</h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            All purchases of YoForex AI software subscriptions and related services are subject to the following policy:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-2">SaaS Plans</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• Monthly/annual subscriptions can be canceled at any time, but are non-refundable for the current billing period</li>
                <li>• Your access will continue through the paid term, and will not renew if canceled</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-success-400 mb-2">Enterprise and Custom Deployments</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• Subject to custom contract terms</li>
                <li>• Contact support@yoforex.co.in for specific terms</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-warning-400 mb-2">Refunds</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• Refunds are only provided in cases of double-billing or proven technical errors that prevent service delivery</li>
                <li>• Must be requested within 14 days of the charge</li>
                <li>• For all return or billing queries, contact: support@yoforex.co.in</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-error-400 mb-2">Non-Refundable Services</h4>
              <ul className="space-y-1 text-neutral-300 text-sm">
                <li>• No refunds are provided for consulting, setup, or integration fees</li>
                <li>• API costs are non-refundable as they are third-party charges</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm">
              <strong>Contact:</strong> support@yoforex.co.in<br/>
              <strong>Address:</strong> 28, Gopi Bose Lane, Kolkata 700012, West Bengal, India
            </p>
          </div>
        </div>
      )
    }
  ];

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', id: 'features' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'API Documentation', id: 'api-documentation' },
        { name: 'Integrations', id: 'integrations' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', id: 'blog' },
        { name: 'Case Studies', id: 'case-studies' },
        { name: 'Whitepapers', id: 'whitepapers' },
        { name: 'Webinars', id: 'webinars' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', id: 'help-center' },
        { name: 'Community Forum', id: 'community-forum' },
        { name: 'Contact Support', id: 'contact-support' },
        { name: 'Status Page', id: 'status-page' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', id: 'about-us' },
        { name: 'Careers', id: 'careers' },
        { name: 'Press Kit', id: 'press-kit' },
        { name: 'Partners', id: 'partners' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', id: 'privacy-policy' },
        { name: 'Terms and Conditions', id: 'terms-conditions' },
        { name: 'Return Policy', id: 'return-policy' }
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
                    <button
                      onClick={() => toggleSection(link.id)}
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-left flex items-center space-x-2 group"
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-200 ${
                          expandedSections.includes(link.id) ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
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
              Get the latest AI analytics insights and product updates delivered to your inbox.
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
            <button 
              onClick={() => toggleSection('privacy-policy')}
              className="text-neutral-500 hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => toggleSection('terms-conditions')}
              className="text-neutral-500 hover:text-neutral-400 transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => toggleSection('return-policy')}
              className="text-neutral-500 hover:text-neutral-400 transition-colors"
            >
              Return Policy
            </button>
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

      {/* Expandable Content Sections */}
      <AnimatePresence>
        {expandedSections.map((sectionId) => {
          const section = expandableSections.find(s => s.id === sectionId);
          if (!section) return null;

          return (
            <motion.div
              key={sectionId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-neutral-800/50 bg-neutral-900/50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 relative">
                  <motion.button
                    onClick={() => toggleSection(sectionId)}
                    className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-800/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close section"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {section.content}
                  </motion.div>
                  
                  <motion.button
                    onClick={() => toggleSection(sectionId)}
                    className="mt-6 bg-neutral-800/50 text-neutral-300 px-6 py-2 rounded-lg hover:bg-neutral-700/50 transition-colors flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronUp className="w-4 h-4" />
                    <span>Collapse</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;