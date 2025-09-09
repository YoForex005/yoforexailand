import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Use async config to properly handle dynamic imports
export default defineConfig(async ({ command }) => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Conditionally add cartographer plugin
  if (command !== 'build' && process.env.REPL_ID !== undefined) {
    const cartographer = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer.cartographer());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    server: {
      host: "localhost",
      port: 5173,
      strictPort: true,
      open: true,
      hmr: {
        host: "localhost",
      },
      proxy: {
        // Handle API requests in development
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
        },
      },
    },
    // Production redirects (handled by Vite build and your hosting provider)
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
      rollupOptions: {
        // For Netlify, we'll create a _redirects file
        plugins: [{
          name: 'netlify-redirects',
          apply: 'build',
          enforce: 'post',
          generateBundle(_: unknown, __:unknown) {
            this.emitFile({
              type: 'asset',
              name: 'Netlify redirects',
              fileName: '_redirects',
              source: `# Redirects from what the browser requests to what we serve
# Homepage and common variations
/ /index.html 200
/index / 301
/index.html / 301
# Common URL variations
/features /features 301
/Features /features 301
/FEATURES /features 301
/pricing /pricing 301
/Pricing /pricing 301
/PRICING /pricing 301
# Blog and resources
/blog /blog 301
/Blog /blog 301
/BLOG /blog 301
/resources /resources 301
/Resources /resources 301
/RESOURCES /resources 301
# Authentication
/login /login 301
/Login /login 301
/LOGIN /login 301
/signup /signup 301
/Signup /signup 301
/SIGNUP /signup 301
# Catch all other HTML routes to handle SPA routing
/* /index.html 200`
            });
          },
        }],
      },
    },
  };
});