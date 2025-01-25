import { YT_COMMENTS_THREADS_API } from "./utils/constants";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CommentsContainer = ({videoId, commentCount}) => {
  const [comments, setComments] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const fetchComments = async(pageToken = '', isLoadMore = false) => {
    if (isLoadMore) 
      setIsFetchingMore(true);
    else 
      setLoading(true);
    try {
      const response = await fetch(`${YT_COMMENTS_THREADS_API}&videoId=${videoId}&pageToken=${pageToken}`);
      const data = await response.json();
      if (Array.isArray(data.items))
        setComments((prevComments) => [...prevComments, ...data.items]);
      setNextPageToken(data.nextPageToken || null);
    }
    catch (error) {
      console.error('Error fetching comments:', error);
    }
    finally {
      if (isLoadMore) 
        setIsFetchingMore(false);
      else
        setLoading(false);
    }
  }

  return (
    <>
      {comments ? (
        commentCount === "0" ? (
          <div className="commentsContainer w-full mt-2">
            <div className="w-full flex justify-start items-center gap font-medium my-5">
              No comments yet
            </div>
          </div>
        ) : (
          loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="mb-6">
                <Skeleton height={60} />
                <Skeleton count={3} />
              </div>
            ))
          ) : (
            <div className="commentsContainer w-full mt-2">
              <div className="w-full flex items-center gap-7 font-medium my-5">
                <div className="totalComments">
                  {Number(commentCount).toLocaleString("en-us") + " Comments"}
                </div>
              </div>
  
              <div className="comments w-full">
                {comments?.map((comment) => (
                  <Comment
                    key={comment?.id}
                    comment={comment}
                    snippet={comment?.snippet?.topLevelComment?.snippet}
                    totalReplies={comment?.snippet?.totalReplyCount} />
                ))}
              </div>
  
              {nextPageToken ? (
                <button
                  className={`whitespace-nowrap  text-center w-[50%] max-w-[200px] h-9 p-4 my-4 text-base font-medium flex justify-center items-center m-auto rounded-full
                    ${
                    isFetchingMore
                      ? "bg-slate-300 text-white cursor-not-allowed"
                      : "bg-white hover:bg-[#f2f2f2] active:bg-[#e5e3e3] text-[#0f0f0f] border border-[#ccc]"
                    }`
                  }
                  onClick={() => fetchComments(nextPageToken, true)}
                  disabled={isFetchingMore}>
                  {isFetchingMore ? "Loading..." : "Show More Comments"}
                </button>
              ) : (
                <div
                  className="chatContainer whitespace-nowrap text-center max-w-[200px] w-full h-9 p-4 my-4 text-base font-medium flex justify-center items-center m-auto rounded-full cursor-pointer">
                  No more comments
                </div>
              )}
            </div>
          )
        )
      ) : (
        <div className="commentsContainer w-full mt-2">
          <div className="w-full flex justify-center text-sm items-center gap font-medium my-5">
            Comments are turned off.
            <div className="cursor-pointer text-[#065fd4] text-sm">&nbsp; Learn more.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentsContainer;