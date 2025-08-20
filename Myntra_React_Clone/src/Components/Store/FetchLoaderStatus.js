import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "FetchStatus",
  initialState: {
    FetchDone: false,
    CurrentlyFetching: false,
  },
  reducers: {
    MarkFetchDone: (state) => {
      state.FetchDone = true;
    },

    MarkFetchingStarted: (state) => {
      state.CurrentlyFetching = true;
    },

    MarkFetchingFinished: (state) => {
      state.CurrentlyFetching = false;
    },
  },
});

export const FetchActions = FetchStatusSlice.actions;
export default FetchStatusSlice;
