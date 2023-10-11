import React from "react";
import "./humedity.css";

const HumidityBar = ({ humidity }) => {
    return (
      <div className="humidity-bar" style={{margin:'15px', marginLeft:'5vh', marginTop:'15px'}}>
      
        <div className="humidity-fill" style={{ height: `${humidity}%` }}>
          <span className="humidity-label">{humidity}%</span>
        </div>
      </div>
    );
  };

export default HumidityBar;
