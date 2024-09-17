import { Link } from "react-router-dom";
import moment from "moment";
import parse from 'html-react-parser';
import { formatDuration, formatViews } from "./utils/helperMethods";

const RecommendationCard = ({video}) => {
  const { title, channelTitle, thumbnails, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;
  const { duration } = video.contentDetails;
  
  return (
    <Link to={`/watch?v=${video.id.videoId}`} className="flex mb-4 hover:bg-gray-100 p-2 rounded-md">
      <div className="relative w-1/3 mr-4">
      <img src={thumbnails.medium.url} alt={title} className="w-full h-full object-cover rounded-md" />
      <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded"> {formatDuration(duration)} </span>
      </div>

      <div className="flex flex-col justify-between w-2/3">
        <h3 className="text-sm font-medium line-clamp-2 hover:text-blue-500">{parse(title)}</h3>
        <p className="text-xs text-gray-500 mt-1">{channelTitle}</p>
        <div className="text-xs text-gray-500 mt-1">
          <span>{formatViews(viewCount)} views</span> • <span>{moment(publishedAt).fromNow()}</span>
        </div>
      </div>
    </Link>
  )
};

export default RecommendationCard;