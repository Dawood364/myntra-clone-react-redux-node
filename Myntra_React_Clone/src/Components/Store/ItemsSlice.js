import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    AddInitialItems: (state, action) => {
      return action.payload;
    },
  },
});
export const ItemActions = itemSlice.actions;
export default itemSlice;
