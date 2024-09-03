const CommentReplies = ({replies}) => {
  return (
    <div className="ml-12 mt-4">
      {replies.map((reply) => (
        <div key={reply.id} className="flex items-start space-x-4 p-4 border-b border-gray-200">
          <img className="w-10 h-10 rounded-full" src={reply.snippet.authorProfileImageUrl} alt="profile" />
          <div>
            <div className="text-sm font-semibold text-gray-800">{reply.snippet.authorDisplayName}</div>
            <div className="text-sm text-gray-600 mb-2">{new Date(reply.snippet.publishedAt).toLocaleDateString()}</div>
            <div className="text-sm text-gray-900">{reply.snippet.textDisplay}</div>
            <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
              <span>{reply.snippet.likeCount} likes</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default CommentReplies;