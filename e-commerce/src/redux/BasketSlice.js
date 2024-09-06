import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cart: [],
};


const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      itemInCart.quantity++;
    },

    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      itemInCart.quantity -= 1;
    },

    removeProduct: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.id,
      );
    },

  },
});

export const { addToCart, incrementQuantity, removeProduct, decrementQuantity } = basketSlice.actions;
export default basketSlice.reducer;