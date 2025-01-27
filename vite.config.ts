import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // target: 'https://json-server-s6u4.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});