import { Given, When, Then } from '@cucumber/cucumber';
import { OrangeHrmWorld } from '../worlds/orange-hrm.world';

Given(/^user is (not )?logged in$/, async function (this: OrangeHrmWorld, not: string) {
    const isLoggedIn = !not;
    await this.loginPage.goto();

    if (isLoggedIn) {
        if (!this.page.url().includes('dashboard')) {
            await this.loginPage.login(
                process.env.TEST_USERNAME as string,
                process.env.TEST_PASSWORD as string
            );
            await this.loginPage.verifySuccessfulLogin();
        }
    } else {
        if (this.page.url().includes('dashboard')) {
            await this.loginPage.logout();
            await this.loginPage.verifyLoginTitleVisible();
        }
    }
});

When('user logs in with username {string} and password {string}',
    async function (this: OrangeHrmWorld, username: string, password: string) {
        await this.loginPage.login(username, password);
    });

When('user logs in with valid credentials', async function (this: OrangeHrmWorld) {
    await this.loginPage.login(
        process.env.TEST_USERNAME as string,
        process.env.TEST_PASSWORD as string
    );
});

Then('Dashboard page is displayed', async function (this: OrangeHrmWorld) {
    await this.loginPage.isUserLoggedIn();
});

Then('login error message should be shown with text {string}',
    async function (this: OrangeHrmWorld, errorMessage: string) {
        await this.loginPage.verifyFailedLoginWithMessage(errorMessage);
    });
