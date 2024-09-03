import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name : "search",
  initialState : {
  },
  reducers : {
    addToSearchResultsCache : (state, action) => {
      state = Object.assign(state, action.payload);
    }
  }
});

export const { addToSearchResultsCache } = searchSlice.actions;
export default searchSlice.reducer;