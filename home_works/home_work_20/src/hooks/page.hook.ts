import { After, Before } from '@cucumber/cucumber';
import { OrangeHrmWorld } from '../worlds/orange-hrm.world.ts';

export function pageHook(): void {
    Before(async function(this: OrangeHrmWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: OrangeHrmWorld) {
        await this.page.close();
    });
}
