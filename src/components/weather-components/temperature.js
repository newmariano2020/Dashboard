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
import "./temperature.css";

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

  if (weatherInfo) {
    const { icon, description } = weatherInfo;

    return { icon, description };
  } else {
    return { icon: null, description: "Código de pronóstico desconocido" };
  }
}

const Temperature = ({ data }) => {
  const [temperature, setTemperature] = useState(null);
  const [aparentTemp, setAparentTemp] = useState();
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherCodeDescription, setWeatherCodeDescription] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [weekDayCode, setWeekDayCode] = useState(null);
  const [daysWeek, setDaysWeek] = useState(null);

  const [timeData, setTimeData] = useState(null);
  const handlerTime = (time) => {
    let timefix = time.slice(0, 10) + " " + time.slice(11);
    setTimeData(timefix);
  };

  const handlerTimeWeek = (time) => {
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
        const { icon, description } = getWeatherIconAndDescription(
          data.current.weathercode
        );
        setWeatherIcon(icon);
        setWeatherCodeDescription(description);
        setAparentTemp(data.current.apparent_temperature);
        setDailyData(
          data.daily.weather_code.map((code) =>
            getWeatherIconAndDescription(code)
          )
        );
        setWeekDayCode(data.daily.time);
      }
    };
    fetchData();
  }, [data]);

  const weekHandler = (weekdata) => {
    const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    setDaysWeek(
      weekdata.map((date) => {
        const dateObj = new Date(date);
        const dayIndex = (dateObj.getDay() + 1) % 7; 
        const dayweek = weekDays[dayIndex];
        return dayweek;
      })
    );
  };

  useEffect(() => {
    if (weekDayCode) {
      weekHandler(weekDayCode);
    }
  }, [ weekDayCode]);

  
  return (
    <div className="box-temperature_data">
      <div className="resumen-temperatura ">
        <span style={{ color: "#ffffff" }}>Ahora</span>
        <div className="icon-style-weather">
          {weatherIcon}
          <span
            className="resumen-temperatura_description"
            style={{ color: "white" }}
          >
            {weatherCodeDescription}
          </span>
        </div>
        <div className="temperature-box-termic-wraper">
          <div>
            <div className="resumen-temperatura_data">Temperatura: </div>
            <div>
              <span className="temperature-data">
                {temperature ? (
                  temperature
                ) : (
                  <CircularProgress color="secondary" />
                )}{" "}
                C°
              </span>
            </div>
          </div>
          <div>
            <div className="resumen-temperatura_data">Térmica: </div>
            <div>
              <span className="temperature-data">
                {aparentTemp ? (
                  aparentTemp
                ) : (
                  <CircularProgress color="secondary" />
                )}{" "}
                C°
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resumen-temperatura-max-min">
        <div className="min-temp">
          <span style={{ color: "white" }}>Min: </span>
          <span style={{ color: "white" }}>
            {minTemp ? minTemp : <CircularProgress color="inherit" />}°C
          </span>
        </div>
        <div
          style={{
            margin: "0,5px",
            width: "1px",
            height: "8vh",
            backgroundColor: "#ffffff",
          }}
          className="divider-temp"
        >
          {" "}
        </div>
        <div className="max-temp">
          <span style={{ color: "white" }}>Max: </span>
          <span style={{ color: "white" }}>
            {maxTemp ? maxTemp : <CircularProgress color="inherit" />} °C
          </span>
        </div>
      </div>
      <div className="daily-weather-box">
        {dailyData ? (
          dailyData.map((weatherInfo, index) => (
            <div key={index} className="weekly-weather">
              <div className="day-of-week">
  {daysWeek && daysWeek.length > index && daysWeek[index] !== null
    ? daysWeek[index]
    : <CircularProgress color="secondary" />
  }
</div>
              <div className="icon-style-weather">{weatherInfo.icon}</div>
              <div className="resumen-temperatura_description">
                {" "}
                {weatherInfo.description}
              </div>
            </div>
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
    </div>
  );
};

export default Temperature;
