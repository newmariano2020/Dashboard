import React from "react";
import Temperature from "./weather-components/temperature";
import DayProgretion from "./weather-components/day-progretion";
import DayComplete from "./weather-components/day-complete";

const Weather = () => {
  return (
    <div style={{ padding: "50px", height: "100vh", backgroundColor: "black" }}>
      <div
        style={{
          backgroundColor: "#9CC4E5",
          height: "85vh",
          width: "85vh",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ color: "white", fontSize: "40px", textAlign: "center" }}>
          Clima
        </h1>

        <div className="container-weather" style={{ flexDirection: "row" }}>
          <div
            className="temperature-box"
            style={{
              height: "55vh",
              width: "25vh",

              borderRadius: "20px",
              margin: "4vh",
              display: "flex",
              flexDirection: "row",
              marginTop: "5vh",
            }}
          >
            <Temperature />
            <DayProgretion />
          </div>
          <DayComplete />
        </div>
      </div>
    </div>
  );
};

export default Weather;
