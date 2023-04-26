import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./constants";

const useVideoInfo = (hhh) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getvideo();
  }, []);

  const getvideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json);
  };

  return videos
};

export default useVideoInfo;
