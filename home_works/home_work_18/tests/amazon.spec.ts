import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home-page-amazon.page';
import { SearchResultsPage } from '../src/pages/search-results.page';

test.describe('Amazon Tests', () => {
    let homePage: HomePage;
    let searchResultsPage: SearchResultsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
    });

    test('Logo Verification', async () => {
        await homePage.verifyLogo();
    });

    test('Product Search', async ({ page }) => {
        await homePage.searchForProduct('phone charger');
        searchResultsPage = new SearchResultsPage(page);
        await searchResultsPage.verifySearchResults('Charger');
    });

    test('Shadow DOM Example', async ({ page }) => {
        await page.goto('https://www.amazon.com/gp/video/storefront');
        const shadowHost = page.locator('div[data-component-type="dv-web-player"]').first();
        const shadowRoot = await shadowHost.evaluateHandle(el => el.shadowRoot);

        if (shadowRoot) {
            const shadowElement = await shadowRoot.evaluate((root: ShadowRoot) =>
                root.querySelector('.player-container')
            );
            expect(shadowElement).not.toBeNull();
            await expect(page.getByText('Loading video player').first()).toBeVisible();
        } else {
            throw new Error('Shadow root not found');
        }
    });

    test('iFrame Example', async ({ page }) => {
        await page.goto('https://www.amazon.com/gp/video/storefront');
        const iframeElement = page.frameLocator('iframe[name="ape_Detail_hero_iframe"]');
        await expect(iframeElement.getByText('Included with Prime')).toBeVisible({
            timeout: 10000
        });
    });
});
