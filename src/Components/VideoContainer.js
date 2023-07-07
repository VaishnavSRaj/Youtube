import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import SkeletonThumbnails from "../skeletons/SkeletonThumbnails";


const VideoContainer = () => {
  // console.log("custom-hook"+videos);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getvideo();
  }, []);

  const getvideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json);
  };
  if (!videos) return (
    <div className="md:flex md:flex-wrap md:justify-center">
   { [1, 2, 3, 4, 5 ,6,7,8,9,10].map((n) =><SkeletonThumbnails key={n} theme={""} />)}
    </div>)
    
  return (
    <div className="md:flex md:flex-wrap md:justify-center">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
