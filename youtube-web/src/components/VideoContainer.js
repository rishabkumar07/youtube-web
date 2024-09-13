import { useState, useEffect } from "react"; 
import { YOUTUBE_POPULAR_VIDEOS_LIST_API } from "./utils/constants";
import { useSelector } from "react-redux";
import { addVideoList, addCurrentVideo } from "./utils/homeSlice";
import { useDispatch } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const VideoContainer = () => {
  const popularVideoList = useSelector((store) => store.home.popularVideoList);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(popularVideoList.length === 0)
      getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    setLoading(true);
    try
    {
      const data = await fetch(YOUTUBE_POPULAR_VIDEOS_LIST_API);
      const jsonData = await data.json();
      console.log(jsonData);
      dispatch(addVideoList(jsonData.items));
    }
    catch(error)
    {
      console.error("Error fetching popular video list:", error);
    }
    finally
    {
      setLoading(false);
    }
  }

  const addVideoDetails = (video) => {
    dispatch(addCurrentVideo(video));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      { loading ? (
        Array.from({length : 16 }).map((_, index) => (
          <div key={index} className="p-2 m-2 w-72 shadow-lg">
            <Skeleton height={180} className="rounded-lg" />
            <div className="mt-2">
              <Skeleton height={20} width="80%" />
              <Skeleton height={15} width="60%" className="mt-2" />
              <Skeleton height={15} width="40%" className="mt-2" />
            </div>
          </div>
        ))
      ) : (
        popularVideoList.map((video) => (
          <Link to={"/watch?v="+video.id} key={video.id} onClick={() => addVideoDetails(video)}>
            <VideoCard key={video?.id} videoDetails = {video} />
          </Link>
        ))
      )
      }
    </div>
  )
};

export default VideoContainer;