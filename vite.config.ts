import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Development: base = '/', Production: base = '/ProjectV-Website/'
  const base = command === 'serve' ? '/' : '/ProjectV-Website/';
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base,
  }
})