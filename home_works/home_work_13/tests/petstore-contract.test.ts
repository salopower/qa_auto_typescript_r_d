import { Pact } from '@pact-foundation/pact';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import axios from 'axios';

const provider = new Pact({
    consumer: 'Frontend',
    provider: 'PetstoreAPI',
    port: 1234,
    log: './logs/pact.log',
    dir: './pacts',
    logLevel: 'info'
});

describe('Consumer contract tests for PetStore API', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

    it('should correctly handle pet data response', async () => {
        await provider.addInteraction({
            state: 'Pet with ID 1 exists',
            uponReceiving: 'GET request for pet with ID 1',
            withRequest: {
                method: 'GET',
                path: '/pet/1',
                headers: { Accept: 'application/json' }
            },
            willRespondWith: {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: {
                    id: 1,
                    name: 'doggie',
                    status: 'available'
                }
            }
        });
        const response = await axios.get('http://localhost:1234/pet/1', {
            headers: { Accept: 'application/json' }
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({
            id: 1,
            name: 'doggie',
            status: 'available'
        });
        await provider.verify();
    });
});
