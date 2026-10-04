import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Absolute base so assets load on nested routes (/projects, /contact) after a refresh.
  base: '/',
})
