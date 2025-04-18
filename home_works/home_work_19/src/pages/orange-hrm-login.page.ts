import { BrowserContext, expect, Locator, Page } from '@playwright/test';

export class OrangeHRMLoginPage {
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

    private readonly loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    private readonly dashboardUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';

    public constructor(public page: Page, private context: BrowserContext) {}

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

    public async verifyHeaderSection(): Promise<void> {
        await expect(this.logo).toBeVisible();
        await this.verifyLoginTitleVisible();
        await this.verifyLoginTitleText('Login');
    }

    public async verifyCredentialsForm(): Promise<void> {
        await this.verifyInputPlaceholders();
        await expect(this.userNameInputTitle).toHaveText('Username');
        await expect(this.passwordInputTitle).toHaveText('Password');
    }

    public async verifyActionElements(): Promise<void> {
        await expect(this.loginButton).toBeVisible();
        await expect(this.loginButton).toHaveText('Login');
        await expect(this.forgotPasswordLink).toBeVisible();
        await expect(this.forgotPasswordLink).toHaveText('Forgot your password?');
    }
}
