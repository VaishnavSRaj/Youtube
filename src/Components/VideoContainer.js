import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoInfo from "../utils/useVideoInfo";

const VideoContainer = () => {

  const videos = useVideoInfo()
  console.log("custom-hook"+videos);
  // const [videos, setVideos] = useState([]);
  

  // useEffect(() => {
  //   getvideo();
  // }, []);

  // const getvideo = async () => {
  //   const data = await fetch(YOUTUBE_VIDEO_API);
  //   const json = await data.json();
  //   setVideos(json.items);
  //   console.log(json);
  // };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
