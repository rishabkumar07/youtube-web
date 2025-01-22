import LikeIcon from "../assets/icons/svgs/LikeIcon";
import DislikeIcon from "../assets/icons/svgs/DislikeIcon";
import ShareIcon from "../assets/icons/svgs/ShareIcon";
import MoreSettingIcon from "../assets/icons/svgs/MoreSettingsIcon";
import IconButton from "@mui/material/IconButton";
import { formatViews } from "./utils/helperMethods";
const VideoDetails = ({channelDetails, videoDetails}) => {
  return (
    <div className="channelInfo w-full h-14 flex justify-between items-center mt-2 ">
      <div className="left flex w-1/2  gap-5">
        <div className="flex items-center gap-3">
          <div className="channelImg ">
            <IconButton className="ml-[-4px]">
              <img
                  className="w-10 rounded-full"
                  src={channelDetails?.snippet?.thumbnails?.medium?.url}
                  alt="channelImg"
                />
            </IconButton>
          </div>
          <div className="channelNameContainer ">
            <div className="channelName line-clamp-1 text-base font-medium">
                {channelDetails?.snippet?.title}
            </div>
            <div className="subcribersCount">
              <div
                className={`subcribers viewCount text-[#737373] font-medium text-xs`}
              >
                {formatViews(channelDetails?.statistics?.subscriberCount)}{" "}
                subscribers
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center">
          <div
            className={`subscribeBtn w-24 h-9  font-medium text-sm 
              cursor-pointer  rounded-full flex items-center 
              justify-center bg-black 
              hover:bg-[#232323] active:bg-[#3f3f3f] text-white
            `}
          >
            Subscribe
          </div>
        </div>
      </div>
      <div className="right w-1/2 flex items-end justify-end gap-2">
        <div className="flex">
          <div
            className={`bg-[#0000000d] hover:bg-[#e9e7e7] active:bg-[#e5e3e3]
              cursor-pointer rounded-full rounded-r-none p-2   
              h-9 w-[88px] flex justify-center items-center`}>
            <div className={"flex items-center justify-center"}>
              <LikeIcon color={"#000"} />
              <span className="text-sm font-medium ml-1">
                {formatViews(videoDetails?.statistics?.likeCount)}
              </span>
            </div>
          </div>
          <div
            className={`bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]
              flex h-9 items-center justify-center`}>
            <div
              className={`border-r h-7 border-[#ccc]`}
            ></div>
          </div>
          <div
            className={`bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]
              cursor-pointer rounded-full rounded-l-none p-2 h-9 w-[52px] flex justify-center items-center`}>
            <DislikeIcon color={"#000"} />
          </div>
        </div>
        <div
          className={`bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]
            cursor-pointer rounded-full p-2 h-9 w-[92px] flex justify-center items-center`}>
          <div className="flex items-center justify-center gap-2">
            <ShareIcon color={"#000"} />
            <span className="text-sm font-medium">Share</span>
          </div>
        </div>
        <div
          className={`bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]
            cursor-pointer rounded-full  p-2 w-9  h-9  flex justify-center items-center rotate-90`}>
          <MoreSettingIcon color={"#000"} />
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;