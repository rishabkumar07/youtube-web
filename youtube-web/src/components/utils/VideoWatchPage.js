import { closeSideBarMenu } from "./appSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat";
import CommentsContainer from "../CommentsContainer";
import RecommendationVideo from "../RecommendationVideo";
import VideoDetails from "../VideoDetails";
import { YT_VIDEO_DETAILS_API, YT_CHANNEL_DETAILS } from "./constants";
import { addCurrentVideo, addCurrentChannel } from "./homeSlice";

const VideoWatchPage = () => {
  const dispatch = useDispatch();
  const videoDetails = useSelector((store) => store.home?.currentVideoDetails);
  const channelDetails = useSelector((store) => store.home?.currentChannelDetails);
  const [searchParams] = useSearchParams();
  const videoKey = searchParams.get("v");

  useEffect(() => {
    fetchData();
    dispatch(closeSideBarMenu());
  }, [videoKey, videoDetails, channelDetails]);

  const fetchData = async () => {
    try {
      let fetchedVideoDetails = videoDetails;

      if (!videoDetails || videoDetails.id !== videoKey) {
        const videoResponse = await fetch(`${YT_VIDEO_DETAILS_API}&id=${videoKey}`);
        const videoJson = await videoResponse.json();

        if (videoJson.items && videoJson.items.length > 0) {
          fetchedVideoDetails = videoJson.items[0];
          dispatch(addCurrentVideo(fetchedVideoDetails));
        }
      }

      const channelId = fetchedVideoDetails?.snippet?.channelId;
      if (channelId && (!channelDetails || channelDetails.id !== channelId)) {
        const channelResponse = await fetch(`${YT_CHANNEL_DETAILS}&id=${channelId}`);
        const channelJson = await channelResponse.json();

        if (channelJson.items && channelJson.items.length > 0) {
          dispatch(addCurrentChannel(channelJson.items[0]));
        }
      }
    } catch (error) {
      console.error("Error fetching video or channel details:", error);
    }
  };

  const { snippet } = videoDetails || {};
  const { title } = snippet || {};

  return (
    <div className="flex w-full mt-[3%] mx-[4%]">
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
          <div className="videoTitle w-full  line-clamp-2 text-xl font-medium mt-3 ">
            {videoDetails?.snippet?.title}
          </div>
          {channelDetails && channelDetails.id ? (
            <VideoDetails channelDetails={channelDetails} videoDetails={videoDetails} />
          ) : (
            <div>Loading channel details...</div>
          )}
          <CommentsContainer key={videoKey} videoId = {videoKey}/>
        </div>

        <div className="flex flex-col w-1/3 ml-4">
          <LiveChat />
          { title ? (
            <RecommendationVideo key={videoKey} videoTitle={title} videoId={videoKey} /> )  : ( 
            <div>Loading recommendations...</div>
          )}
        </div>
      </div>
    </div>
  )
};

export default VideoWatchPage;