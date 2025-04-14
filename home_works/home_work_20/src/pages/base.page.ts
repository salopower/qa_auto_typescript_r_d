import { BrowserContext, Locator, Page } from 'playwright';
import { expect } from '@playwright/test';

export class BasePage {
    // ========== URL ==========
    protected readonly loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    protected readonly dashboardUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';

    // ========== Locators ==========
    public get userTab(): Locator {
        return this.page.locator('//span[@class="oxd-userdropdown-tab"]');
    }

    public get userTabPicture(): Locator {
        return this.page.locator('//img[@class="oxd-userdropdown-img"]');
    }

    public get userTabName(): Locator {
        return this.page.locator('//p[@class="oxd-userdropdown-name"]');
    }

    public get userTabDropdownIcon(): Locator {
        return this.page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]');
    }

    public get logOutButton(): Locator {
        return this.page.locator('//a[@class="oxd-userdropdown-link" and text()=\'Logout\']');
    }

    // ========== Constructor ==========
    public constructor(public page: Page, private context: BrowserContext) {}

    // ========== General Methods ==========
    public async logout(): Promise<void> {
        await this.userTab.click();
        await this.logOutButton.click();
    }

    public async isUserLoggedIn(): Promise<void> {
        await this.page.waitForURL(this.dashboardUrl, { timeout: 5000 });
        await expect(this.userTab).toBeVisible();
        await expect(this.userTabPicture).toBeVisible();
        await expect(this.userTabName).toBeVisible();
        await expect(this.userTabDropdownIcon).toBeVisible();
    }
}
