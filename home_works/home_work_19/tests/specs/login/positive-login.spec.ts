import { test } from '@playwright/test';
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
});