import { YT_COMMENTS_THREADS_API } from "./utils/constants";
import { useState, useEffect } from "react";
import Comment from "./Comment";

const CommentsContainer = ({videoId}) => {
  const [comments, setComments] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async(pageToken = '') => {
    setLoading(true);
    try {
      const response = await fetch(`${YT_COMMENTS_THREADS_API}&videoId=${videoId}&pageToken=${pageToken}`);
      const data = await response.json();
      setComments((prevComments) => [...prevComments, ...data.items]);
      setNextPageToken(data.nextPageToken || null);
    }
    catch (error) {
      console.error('Error fetching comments:', error);
    }
    finally {
      setLoading(false);
    }
  }


  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-6">
            <Comment  data = {comment}/>
          </div>
        ))}
      </div>

      {loading && <div>Loading comments...</div>}
      { nextPageToken && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => fetchComments(nextPageToken)}
          disabled={loading}>
          Load More Comments
        </button>
      )}
    </div>
  )
};

export default CommentsContainer;