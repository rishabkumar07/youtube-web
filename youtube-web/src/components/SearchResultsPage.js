import { YT_SEARCH_API, YT_VIDEO_DETAILS_API, YT_CHANNEL_DETAILS } from "./utils/constants";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import parse from 'html-react-parser';
import moment from "moment";
import { formatDuration, formatViews } from "./utils/helperMethods";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [channelDetails, setChannelDetails] = useState({});
  const [isHoverTitle, setIsHoverTitle] = useState({});

  useEffect(() => {
    if(query)
      fetchSearchResults();
  }, [query]);


  const getVideoDetails = async (videoIds) => {
    const videoDetailsAPI = `${YT_VIDEO_DETAILS_API}&id=${videoIds.join(",")}`;

    try {
      const data = await fetch(videoDetailsAPI);
      const jsonData = await data.json();
      return jsonData.items;
    }
    catch(error)
    {
      console.error("Error fetching video details:", error);
      return [];
    }
  }

  const getChannelDetails = async (channelIds) => {
    const channelDetailsURL = YT_CHANNEL_DETAILS;
    const channelAPI = channelIds.reduce((url, channelId) => `${url}&id=${channelId}`, channelDetailsURL);
    try
    {
      const data = await fetch(channelAPI);
      const jsonData = await data.json();
      return jsonData.items;
    }
    catch(error)
    {
      console.error("Error fetching channel details:", error);
      return [];
    }
  }


  const fetchSearchResults = async() => {
    try
    {
      const data = await fetch(`${YT_SEARCH_API}&maxResults=25&q=${query}`);
      const json = await data.json();
      setSearchResults(json.items);

      const videoIds = json.items.map((item) => item.id.videoId);
      const videoData = await getVideoDetails(videoIds);
      setVideoDetails(videoData);

      const channelIds = [...new Set(json.items.map((item) => item.snippet.channelId))];
      const channelData = await getChannelDetails(channelIds);

      const channelDataMap = {};
      channelData.forEach((channel) => {
        channelDataMap[channel.id] = channel;
      });

      setChannelDetails(channelDataMap);

    }
    catch (error) 
    {
      console.error("Error fetching search results:", error);
    }
  }

  const handleMouseOver = (id) => {
    setIsHoverTitle((prev) => ({ ...prev, [id]: true }));
  };
  
  const handleMouseOut = (id) => {
    setIsHoverTitle((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="p-5">
      {videoDetails.map((video, index) => {
        const { title, channelId, channelTitle, publishedAt } = video.snippet;
        const views = video.statistics.viewCount;
        const duration = video.contentDetails.duration;
        const uploadedTime = moment(publishedAt).fromNow();
        const channelLogo = channelDetails[channelId]?.snippet.thumbnails.default.url;

        return (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <div
            onMouseOver={() => handleMouseOver(`${video.id}-${index}`)}
            onMouseOut={() => handleMouseOut(`${video.id}-${index}`)}
            className={`flex items-start space-x-4 mb-6 p-4 hover:bg-gray-100 rounded-lg transition-colors`}
          >
            <div className="relative w-60 h-36 flex-shrink-0">
              <img src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}  className="w-full h-full object-cover rounded-lg" />

              <span className="absolute bottom-2 right-2 bg-black text-white px-1 py-0.5 text-xs rounded">{formatDuration(duration)}</span>
            </div>

            <div className="flex-grow">
              <h3 
              className={`text-lg font-semibold text-gray-900 line-clamp-2 
                ${isHoverTitle[`${video.id}-${index}`] ? "text-blue-500" : ""}`}> 
                  {parse(title)} 
              </h3>
              
              <div className="flex items-center space-x-2 mt-2 text-gray-600">
                { channelLogo && <img src={channelLogo} alt={channelTitle}  className="w-8 h-8 rounded-full" /> }
                <span className="font-semibold">{channelTitle}</span>
              </div>

              <div className="text-sm text-gray-500 mt-1"> 
                <span>{formatViews(views)} views</span> • <span>{uploadedTime}</span> 
              </div>
              
              <p className="text-sm text-gray-700 mt-2 line-clamp-2"> {parse(video.snippet.description)} </p>
            </div>
          </div>
        </Link>
      )}
      )}
    </div>
  )
};

export default SearchResultsPage;