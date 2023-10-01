import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
    '/api': {
      target: 'https://api.content.tripadvisor.com/api/v1/',
      changeOrigin: true,
      secure: false,
    },
    cors: false,
  }},
  plugins: [react()],
})
