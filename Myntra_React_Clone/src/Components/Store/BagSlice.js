import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    AddToBag: (state, action) => {
      state.push(action.payload);
    },

    RemoveFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
export const BagActions = BagSlice.actions;
export default BagSlice;
