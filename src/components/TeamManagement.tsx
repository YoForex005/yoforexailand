import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Mail, Shield, Crown, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { useStore } from '../stores/useStore';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'analyst' | 'viewer';
  avatar?: string;
  status: 'active' | 'pending' | 'inactive';
  lastActive: Date;
  joinedAt: Date;
}

const TeamManagement: React.FC = () => {
  const { user, addNotification } = useStore();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'manager' | 'analyst' | 'viewer'>('analyst');

  const [teamMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'John Trader',
      email: 'john@example.com',
      role: 'admin',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100&fit=crop&crop=face',
      status: 'active',
      lastActive: new Date(),
      joinedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    },
    {
      id: '2',
      name: 'Sarah Analytics',
      email: 'sarah@example.com',
      role: 'manager',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=100&h=100&fit=crop&crop=face',
      status: 'active',
      lastActive: new Date(Date.now() - 3600000),
      joinedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
    },
    {
      id: '3',
      name: 'Mike Researcher',
      email: 'mike@example.com',
      role: 'analyst',
      status: 'pending',
      lastActive: new Date(Date.now() - 86400000),
      joinedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: '4',
      name: 'Lisa Observer',
      email: 'lisa@example.com',
      role: 'viewer',
      status: 'active',
      lastActive: new Date(Date.now() - 7200000),
      joinedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    }
  ]);

  const roleIcons = {
    admin: Crown,
    manager: Shield,
    analyst: Edit,
    viewer: Eye
  };

  const roleColors = {
    admin: 'text-warning-400 bg-warning-500/20',
    manager: 'text-primary-400 bg-primary-500/20',
    analyst: 'text-accent-400 bg-accent-500/20',
    viewer: 'text-neutral-400 bg-neutral-500/20'
  };

  const statusColors = {
    active: 'text-success-400 bg-success-500/20',
    pending: 'text-warning-400 bg-warning-500/20',
    inactive: 'text-neutral-400 bg-neutral-500/20'
  };

  const sendInvite = () => {
    if (!inviteEmail) return;
    
    addNotification({
      type: 'success',
      title: 'Invitation Sent',
      message: `Team invitation sent to ${inviteEmail}`
    });
    
    setInviteEmail('');
    setShowInviteModal(false);
  };

  const removeMember = (memberId: string, memberName: string) => {
    addNotification({
      type: 'success',
      title: 'Member Removed',
      message: `${memberName} has been removed from the team`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Team Management</h2>
          <p className="text-neutral-400">Manage team members and permissions</p>
        </div>
        <motion.button
          onClick={() => setShowInviteModal(true)}
          className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <UserPlus className="w-4 h-4" />
          <span>Invite Member</span>
        </motion.button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-neutral-400">Total Members</span>
          </div>
          <div className="text-2xl font-bold text-white">{teamMembers.length}</div>
        </div>
        <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-4 h-4 text-success-400" />
            <span className="text-sm text-neutral-400">Active</span>
          </div>
          <div className="text-2xl font-bold text-success-400">
            {teamMembers.filter(m => m.status === 'active').length}
          </div>
        </div>
        <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Mail className="w-4 h-4 text-warning-400" />
            <span className="text-sm text-neutral-400">Pending</span>
          </div>
          <div className="text-2xl font-bold text-warning-400">
            {teamMembers.filter(m => m.status === 'pending').length}
          </div>
        </div>
        <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Crown className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-neutral-400">Admins</span>
          </div>
          <div className="text-2xl font-bold text-accent-400">
            {teamMembers.filter(m => m.role === 'admin').length}
          </div>
        </div>
      </div>

      {/* Team Members Table */}
      <div className="bg-gradient-glass backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6">Team Members</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Member</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Role</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Last Active</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Joined</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => {
                const RoleIcon = roleIcons[member.role];
                return (
                  <motion.tr
                    key={member.id}
                    className="border-b border-neutral-800/50 hover:bg-neutral-800/20"
                    whileHover={{ backgroundColor: 'rgba(64, 64, 64, 0.1)' }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-neutral-300">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-white">{member.name}</div>
                          <div className="text-sm text-neutral-400">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${roleColors[member.role]}`}>
                        <RoleIcon className="w-3 h-3" />
                        <span className="capitalize">{member.role}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-neutral-300 text-sm">
                      {member.lastActive.toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-neutral-300 text-sm">
                      {member.joinedAt.toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {user?.role === 'admin' && member.id !== user.id && (
                          <>
                            <motion.button
                              className="text-neutral-400 hover:text-white p-1 rounded"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Edit className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              onClick={() => removeMember(member.id, member.name)}
                              className="text-error-400 hover:text-error-300 p-1 rounded"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </>
                        )}
                        <motion.button
                          className="text-neutral-400 hover:text-white p-1 rounded"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowInviteModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-white mb-4">Invite Team Member</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@company.com"
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Role
                </label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as any)}
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500"
                >
                  <option value="viewer">Viewer - Read-only access</option>
                  <option value="analyst">Analyst - Can create strategies</option>
                  <option value="manager">Manager - Can manage team</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <motion.button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2 text-neutral-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={sendInvite}
                className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Invite
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default TeamManagement;