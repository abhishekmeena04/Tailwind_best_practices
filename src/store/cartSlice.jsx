import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    k: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.k += 1;
    },
  },
});

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
