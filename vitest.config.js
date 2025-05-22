import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // allows using test(), expect() globally without imports
    environment: 'jsdom', // simulates browser-like environment
    // add more config options here if you need
  },
});
