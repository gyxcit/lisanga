import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'Lisanga',
        short_name: 'Lisanga',
        description: 'Actualités en direct et en continu.',
        theme_color: '#2563eb',
        background_color: '#f3f4f6',
        display: 'standalone'
      }
    })
  ],
})
