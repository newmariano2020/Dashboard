import React from "react";
import "./precipitation.css";
import LinearProgress from "@mui/material/LinearProgress";

const Precipitation = ({ precipitation }) => {
   const numberData = 8
  return (
    <div
      className="precipitation-bar"
      
    >
      <div
        className="precipitation-fill"
        style={{
            height: precipitation === 0 ? 0 : `${precipitation}%`,
          
        }}
      >
        <span className="precipitation-label" style={{ color: "#040B59" }}>
          {precipitation}%
        </span>
      </div>
    </div>
  );
};

export default Precipitation;
