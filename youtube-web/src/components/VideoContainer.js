import { useState, useEffect, useRef } from "react"; 
import { YOUTUBE_POPULAR_VIDEOS_LIST_API, YT_CHANNEL_DETAILS } from "./utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addVideoList, addCurrentVideo, addOtherCategoryVideoList } from "./utils/homeSlice";
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
  const [pageToken, setPageToken] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const observerRef = useRef(null);

  const videoList = parseInt(videoCategoryId) === 0 ? popularVideoList : otherCategoryVideoList?.items || popularVideoList;

  useEffect(() => {
    setPageToken(null);

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
    if (totalResults && popularVideoList.length >= totalResults) 
      return;
    setLoading(true);
    try
    {
      const data = await fetch(`${YOUTUBE_POPULAR_VIDEOS_LIST_API}&videoCategoryId=${videoCategoryId}&pageToken=${pageToken || ''}`);
      const jsonData = await data.json();  
      setTotalResults(jsonData.pageInfo?.totalResults);  
      setPageToken(jsonData.nextPageToken || null);

      const channelIds = [...new Set(jsonData.items.map(video => video.snippet.channelId))];
      const channelDataMap = await getChannelDetails(channelIds);
    
      const updatedList = jsonData.items.filter(
        (item) => !popularVideoList.some((video) => video.id === item.id)
      ).map((item) => ({
        ...item,
        channelLogoUrl: channelDataMap[item.snippet.channelId] || '',
      }));
    
      dispatch(addVideoList({items : updatedList}));
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
    if (totalResults && otherCategoryVideoList.id === videoCategoryId &&  otherCategoryVideoList.items.length >= totalResults) 
      return;
    setLoading(true);
    try
    {
      const data = await fetch(`${YOUTUBE_POPULAR_VIDEOS_LIST_API}&videoCategoryId=${videoCategoryId}&pageToken=${pageToken || ''}`);
      const jsonData = await data.json();

      setTotalResults(jsonData.pageInfo?.totalResults);
      setPageToken(jsonData.nextPageToken || null);

      const channelIds = [...new Set(jsonData.items.map(video => video.snippet.channelId))];
      const channelDataMap = await getChannelDetails(channelIds);
    
      const updatedList = jsonData.items.filter(
        (item) => !otherCategoryVideoList.items.some((video) => video.id === item.id)
      ).map((item) => ({
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

  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => 
    {
      if(entries[0].isIntersecting && !loading)
      {
        if(parseInt(videoCategoryId) === 0)
          getPopularVideos();
        else
          getOtherCategoryVideos();
      }
    }, {threshold: 1.0});

    if(observerRef.current)
      observer.observe(observerRef.current);

    return () => 
    {
      if(observerRef.current)
        observer.unobserve(observerRef.current);
    }
  }, [loading, videoCategoryId]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
      {videoList.map((video, index) => (
        <Link to={"/watch?v="+video.id} key={`${video.id}-${index}`} onClick={() => addVideoDetails(video)}>
          <VideoCard videoDetails={video} />
        </Link>
      ))}
      {loading && Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="p-2 shadow-lg">
          <Skeleton height={180} className="rounded-lg" />
          <div className="mt-2">
            <Skeleton height={20} width="80%" />
            <Skeleton height={15} width="60%" className="mt-2" />
            <Skeleton height={15} width="40%" className="mt-2" />
          </div>
        </div>
      ))}
      {videoList.length >= totalResults && (
        <div className="col-span-full flex justify-center items-center text-center w-full h-12 px-4 pt-2 my-0 text-base font-medium rounded-lg">
          No more videos available.
        </div>
      )}
      <div ref={observerRef} className="h-10" />
    </div>
  )
};

export default VideoContainer;