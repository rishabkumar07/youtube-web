import { closeSideBarMenu } from "./appSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
const VideoWatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoKey = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSideBarMenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
  )
};

export default VideoWatchPage;