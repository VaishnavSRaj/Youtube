import React from "react";

const VideoCard = ({ info }) => {
  

  

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails.medium.url}
      />
      <h3 className="font-bold">{info?.snippet?.title}</h3>
      <h3 className="text-gray-700">{info?.snippet?.channelTitle}</h3>
      <h3 className="text-gray-700">{info?.statistics?.viewCount} views</h3>
      <h3 className="text-gray-700">{info?.snippet?.publishedAt}</h3>
    </div>
  );
};

export default VideoCard;
