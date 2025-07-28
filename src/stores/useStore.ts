import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'analyst' | 'viewer';
  avatar?: string;
  timezone: string;
  twoFactorEnabled: boolean;
}

interface Subscription {
  id: string;
  plan: 'basic' | 'pro' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  seats: number;
  features: string[];
}

interface Alert {
  id: string;
  pair: string;
  condition: 'above' | 'below' | 'crosses';
  value: number;
  channels: ('email' | 'push' | 'sms')[];
  isActive: boolean;
  createdAt: Date;
}

interface Strategy {
  id: string;
  name: string;
  description: string;
  rules: any[];
  backtest?: {
    returns: number;
    maxDrawdown: number;
    winRate: number;
    sharpeRatio: number;
  };
  isActive: boolean;
}

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

interface AppState {
  // User & Auth
  user: User | null;
  isAuthenticated: boolean;
  subscription: Subscription | null;
  
  // UI State
  theme: 'light' | 'dark' | 'pro';
  language: 'en' | 'es' | 'zh' | 'ar';
  sidebarCollapsed: boolean;
  commandPaletteOpen: boolean;
  
  // Trading Data
  watchlist: string[];
  alerts: Alert[];
  strategies: Strategy[];
  notifications: Notification[];
  
  // Real-time Data
  liveQuotes: Record<string, { bid: number; ask: number; change: number }>;
  marketData: any[];
  
  // Actions
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark' | 'pro') => void;
  setLanguage: (language: 'en' | 'es' | 'zh' | 'ar') => void;
  toggleSidebar: () => void;
  toggleCommandPalette: () => void;
  addAlert: (alert: Omit<Alert, 'id' | 'createdAt'>) => void;
  removeAlert: (id: string) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markNotificationRead: (id: string) => void;
  updateLiveQuotes: (quotes: Record<string, { bid: number; ask: number; change: number }>) => void;
}

export const useStore = create<AppState>((set, get) => ({
  // Initial state
  user: {
    id: '1',
    name: 'John Trader',
    email: 'john@example.com',
    role: 'admin',
    timezone: 'UTC',
    twoFactorEnabled: true
  },
  isAuthenticated: true,
  subscription: {
    id: '1',
    plan: 'pro',
    status: 'active',
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    seats: 5,
    features: ['multi-model', 'api-access', 'priority-support']
  },
  
  theme: 'dark',
  language: 'en',
  sidebarCollapsed: false,
  commandPaletteOpen: false,
  
  watchlist: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'BTCUSD'],
  alerts: [],
  strategies: [],
  notifications: [],
  
  liveQuotes: {},
  marketData: [],
  
  // Actions
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  toggleCommandPalette: () => set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),
  
  addAlert: (alert) => set((state) => ({
    alerts: [...state.alerts, {
      ...alert,
      id: Date.now().toString(),
      createdAt: new Date()
    }]
  })),
  
  removeAlert: (id) => set((state) => ({
    alerts: state.alerts.filter(alert => alert.id !== id)
  })),
  
  addNotification: (notification) => set((state) => ({
    notifications: [{
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false
    }, ...state.notifications.slice(0, 49)]
  })),
  
  markNotificationRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    )
  })),
  
  updateLiveQuotes: (quotes) => set({ liveQuotes: quotes })
}));