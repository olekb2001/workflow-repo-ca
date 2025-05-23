import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['tests/**/*.spec.js'], // exclude Playwright tests
  },
});
