import { $, $$, browser, expect } from '@wdio/globals';
import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

export default class AmazonPage {
    private get logo(): ChainablePromiseElement {
        return $('div#nav-logo > a#nav-logo-sprites');
    }

    private get searchInput(): ChainablePromiseElement {
        return $('#twotabsearchtextbox');
    }

    private get searchButton(): ChainablePromiseElement {
        return $('#nav-search-submit-button');
    }

    private async GetsearchResults(): Promise<ChainablePromiseArray> {
        return $$('a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span');
    }

    public async verifyLogo(): Promise<void> {
        await expect(this.logo).toBeDisplayed();
        await this.logo.click();
        await expect(browser).toHaveUrl('https://www.amazon.com/ref=nav_logo');
    }

    public async searchForProduct(product: string): Promise<void> {
        await this.searchInput.setValue(product);
        await this.searchButton.click();
    }

    public async verifySearchResults(): Promise<void> {
        const results = await this.GetsearchResults();

        expect(results.length).toBeGreaterThan(0);

        await expect(results[0]).toBeDisplayed();
        const firstResultText = await results[0].getText();
        expect(firstResultText).toContain('Charger');

        for (const result of results) {
            const text = await result.getText();
            expect(text).toContain('Charger');
        }
    }
}
