import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['metaversefrontend.onrender.com'], // ✅ Allow Render domain
    host: '0.0.0.0', // ✅ Allow external access
    port: 5173, // ✅ Set a fixed port
  }
})
