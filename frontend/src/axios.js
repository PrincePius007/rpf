import axios from 'axios';

// Create an instance of axios
const API = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel backend URL
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getCSRFToken = async () => {
  await axios.get('http://localhost:8000/sanctum/csrf-cookie');
};

export default API; // ✅ This is the important fix
