import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import homeReducer from "./homeSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer
  }
});

export default store;