import { useState } from "react";
import moment from "moment";
import parse from 'html-react-parser';
import { Avatar } from "@mui/material";
import LikeIcon from "../assets/icons/svgs/LikeIcon";
import DislikeIcon from "../assets/icons/svgs/DislikeIcon";
import DownTriangleIcon from "../assets/icons/svgs/DownTriangleIcon";
import { formatViews } from "./utils/helperMethods";

const Comment = ({comment, totalReplies, snippet}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(snippet?.likeCount || 0);

  const handleLikeClicked = () => {
    if (isDisLiked) {
      setIsDisliked(false);
      if (likeCount < 1000) {
        setLikeCount(likeCount + 1);
      }
    }
    setIsLiked(!isLiked);
    if (!isLiked) {
      if (likeCount < 1000) {
        setLikeCount(likeCount + 1);
      }
    } 
    else {
      if (likeCount > 0) {
        setLikeCount(likeCount - 1);
      }
    }
  };
  
  const handleDislikeClicked = () => {
    if (isLiked) {
      setIsLiked(false);
      if (likeCount > 0) {
        setLikeCount(likeCount - 1);
      }
    }
    setIsDisliked(!isDisLiked);
  };
  

  return (
    <div className="w-full flex justify-between my-3">
      <div className="userProfileContainer w-[10%] md:w-[8%]">
        <Avatar className="w-10 rounded-full"
          src={snippet?.authorProfileImageUrl}
          alt="channelImg"
        />
      </div>
      
      <div className="commentsContainer  w-[88%]   md:w-[92%]">
        <div className="heading flex items-center gap-2 h-5">
          <div className="userName text-sm font-medium ">
            {snippet?.authorDisplayName}
          </div>
          <div
            className={`daysago text-[#565555] text-xs font-medium`}>
            {moment(snippet?.publishedAt).fromNow()}
          </div>
        </div>

        <div className="comment w-full my-2">
          <div
            className={`text-sm font-sans ${
              showMore ? "" : snippet?.textOriginal.length > 250
                ? "line-clamp-4" : "" } 
              whitespace-pre-wrap break-words`}>
            {parse(snippet?.textOriginal || "")}
          </div>
          {snippet?.textOriginal.length > 250 ? (
            <>
              {showMore ? (
                <div
                onClick={() => setShowMore(false)}
                className={`daysago my-2 cursor-pointer text-[#565555]
                  text-xs font-medium`}>
                Read less
                </div>
              ) : (
                <div
                  onClick={() => setShowMore(true)}
                  className={`daysago my-2 cursor-pointer text-[#565555]
                    text-xs font-medium`}>
                  Read more
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>

        <div className="commentStatistics flex gap-4 items-center h-8 ">
          <div className="likes flex  items-center">
            <div
              className= {`hover:bg-[#e9e7e7]  md:active:bg-[#e5e3e3]
                  cursor-pointer rounded-full -ml-1 p-1  flex justify-center items-center`}
              onClick={handleLikeClicked}>
              <LikeIcon fillColor={isLiked ? "#000" : "#fff"} strokeColor={isLiked ? "#fff" : "#000"} />
            </div>
            <div
              className={`count  text-[#565555]
                text-xs mx-1 font-medium`}>
              {formatViews(likeCount)}
            </div>
            <div
              className={`hover:bg-[#e9e7e7]  md:active:bg-[#e5e3e3]
                cursor-pointer rounded-full  p-1   flex justify-center items-center`}
                onClick={handleDislikeClicked}>
              <DislikeIcon fillColor={isDisLiked ? "#000" : "#fff"} strokeColor={isDisLiked ? "#fff" : "#000"} />
            </div>
            <div
              className={`hover:bg-[#e9e7e7]  md:active:bg-[#e5e3e3]
                cursor-pointer rounded-full  py-2 px-3 h-8 flex 
                justify-center items-center`}>
              <span className="text-sm font-medium">Reply</span>
            </div>
          </div>
        </div>
        {totalReplies > 0 ? (
          <>
            <div 
              onClick={() => setShowReplies(!showReplies)}
              className={`reply w-fit h-9 flex items-center pl-[8px] 
                pr-[12px] py-[5px] rounded-full cursor-pointer
              md:active:bg-blue-200 md:hover:bg-blue-100 
                transition-colors ease`}>
              <div
                className={`icon ${showReplies ? "rotate-180" : "rotate-0"}`}>
                <DownTriangleIcon color={"#065fd4"} />
              </div>
              <div
                className={`text-[#065fd4] text-sm font-semibold whitespace-nowrap`}>
                {formatViews(totalReplies) + " reply"}
              </div>
            </div>
            {showReplies
              ? comment?.replies?.comments.map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      snippet={comment.snippet}
                    />
                  );
                }
              ) : ""
            }
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Comment;