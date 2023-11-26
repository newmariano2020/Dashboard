import React, { useEffect, useState } from "react";
import Temperature from "./weather-components/temperature";
import DayProgretion from "./weather-components/day-progretion";
import DayComplete from "./weather-components/day-complete";
import climaIcon from "./weather-components/img/clima-icon.jpeg";
import "./weather.css";
import { CircularProgress } from "@mui/material";

const Weather = ({ data }) => {
  const [timeData, setTimeData] = useState(null);

  const handlerTime = (time) => {
    let timefix = time.slice(0, 10) + " " + time.slice(11);
    setTimeData(timefix);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.current) {
        const temp = data.current.temperature_2m;
      
        handlerTime(data.current.time);
      }
    };
    fetchData();
  }, [data]);
console.log(data)
  const weatherData = data;
  return (
    <div className="weather-container">
      <div className="weather-column">
        <div className="app-intro">
          <div className="app-intro-title">
            <span className="app-intro-text">
              El clima de tu ciudad, llevalo contigo.
            </span>
          </div>
          <div>
            <div
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(180deg)";
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              style={{
                height: "15vh",
                width: "15vh",
                backgroundImage: `url(${climaIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                borderRadius: "50%",
                border: "15px solid #ccc",
                transition: "transform 5s",
                transformStyle: "preserve-3d",
                cursor: "pointer",
              }}
            ></div>
          </div>
        </div>
        <h2 className="weather-city">Clima en Leandro N Alem</h2>
        <div className="weather-time">
          <span className="weather-time-text">
            {timeData ? timeData : <CircularProgress color="info" />}
          </span>
        </div>

        <div className="weather-box">
          <div className="temperature-box">
            <Temperature data={weatherData} />
          </div>
          <DayProgretion data={weatherData} />
          <DayComplete data={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
