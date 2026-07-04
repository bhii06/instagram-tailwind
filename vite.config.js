import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/instagram-tailwind/', // Sesuaikan kapital 'I' jika nama repo Anda memang besar
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'profile.html'),
        highlight: resolve(__dirname, 'highlight.html'),
      },
    },
  },
})