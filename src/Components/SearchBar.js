import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {CiSearch} from "react-icons/ci"

const SearchBar = ({ setSearchQuery, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  
  const navigate = useNavigate();

  return (
    <div className="my-2">
      <div className="flex items-center shadow-lg md:shadow-none">
        <input
          className="bg-gray-100 outline-blue-400 rounded-full p-1 m-1 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
          type="text"
          placeholder="search"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              navigate(`results/?search_query=${e.target.value}`);
            }
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setQuery(e.target.value);
          }}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          value={query}
        />
        <button onClick={()=>{navigate(`results/?search_query=${query}`)}} className="hidden md:bg-gray-100 md:block p-[0.61rem] text-xl m-0 rounded-full rounded-l-none border-2 border-l-0">
          <CiSearch/>
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="border-2 rounded-xl py-2 w-[35rem] border-gray-100 absolute bg-white font-medium shadow-sm">
          <ul>
            {suggestions.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setShowSuggestions(false);
                    setQuery(item);
                  }}
                >
                  <Link
                    to={`results/?search_query=${item}`}
                    className="flex px-5 py-1 gap-2 items-center hover:bg-gray-100"
                  > <CiSearch/>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
