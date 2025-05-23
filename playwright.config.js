// playwright.config.js
const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:5500/',
  },
});
