import { test } from '@playwright/test';
import { OrangeHRMLoginPage } from '../../../src/pages/orange-hrm-login.page';

test.describe('Login Page UI Elements @smoke', () => {
    let loginPage: OrangeHRMLoginPage;

    test.beforeEach(async ({ page, context }) => {
        loginPage = new OrangeHRMLoginPage(page, context);
        await loginPage.goto();
    });

    test('should display all UI elements correctly', async () => {
        await loginPage.verifyHeaderSection();
        await loginPage.verifyCredentialsForm();
        await loginPage.verifyActionElements();
    });

    //Example of tests that use POM methods for individual checks
    test('should verify header section', async () => {
        await loginPage.verifyHeaderSection();
    });

    test('should verify credentials form', async () => {
        await loginPage.verifyCredentialsForm();
    });
});