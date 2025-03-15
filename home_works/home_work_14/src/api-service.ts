import axios from 'axios';

const BASE_URL = 'http://localhost:3005';

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export const getRandomJoke = async (): Promise<Joke> => {
    const response = await axios.get<Joke>(`${BASE_URL}/random_joke`);
    return response.data;
};

export const getTenJokes = async (): Promise<Joke[]> => {
    const response = await axios.get<Joke[]>(`${BASE_URL}/jokes/ten`);
    return response.data;
};

export const getJokeById = async (id: number): Promise<Joke> => {
    const response = await axios.get<Joke>(`${BASE_URL}/jokes/${id}`);
    return response.data;
};
