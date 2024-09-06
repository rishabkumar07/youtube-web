import { useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage, toggleLiveChat } from "./utils/liveChatSlice";
import { getRandomChatMessages, getRandomFirstName, getRandomLastName } from "./utils/messageGenerator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveChat.messages);
  const isLiveChatVisible = useSelector((store) => store.liveChat.isVisible);
  const chatInput = useRef(null);

  useEffect(()=> {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: getRandomFirstName()+" "+ getRandomLastName(),
        message: getRandomChatMessages()
      }));
    }, 2000);

    return () => clearInterval(i);
  },[]);

  const handleSendChat = (e) => {
    e.preventDefault();
    dispatch(addMessage({
      name: "Rishab Gupta",
      message: chatInput.current.value
    }));
    chatInput.current.value = "";
  }

  const toggleChatContainer = () => {
    dispatch(toggleLiveChat());
  }

  return (
    <>
      <div className="w-full p-2 text-center bg-gray-200 cursor-pointer rounded-full" onClick={toggleChatContainer}>
        {isLiveChatVisible ? "Hide live chat demo" : "Show live chat demo"}
      </div>
      {
        isLiveChatVisible && (
          <div className="w-full h-[552px] p-2 border border-gray-300 bg-white rounded-lg overflow-y-scroll mt-2">
            <div className="flex flex-col-reverse space-y-2 space-y-reverse">
              {chatMessages.map((chatMessage, index) => (
                <ChatMessage  key={index+chatMessage.name} name={chatMessage.name} message= {chatMessage.message} />
              ))}
            </div>
            <form className="w-full p-2 flex items-center bg-white border-t border-gray-300" onSubmit={(e) => handleSendChat(e)}>
              <input ref={chatInput} type="text" placeholder="chat..." 
                className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </input>
              <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Send</button>
            </form>
          </div>
        )
      }
      
    </>  
  )
};

export default LiveChat;