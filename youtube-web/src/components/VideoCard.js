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
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.medium.url} 
        className="rounded-lg" alt="thumbnail"></img>
       <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatViews(statistics?.viewCount)} views</li>
      </ul>
    </div>
  )
};

export default VideoCard;