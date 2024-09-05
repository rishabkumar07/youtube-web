import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "./utils/liveChatSlice";
import { getRandomChatMessages, getRandomFirstName, getRandomLastName } from "./utils/messageGenerator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveChat.messages);

  useEffect(()=> {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: getRandomFirstName()+" "+ getRandomLastName(),
        message: getRandomChatMessages()
      }));
    }, 2000);

    return () => clearInterval(i);
  },[]);

  return (
    <div className="w-full h-[600px] p-2 border border-gray-300 bg-white rounded-lg overflow-y-scroll">
      <div className="flex flex-col-reverse">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage  key={index+chatMessage.name} name={chatMessage.name} message= {chatMessage.message} />
        ))}
      </div>
    </div>
  )
};

export default LiveChat;