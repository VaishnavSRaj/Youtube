import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timmer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getsearchSuggestions();
      }
    }, 200);
    return () => {
      clearInterval(timmer);
    };
  }, [searchQuery]);

  const getsearchSuggestions = async () => {
    console.log("API CALL-" + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col shadow-lg m-2 p-5  ">
      
      <div className="flex col-span-1 ">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          alt="menu"
          className="h-10 cursor-pointer"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <img
          alt="logo"
          className="h-8 mx-2"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-3-3.png"
        />
      </div>
      <div className=" col-span-10 px-10">
        <div>
          <input
            className=" w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button className="p-2 py-2 border bg-gray-300 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white shadow-lg rounded-lg w-[31rem] border border-gray-100 absolute">
            <ul>
              {suggestions.map((s) => (
                <li className="p-2 m-2 shadow-sm hover:bg-gray-100">{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1">
        <img
          alt="user-logo"
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
