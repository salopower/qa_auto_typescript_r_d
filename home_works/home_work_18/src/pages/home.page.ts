import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    private readonly logo: Locator;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('div#nav-logo > a#nav-logo-sprites');
        this.searchInput = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
    }

    public async open(): Promise<void> {
        await this.page.goto('https://www.amazon.com/');
    }

    public async verifyLogo(): Promise<void> {
        await expect(this.logo).toBeVisible();
        await this.logo.click();
        await expect(this.page).toHaveURL(/.*ref=nav_logo/);
    }

    public async searchForProduct(product: string): Promise<void> {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }
}
