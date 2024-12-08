import { defineConfig } from 'vite'
import react from '@vite/plugin-react'
import react from '@vitejs/plugin-react-swc'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
    setipFiles: './src/setupTests.js',
  }
})
