import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '../utils/status';
import axios from 'axios';


const initialState = {
  products: [],
  initialProducts: [],
  productsStatus: STATUS.IDLE,
  productsDetail: [],
  productsDetailStatus: STATUS.IDLE,
  sortBy: 'inc',
};

export const getproducts = createAsyncThunk('getProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const productsCategoryFilter = createAsyncThunk('productsCategoryFilter', async (category) => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.products = state.initialProducts;
      const priceStort = state.products.filter(item => item.price >= action.payload.min && item.price <= action.payload.max);
      state.products = priceStort;
    },
    setRatingStar: (state, action) => {
      state.products = state.initialProducts;
      const priceStort = state.products.filter(item => item.rating.rate >= 4.5);
      state.products = priceStort;
    },
    setSortBy: (state, action) => {
      console.log('sss', action);
      state.products = state.initialProducts;
      state.sortBy = action.payload;
      const priceStort = state.products.slice().sort((a, b) => {
        if (state.sortBy === 'inc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

      state.products = priceStort;

    },
  },
  extraReducers: (builder) => {

    builder.addCase(getproducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });

    builder.addCase(getproducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.initialProducts = action.payload;
      state.productsStatus = STATUS.SUCCESS;
      console.log('state.initialProducts', state.initialProducts);
    });

    builder.addCase(productsCategoryFilter.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });

    builder.addCase(productsCategoryFilter.fulfilled, (state, action) => {
      state.initialProducts = action.payload;
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCESS;
    });
  },
});

export const { setPriceRange, setRatingStar, setSortBy } = productsSlice.actions;
export default productsSlice.reducer;