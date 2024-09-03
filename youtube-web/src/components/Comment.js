import CommentReplies from "./CommentReplies";
import { useState } from "react";

const Comment = ({data}) => {
  const { authorDisplayName, authorProfileImageUrl, textDisplay, likeCount, publishedAt } = data?.snippet?.topLevelComment?.snippet;
  const [showCommentReplies, setShowCommentReplies] = useState(false);

  const toggleReplies = () => {
    setShowCommentReplies(!showCommentReplies);
  }

  return (
    <div className="flex flex-col items-start space-y-4 p-4 border-b border-gray-200">
      <div className="flex items-start space-x-4 w-full">
        <img  className="w-12 h-12 rounded-full" src={authorProfileImageUrl} alt="profile" />
        
        <div className="w-full">
          <div className="text-sm font-semibold text-gray-800">{authorDisplayName}</div>
          <div className="text-sm text-gray-600 mb-2">{new Date(publishedAt).toLocaleDateString()}</div>
          <div className="text-sm text-gray-900">{textDisplay}</div>
          <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
            <span>{likeCount} likes</span>
          </div>
        </div>
      </div>
        {data.replies && (
          <div className="w-full mt-2">
            <button className="text-blue-500 mt-2" onClick={() => toggleReplies()}>
              { showCommentReplies ? '▲ Hide replies' : '▼ Show replies' }
            </button>
            { showCommentReplies && (
              <div className="mt-2 pl-4 border-l border-gray-300 bg-gray-50">
                <CommentReplies replies={data.replies.comments} />
              </div>
            )}
          </div>
        )}
    </div>   
  )
};

export default Comment;