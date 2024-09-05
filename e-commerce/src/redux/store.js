import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './CategoriesSlice';
import productsSlice from './ProductsSlice';
import productDetailSlice from './ProductDetailSlice';
import basketSlice from './BasketSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    productDetail: productDetailSlice,
    basketSlice,
  },
});