import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import homeReducer from "./homeSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
    search: searchReducer
  }
});

export default store;