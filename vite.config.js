import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
  return {
    base: isGitHubPages ? '/liyana-cafe/' : '/',
    plugins: [
      react(),
      tailwindcss(),
    ],
  }
})
