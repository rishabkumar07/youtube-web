import { useState } from "react";
import moment from "moment";
import { formatViews, formatDuration } from "./utils/helperMethods";

const VideoCard = ({videoDetails}) => {
  const {snippet, statistics, channelLogoUrl, contentDetails} = videoDetails;
  const {channelTitle, title, thumbnails} = snippet;
  const uploadedAgo = moment(snippet.publishedAt).fromNow();
  const formattedDuration = formatDuration(contentDetails?.duration);
  const [isHoverTitle, setIsHoverTitle] = useState(false);

  return (
    <div className="p-2 w-90 hover:shadow-xl transition-shadow duration-200 ease-in-out">

      <div className="relative">
        <img  src={thumbnails.medium.url} alt="thumbnail"  className="rounded-lg w-full h-auto" />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
          {formattedDuration}
        </span>
      </div>
      
      <div className="flex mt-2" 
        onMouseOver={() => setIsHoverTitle(true)}
        onMouseOut={() => setIsHoverTitle(false)}>
        <img src={channelLogoUrl} alt="channel logo"  className="w-10 h-10 rounded-full mr-2"/>
        
        <div>
          <p className={`font-bold text-sm line-clamp-2 
            ${isHoverTitle ? "text-blue-500" : ""} 
            line-clamp-2 md:text-base font-medium`}
          >
            {title}
          </p>
          <p className="pt-1 font-medium text-[0.9rem]  text-gray-500">{channelTitle}</p>
          <p className="py-1 font-medium text-[0.8rem] text-gray-500">{uploadedAgo}  •  {formatViews(statistics?.viewCount)} views</p>
        </div>
      </div>
    </div>
  )
};

export default VideoCard;