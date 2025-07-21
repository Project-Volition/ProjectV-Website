import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  // Check if we're building for GitHub Pages deployment
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const base = isGitHubPages ? '/ProjectV-Website/' : '/';
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base,
  }
})