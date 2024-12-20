import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    popularVideoList : [],
    videoCategoryId : 0,
    otherCategoryVideoList : {
      id : 0,
      items : []
    },
    currentVideoDetails : []
  },
  reducers: {
    addVideoList: (state, action) => {
      state.popularVideoList = state.popularVideoList.concat(action.payload.items);      
    },
    addOtherCategoryVideoList: (state, action) => {
      if(state.otherCategoryVideoList.id === action.payload?.id)
      {
        state.otherCategoryVideoList.items = state.otherCategoryVideoList.items.concat(action.payload.items);
      }
      else
      {
        state.otherCategoryVideoList.id = action.payload?.id;
        state.otherCategoryVideoList.items = action.payload.items;
      }

    },
    addVideoCategoryId: (state, action) => {
      state.videoCategoryId = action.payload;
    },
    addCurrentVideo : (state, action) => {
      state.currentVideoDetails = action.payload;
    }
  }
});

export const { addVideoList, addCurrentVideo, addVideoCategoryId, addOtherCategoryVideoList } = homeSlice.actions;
export default homeSlice.reducer;