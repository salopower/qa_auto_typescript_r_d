import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import dotenv from 'dotenv';
import { catApi } from '../src/api';

dotenv.config();

const API_KEY = process.env.CAT_API_KEY || '';
const HEADERS = { 'x-api-key': API_KEY, 'Content-Type': 'application/json' };
const sub_id = 'my-user-1234';

describe('Integration tests for The Cat API', () => {
    let testImage: { id: string; url: string };
    let voteId: string;
    let favouriteId: string;

    beforeAll(async () => {
        const images = await catApi.getRandomCatImage();
        if (!images || images.length === 0) {
            throw new Error('Failed to fetch a cat image for testing');
        }
        testImage = images[0];
    });

    afterAll(async () => {
        if (voteId) {
            await fetch(`${catApi.baseUrl}/votes/${voteId}`, {
                method: 'DELETE',
                headers: HEADERS
            });
        }
        if (favouriteId) {
            await fetch(`${catApi.baseUrl}/favourites/${favouriteId}`, {
                method: 'DELETE',
                headers: HEADERS
            });
        }
    });

    it('should get random cat image with all required fields', async () => {
        expect(testImage).toHaveProperty('id');
        expect(testImage).toHaveProperty('url');
        expect(testImage.url).toMatch(/^https:\/\/.*thecatapi\.com\/images\/.+\.(gif|jpg|png)$/);
    });

    it('should vote for an image and verify vote was registered', async () => {
        const voteResponse = await fetch(`${catApi.baseUrl}/votes`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                image_id: testImage.id,
                sub_id,
                value: 1
            })
        });
        expect(voteResponse.status).toBe(201);

        const votesResponse = await fetch(`${catApi.baseUrl}/votes?sub_id=${sub_id}`, {
            headers: HEADERS
        });
        const votes = await votesResponse.json();

        const ourVote = votes.find((v: any) => v.image_id === testImage.id);
        expect(ourVote).toBeDefined();
        expect(ourVote.value).toBe(1);
        voteId = ourVote.id;
    });

    it('should add image to favorites and verify integration', async () => {
        const favResponse = await fetch(`${catApi.baseUrl}/favourites`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                image_id: testImage.id,
                sub_id
            })
        });
        expect(favResponse.status).toBe(200);
        const favData = await favResponse.json();
        favouriteId = favData.id;
        const checkResponse = await fetch(`${catApi.baseUrl}/favourites?sub_id=${sub_id}`, {
            headers: HEADERS
        });
        const favorites = await checkResponse.json();

        const ourFavorite = favorites.find((f: any) => f.image_id === testImage.id);
        expect(ourFavorite).toBeDefined();
        expect(ourFavorite.image.url).toBe(testImage.url); // Проверяем интеграцию через URL
    });
});
