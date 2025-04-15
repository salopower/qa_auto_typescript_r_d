import { test } from '@playwright/test';
import { OrangeHRMLoginPage } from '../../../src/pages/orange-hrm-login.page';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Negative Login Scenarios @smoke', () => {
    let loginPage: OrangeHRMLoginPage;

    test.beforeEach(async ({ page, context }) => {
        loginPage = new OrangeHRMLoginPage(page, context);
        await loginPage.goto();
    });

    [
        {
            scenario: 'wrong password',
            username: process.env.TEST_USERNAME as string,
            password: 'wrongpassword'
        },
        {
            scenario: 'wrong username',
            username: 'WrongUser',
            password: process.env.TEST_PASSWORD as string
        },
        {
            scenario: 'special characters in username',
            username: process.env.TEST_USERNAME + '!@#',
            password: process.env.TEST_PASSWORD as string
        }
    ].forEach(({ scenario, username, password }) => {
        test(`should show error with ${scenario}`, async () => {
            await loginPage.login(username, password);
            await loginPage.verifyFailedLogin();
            await loginPage.verifyFailedLoginIcon();
            await loginPage.verifyFailedLoginWithMessage('Invalid credentials');
        });
    });
});
