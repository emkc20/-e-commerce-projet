import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '../enum/status';
import { getProductDetails } from '../service/products';


const initialState = {
  product: {},
  productStatus: STATUS.IDLE,
};

export const getProductDetail = createAsyncThunk('product', async (category) => {
  const response = await getProductDetails(category);
  return response;
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


export default productDetailSlice.reducer;