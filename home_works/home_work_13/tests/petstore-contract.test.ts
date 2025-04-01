import { Pact, Verifier } from '@pact-foundation/pact';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import path from 'path';
import axios from 'axios';

const consumerProvider = new Pact({
    consumer: 'Frontend',
    provider: 'PetstoreAPI',
    port: 1234,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'info'
});

const expectedPetResponse = {
    id: 1,
    category: {
        id: 1,
        name: 'cat'
    },
    name: 'dog',
    photoUrls: [],
    tags: [],
    status: 'sold'
};

describe('PetStore API Contract Tests', () => {
    describe('Consumer Side Tests', () => {
        beforeAll(async () => await consumerProvider.setup());
        afterAll(async () => await consumerProvider.finalize());

        it('should correctly handle pet data response', async () => {
            // Налаштовуємо мок-взаємодію
            await consumerProvider.addInteraction({
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
                    body: expectedPetResponse
                }
            });

            const response = await axios.get('http://localhost:1234/pet/1', {
                headers: { Accept: 'application/json' }
            });

            expect(response.status).toBe(200);
            expect(response.data).toEqual(expectedPetResponse);

            await consumerProvider.verify();
        });
    });

    describe('Provider Verification', () => {
        it('should verify the provider against the contract', async () => {
            const verifier = new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io/v2',
                pactUrls: [path.resolve(process.cwd(), 'pacts', 'Frontend-PetstoreAPI.json')],
                publishVerificationResult: false,
                providerVersion: '1.0.0'
            });

            try {
                await verifier.verifyProvider();
                console.log('Provider verification successful!');
            } catch (error) {
                console.error('Provider verification failed:', error);
                throw error;
            }
        });
    });
});
