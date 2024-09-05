import { closeSideBarMenu } from "./appSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat";
import CommentsContainer from "../CommentsContainer";

const VideoWatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoKey = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSideBarMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
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
        </div>
        <div className="w-1/3 ml-4">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer videoId = {videoKey}/>
    </div>
  )
};

export default VideoWatchPage;