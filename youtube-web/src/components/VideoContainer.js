import { useEffect } from "react"; 
import { YOUTUBE_POPULAR_VIDEOS_LIST_API } from "./utils/constants";
import { useSelector } from "react-redux";
import { addVideoList, addCurrentVideo } from "./utils/homeSlice";
import { useDispatch } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const popularVideoList = useSelector((store) => store.home.popularVideoList);
  const dispatch = useDispatch();

  useEffect(() => {
    if(popularVideoList.length === 0)
      getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_LIST_API);
    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addVideoList(jsonData.items));
  }

  const addVideoDetails = (video) => {
    dispatch(addCurrentVideo(video));
  }

  return (
    <div className="flex flex-wrap">
      {
        popularVideoList.map((video) => (
          <Link to={"/watch?v="+video.id} key={video.id} onClick={() => addVideoDetails(video)}>
            <VideoCard key={video?.id} videoDetails = {video} />
          </Link>
        ))
      }
    </div>
  )
};

export default VideoContainer;