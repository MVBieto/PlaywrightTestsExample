import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 10000,
  retries: 0,
  use: {
    headless: false,
  },
});
