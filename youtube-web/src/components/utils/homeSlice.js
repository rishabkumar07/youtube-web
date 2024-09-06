import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    popularVideoList : [],
    currentVideoDetails : []
  },
  reducers: {
    addVideoList: (state,action) => {
      state.popularVideoList = action.payload;
    },
    addCurrentVideo : (state, action) => {
      state.currentVideoDetails = action.payload;
    }
  }
});

export const { addVideoList, addCurrentVideo } = homeSlice.actions;
export default homeSlice.reducer;