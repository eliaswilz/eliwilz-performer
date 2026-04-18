import { defineConfig } from 'vite'
import MarkdownPlugin from '@goodforyou/vite-plugin-markdown-import'

export default defineConfig({
  server: {
    allowedHosts: true
  },
  plugins: [
    MarkdownPlugin()
  ]
})
