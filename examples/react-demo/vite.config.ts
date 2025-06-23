import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'wechat-emoji-renderer/react': path.resolve(__dirname, '../../dist/react/index.mjs'),
      'wechat-emoji-renderer': path.resolve(__dirname, '../../dist/index.mjs')
    }
  },
  css: {
    postcss: {}
  },
  server: {
    port: 3000,
    open: true
  }
}) 