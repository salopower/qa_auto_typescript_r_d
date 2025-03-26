import axios from 'axios';

const PETSTORE_API_BASE = 'https://petstore.swagger.io/v2';

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
