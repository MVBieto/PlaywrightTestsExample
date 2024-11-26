import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000, // default global test timeout: 30s
  expect: { timeout: 4000 }, // default implicit action timeout: 5s
  retries: 0,
  workers: 1,
  use: {
    headless: false,
  },
});
