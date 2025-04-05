import { test, expect } from '@playwright/test';
import { AmazonPage } from '../src/pages/amazon.page';

test.describe('Amazon Tests', () => {
    let amazonPage: AmazonPage;

    test.beforeEach(async ({ page }) => {
        amazonPage = new AmazonPage(page);
        await amazonPage.open();
    });

    test('Logo Verification', async () => {
        await amazonPage.verifyLogo();
    });

    test('Product Search', async () => {
        await amazonPage.searchForProduct('phone charger');
        await amazonPage.verifySearchResults();
    });
    //Example of Shadow DOM
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

    //Example of iFrame
    test('iFrame Example', async ({ page }) => {
        await page.goto('https://www.amazon.com/gp/video/storefront');

        const iframeElement = page.frameLocator('iframe[name="ape_Detail_hero_iframe"]');

        await expect(iframeElement.getByText('Included with Prime')).toBeVisible({
            timeout: 10000
        });
    });
});
