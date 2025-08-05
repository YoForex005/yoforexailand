import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';

interface StatusPageProps {
  onNavigateBack: () => void;
}

const StatusPage: React.FC<StatusPageProps> = ({ onNavigateBack }) => {
  const systemStatus = {
    overall: 'operational',
    uptime: '99.94%',
    lastIncident: '2024-12-15'
  };

  const services = [
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms',
      icon: Server
    },
    {
      name: 'Analytics Engine',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      icon: Activity
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      icon: Database
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '89ms',
      icon: Globe
    },
    {
      name: 'Webhook Delivery',
      status: 'degraded',
      uptime: '98.87%',
      responseTime: '340ms',
      icon: Server
    },
    {
      name: 'File Processing',
      status: 'operational',
      uptime: '99.91%',
      responseTime: '156ms',
      icon: Activity
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Webhook delivery delays',
      status: 'investigating',
      severity: 'minor',
      startTime: '2025-01-15 14:30 UTC',
      description: 'Some webhook deliveries are experiencing delays of up to 5 minutes.',
      updates: [
        {
          time: '2025-01-15 15:15 UTC',
          message: 'We have identified the root cause and are implementing a fix.'
        },
        {
          time: '2025-01-15 14:45 UTC',
          message: 'We are investigating reports of webhook delivery delays.'
        }
      ]
    }
  ];

  const pastIncidents = [
    {
      id: 2,
      title: 'API rate limiting issues',
      status: 'resolved',
      severity: 'major',
      date: '2024-12-15',
      duration: '2h 15m',
      description: 'API requests were being incorrectly rate limited, causing service disruptions.'
    },
    {
      id: 3,
      title: 'Database maintenance',
      status: 'resolved',
      severity: 'minor',
      date: '2024-12-01',
      duration: '45m',
      description: 'Scheduled database maintenance caused brief service interruptions.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-success-400 bg-success-500/20';
      case 'degraded': return 'text-warning-400 bg-warning-500/20';
      case 'outage': return 'text-error-400 bg-error-500/20';
      default: return 'text-neutral-400 bg-neutral-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle;
      case 'degraded': return AlertTriangle;
      case 'outage': return XCircle;
      default: return Clock;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'text-warning-400 bg-warning-500/20';
      case 'major': return 'text-error-400 bg-error-500/20';
      case 'critical': return 'text-error-500 bg-error-500/30';
      default: return 'text-neutral-400 bg-neutral-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      {/* Header */}
      {/* <header className="bg-gradient-glass backdrop-blur-sm border-b border-neutral-800/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={onNavigateBack}
                className="p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  YoForex AI
                </span>
                <span className="text-sm text-neutral-400 ml-2">System Status</span>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            System <span className="bg-gradient-primary bg-clip-text text-transparent">Status</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Real-time updates on platform uptime, performance metrics, and incident history.
          </p>
        </motion.div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-success-400" />
              <h2 className="text-3xl font-bold text-success-400">All Systems Operational</h2>
            </div>
            <p className="text-neutral-400 mb-6">
              Platform uptime SLA: 99.9% | Current uptime: {systemStatus.uptime}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-success-400 mb-1">{systemStatus.uptime}</div>
                <div className="text-sm text-neutral-400">30-day uptime</div>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary-400 mb-1">45ms</div>
                <div className="text-sm text-neutral-400">Avg response time</div>
              </div>
              <div className="bg-neutral-800/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-warning-400 mb-1">1</div>
                <div className="text-sm text-neutral-400">Active incidents</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Service Status</h2>
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden">
            <div className="divide-y divide-neutral-800/50">
              {services.map((service, index) => {
                const StatusIcon = getStatusIcon(service.status);
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 hover:bg-neutral-800/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <service.icon className="w-6 h-6 text-neutral-400" />
                        <div>
                          <h3 className="font-semibold text-white">{service.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-neutral-400 mt-1">
                            <span>Uptime: {service.uptime}</span>
                            <span>Response: {service.responseTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="w-5 h-5 text-success-400" />
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Active Incidents */}
        {incidents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Active Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                      <p className="text-neutral-400 mb-4">{incident.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className="text-sm text-neutral-400">Started: {incident.startTime}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-warning-500/20 text-warning-400 rounded-full text-sm font-medium">
                      {incident.status}
                    </span>
                  </div>
                  
                  <div className="border-t border-neutral-800/50 pt-6">
                    <h4 className="font-semibold text-white mb-4">Updates</h4>
                    <div className="space-y-3">
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                          <div>
                            <p className="text-neutral-300 text-sm">{update.message}</p>
                            <p className="text-neutral-500 text-xs mt-1">{update.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Past Incidents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Recent Incidents</h2>
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden">
            <div className="divide-y divide-neutral-800/50">
              {pastIncidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-neutral-800/20 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-neutral-400 text-sm mb-3">{incident.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-neutral-400">
                        <span>{incident.date}</span>
                        <span>Duration: {incident.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className="px-3 py-1 bg-success-500/20 text-success-400 rounded-full text-sm font-medium">
                        Resolved
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Subscribe to Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay <span className="bg-gradient-primary bg-clip-text text-transparent">Informed</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Subscribe to status updates and get notified about incidents and maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <motion.button
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default StatusPage;