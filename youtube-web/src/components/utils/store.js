import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import homeReducer from "./homeSlice";
import searchReducer from "./searchSlice";
import liveChatReducer from "./liveChatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
    search: searchReducer,
    liveChat: liveChatReducer
  }
});

export default store;