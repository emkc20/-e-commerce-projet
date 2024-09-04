import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '../utils/status';
import axios from 'axios';


const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productsDetail: [],
  productsDetailStatus: STATUS.IDLE,
};

export const getproducts = createAsyncThunk('category', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getproducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });

    builder.addCase(getproducts.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.productsStatus = STATUS.SUCCESS;

    });
  },
});

export default productsSlice.reducer;