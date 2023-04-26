import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg p-5 w-48">
      <h1 className="font-bold">Home</h1>
      <ul>
        <li>Movies</li>
        <li>Games</li>
        <li>Musics</li>
        <li>Sports</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold pt-5">subscription</h1>
      <ul>
        <li>Movies</li>
        <li>Games</li>
        <li>Musics</li>
        <li>Sports</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Movies</li>
        <li>Games</li>
        <li>Musics</li>
        <li>Sports</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
