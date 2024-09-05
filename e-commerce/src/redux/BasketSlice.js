import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
};


const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('action', action.payload);
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id,
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      console.log('state', state.products);

    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id,
      );
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id,
      );

      itemInCart.quantity -= 1;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id,
      );
    },

  },
});

export const { addToCart, incrementQuantity, removeProduct, decrementQuantity } = basketSlice.actions;
export default basketSlice.reducer;