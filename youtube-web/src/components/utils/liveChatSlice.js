import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name : "liveChat",
  initialState : {
    messages: [],
    isVisible: false
  },
  reducers: {
    addMessage : (state, action) => {
      state.messages.unshift(action.payload);
      if (state.messages.length > 10)
        state.messages.splice(10,1)
    },
    toggleLiveChat : (state) => {
      state.isVisible = !state.isVisible;
    }
  }
});

export const { addMessage, toggleLiveChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;