import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/cartSlice.jsx";

// 1.Adım: store dosyası oluşturulur. configureStore import edilir.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
