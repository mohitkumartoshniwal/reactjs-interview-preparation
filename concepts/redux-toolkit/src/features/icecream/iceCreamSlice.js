import { createSlice } from "@reduxjs/toolkit";
import { order as cakeOrder } from "../cake/cakeSlice";

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIceCreams--;
    },
    restock: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //   Reduce icecream if cake is ordered
  extraReducers: (builder) => {
    builder.addCase(cakeOrder, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export const { order, restock } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
