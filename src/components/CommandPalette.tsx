import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, Clock, Star, TrendingUp, Settings, Bell, Upload } from 'lucide-react';
import { useStore } from '../stores/useStore';

interface Command {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  action: () => void;
  shortcut?: string;
}

const CommandPalette: React.FC = () => {
  const { commandPaletteOpen, toggleCommandPalette } = useStore();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    {
      id: 'upload-chart',
      title: 'Upload Chart',
      description: 'Upload a new chart for AI analysis',
      icon: Upload,
      category: 'Analysis',
      action: () => console.log('Upload chart'),
      shortcut: '⌘U'
    },
    {
      id: 'new-alert',
      title: 'Create Alert',
      description: 'Set up a new price alert',
      icon: Bell,
      category: 'Alerts',
      action: () => console.log('New alert'),
      shortcut: '⌘A'
    },
    {
      id: 'view-trades',
      title: 'Active Trades',
      description: 'View all active trading positions',
      icon: TrendingUp,
      category: 'Trading',
      action: () => console.log('View trades'),
      shortcut: '⌘T'
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'Open application settings',
      icon: Settings,
      category: 'Navigation',
      action: () => console.log('Settings'),
      shortcut: '⌘,'
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(query.toLowerCase()) ||
    command.description.toLowerCase().includes(query.toLowerCase()) ||
    command.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleCommandPalette();
      }
      
      if (commandPaletteOpen) {
        if (e.key === 'Escape') {
          toggleCommandPalette();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            toggleCommandPalette();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, selectedIndex, filteredCommands, toggleCommandPalette]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!commandPaletteOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32"
        onClick={toggleCommandPalette}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl w-full max-w-2xl mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center p-4 border-b border-neutral-800">
            <Search className="w-5 h-5 text-neutral-400 mr-3" />
            <input
              type="text"
              placeholder="Search commands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-neutral-400 outline-none"
              autoFocus
            />
            <div className="flex items-center space-x-1 text-xs text-neutral-500">
              <kbd className="px-2 py-1 bg-neutral-800 rounded">⌘</kbd>
              <kbd className="px-2 py-1 bg-neutral-800 rounded">K</kbd>
            </div>
          </div>

          {/* Commands List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-neutral-400">
                No commands found for "{query}"
              </div>
            ) : (
              <div className="p-2">
                {filteredCommands.map((command, index) => (
                  <motion.div
                    key={command.id}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                      index === selectedIndex 
                        ? 'bg-primary-500/20 text-primary-400' 
                        : 'text-neutral-300 hover:bg-neutral-800/50'
                    }`}
                    onClick={() => {
                      command.action();
                      toggleCommandPalette();
                    }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <command.icon className="w-5 h-5 mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">{command.title}</div>
                      <div className="text-sm text-neutral-500">{command.description}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                        {command.category}
                      </span>
                      {command.shortcut && (
                        <span className="text-xs text-neutral-500">{command.shortcut}</span>
                      )}
                      <ArrowRight className="w-4 h-4 text-neutral-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-neutral-800 text-xs text-neutral-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↵</kbd>
                <span>Select</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommandPalette;