import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { OrangeHrmWorld } from './worlds/orange-hrm.world.ts';


setDefaultTimeout(999999999);
setWorldConstructor(OrangeHrmWorld);
