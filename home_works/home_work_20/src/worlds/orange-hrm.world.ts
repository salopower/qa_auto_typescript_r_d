import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';

export class OrangeHrmWorld extends World{
    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();
    public scenarioContext: Map<string, unknown> = new Map<string, unknown> ();

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get browser(): Browser {
        return OrangeHrmWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return OrangeHrmWorld.globalContext;
    }

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
