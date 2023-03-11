import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetchingUser: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetchingUser = true;
    },
    loginSuccess: (state, action) => {
      state.isFetchingUser = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
