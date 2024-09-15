import moment from "moment";

const VideoCard = ({videoDetails}) => {
  const {snippet, statistics, channelLogoUrl, contentDetails} = videoDetails;
  const {channelTitle, title, thumbnails} = snippet;
  const uploadedAgo = moment(snippet.publishedAt).fromNow();

  const formatViews = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // For million (e.g., 11.8M)
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'; // For thousand (e.g., 11.8K)
    } else {
      return num.toString(); // For less than 1000
    }
  };

  const formatDuration = (duration) => {
    if (!duration) return "0:00";
  
    const durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(durationRegex);
  
    const hours = parseInt(matches[1] || 0);
    const minutes = parseInt(matches[2] || 0);
    const seconds = parseInt(matches[3] || 0);
  
    const formattedTime = [
      hours ? hours.toString() : null,
      minutes < 10 && hours ? `0${minutes}` : minutes.toString(),
      seconds < 10 ? `0${seconds}` : seconds.toString(),
    ].filter(Boolean).join(":");
  
    return formattedTime;
  };

  const formattedDuration = formatDuration(contentDetails?.duration);

  return (
    <div className="p-2 w-80 shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">

      <div className="relative">
        <img  src={thumbnails.medium.url} alt="thumbnail"  className="rounded-lg w-full h-auto" />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
          {formattedDuration}
        </span>
      </div>
      
      <div className="flex mt-2">
        <img src={channelLogoUrl} alt="channel logo"  className="w-10 h-10 rounded-full mr-2"/>
        
        <div>
          <p className="font-bold text-sm line-clamp-2">{title}</p>
          <p className="text-xs text-gray-500">{channelTitle}</p>
          <p className="text-xs text-gray-500">{uploadedAgo}</p>
          <p className="text-xs text-gray-500">{formatViews(statistics?.viewCount)} views</p>
        </div>
      </div>
    </div>
  )
};

export default VideoCard;