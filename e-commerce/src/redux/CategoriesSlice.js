import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk('category', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;