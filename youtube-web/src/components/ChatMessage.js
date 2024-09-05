const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center p-2 border-b border-gray-200">
      <img  className="h-8 w-8 rounded-full" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      <span className="font-semibold text-sm ml-2">{name}</span>
      <span className="text-sm ml-2">{message}</span>
    </div>
  )
};

export default ChatMessage;