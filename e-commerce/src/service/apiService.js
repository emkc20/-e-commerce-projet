import axios from 'axios';

export const apiService = async (url, data = false, methot = 'GET') => {
  const response = await axios.get(url);
  return response.data;
};

export const get = (url) => apiService(url);