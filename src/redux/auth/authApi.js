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


export const registerApi = async (name, email, username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/register`, {
            name,
            email,
            username,
            password
        })
        return response.data
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
}