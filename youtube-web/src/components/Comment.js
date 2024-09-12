import CommentReplies from "./CommentReplies";
import { useState } from "react";
import parse from 'html-react-parser';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Comment = ({data}) => {
  const { authorDisplayName, authorProfileImageUrl, textDisplay, likeCount, publishedAt } = data?.snippet?.topLevelComment?.snippet;
  const [showCommentReplies, setShowCommentReplies] = useState(false);

  const toggleReplies = () => {
    setShowCommentReplies(!showCommentReplies);
  }

  return (
    <div className="flex flex-col items-start p-4 border-b border-gray-200 bg-white">
      <div className="flex items-start space-x-4 w-full">
        <img  className="w-10 h-10 rounded-full" src={authorProfileImageUrl} alt="profile" />
        
        <div className="w-full">
          <div className="flex justify-between">
            <div className="text-sm font-semibold text-gray-800">{authorDisplayName || <Skeleton width={120} />}</div>
            <div className="text-sm text-gray-600 mb-2">{publishedAt ? new Date(publishedAt).toLocaleDateString() : <Skeleton width={80} />}</div>
          </div>
          <div className="text-sm text-gray-900 mt-2">{textDisplay ? parse(textDisplay) : <Skeleton count={3} />}</div>
          <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-600 text-lg">👍</span>
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
        {data.replies && (
          <div className="w-full mt-2 ml-2">
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