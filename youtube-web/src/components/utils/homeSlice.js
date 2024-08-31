import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    popularVideoList : []
  },
  reducers: {
    addVideoList: (state,action) => {
      state.popularVideoList = action.payload;
    }
  }
});

export const { addVideoList } = homeSlice.actions;
export default homeSlice.reducer;