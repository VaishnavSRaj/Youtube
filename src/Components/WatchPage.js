import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import useVideoInfo from "../utils/useVideoInfo";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" w-full " >
      <div className="flex  ">
      <div className="pl-6 ">
        <iframe
          width="1100"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
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
