import React, { useEffect, useState } from "react";
import Temperature from "./weather-components/temperature";
import DayProgretion from "./weather-components/day-progretion";
import DayComplete from "./weather-components/day-complete";
import climaIcon from "./weather-components/img/clima-icon.jpeg";
import "./weather.css";
import { CircularProgress } from "@mui/material";


const Weather = () => {
  const cityesMisiones = [
    
      { name: "Apóstoles", lat: -27.9168, lon: -55.7551 },
      { name: "Aristóbulo del Valle", lat: -27.0917, lon: -54.9736 },
      { name: "Bernardo de Irigoyen", lat: -26.2558, lon: -53.6453 },
      { name: "Candelaria", lat: -27.4603, lon: -55.7403 },
      { name: "Campo Grande", lat: -27.2072, lon: -55.5167 },
      { name: "Colonia Alicia", lat: -27.4667, lon: -55.1667 },
      { name: "Colonia Alberdi", lat: -27.4072, lon: -55.1281 },
      { name: "Colonia Aurora", lat: -27.4742, lon: -54.5292 },
      { name: "Colonia Delicia", lat: -26.6181, lon: -54.7436 },
      { name: "Colonia Elía", lat: -27.4667, lon: -55.1667 },
      { name: "Colonia Guaraypo", lat: -27.4667, lon: -55.1667 },
      { name: "Colonia Liebig", lat: -27.5967, lon: -55.5167 },
      { name: "Colonia Mado", lat: -27.4667, lon: -55.1667 },
      { name: "Colonia Polana", lat: -27.1742, lon: -54.7567 },
      { name: "Colonia Santo Domingo", lat: -27.4167, lon: -55.1667 },
      { name: "Colonia San José", lat: -27.4667, lon: -55.1667 },
      { name: "Colonia Victoria", lat: -27.4083, lon: -55.0236 },
      { name: "Colonia Wanda", lat: -25.9653, lon: -54.5636 },
      { name: "Dos de Mayo", lat: -27.0222, lon: -54.6717 },
      { name: "El Soberbio", lat: -27.2981, lon: -54.1992 },
      { name: "Eldorado", lat: -26.408, lon: -54.6986 },
      { name: "Garuhapé", lat: -26.8217, lon: -54.8217 },
      { name: "Garupá", lat: -27.4817, lon: -55.8222 },
      { name: "Jardín América", lat: -27.0439, lon: -55.2264 },
      { name: "Leandro N. Alem", lat: -27.6025, lon: -55.1292 },
      { name: "Montecarlo", lat: -26.5665, lon: -54.7571 },
      { name: "Oberá", lat: -27.4874, lon: -55.1208 },
      { name: "Posadas", lat: -27.3671, lon: -55.8961 },
      { name: "Puerto Esperanza", lat: -26.0153, lon: -54.6583 },
      { name: "Puerto Iguazú", lat: -25.5972, lon: -54.5786 },
      { name: "Puerto Libertad", lat: -25.9317, lon: -54.6172 },
      { name: "Puerto Rico", lat: -26.7956, lon: -55.0242 },
      { name: "San Ignacio", lat: -27.2553, lon: -55.5389 },
      { name: "San Javier", lat: -27.6889, lon: -55.0542 },
      { name: "San Pedro", lat: -26.6223, lon: -54.1136 },
      { name: "San Vicente", lat: -26.6209, lon: -54.1306 },
      { name: "Santa Ana", lat: -27.5767, lon: -55.1267 },
      { name: "Wanda", lat: -25.9742, lon: -54.5636 },
      { name: "Colonia Yapeyú", lat: -27.4967, lon: -55.0167 },
    
  ];


  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Sao Paulo");
  const [timeData, setTimeData] = useState(null);
  const [cityApiCall, setCityApiCall] = useState(cityesMisiones[24]);
 





  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cityApiCall && cityApiCall.lat && cityApiCall.lon) {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}?latitude=${cityApiCall.lat}&longitude=${cityApiCall.lon}&minutely_15=relativehumidity_2m&current=precipitation,weathercode&current=temperature_2m&current=rain,surface_pressure&current=relativehumidity_2m,windspeed_10m&visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&daily=uv_index_max&timezone=America%2FSao_Paulo&hourly=temperature_2m&forecast_days=1&current=wind_direction_10m&current=apparent_temperature&forecast_days=7&daily=weather_code&daily=precipitation_hours`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [cityApiCall]);
  const handleSelectedCity = (city) => {
    setSelectedCity(city);
    handleCityChange(city);
  };

  const handleCityChange = (selectedIndex) => {
    const selectedCity = cityesMisiones[selectedIndex];
    setCityApiCall(selectedCity);
    console.log(selectedCity)
  };

  


  const handlerTime = (time) => {
    let timefix = time.slice(0, 10) + " " + time.slice(11);
    setTimeData(timefix);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (weatherData && weatherData.current) {
        const temp = weatherData.current.temperature_2m;

        handlerTime(weatherData.current.time);
      }
    };
    fetchData();
  }, [weatherData]);


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
        <select className="weather-select" onChange={(e) => handleSelectedCity(e.target.value)}>
          <option>Selecciona una ciudad</option>
          {cityesMisiones.map((city,index) => (
            <option key={index} value={index}>
              {city.name}
            </option>
          ))}
        </select>
        <h2 className="weather-city">{cityApiCall.name}</h2>
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
