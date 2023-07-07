import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { kConverter } from "../utils/constants";
import moment from "moment/moment";

const VideoCard = ({ info }) => {
  

  

  return (
    <div className="space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg">
      <img
        className="rounded-xl w-full"
        alt="thumbnail"
        src={info?.snippet?.thumbnails.medium.url}
      />
      <div className="flex flex-col px-2">
      <h2 className="font-semibold">{info?.snippet?.title}</h2>
      <div className="flex items-center text-xs font-semibold text-gray-500">
      <p >{info?.snippet?.channelTitle}</p>
      <RxDotFilled />
      <h3>{kConverter(info?.statistics?.viewCount)} views</h3>
      <RxDotFilled />
      <h3 >{moment(info?.snippet?.publishedAt).fromNow()}</h3>
    </div>
    </div>
    </div>
  );
};

export default VideoCard;
