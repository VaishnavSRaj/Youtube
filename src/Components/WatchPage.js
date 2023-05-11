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
    <div className=" w-full " >
      <div className="flex  ">
      <div className="pl-6 ">
       <VideoPreview id={videoId}/>
      </div>
      

    <div className="w-full  bg-slate-100 ">
        <LiveChat/>
      </div>
      </div>
      
      <div className="py-2 px-3 m-3">
      <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
