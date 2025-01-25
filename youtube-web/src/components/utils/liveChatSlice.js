import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name : "liveChat",
  initialState : {
    messages: [
      {
        "name":"Elon Musk",
        "message":"I can't wait for the next launch! 🚀"
      },
      {
        "name":"Donald Trump",
        "message":"I am here for peace! ✌️"
      },
      {
        "name":"Narendra Modi",
        "message":"Swarnim Bharat! ❤️"
      },
      {
        "name":"Rahul Gandhi",
        "message":"Developed Bharat! ❤️"
      },
      {
        "name":"Ritu Biswas",
        "message":"I can't wait for the next video! 😁"
      },
      {
        "name":"Ajay Pandit",
        "message":"Excited for the new video! 😊"
      },
      {
        "name":"Mahendra Dhoni",
        "message":"Thalla for a reason! 7️⃣"
      },
      {
        "name":"Sachin Tendulkar",
        "message":"God of criket! 🏏"
      }
    ],
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