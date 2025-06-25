import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-plugin-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  }
})
