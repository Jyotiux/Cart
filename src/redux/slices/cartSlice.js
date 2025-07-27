import { createSlice, createSelector } from "@reduxjs/toolkit";

// Create cartSlice which manages the cart items array
const cartSlice = createSlice({
  name: "Cart",
  initialState: [],  // Initially cart is empty
  reducers: {
    // Reducer to add an item to cart
    addItem: (state, action) => {
      // state is mutable here thanks to immer, push new item to array
      state.push(action.payload);
    },
  },
});

// Selector to get cart items from Redux state
export const getItemsSelector = createSelector(
  (state) => state.cart,   // Get the cart slice from state
  (cart) => cart           // Return the cart array
);

// Export the action creator for adding items
export const { addItem } = cartSlice.actions;

// Export reducer to include in the store
export default cartSlice.reducer;
