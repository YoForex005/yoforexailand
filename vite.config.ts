import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
    global: 'globalThis'
  },
  resolve: {
    alias: {
      process: 'process/browser'
    }
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['next/router']
  },
});
