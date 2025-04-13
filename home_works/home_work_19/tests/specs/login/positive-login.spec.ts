import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../../../src/pages/orange-hrm-login.page';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Positive Login Scenarios @smoke', () => {
    let loginPage: OrangeHRMLoginPage;

    test.beforeEach(async ({ page, context }) => {
        loginPage = new OrangeHRMLoginPage(page, context);
        await loginPage.goto();
    });

    test('should login with valid credentials', async () => {
        await loginPage.login(
            process.env.TEST_USERNAME as string,
            process.env.TEST_PASSWORD as string
        );
        await loginPage.verifySuccessfulLogin();
    });

    test('should persist session after login', async ({ context }) => {
        await loginPage.login(
            process.env.TEST_USERNAME as string,
            process.env.TEST_PASSWORD as string
        );
        await loginPage.verifySuccessfulLogin();

        const newPage = await context.newPage();
        await newPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await expect(newPage).toHaveURL(/dashboard/);
    });
});