// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    svgr() // 👈 this must be here
  ]
})
