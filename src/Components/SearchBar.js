import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setSearchQuery, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className=" col-span-10 px-10">
      <div>
        <input
          className=" w-1/2 border border-gray-400 p-2 rounded-l-full"
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
        <button onClick={()=>{navigate("results/?search_query="+{query})}} className="p-2 py-2 border bg-gray-300 rounded-r-full">
          Search
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="fixed bg-white shadow-lg rounded-lg w-[31rem] border border-gray-100 absolute">
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
                  >
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
