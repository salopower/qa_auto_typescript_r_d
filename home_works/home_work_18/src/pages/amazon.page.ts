import { expect, Locator, Page } from '@playwright/test';

export class AmazonPage {
    private readonly page: Page;
    private readonly logo: Locator;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    private readonly searchResults: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('div#nav-logo > a#nav-logo-sprites');
        this.searchInput = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.searchResults = page.locator('a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span');
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

    public async verifySearchResults(): Promise<void> {
        await expect(this.searchResults.first()).toBeVisible();
        const count = await this.searchResults.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < Math.min(count, 5); i++) {
            const text = await this.searchResults.nth(i).textContent();
            expect(text).toContain('Charger');
        }
    }
}
