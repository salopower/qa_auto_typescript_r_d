import { AxiosError } from 'axios';
import { describe, it, expect } from 'vitest';
import { getRandomJoke, getTenJokes, getJokeById } from '../src/api-service';

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

describe('API Tests', () => {
    it('should fetch a random joke', async () => {
        const joke = await getRandomJoke();
        expect(joke).toHaveProperty('id');
        expect(joke).toHaveProperty('type');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');
    });

    it('should fetch ten jokes', async () => {
        const jokes = await getTenJokes();
        expect(jokes).toHaveLength(10);
        jokes.forEach((joke: Joke) => {
            expect(joke).toHaveProperty('id');
            expect(joke).toHaveProperty('type');
            expect(joke).toHaveProperty('setup');
            expect(joke).toHaveProperty('punchline');
        });
    });

    it('should fetch a joke by id', async () => {
        const joke = await getJokeById(1);
        expect(joke).toHaveProperty('id', 1);
        expect(joke).toHaveProperty('type');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');
    });

    it('should return 404 for non-existent joke', async () => {
        try {
            await getJokeById(9999);
        } catch (error) {
            const axiosError = error as AxiosError;
            expect(axiosError.response?.status).toBe(404);
        }
    });

    it('should fetch jokes of a specific type', async () => {
        const jokes = await getTenJokes();
        const programmingJokes = jokes.filter((joke: Joke) => joke.type === 'programming');
        expect(programmingJokes.length).toBeGreaterThan(0);
    });
});
