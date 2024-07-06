import axios from 'axios';

const API_URL = 'https://job-keyword-insights-backend.onrender.com/api'
// const API_URL = 'http://127.0.0.1:5000/api'

const axiosInstance = axios.create({
  baseURL: API_URL
});

export default axiosInstance;
