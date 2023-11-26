import React from "react";
import "./humedity.css";
import LinearProgress from "@mui/material/LinearProgress";

const HumidityBar = ({ humedity }) => {
  return (
    <div className="horizontal-bar-container">
    <div
      className="horizontal-bar-fill"
      style={{
        width: `${humedity}%`
      }}
    >
      <span className="horizontal-bar-label">{humedity}%</span>
    </div>
  </div>
  );
};

export default HumidityBar;
