// api.js
import axios from 'axios';
import { toaster } from './toastify/toaster';

const instance = axios.create({
  baseURL: 'http://localhost:3002/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Example: Retrieve token from Redux state
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      toaster.error('Session Expired. Please Login again');
      localStorage.clear();
      window.location.href = "/signin";
      // Handle unauthorized error (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default instance;
