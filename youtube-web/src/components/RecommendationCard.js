import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const RecommendationCard = ({video}) => {
  const { title, channelTitle, thumbnails } = video.snippet;
  
  return (
    <Link to={`/watch?v=${video.id.videoId}`} className="flex mb-4 hover:bg-gray-100 p-2 rounded-md">
      <img src={thumbnails.medium.url} alt={title} className="w-1/3 mr-4 rounded-md" />
      <div className="flex flex-col justify-between">
        <h3 className="text-sm font-medium line-clamp-2">{parse(title)}</h3>
        <p className="text-xs text-gray-500 mt-1">{channelTitle}</p>
      </div>
    </Link>
  )
};

export default RecommendationCard;