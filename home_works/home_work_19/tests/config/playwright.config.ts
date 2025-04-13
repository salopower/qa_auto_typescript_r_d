import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: './specs',
    globalSetup: require.resolve('./setup/auth.setup.ts'),
    outputDir: 'test-results/',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000
    },
    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        storageState: 'playwright/.auth/user.json',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        video: 'retain-on-failure'
    },
    projects: [
        {
            name: 'setup',
            testMatch: /setup\/.*\.setup\.ts/
        },
        {
            name: 'e2e',
            dependencies: ['setup']
        }
    ]
});
