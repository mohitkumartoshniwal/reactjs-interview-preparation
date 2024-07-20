import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const userSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfCakes--;
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { order, restock } = userSlice.actions;
export default userSlice.reducer;
