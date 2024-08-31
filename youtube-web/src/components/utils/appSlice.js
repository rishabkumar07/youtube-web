import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarMenuOpen : true
  },
  reducers : {
    toggleSideBarMenu : (state) => {
      state.isSideBarMenuOpen = !state.isSideBarMenuOpen;
    },
    closeSideBarMenu: (state) => {
      state.isSideBarMenuOpen = false;
    }
  }
});

export const { toggleSideBarMenu, closeSideBarMenu } = appSlice.actions;
export default appSlice.reducer;