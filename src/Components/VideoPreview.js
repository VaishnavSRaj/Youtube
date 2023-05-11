import React from 'react'
import { useState, useEffect } from 'react';
import { VIDEO_API } from '../utils/constants';
import VideoInfoComponent from './VideoInfoComponent';
import VideoPreviewShimmer from './VideoPreviewShimmer';

const VideoPreview = ({id}) => {

  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(VIDEO_API + id);
    const json = await data.json();
    setVideo(json.items[0]);
  };
  if (video.length === 0) return <VideoPreviewShimmer />
  return (
    <div>
    <iframe
          width="1100"
          height="550"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
        <VideoInfoComponent info={video}/>
      </div>
    </div>
  )
}

export default VideoPreview
