import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const env = process.env.TEST_ENV || 'qa';

dotenv.config({
  path: `./config/${env}.env`,
});

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL,

    browserName: 'chromium',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }
  ]

});