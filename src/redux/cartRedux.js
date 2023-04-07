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
    incrementQuantity: (state, action) => {
      const dish = state.dishes.find((d) => d._id === action.payload.id);
      dish.quantity += 1;
      state.total += dish.price;
      state.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const dish = state.dishes.find((d) => d._id === action.payload.id);
      if (dish.quantity > 1) {
        dish.quantity -= 1;
        state.total -= dish.price;
        state.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.dishes = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addDish,
  deleteDish,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
