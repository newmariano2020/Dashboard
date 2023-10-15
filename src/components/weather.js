import React from "react";
import Temperature from "./weather-components/temperature";
import DayProgretion from "./weather-components/day-progretion";
import DayComplete from "./weather-components/day-complete";


const Weather = ( {data} ) => {
  const  weatherData = data;
  return (
    <div style={{ padding: "50px", height: "100vh", backgroundColor: "black" }}>
      <div
        style={{
          backgroundColor: "#9CC4E5",
          height: "90vh",
          width: "85vh",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ color: "white", fontSize: "40px", textAlign: "center" }}>
          Clima Leandro N Alem
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
            <Temperature data={weatherData} />
            <DayProgretion data={weatherData}/>
          </div>
          <DayComplete data={weatherData}/>
        </div>
      </div>
    </div>
  );
};

export default Weather;
