// ImageSliderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ImageSliderSlice = createSlice({
  name: "slider",
  initialState: {
    currentIndex: 0,
  },
  reducers: {
    nextImage: (state, action) => {
      const { totalImages, step, visibleCards } = action.payload;

      const maxStartIndex = totalImages - visibleCards;

      if (state.currentIndex + step > maxStartIndex) {
        state.currentIndex = 0; // Restart from beginning
      } else {
        state.currentIndex += step;
      }
    },
    goToImage: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { nextImage, goToImage } = ImageSliderSlice.actions;
export default ImageSliderSlice.reducer;
