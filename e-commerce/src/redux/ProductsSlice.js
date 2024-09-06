import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '../enum/status';
import { getProduct, getProductCategory } from '../service/products';
import { ProductQuantity } from '../enum/ProductQuantity';


const initialState = {
  products: [],
  initialProducts: [],
  productsStatus: STATUS.IDLE,
  productsDetail: [],
  productsDetailStatus: STATUS.IDLE,
  sortBy: ProductQuantity.INC,
};

export const getproducts = createAsyncThunk('getProducts', async () => {
  const response = await getProduct();
  return response;
});

export const productsCategoryFilter = createAsyncThunk('productsCategoryFilter', async (category) => {
  const response = await getProductCategory(category);
  return response;
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
      state.products = state.initialProducts;
      state.sortBy = action.payload;
      const priceStort = state.products.slice().sort((a, b) => {
        if (state.sortBy === ProductQuantity.INC) {
          return a.price - b.price;
        }
        return b.price - a.price;
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