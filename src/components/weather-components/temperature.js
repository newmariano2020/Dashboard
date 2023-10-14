import React, { useState, useEffect } from "react";
import {
  WiDayRain,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiCloud,
  WiDayFog,
  WiFog,
  WiShowers,
  WiRain,
  WiRainWind,
  WiNightSleet,
  WiNightRain,
  WiNightRainWind,
  WiNightSnow,
  WiNightSnowWind,
  WiDaySnow,
  WiDaySnowWind,
  WiNightSnowThunderstorm,
  WiSnow,
  WiNightHail,
  WiNightRainMix,
  WiNightSprinkle,
  WiDaySnowThunderstorm,
  WiNightStormShowers,
  WiThunderstorm,
  WiHail,
} from "react-icons/wi";
import CircularProgress from "@mui/material/CircularProgress";

const codeToIconAndDescriptionMap = {
  0: { icon: <WiDaySunny />, description: "Día soleado" },
  1: { icon: <WiDaySunnyOvercast />, description: "Mayormente despejado" },
  2: { icon: <WiDayCloudy />, description: "Parcialmente nublado" },
  3: { icon: <WiCloud />, description: "Nublado" },
  45: { icon: <WiDayFog />, description: "Niebla" },
  48: { icon: <WiFog />, description: "Niebla de escarcha" },
  51: { icon: <WiShowers />, description: "Llovizna, intensidad ligera" },
  53: { icon: <WiRain />, description: "Llovizna, intensidad moderada" },
  55: { icon: <WiRainWind />, description: "Llovizna densa" },
  61: { icon: <WiNightSleet />, description: "Lluvia leve" },
  63: { icon: <WiNightRain />, description: "Lluvia moderada" },
  65: { icon: <WiNightRainWind />, description: "Lluvia intensa" },
  66: { icon: <WiNightSnow />, description: "Lluvia helada ligera" },
  67: { icon: <WiNightSnowWind />, description: "Lluvia helada fuerte" },
  71: { icon: <WiDaySnow />, description: "Caida de nieve leve" },
  73: { icon: <WiDaySnowWind />, description: "Caida de nieve moderada" },
  75: {
    icon: <WiNightSnowThunderstorm />,
    description: "Caida de nieve fuerte",
  },
  77: { icon: <WiSnow />, description: "Granizo" },
  80: { icon: <WiNightHail />, description: "Lluvias leves" },
  81: { icon: <WiNightRainMix />, description: "Lluvias moderadas" },
  82: { icon: <WiNightSnowThunderstorm />, description: "Lluvias intensas" },
  85: {
    icon: <WiNightSprinkle />,
    description: "Chaparrones de nieve ligeros",
  },
  86: {
    icon: <WiDaySnowThunderstorm />,
    description: "Chaparrones de nieve intensos",
  },
  95: {
    icon: <WiNightStormShowers />,
    description: "Tormenta eléctrica leve o moderada",
  },
  96: {
    icon: <WiThunderstorm />,
    description: "Tormenta eléctrica con granizo leve",
  },
  99: {
    icon: <WiHail />,
    description: "Tormenta eléctrica con granizo fuerte",
  },
};

function getWeatherIconAndDescription(code) {
  const weatherInfo = codeToIconAndDescriptionMap[code];
  console.log('im call');
  if (weatherInfo) {
    const { icon, description } = weatherInfo;
    console.log(icon, description);
    return { icon, description };
  } else {
    return { icon: null, description: "Código de pronóstico desconocido" };
  }
}


const Temperature = ({ data }) => {
  const [temperature, setTemperature] = useState(null);
  const [timeData, setTimeData] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherCodeDescription, setWeatherCodeDescription] = useState(null);

  const handlerTime = (time) => {
    let timefix = time.slice(0, 10) + " " + time.slice(11);
    setTimeData(timefix);
  };

  function findMin(numeros) {
    if (numeros.length === 0) {
      return undefined;
    }
    return Math.min(...numeros);
  }

  function findMax(numeros) {
    if (numeros.length === 0) {
      return undefined;
    }
    return Math.max(...numeros);
  }

  const handleTemp = (min, max) => {
    setMinTemp(findMin(min));
    setMaxTemp(findMax(max));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.current) {
        const temp = data.current.temperature_2m;
        setTemperature(temp);
        handlerTime(data.current.time);
        handleTemp(
          data.daily.temperature_2m_min,
          data.daily.temperature_2m_max
        );
        const { icon, description } = getWeatherIconAndDescription(data.current.weathercode) 
        setWeatherIcon(icon)
        setWeatherCodeDescription(description)
        
    };
  }
    fetchData();
  }, [data]);

  return (
    <div style={{ height: "100%" }}>
      <div
        className="box-temperature_data"
        style={{
          gap: "2vh",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          width: "25vh",
        }}
      >
        <div
          className="resumen-temperatura "
          style={{
            height: "26vh",
            width: "20vh",
            backgroundColor: "#8A71DF",
            borderRadius: "20px",
            marginTop: "2vh",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "10px", fontSize: "70px", color:'yellow' }}  >
            {weatherIcon}
          </div>
          <span style={{ color: "white" }}>{weatherCodeDescription}</span>
          <div style={{ color: "white", fontSize: "20px", marginTop: "15px" }}>
            Temperatura:{" "}
          </div>
          <div>
            <span
              style={{
                color: "white",
                fontSize: "30px",
                color: "#FEF647",
                fontWeight: "bold",
              }}
            >
              {temperature ? (
                temperature
              ) : (
                <CircularProgress color="secondary" />
              )}{" "}
              C°
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span
              style={{
                fontSize: "18px",
                color: "#ffffff",
                textShadow: "1px 1px 2px #808080, -1px -1px 2px #808080}}",
              }}
            >
              {timeData ? timeData : <CircularProgress color="info" />}
            </span>
          </div>
        </div>
        <div
          className="resumen-temperatura_data"
          style={{
            height: "20vh",
            width: "20vh",
            background: "rgb(0,206,255)",
            background:
              "linear-gradient(100deg, rgba(0,206,255,1) 0%, rgba(255,72,0,1) 100%)",
            borderRadius: "20px",
            marginBottom: "2vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="min-temp" style={{ marginRight: "5px" }}>
            <span style={{ color: "white" }}>Min: </span>
            <span style={{ color: "white" }}>
              {minTemp ? minTemp : <CircularProgress color="inherit" />}°C
            </span>
          </div>
          <div
            style={{ width: "1px", height: "8vh", backgroundColor: "#ffffff" }}
            className="divider-temp"
          >
            {" "}
          </div>
          <div className="max-temp" style={{ marginLeft: "5px" }}>
            <span style={{ color: "white" }}>Max: </span>
            <span style={{ color: "white" }}>
              {maxTemp ? maxTemp : <CircularProgress color="inherit" />} °C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
