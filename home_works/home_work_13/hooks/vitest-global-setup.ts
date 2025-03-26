import { beforeAll, afterAll } from 'vitest';
import dotenv from 'dotenv';

dotenv.config();

beforeAll(async () => {
    console.log('Global setup: Loading environment variables and initializing test data');
});

afterAll(async () => {
    console.log('Global teardown: Cleaning up test data');
});
