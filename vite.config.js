import { defineConfig } from 'vite'
import { resolve } from 'path'
import MarkdownPlugin from '@goodforyou/vite-plugin-markdown-import'

export default defineConfig({
  server: {
    allowedHosts: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lists: resolve(__dirname, 'lists.html'),
        essays: resolve(__dirname, 'essays.html'),
        booking: resolve(__dirname, 'booking.html'),
        links: resolve(__dirname, 'links.html'),
      }
    }
  },
  plugins: [
    MarkdownPlugin()
  ]
})
