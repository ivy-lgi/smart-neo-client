import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 5000,
    rollupOptions: { input: { index: './index.html' } }
  },
  server: { port: 3100 },
  resolve: {
    alias: {
      '@axonivy/smart-neo-client': resolve(__dirname, '../../packages/smart-neo-client/src'),
    }
  },
  base: './'
});
