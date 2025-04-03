import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { expect } from 'chai';

describe('Puppeteer Amazon Test', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: { width: 1200, height: 800 },
            args: [
                '--disable-blink-features=AutomationControlled',
                '--disable-infobars',
                '--window-size=1366,768'
            ]
        });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
        await page.setJavaScriptEnabled(true);
        await page.setDefaultNavigationTimeout(60000);

        await page.goto('https://www.amazon.com', {
            waitUntil: 'networkidle2',
            timeout: 30000
        });
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should verify the Amazon logo is present and clickable', async () => {
        const logoSelector = 'div#nav-logo > a#nav-logo-sprites';
        const logo = await page.waitForSelector(logoSelector, { visible: true, timeout: 15000 });
        expect(logo).not.to.be.null;

        const logoHref = await page.$eval(logoSelector, el => el.getAttribute('href'));
        expect(logoHref).to.include('ref=nav_logo');

        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle2' }),
            logo!.click()
        ]);

        const currentUrl = page.url();
        expect(currentUrl).to.match(/https:\/\/www\.amazon\.com(\/.*)?/);

        const pageTitle = await page.title();
        expect(pageTitle).to.include('Amazon.com');
    });

    it('should perform a basic product search and verify results', async () => {
        await page.type('#twotabsearchtextbox', 'phone charger', { delay: 100 });

        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle2' }),
            page.click('#nav-search-submit-button')
        ]);

        await page.waitForSelector('.s-result-item', { timeout: 15000 });

        const resultSelector = 'a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span';

        const firstResult = await page.$eval(resultSelector, el => el.textContent);
        expect(firstResult).to.include('Charger');

        const allResults = await page.$$eval(resultSelector, elements =>
            elements.slice(0, 5).map(el => el.textContent)
        );

        allResults.forEach(text => {
            expect(text).to.include('Charger');
        });

        const resultElements = await page.$$(resultSelector);
        for (let i = 0; i < Math.min(resultElements.length, 5); i++) {
            const text = await resultElements[i].evaluate(el => el.textContent);
            expect(text).to.include('Charger');
        }
    });
});
