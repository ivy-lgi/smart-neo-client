import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const ENGINE_URL = process.env.BASE_URL ?? 'http://localhost:8081/';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 5000,
    rollupOptions: { input: { index: './index.html' } }
  },
  server: {
    port: 3100,
    proxy: {
      '/api': {
        target: ENGINE_URL,
        auth: 'Developer:Developer'
      }
    }
  },
  resolve: {
    alias: {
      '@axonivy/smart-neo-client': resolve(__dirname, '../../packages/smart-neo-client/src'),
      '@axonivy/smart-neo-client-protocol': resolve(__dirname, '../../packages/protocol/src')
    }
  },
  base: './'
});
