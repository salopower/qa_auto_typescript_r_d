import { test } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
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
});
