import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dishes: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addDish: (state, action) => {
      state.quantity += 1;
      state.dishes.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteDish: (state, action) => {
      state.quantity -= 1;
      state.dishes.splice(
        state.dishes.findIndex((item) => item._id === action.payload.id),
        1
      );
      state.total = state.total - action.payload.price;
    },
  },
});

export const { addDish, deleteDish } = cartSlice.actions;
export default cartSlice.reducer;
