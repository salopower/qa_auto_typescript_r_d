import { Given, When, Then } from '@cucumber/cucumber';
import { OrangeHrmWorld } from '../worlds/orange-hrm.world';
import { OrangeHRMLoginPage } from '../pages/orange-hrm-login.page.ts';
import { BasePage } from '../pages/base.page.ts';

Given(/^user is (not )?logged in$/, async function (this: OrangeHrmWorld, not:string) {
    const isLoggedIn = !not;
    const loginPage = new OrangeHRMLoginPage(this.page, this.context);
    const basePage = new BasePage(this.page, this.context);

    await loginPage.goto();

    if (isLoggedIn) {
        if (!this.page.url().includes('dashboard')) {
            await loginPage.login(
                process.env.TEST_USERNAME as string,
                process.env.TEST_PASSWORD as string
            );
            await loginPage.verifySuccessfulLogin();
        }
    } else {
        if (this.page.url().includes('dashboard')) {
            await basePage.logout();
            await loginPage.verifyLoginTitleVisible();
        }
    }
});

When('user logs in with username {string} and password {string}',
    async function (this: OrangeHrmWorld, username: string, password: string) {
        const loginPage = new OrangeHRMLoginPage(this.page, this.context);
        await loginPage.login(username, password);
    });

When('user logs in with valid credentials', async function (this: OrangeHrmWorld) {
    const loginPage = new OrangeHRMLoginPage(this.page, this.context);
    await loginPage.login(
        process.env.TEST_USERNAME as string,
        process.env.TEST_PASSWORD as string
    );
});

Then('Dashboard page is displayed', async function (this: OrangeHrmWorld) {
    const basePage = new BasePage(this.page, this.context);
    await basePage.isUserLoggedIn();
});

Then('login error message should be shown with text {string}',
    async function (this: OrangeHrmWorld, errorMessage: string) {
        const loginPage = new OrangeHRMLoginPage(this.page, this.context);
        await loginPage.verifyFailedLoginWithMessage(errorMessage);
    });
