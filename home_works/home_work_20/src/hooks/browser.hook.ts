import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { OrangeHrmWorld } from '../worlds/orange-hrm.world.ts';
import * as dotenv from 'dotenv';

dotenv.config();

export function browserHook(): void {
    BeforeAll(async function () {
        OrangeHrmWorld.browser = await chromium.launch({headless: false});
    });

    AfterAll(async function () {
        await OrangeHrmWorld.browser.close();
    });
}
