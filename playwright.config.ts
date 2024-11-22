import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 10000,
  retries: 0,
  workers: 1,
  use: {
    headless: false,
  },
});
