import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constant/config.js";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

// Automatically attach API key
axiosInstance.interceptors.request.use((config) => {
    config.params = { ...config.params, api_key: API_KEY };

    return config;
});

// Response handling
axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;