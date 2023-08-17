import { configureStore } from "@reduxjs/toolkit";

//import Slice as a reducer
import cartReducer from "../src/feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
