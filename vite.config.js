import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // MDX must come before React plugin
    mdx({
      providerImportSource: '@mdx-js/react',
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@content': resolve(__dirname, './content'),
    },
  },
  // Removed base path for custom domain deployment on Vercel
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild'
  }
})
