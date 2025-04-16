import { expect, Locator, Page } from '@playwright/test';

export class SearchResultsPage {
    private readonly page: Page;
    private readonly searchResults: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.searchResults = page.locator('a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span');
    }

    public async verifySearchResults(expectedText: string): Promise<void> {
        await expect(this.searchResults.first()).toBeVisible();
        const count = await this.searchResults.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < Math.min(count, 5); i++) {
            const text = await this.searchResults.nth(i).textContent();
            expect(text).toContain(expectedText);
        }
    }
}
