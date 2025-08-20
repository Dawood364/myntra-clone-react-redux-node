import itemSlice from "./ItemsSlice";

import { configureStore } from "@reduxjs/toolkit";
import FetchStatusSlice from "./FetchLoaderStatus";
import BagSlice from "./BagSlice";
import sliderReducer from "./ImageSliderSlice";

const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    FetchStatus: FetchStatusSlice.reducer,
    Bag: BagSlice.reducer,
    slider: sliderReducer,
  },
});
export default MyntraStore;
