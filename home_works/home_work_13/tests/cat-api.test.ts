import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import dotenv from 'dotenv';
import { catApi } from '../src/api';

dotenv.config();

const API_KEY = process.env.CAT_API_KEY || '';

if (!API_KEY) {
    throw new Error('API Key is missing! Please add CAT_API_KEY to your .env file.');
}

const HEADERS = { 'x-api-key': API_KEY, 'Content-Type': 'application/json' };

let imageId = '';
let favouriteId = '';
const sub_id = 'my-user-1234';

describe('Integration tests for The Cat API', () => {
    beforeAll(async () => {
        const response = await catApi.getRandomCatImage();
        if (!response || response.length === 0) {
            throw new Error('Failed to fetch a cat image for testing');
        }
        imageId = response[0].id;
    });

    afterAll(async () => {
        // Clean up after tests
        if (favouriteId) {
            await fetch(`${catApi.baseUrl}/favourites/${favouriteId}`, {
                method: 'DELETE',
                headers: HEADERS
            });
        }
    });

    it('Getting an image of a cat', async () => {
        const response = await catApi.getRandomCatImage();
        expect(response.length).toBeGreaterThan(0);
        expect(response[0].id).toBeTypeOf('string');
        expect(response[0].url).toMatch(/^https:\/\/.*thecatapi\.com\/images\/.+\.(gif|jpg|png)$/);
        expect(response[0].width).toBeTypeOf('number');
        expect(response[0].height).toBeTypeOf('number');
        if (response[0].breeds) {
            expect(response[0].breeds).toBeInstanceOf(Array);
        }
    });

    it('Voting for an image', async () => {
        const response = await fetch(`${catApi.baseUrl}/votes`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ image_id: imageId, sub_id: sub_id, value: 1 })
        });
        expect(response.status).toBe(201);
    });

    it('Adding an image to favorites', async () => {
        const response = await fetch(`${catApi.baseUrl}/favourites`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ image_id: imageId })
        });
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data).toHaveProperty('id');
        favouriteId = data.id;
    });

    it('Checking if the image was added to favorites', async () => {
        const response = await fetch(`${catApi.baseUrl}/favourites`, {
            headers: HEADERS
        });
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        const favourite = data.find((fav: { id: string }) => fav.id === favouriteId);
        expect(favourite).toBeDefined();
    });

    it('Removing an image from favorites', async () => {
        const response = await fetch(`${catApi.baseUrl}/favourites/${favouriteId}`, {
            method: 'DELETE',
            headers: HEADERS
        });
        expect(response.status).toBe(200);
    });
});
