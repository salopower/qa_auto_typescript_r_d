import axios from 'axios';

const CAT_API_BASE = 'https://api.thecatapi.com/v1';
const PETSTORE_API_BASE = 'https://petstore.swagger.io/v2';

export const catApi = {
    baseUrl: CAT_API_BASE,
    getRandomCatImage: async () => {
        const response = await axios.get(`${CAT_API_BASE}/images/search`);
        return response.data;
    }
};

export const petstoreApi = {
    baseUrl: PETSTORE_API_BASE,
    getPetById: async (id: number) => {
        const response = await axios.get(`${PETSTORE_API_BASE}/pet/${id}`);
        return response.data;
    }
};
