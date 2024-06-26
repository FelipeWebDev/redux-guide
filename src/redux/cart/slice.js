import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (productInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },

    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },

    setProductsFromLocalStorage: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  setProductsFromLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
