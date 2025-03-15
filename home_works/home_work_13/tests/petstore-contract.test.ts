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

describe('Contract tests for the PetStore API', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

    it('Checking the contract for information about the animal', async () => {
        await provider.addInteraction({
            state: 'Animal with ID 1 exists',
            uponReceiving: 'GET request to /pet/1',
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
                    name: 'doggie', // Очікувана відповідь
                    status: 'available'
                }
            }
        });
        const response = await axios.get('http://localhost:1234/pet/1', {
            headers: { Accept: 'application/json' }
        });
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.name).toBe('doggie');
        expect(response.data.status).toBe('available');
        await provider.verify();
    });
});
