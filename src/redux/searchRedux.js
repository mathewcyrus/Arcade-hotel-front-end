import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    dates: [],
    options: {
      adults: undefined,
      children: undefined,
      bedrooms: undefined,
    },
  },
  reducers: {
    roomSearch: (state, action) => {
      state.dates = action.payload.dates;
      state.options = state.payload;
    },
  },
});

export const { roomSearch } = searchSlice.actions;
export default searchSlice.reducer;
