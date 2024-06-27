/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,js}'],
      thresholds: {
        global: {
          statements: 54,
          branches: 38,
          functions: 65,
          lines: 54
        }
      }
    },
    setupFiles: './vitest.setup.ts',
    restoreMocks: true,
    alias: {
      '@test': '/__tests__',
      '@src': '/src'
    },
    exclude: ['dist', 'inputs', 'stubs', 'node_modules']
  }
})
