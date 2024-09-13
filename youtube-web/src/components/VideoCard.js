const VideoCard = ({videoDetails}) => {
  const {snippet, statistics} = videoDetails;
  const {channelTitle, title, thumbnails} = snippet;

  const formatViews = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // For million (e.g., 11.8M)
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'; // For thousand (e.g., 11.8K)
    } else {
      return num.toString(); // For less than 1000
    }
  };

  return (
    <div className="p-2 m-2 w-72 shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
      <img src={thumbnails.medium.url} 
        className="rounded-lg w-full h-auto" alt="thumbnail"></img>
       <ul className="mt-2">
        <li className="font-bold text-sm line-clamp-2 py-1">{title}</li>
        <li className="text-xs text-gray-500">{channelTitle}</li>
        <li className="text-xs text-gray-500">{formatViews(statistics?.viewCount)} views</li>
      </ul>
    </div>
  )
};

export default VideoCard;