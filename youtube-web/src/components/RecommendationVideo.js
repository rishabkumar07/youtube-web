import { useState, useEffect } from "react";
import { YT_SEARCH_API } from "./utils/constants";
import RecommendationCard from "./RecommendationCard";

const RecommendationVideo = ({ videoTitle, videoId }) => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(()=> {
    fetchRecommendedVideos();
  },[]);

  const fetchRecommendedVideos = async() => {
    try {
      const data = await fetch(`${YT_SEARCH_API}&maxResults=15&q=${videoTitle}`);
      const json = await data.json();
      // Filter out the current video from the recommendations
      const filteredVideos = json.items.filter((video) => video.id.videoId !== videoId);
      setRecommendedVideos(filteredVideos);
    }
    catch (error)
    {
      console.error("Error fetching recommended videos:", error);
    }
  }

  return (
    <div className="w-full mt-4">
      <h2 className="text-lg font-semibold mb-2">Recommended Videos</h2>
      <div className="flex flex-col space-y-4">
        {recommendedVideos.map((video) => (
          <RecommendationCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  )
};

export default RecommendationVideo;