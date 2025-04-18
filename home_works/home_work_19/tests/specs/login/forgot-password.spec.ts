import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../../../src/pages/orange-hrm-login.page';

test.describe('Forgot Password Functionality @smoke', () => {
    let loginPage: OrangeHRMLoginPage;

    test.beforeEach(async ({ page, context }) => {
        loginPage = new OrangeHRMLoginPage(page, context);
        await loginPage.goto();
    });

    test('should navigate to reset password page', async () => {
        await loginPage.clickForgotPassword();
        await expect(loginPage.page).toHaveURL(/requestPasswordResetCode/);
    });

    test('should return to login page from reset password', async () => {
        await loginPage.clickForgotPassword();
        await loginPage.page.getByRole('button', { name: 'Cancel' }).click();
        await expect(loginPage.page).toHaveURL(/auth\/login/);
    });
});