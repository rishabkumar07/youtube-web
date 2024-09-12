import parse from 'html-react-parser';

const CommentReplies = ({replies}) => {
  return (
    <div className="ml-12 mt-4">
      {replies.map((reply) => (
        <div key={reply.id} className="flex items-start space-x-4 p-4 border-b border-gray-200 bg-white">
          <img className="w-8 h-8 rounded-full" src={reply.snippet.authorProfileImageUrl} alt="profile" />
          <div className="flex-1">
            <div className="flex justify-between">
              <div className="text-sm font-semibold text-gray-800">{reply.snippet.authorDisplayName}</div>
              <div className="text-xs text-gray-500">{new Date(reply.snippet.publishedAt).toLocaleDateString()}</div>
            </div>
            <div className="text-sm text-gray-900 mt-2">{parse(reply.snippet.textDisplay)}</div>
            <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-gray-600 text-xl">👍</span>
              <span>{reply.snippet.likeCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default CommentReplies;