import React from "react";
import ResultVideoCard from "./ResultVideoCard";
import { SEARCH_RESULT_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);

  const searchQuary = searchParams?.get("search_query");
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(SEARCH_RESULT_API + searchQuary);
    const json = await data.json();

    setVideos(json.items);
  };

  useEffect(() => {
    getVideos().catch((e) => {
      setVideos(null);
    });
  }, [searchQuary]);

  return (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
      {videos.map((video) => {
        return (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <ResultVideoCard key={video.id.videoId} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Results;
