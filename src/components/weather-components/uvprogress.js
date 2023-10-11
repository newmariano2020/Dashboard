import React from "react";
import "./uvprogress.css";

const UvProgressBar = ({ uvIndex }) => {
  const uvIndexPercentage = (uvIndex / 12) * 100;

  return (
    <div className="uv-progress-bar">
        
      <div
        className="uv-progress-fill"
        style={{ width: `${uvIndexPercentage}%` }}
      ></div>
      <div className="uv-progress-label">{uvIndex}</div>
    </div>
  );
};

export default UvProgressBar;
