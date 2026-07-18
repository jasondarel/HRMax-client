import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCountries = async () => {
    try {
        const response = await apiClient.get('/master/countries');
        return response.data.data.countries; // Matches the { data: { countries: [...] } } structure from backend response
    } catch (error) {
        console.error("Error fetching countries:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to fetch countries: ${error.response?.statusText || error.message}`);
        }
        throw error;
    }
};

export const registerUser = async (payload: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneInformation: {
        countryCode: string;
        phoneNumber: string;
    };
}) => {
    try {
        const response = await apiClient.post('/auth/register', payload);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || `Registration failed: ${error.response?.statusText || error.message}`);
        }
        throw error;
    }
};

export const verifyRegisterOTP = async (payload: { email: string; otpCode: string }) => {
    try {
        const response = await apiClient.post('/auth/verify/register-otp', payload);
        return response.data;
    } catch (error) {
        console.error("Error verifying OTP:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || `OTP verification failed: ${error.response?.statusText || error.message}`);
        }
        throw error;
    }
};

export const loginUser = async (payload: { email: string; password: string; }) => {
    try {
        const response = await apiClient.post('/auth/login', payload);
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || `Login failed: ${error.response?.statusText || error.message}`);
        }
        throw error;
    }
};
