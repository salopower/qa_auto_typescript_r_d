import { After, Before } from '@cucumber/cucumber';
import { OrangeHrmWorld } from '../worlds/orange-hrm.world.ts';

export function browserContextHook(): void {
    Before(async function(this: OrangeHrmWorld) {
        this.context = await OrangeHrmWorld.browser.newContext();
    });

    After(async function(this: OrangeHrmWorld) {
        await this.context.close();
    });
}
