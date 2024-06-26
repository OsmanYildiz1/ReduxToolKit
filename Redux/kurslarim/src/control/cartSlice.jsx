import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItem";

const initialState = {
  cartItems: courseItems,
  quantity: 0, // miktar
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  // kontrol edeceğimiz stateler ve reducerlar tanımlanır. reducerlar kontrol edeceğimiz statelerle ilgili işlemleri yapar.
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // gönderdiğimiz data payloadda tutulur burada id'ye karşılık gelir.
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
