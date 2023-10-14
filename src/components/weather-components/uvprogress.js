import React from "react";
import "./uvprogress.css";
import LinearProgress from "@mui/material/LinearProgress";

const UvProgressBar = ({ uvIndex }) => {
  const uvIndexPercentage = (uvIndex / 12) * 100;

  function evaluarIndiceUV(indiceUV) {
    let color;
    let leyenda;

    if (indiceUV >= 0 && indiceUV <= 2) {
      color = "green";
      leyenda = "Bajo";
    } else if (indiceUV >= 3 && indiceUV <= 5) {
      color = "yellow";
      leyenda = "Moderado";
    } else if (indiceUV >= 6 && indiceUV <= 7) {
      color = "orange";
      leyenda = "Alto";
    } else if (indiceUV >= 8 && indiceUV <= 10) {
      color = "red";
      leyenda = "Muy alto";
    } else {
      color = "purple";
      leyenda = "Extremadamente alto";
    }

    return { color, leyenda };
  }

  
  const { color, leyenda } = evaluarIndiceUV(uvIndex);

  return (
    <div className="uv-progress-bar">
      <div
        className="uv-progress-fill"
        style={{
          width: `${uvIndexPercentage}%`,
          backgroundColor: color ? color : "#6F289D",
        }}
      ></div>
      <div className="uv-progress-label">
        {uvIndex ? uvIndex : <LinearProgress color="secondary" />}
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span style={{ color: color, fontSize: "15px" }}>{leyenda}</span>
      </div>
    </div>
  );
};

export default UvProgressBar;
