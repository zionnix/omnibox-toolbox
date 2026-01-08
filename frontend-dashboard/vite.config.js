import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Permet d'utiliser '@' pour pointer vers le dossier src
      // Exemple: import Sidebar from '@/components/Sidebar'
      '@': path.resolve(__dirname, './src'),
      '@apps': path.resolve(__dirname, './src/apps'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Optionnel : si tu as des variables globales SCSS
        // additionalData: `@import "@/styles/variables.scss";`
      },
    },
  },
  server: {
    port: 3000,
    open: true, // Ouvre le navigateur automatiquement au démarrage
    proxy: {
      // Redirige les appels API vers ton backend local pendant le développement
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Optimisation pour les gros projets (découpage du code)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});