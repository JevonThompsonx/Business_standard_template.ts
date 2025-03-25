import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  preview: {
    port: 8080,
  },
  plugins: [react(), tailwindcss(), VitePWA({
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    strategies: 'generateSW',
    manifest: {
      name: 'Zen Yoga Studio',
      short_name: 'ZenYoga',
      start_url: "/",
      description: 'Find your inner peace with Zen Yoga Studio.',
      theme_color: '#ffffff',
      background_color: '#f0f4f8',
      display: "standalone",
      // icons: [
      //   {
      //     src: "/icons/icon-192x192.png",
      //     sizes: "192x192",
      //     type: "image/png"
      //   },
      //   {
      //     src: "/icons/icon-512x512.png",
      //     sizes: "512x512",
      //     type: "image/png"
      //   }
      // ]
    }
  })],
})
