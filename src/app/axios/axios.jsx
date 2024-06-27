import axios from 'axios';

const API_URL = 'https://job-keyword-insights-backend.onrender.com/api'
// const API_URL = 'http://127.0.0.1:5000/api'

const axiosInstance = axios.create({
  baseURL: API_URL
});

export default axiosInstance;

export const getData = async (path) => {
  try {
    const response = await axios.get(`${API_URL}/${path}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/data`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
