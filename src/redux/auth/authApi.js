import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const loginApi = async (username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
