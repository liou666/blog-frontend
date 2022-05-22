import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPath from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPath()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3005/v1/blog',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
