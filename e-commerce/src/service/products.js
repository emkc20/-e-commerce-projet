import { get } from './apiService';

const apiUrl = process.env.REACT_APP_API_URL;

export const getProduct = () => get(`${apiUrl}`);
export const getProductDetails = (category) => get(`${apiUrl}/${category}`);
export const getProductCategory = (category) => get(`${apiUrl}/category/${category}`);
export const getProductCategories = (category) => get(`${apiUrl}/${category}`);