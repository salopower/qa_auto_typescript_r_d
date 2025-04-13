import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../../../src/pages/orange-hrm-login.page';

test.describe('Login Page UI Elements @smoke', () => {
    let loginPage: OrangeHRMLoginPage;

    test.beforeEach(async ({ page, context }) => {
        loginPage = new OrangeHRMLoginPage(page, context);
        await loginPage.goto();
    });

    test('should display company logo', async () => {
        await expect(loginPage.logo).toBeVisible();
    });

    test('should display login title with correct text', async () => {
        await loginPage.verifyLoginTitleVisible();
        await loginPage.verifyLoginTitleText('Login');
    });

    test('should display username field with correct label and placeholder', async () => {
        await expect(loginPage.userNameInput).toBeVisible();
        await expect(loginPage.userNameInputTitle).toHaveText('Username');
        await expect(loginPage.userNameInput).toHaveAttribute('placeholder', 'Username');
    });

    test('should display password field with correct label and placeholder', async () => {
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.passwordInputTitle).toHaveText('Password');
        await expect(loginPage.passwordInput).toHaveAttribute('placeholder', 'Password');
    });

    test('should display login button', async () => {
        await expect(loginPage.loginButton).toBeVisible();
        await expect(loginPage.loginButton).toHaveText('Login');
    });

    test('should display forgot password link', async () => {
        await expect(loginPage.forgotPasswordLink).toBeVisible();
        await expect(loginPage.forgotPasswordLink).toHaveText('Forgot your password?');
    });
});
