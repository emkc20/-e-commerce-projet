import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { STATUS } from '../utils/status';


const initialState = {
  product: {},
  productStatus: STATUS.IDLE,

};

export const getProductDetail = createAsyncThunk('product', async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
});

const productDetailSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.pending, (state, action) => {
      state.productStatus = STATUS.LOADING;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.product = action.payload;
      state.productStatus = STATUS.SUCCESS;
    });
  },
});


//export const { getProductDetail } = productDetailSlice.actions;

export default productDetailSlice.reducer;