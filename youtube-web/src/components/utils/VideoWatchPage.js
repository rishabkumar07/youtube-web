import { closeSideBarMenu } from "./appSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat";
import CommentsContainer from "../CommentsContainer";
import RecommendationVideo from "../RecommendationVideo";
import { YT_VIDEO_DETAILS_API } from "./constants";
import { addCurrentVideo } from "./homeSlice";

const VideoWatchPage = () => {
  const dispatch = useDispatch();
  const videoDetails = useSelector((store) => store.home?.currentVideoDetails);
  const [searchParams] = useSearchParams();
  const videoKey = searchParams.get("v");

  useEffect(() => {
    if (!videoDetails || videoDetails.id !== videoKey)
      fetchVideoDetails();

    dispatch(closeSideBarMenu());
  }, [videoKey]);

  const fetchVideoDetails = async() => {
    const data = await fetch(`${YT_VIDEO_DETAILS_API}&id=${videoKey}`);
    const json = await data.json();
    if (json.items && json.items.length > 0)
      dispatch(addCurrentVideo(json.items[0]));
  }

  const {snippet, statistics} = videoDetails || {};
  const {channelTitle, title, thumbnails} = snippet || {};

  return (
    <div className="flex w-full">
      <div className="flex flex-row w-full">
        <div className="flex-1">
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube-nocookie.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
            allowFullScreen>
          </iframe>
          <CommentsContainer videoId = {videoKey}/>
        </div>

        <div className="flex flex-col w-1/3 ml-4">
          <LiveChat />
          { title ? (
            <RecommendationVideo videoTitle={title} videoId={videoKey} /> )  : ( 
            <div>Loading recommendations...</div>
          )}
        </div>
      </div>
    </div>
  )
};

export default VideoWatchPage;