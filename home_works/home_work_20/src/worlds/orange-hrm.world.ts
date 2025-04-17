import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { BasePage } from '../pages/base.page.ts';
import { OrangeHRMLoginPage } from '../pages/orange-hrm-login.page.ts';

export class OrangeHrmWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown>();
    public scenarioContext: Map<string, unknown> = new Map<string, unknown>();

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    private _basePage: BasePage | null = null;
    private _loginPage: OrangeHRMLoginPage | null = null;

    public get browser(): Browser {
        return OrangeHrmWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return OrangeHrmWorld.globalContext;
    }

    public get basePage(): BasePage {
        if (!this._basePage) {
            this._basePage = new BasePage(this.page, this.context);
        }
        return this._basePage;
    }

    public get loginPage(): OrangeHRMLoginPage {
        if (!this._loginPage) {
            this._loginPage = new OrangeHRMLoginPage(this.page, this.context);
        }
        return this._loginPage;
    }

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
