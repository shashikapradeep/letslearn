import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import env_configs from '../configs/env_configs';

const axiosInstance = axios.create({
    baseURL: env_configs.BACKEND.API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            const status = error.response.status;

            if (status === 500) {
                Toast.show({
                    type: 'error',
                    text1: 'Server Error',
                    text2: 'An unexpected error occurred. Please try again later.',
                });
            }

            if (status === 401) {
                Toast.show({
                    type: 'error',
                    text1: 'Authentication Error',
                    text2: 'Please login again to continue.',
                });
                AsyncStorage.removeItem('authToken');
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
