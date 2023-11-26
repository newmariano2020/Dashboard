import React from "react";
import "./precipitation.css";


const Precipitation = ({ precipitation }) => {

  return (
    <div className="horizontal-bar-container">
    <div
      className="horizontal-bar-fill"
      style={{
        width: `${precipitation}%`
      }}
    >
      <span className="horizontal-bar-label">{precipitation}%</span>
    </div>
  </div>
  );
};

export default Precipitation;
