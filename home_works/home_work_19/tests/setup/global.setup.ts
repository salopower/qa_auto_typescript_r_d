import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default async function globalSetup(): Promise<void> {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await browser.close();
}
