import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name : "liveChat",
  initialState : {
    messages: []
  },
  reducers: {
    addMessage : (state, action) => {
      state.messages.unshift(action.payload);
      if (state.messages.length > 20)
        state.messages.splice(20,1)
    }
  }
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;