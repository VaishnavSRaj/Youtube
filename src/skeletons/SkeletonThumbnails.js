import React from "react";
import SkeletonElements from "./SkeletoneElements";
import Shimmer from "./Shimmer";

const SkeletonThumbnails = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div className={`  skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonElements type="thumbnail" />
        </div>
        <div>
          <SkeletonElements type="title" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
        </div>
      </div>
      <Shimmer/>
    </div>
  );
};

export default SkeletonThumbnails;
