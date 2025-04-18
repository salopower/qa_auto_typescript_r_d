import AmazonPage from '../src/pages/amazon.page';

describe('Amazon Tests', () => {
    const amazonPage = new AmazonPage();

    describe('Logo Verification', () => {
        it('should verify logo is visible and clickable', async () => {
            await amazonPage.verifyLogo();
        });
    });

    // describe('Product Search', () => {
    //     it('should find products with "Charger" in title', async () => {
    //         await amazonPage.searchForProduct('phone charger');
    //         await amazonPage.verifySearchResults();
    //     });
    // });
});
