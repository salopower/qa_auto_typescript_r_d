import { test as setup } from '@playwright/test';
import { OrangeHRMLoginPage } from '../../src/pages/orange-hrm-login.page';
import * as dotenv from 'dotenv';

dotenv.config();

setup('authenticate', async ({ page, context }) => {
    const loginPage = new OrangeHRMLoginPage(page, context);
    await loginPage.login(
        process.env.TEST_USERNAME as string,
        process.env.TEST_PASSWORD as string
    );

    await context.storageState({ path: 'playwright/.auth/user.json' });
});