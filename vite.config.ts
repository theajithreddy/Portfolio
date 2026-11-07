import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// GitHub Pages base path:
//  - user site repo `theajithreddy.github.io` -> '/'
//  - project repo `theajithreddy/Portfolio`   -> '/Portfolio/' (current default)
// Override at build time: VITE_BASE=/ npm run build
const base = process.env.VITE_BASE ?? '/Portfolio/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 900,
  },
})
