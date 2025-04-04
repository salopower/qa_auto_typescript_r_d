import { Browser, WebDriver, Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export async function getBrowserInstance(): Promise<WebDriver> {
    const options = new chrome.Options();
    options
        .addArguments(
            '--disable-blink-features=AutomationControlled',
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            '--disable-infobars',
            '--start-maximized',
            '--disable-extensions'
            // '--headless=new',
            // '--disable-gpu'
            // '--no-sandbox',
            // '--disable-dev-shm-usage'
        )
        .windowSize({ width: 1920, height: 1080 });

    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();
    await driver.manage().window().maximize();
    //driver.manage().setTimeouts({ implicit: 10000 }); // do not mix implicit and explicit wait as it could lead to unexpected behavior
    return driver;
}

export async function closeBrowserInstance(driver: WebDriver): Promise<void> {
    await driver.quit();
}

