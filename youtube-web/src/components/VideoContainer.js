import { useState, useEffect } from "react"; 
import { YOUTUBE_POPULAR_VIDEOS_LIST_API, YT_CHANNEL_DETAILS } from "./utils/constants";
import { useSelector } from "react-redux";
import { addVideoList, addCurrentVideo, addOtherCategoryVideoList, addVideoCategoryId } from "./utils/homeSlice";
import { useDispatch } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const VideoContainer = () => {
  const popularVideoList = useSelector((store) => store.home.popularVideoList);
  const videoCategoryId = useSelector((store) => store.home.videoCategoryId);
  const otherCategoryVideoList =  useSelector((store) => store.home.otherCategoryVideoList);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const videoList = parseInt(videoCategoryId) === 0 ? popularVideoList : otherCategoryVideoList?.items || popularVideoList;

  useEffect(() => {
    if (parseInt(videoCategoryId) === 0) 
    {
      if (popularVideoList.length === 0)
        getPopularVideos();
    }
    else 
    {
      if (parseInt(otherCategoryVideoList.id) !== videoCategoryId)
        getOtherCategoryVideos(videoCategoryId);
    }
  }, [videoCategoryId]);

  const getChannelDetails = async (channelIds) => {
    const channelDetailsURL = YT_CHANNEL_DETAILS;
    const channelAPI = channelIds.reduce((url, channelId) => `${url}&id=${channelId}`, channelDetailsURL);
    try
    {
      const data = await fetch(channelAPI);
      const json = await data.json();
      const channelDataMap = {};
      json.items.forEach((item) => {
        channelDataMap[item.id] = item.snippet.thumbnails.default.url;
      });
      return channelDataMap;
    }
    catch(error)
    {
      console.error("Error fetching channel details:", error);
    }
  }

  const getPopularVideos = async () => {
    setLoading(true);
    try
    {
      const data = await fetch(`${YOUTUBE_POPULAR_VIDEOS_LIST_API}&videoCategoryId=${videoCategoryId}`);
      const jsonData = await data.json();
      console.log(jsonData);

      const channelIds = [...new Set(jsonData.items.map(video => video.snippet.channelId))];
      const channelDataMap = await getChannelDetails(channelIds);
    
      const updatedList = jsonData.items.map((item) => ({
        ...item,
        channelLogoUrl: channelDataMap[item.snippet.channelId] || '',
      }));

      dispatch(addVideoList(updatedList));
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

  const getOtherCategoryVideos = async () => {
    setLoading(true);
    try
    {
      const data = await fetch(`${YOUTUBE_POPULAR_VIDEOS_LIST_API}&videoCategoryId=${videoCategoryId}`);
      const jsonData = await data.json();
      console.log(jsonData);

      const channelIds = [...new Set(jsonData.items.map(video => video.snippet.channelId))];
      const channelDataMap = await getChannelDetails(channelIds);
    
      const updatedList = jsonData.items.map((item) => ({
        ...item,
        channelLogoUrl: channelDataMap[item.snippet.channelId] || '',
      }));

      dispatch(addOtherCategoryVideoList(
        {
          id: parseInt(videoCategoryId),
          items: updatedList
        }
      ));
    }
    catch(error)
    {
      console.error("Error fetching other categories video list:", error);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
      { loading ? (
        Array.from({length : 16 }).map((_, index) => (
          <div key={index} className="p-2 shadow-lg">
            <Skeleton height={180} className="rounded-lg" />
            <div className="mt-2">
              <Skeleton height={20} width="80%" />
              <Skeleton height={15} width="60%" className="mt-2" />
              <Skeleton height={15} width="40%" className="mt-2" />
            </div>
          </div>
        ))
      ) : (
        videoList.map((video) => (
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