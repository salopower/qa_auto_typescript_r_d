import { test } from '@playwright/test';
import { OrangeHRMLoginPage } from '../../../src/pages/orange-hrm-login.page';

test.describe('Negative Login Scenarios @smoke', () => {
    let loginPage: OrangeHRMLoginPage;

    test.beforeEach(async ({ page, context }) => {
        loginPage = new OrangeHRMLoginPage(page, context);
        await loginPage.goto();
    });

    test('should show error with wrong password', async () => {
        await loginPage.login(
            process.env.TEST_USERNAME as string,
            'wrongpassword'
        );
        await loginPage.verifyFailedLogin();
        await loginPage.verifyFailedLoginIcon();
        await loginPage.verifyFailedLoginWithMessage('Invalid credentials');
    });

    test('should show error with wrong username', async () => {
        await loginPage.login(
            'WrongUser',
            process.env.TEST_PASSWORD as string
        );
        await loginPage.verifyFailedLogin();
        await loginPage.verifyFailedLoginWithMessage('Invalid credentials');
    });

    test('should show error with special characters in username', async () => {
        await loginPage.login(
            process.env.TEST_USERNAME as string + '!@#',
            process.env.TEST_PASSWORD as string
        );
        await loginPage.verifyFailedLogin();
        await loginPage.verifyFailedLoginWithMessage('Invalid credentials');
    });
});