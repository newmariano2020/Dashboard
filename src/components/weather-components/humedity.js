import React from "react";
import "./humedity.css";
import LinearProgress from "@mui/material/LinearProgress";

const HumidityBar = ({ humedity }) => {
  return (
    <div
      className="humidity-bar"
      style={{ margin: "15px", marginLeft: "5vh", marginTop: "15px" }}
    >
      <div
        className="humidity-fill"
        style={{
          height: humedity ? humedity : <LinearProgress color="secondary" />,
        }}
      >
        <span className="humidity-label" style={{ color: "#040B59" }}>
          {humedity}%
        </span>
      </div>
    </div>
  );
};

export default HumidityBar;
