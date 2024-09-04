import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './CategoriesSlice';
import productsSlice from './ProductsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  },
});