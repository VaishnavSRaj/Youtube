import { useEffect, useState } from "react";
import { VIDEO_API} from "./constants";

const useVideoInfo = (id) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getvideo();
  }, []);

  const getvideo = async () => {
    const data = await fetch(VIDEO_API + id);
    const json = await data.json();
    setVideos(json.items[0]);
    
    
  };

  return videos
};

export default useVideoInfo;
