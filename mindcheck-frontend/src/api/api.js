import axios from 'axios';
import sampleQuestions from '../data/sampleQuestions.json';
import sampleResources from '../data/sampleResources.json';
import quotes from '../data/quotes.json';

// Create axios instance for future API integration
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor for adding auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('auth_token');
            window.location.href = '/auth';
        }
        return Promise.reject(error);
    }
);

// API Functions (currently using local data, structured for backend integration)

export const fetchQuestions = async () => {
    try {
        // TODO: Replace with actual API call when backend is ready
        // const response = await api.get('/questions');
        // return response.data;

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return sampleQuestions;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
};

export const submitQuizResult = async (resultData) => {
    try {
        // TODO: Replace with actual API call when backend is ready
        // const response = await api.post('/quiz/submit', resultData);
        // return response.data;

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));
        return { success: true, data: resultData };
    } catch (error) {
        console.error('Error submitting quiz result:', error);
        throw error;
    }
};

export const fetchUserHistory = async () => {
    try {
        // TODO: Replace with actual API call when backend is ready
        // const response = await api.get('/user/history');
        // return response.data;

        // For now, return empty array (data comes from localStorage)
        await new Promise(resolve => setTimeout(resolve, 300));
        return [];
    } catch (error) {
        console.error('Error fetching user history:', error);
        throw error;
    }
};

export const fetchResources = async () => {
    try {
        // TODO: Replace with actual API call when backend is ready
        // const response = await api.get('/resources');
        // return response.data;

        await new Promise(resolve => setTimeout(resolve, 400));
        return sampleResources;
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
};

export const fetchRandomQuote = async () => {
    try {
        // TODO: Replace with actual API call when backend is ready
        // const response = await api.get('/quotes/random');
        // return response.data;

        const randomIndex = Math.floor(Math.random() * quotes.length);
        await new Promise(resolve => setTimeout(resolve, 200));
        return quotes[randomIndex];
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw error;
    }
};

// Auth API functions (for future use)
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        if (response.data.token) {
            localStorage.setItem('auth_token', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        if (response.data.token) {
            localStorage.setItem('auth_token', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};

export const logoutUser = () => {
    localStorage.removeItem('auth_token');
    window.location.href = '/';
};

export default api;
