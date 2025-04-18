import { BrowserContext, Page, Locator } from 'playwright';
import { expect } from '@playwright/test';
import { BasePage } from './base.page.ts';

export class OrangeHRMLoginPage extends BasePage {
    public get logo(): Locator {
        return this.page.locator('img[alt="company-branding"]');
    }

    private get loginTitle(): Locator {
        return this.page.locator('//h5[contains(@class, \'orangehrm-login-title\')]');
    }

    public get userNameInput(): Locator {
        return this.page.locator('input[name="username"]');
    }

    public get userNameInputTitle(): Locator {
        return this.page.locator('(//label[@class="oxd-label"])[1]');
    }

    public get passwordInput(): Locator {
        return this.page.locator('input[name="password"]');
    }

    public get passwordInputTitle(): Locator {
        return this.page.locator('(//label[@class="oxd-label"])[2]');
    }

    public get loginButton(): Locator {
        return this.page.locator('button[type="submit"]');
    }

    public get forgotPasswordLink(): Locator {
        return this.page.locator('//p[contains(@class, \'forgot\')]');
    }

    private get loginError(): Locator {
        return this.page.locator('//div[contains(@class, \'oxd-alert-content--error\')]');
    }

    private get loginErrorMessageText(): Locator {
        return this.page.locator('p.oxd-alert-content-text');
    }

    private get loginErrorMessageIcon(): Locator {
        return this.page.locator('i.oxd-alert-content-icon');
    }

    public constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async goto(): Promise<void> {
        await this.page.goto(this.loginUrl);
        await this.loginButton.waitFor();
    }

    public async login(username: string, password: string): Promise<void> {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    public async verifyLoginTitleVisible(): Promise<void> {
        await expect(this.loginTitle).toBeVisible();
    }

    public async verifyLoginTitleText(expectedText: string): Promise<void> {
        await expect(this.loginTitle).toHaveText(expectedText);
    }

    public async verifyInputPlaceholders(): Promise<void> {
        await expect(this.userNameInput).toHaveAttribute('placeholder', 'Username');
        await expect(this.passwordInput).toHaveAttribute('placeholder', 'Password');
    }

    public async verifySuccessfulLogin(): Promise<void> {
        await this.page.waitForURL(this.dashboardUrl, { timeout: 5000 });
        await expect(this.page).toHaveURL(this.dashboardUrl);
    }

    public async verifyFailedLogin(): Promise<void> {
        await expect(this.loginError).toBeVisible();
        await expect(this.page).toHaveURL(this.loginUrl);
    }

    public async verifyFailedLoginIcon(): Promise<void> {
        await this.verifyFailedLogin();
        await expect(this.loginErrorMessageIcon).toBeVisible();
    }

    public async verifyFailedLoginWithMessage(expectedMessage: string): Promise<void> {
        await this.verifyFailedLogin();
        await expect(this.loginErrorMessageText).toContainText(expectedMessage);
    }

    public async clickForgotPassword(): Promise<void> {
        await this.forgotPasswordLink.click();
    }
}
