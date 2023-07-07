import React, { useEffect, useState } from "react";

import { kConverter } from "../utils/constants";

const VideoInfoComponent = ({ info }) => {
  
  

  const {
    snippet: { channelTitle, title, description, publishedAt },
    statistics: { viewCount },
  } = info;
  const ViewCount = kConverter(viewCount);
  const [showDescription, setShowDescription] = useState(false);

  const shortenDescription= showDescription?description:description.substring(0, 200)+"...";
  const toggleDescription=()=>{
    setShowDescription(!showDescription);
    
  }
  const buttonText = showDescription ? "less" : "more";

  return (
    <div className="md:mt-2 m-2">
      <h2 className="md:text-lg font-sans text-sm font-semibold">{title}</h2>
      <div className="flex items-center">
        <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-5 md:p-7 h-2"></div>
        <div className="ml-2">
          <h2 className="font-semibold text-sm md:text-base">{channelTitle}</h2>
          <p className="text-gray-500 text-sm">xx subscribers</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg p-2 mt-2">
        <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base">
             {ViewCount} views &nbsp; {publishedAt} 
          </p>
          <p className="text-sm md:text-base">{shortenDescription}</p>
         {showDescription && <br />}
           
          <button className="font-semibold" onClick={toggleDescription}>show {buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfoComponent;
