import axios from 'axios';

const PETSTORE_API_BASE = 'https://petstore.swagger.io/v2';
const CAT_API_BASE = 'https://api.thecatapi.com/v1';

export const catApi = {
    baseUrl: CAT_API_BASE,

    getRandomCatImage: async () => {
        const response = await axios.get(`${CAT_API_BASE}/images/search`);
        return response.data;
    },

    voteForImage: async (imageId: string, subId: string, value: number) => {
        const response = await axios.post(`${CAT_API_BASE}/votes`, {
            image_id: imageId,
            sub_id: subId,
            value
        }, {
            headers: { 'x-api-key': process.env.CAT_API_KEY }
        });
        return response.data;
    },

    getVotes: async (subId: string) => {
        const response = await axios.get(`${CAT_API_BASE}/votes?sub_id=${subId}`, {
            headers: { 'x-api-key': process.env.CAT_API_KEY }
        });
        return response.data;
    },

    addFavorite: async (imageId: string, subId: string) => {
        const response = await axios.post(`${CAT_API_BASE}/favourites`, {
            image_id: imageId,
            sub_id: subId
        }, {
            headers: { 'x-api-key': process.env.CAT_API_KEY }
        });
        return response.data;
    },

    getFavorites: async (subId: string) => {
        const response = await axios.get(`${CAT_API_BASE}/favourites?sub_id=${subId}`, {
            headers: { 'x-api-key': process.env.CAT_API_KEY }
        });
        return response.data;
    }
};

export const petstoreApi = {
    getPetById: async (id: number) => {
        const response = await axios.get(`${PETSTORE_API_BASE}/pet/${id}`, {
            headers: { Accept: 'application/json' }
        });
        return response.data;
    },
    createPet: async (petData: any) => {
        const response = await axios.post(`${PETSTORE_API_BASE}/pet`, petData);
        return response.data;
    }
};
