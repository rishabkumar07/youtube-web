import { useState, useEffect } from "react";
import { YT_SEARCH_API } from "./utils/constants";
import RecommendationCard from "./RecommendationCard";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RecommendationVideo = ({ videoTitle, videoId }) => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    fetchRecommendedVideos();
  },[videoTitle, videoId]);

  const fetchRecommendedVideos = async() => {
    setLoading(true);
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
    finally
    {
      setLoading(false);
    }
  }

  return (
    <div className="w-full mt-4">
      <h2 className="text-lg font-semibold mb-2">Recommended Videos</h2>
      <div className="flex flex-col space-y-4">
        {loading ? (
          Array.from({length : 10}).map((_, index) => (
            <div key={index} className="flex mb-4 hover:bg-gray-100 p-2 rounded-md">
              <Skeleton width={120} height={90} className="mr-4 rounded-md" />
              <div className="flex flex-col justify-between w-full">
                <Skeleton height={20} width="60%" />
                <Skeleton height={15} width="40%" />
              </div>
            </div>
          ))
        ):(
          recommendedVideos.map((video) => (
            <RecommendationCard key={video.id.videoId} video={video} />
          ))
        )}
      </div>
    </div>
  )
};

export default RecommendationVideo;