import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoInfoComponent from "./VideoInfoComponent";
import VideoPreview from "./VideoPreview";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])


  return (
    <div className="md:flex md:flex-wrap md:justify-center md:w-full mt-4" >
     
      
       <VideoPreview id={videoId}/>
      
       <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm">

    <div className="bg-gray-50">
        <LiveChat/>
      </div>
    
      
     
    </div>
    </div>
  );
};

export default WatchPage;
