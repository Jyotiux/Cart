import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";  // Import the cart reducer

// Configure store with cart reducer under `cart` key
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,  // Enable Redux devtools
});
