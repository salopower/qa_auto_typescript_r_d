import {BeforeAll } from '@cucumber/cucumber';
import { OrangeHrmWorld } from '../worlds/orange-hrm.world.ts';

export function globalContextHook(): void {
    BeforeAll(async function () {
        OrangeHrmWorld.globalContext = new Map();
    });
}
