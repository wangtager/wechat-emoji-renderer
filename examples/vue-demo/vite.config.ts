import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {}
  },
  resolve: {
    alias: {
      'wechat-emoji-renderer/vue': path.resolve(__dirname, '../../vue/index.ts')
    }
  }
}) 