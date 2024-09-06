import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductCategories } from '../service/products';


const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk('category', async () => {
  const slugName = 'categories';
  const response = await getProductCategories(slugName);
  return response;
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