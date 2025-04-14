import { WebDriver, By, until, WebElement } from 'selenium-webdriver';
import { expect } from 'chai';
import * as fs from 'node:fs';

export class AmazonPage {
    public constructor(private readonly driver: WebDriver) {}

    private get logo(): Promise<WebElement> {
        return this.driver.findElement(By.css('div#nav-logo > a#nav-logo-sprites'));
    }

    private get searchInput(): Promise<WebElement> {
        return this.driver.findElement(By.id('twotabsearchtextbox'));
    }

    private get searchButton(): Promise<WebElement> {
        return this.driver.findElement(By.id('nav-search-submit-button'));
    }

    private async getSearchResults(): Promise<WebElement[]> {
        return this.driver.findElements(By.css('a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span'));
    }

    public async open(): Promise<void> {
        await this.driver.get('https://www.amazon.com');
        await this.driver.manage().window().maximize();
    }

    public async verifyLogo(): Promise<void> {
        await this.driver.wait(until.elementLocated(By.css('div#nav-logo > a#nav-logo-sprites')), 10000);
        const logo = await this.logo;
        await logo.click();
        await this.driver.wait(until.urlIs('https://www.amazon.com/ref=nav_logo'), 5000);
    }

    public async searchForProduct(product: string): Promise<void> {
        await this.driver.wait(until.elementLocated(By.id('twotabsearchtextbox')), 5000);
        const input = await this.searchInput;
        await input.sendKeys(product);
        const button = await this.searchButton;
        await button.click();
    }

    public async verifySearchResults(): Promise<void> {
        await this.driver.wait(until.elementLocated(By.css('a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span')), 10000);
        const results = await this.getSearchResults();

        expect(results.length).to.be.greaterThan(0);

        const firstResult = results[0];
        const firstResultText = await firstResult.getText();
        expect(firstResultText).to.contain('Charger');

        for (const result of results) {
            const text = await result.getText();
            expect(text).to.contain('Charger');
        }
    }

    public async saveCookies(): Promise<void> {
        const cookies = await this.driver.manage().getCookies();
        fs.writeFileSync('./cookies.json', JSON.stringify(cookies));
    }

    public async loadCookies(): Promise<void> {
        if (fs.existsSync('./cookies.json')) {
            const cookies = JSON.parse(fs.readFileSync('./cookies.json', 'utf-8'));
            for (const cookie of cookies) {
                await this.driver.manage().addCookie(cookie);
            }
        }
    }
}
