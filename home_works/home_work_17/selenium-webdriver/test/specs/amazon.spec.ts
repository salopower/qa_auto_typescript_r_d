import { closeBrowserInstance, getBrowserInstance } from '../../src/driver-namager';
import { AmazonPage } from '../../src/pages/amazon.page';
import { WebDriver } from 'selenium-webdriver';

describe ('Amazon Product Search', () => {
    let driver: WebDriver;
    let amazonPage: AmazonPage;

    before(async () => {
        driver = await getBrowserInstance();
        amazonPage = new AmazonPage(driver);
    });

    // beforeEach(async () => {
    //     await amazonPage.open();
    //     await amazonPage.loadCookies();
    // });

    after(async () => {
        await closeBrowserInstance(driver);
    });

    // afterEach(async () => {
    //     await amazonPage.saveCookies();
    // });

    describe('Logo Verification', () => {
        it('should verify logo is visible and clickable', async () => {
            await amazonPage.open();
            // await driver.sleep(3000);
            await amazonPage.verifyLogo();
        });
    });

    describe('Product Search', () => {
        it('should find products with "Charger" in title', async () => {
            await amazonPage.open();
            // await driver.sleep(3000);
            await amazonPage.searchForProduct('phone charger');
            // await driver.sleep(3000);
            await amazonPage.verifySearchResults();
        });
    });
});
