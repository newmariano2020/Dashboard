import React, { useEffect, useState } from "react";

import {
  WiDayRain,
  WiDayWindy,
  WiMeteor,
  WiHorizonAlt,
  WiHorizon,
  WiBarometer,
} from "react-icons/wi";
import UvProgress from "./uvprogress";
import HumidityBar from "./humedity";
import CircularProgress from "@mui/material/CircularProgress";

import "./day-progretion.css";
import Vane from './img/weather-vane.jpeg';
import BarometerImage from './img/barometer.jpeg';
import RainningImage from './img/rainning.webp';
import WindSpeed from './img/wind-speed.jpeg';
import RainingChance from './img/raining-chance.jpeg';
import SunUv from './img/uv-sun.jpeg';
import HumidityImage from './img/humidity.jpeg';
import Sunrise from './img/sunrise.jpeg';


let datas = {
  visibility: 6.1,
};

function findMax(numeros) {
  if (numeros.length === 0) {
    return undefined;
  }
  return Math.max(...numeros);
}

const DayProgretion = ({ data }) => {
  function evaluarVelocidadViento(velocidadViento) {
    let clasificacion;
    let color;

    if (velocidadViento >= 21 && velocidadViento <= 40) {
      clasificacion = "Moderado";
      color = "gray";
    } else if (velocidadViento >= 41 && velocidadViento <= 70) {
      clasificacion = "Fuerte";
      color = "orange";
    } else if (velocidadViento >= 71 && velocidadViento <= 120) {
      clasificacion = "Muy fuerte";
      color = "red";
    } else if (velocidadViento > 120) {
      clasificacion = "Huracanado";
      color = "purple";
    } else {
      clasificacion = "Calma";
      color = "#64C14C";
    }

    return { color, clasificacion };
  }

  function obtenerHoraDesdeCadena(cadena) {
    const posicionT = cadena.indexOf("T");
    if (posicionT !== -1) {
      const hora = cadena.slice(posicionT + 1, posicionT + 6);
      return hora;
    }
    return "Hora no encontrada";
  }
  const isMobile = window.innerWidth <= 700;
  const iconWidth = isMobile ? 25 : 50;
  
  const [uvStatus, setUvStatus] = useState();
  const [windStatus, setWindStatus] = useState();
  const [humedity, setHumedity] = useState();
  const [sunriseFix, setSunriseFix] = useState();
  const [sunsetFix, setSunsetFix] = useState();
  const [precipitation, setPrecipitation] = useState();
  const [wind_direction_10m, setWind_direction_10m] = useState();
  const [pressure, setPressure] = useState();
  const [dailyRainingHours, setDailyRainingHours] = useState(0);


 

  const handleUvStatus = (uvIndex) => {
    setUvStatus(findMax(uvIndex));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.current) {
       
        handleUvStatus(data.daily.uv_index_max);
        setWindStatus(data.current.windspeed_10m);
        setHumedity(data.current.relativehumidity_2m);
        setSunsetFix(obtenerHoraDesdeCadena(data.daily.sunset[0]));
        setSunriseFix(obtenerHoraDesdeCadena(data.daily.sunrise[0]));
        setPrecipitation(data.current.precipitation);
        setPressure(data.current.surface_pressure);
        setDailyRainingHours(data.daily.precipitation_hours[0]);
        setWind_direction_10m(getWindDirection(data.current.wind_direction_10m));
      }
    };

    fetchData();
  }, [data]);

  const humidity = datas.humedity;

  const windInfo = evaluarVelocidadViento(windStatus);
  const windColor = windInfo.color;
  const windClasificacion = windInfo.clasificacion;


  function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

  return (
    <div className="day-progretion-container">
      <div className="day-progretioncard-box"></div>

      <h2 className="info-title">Más información:</h2>
      <div className="cards-box-container">
        <div className="card-box " style={{justifyContent:'center', gap:'10px'}}>
          <div className="statistic-title-wind">
            <span>Indice de UV</span>
          </div>
          <div>
          <div className="wind-direction-vane progretion-images" style={{backgroundImage: `url(${SunUv})`}}>

</div>
          <UvProgress uvIndex={uvStatus} />
        </div>
        </div>
        <div className="card-box " style={{justifyContent:'space-evenly'}}>
          <div className=" " style={{ textAlign: "center" }}>
            <span className="statistic-title-wind">Velocidad del viento </span>
          </div>
          <div className="box-day-rise">
          <div className="pressure-image progretion-images" style={{backgroundImage: `url(${WindSpeed})`}}></div>
          <div style={{display:'flex', flexDirection:'row',gap:'10px'}}>           <div>
            <span
              className="statistics-wind-text"
              style={{
                color: windColor ? windColor : "#542472",
              }}
            >
              {windStatus ? windStatus : <CircularProgress color="secondary" />}{" "}
              Km/h
            </span>

          </div>
          <div
            className="wind-box-container "
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: windColor ? windColor : "#542472",
            }}
          >
            {" "}
            <span className="statistics-wind-text">{windClasificacion}</span>
          </div>
          </div></div>

         
        </div>
        <div className="card-box ">
          <div className="statistic-title-wind" >
            <span>Salida y Puesta del Sol</span>
          </div>
          <div className="box-day-rise" >
          <div className="pressure-image progretion-images" style={{marginBottom:'0px',backgroundImage: `url(${Sunrise})`}}>

</div>
<div className="sunrise-sunset-control" >
          <div
            style={{
              display: "flex",
              justifyContent: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           
            
            <WiHorizonAlt size={iconWidth} color="#E7DD13 " />
            <span className="sun-text-hour" style={{ color: "#B4880A" }}>
              {sunriseFix ? sunriseFix : <CircularProgress color="secondary" />}
              AM
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WiHorizon size={iconWidth} color="#A9A20B " />
            <span className="sun-text-hour" style={{ color: "#B4880A" }}>
              {sunsetFix ? sunsetFix : <CircularProgress color="secondary" />}PM
            </span>
          </div>
          </div>
          </div>
        </div>
        <div className="card-box card-box-welcome">
          <span className="statistic-title-wind">
            Dirección del viento
            </span>

          <div>
            <div className="wind-direction-vane progretion-images" style={{backgroundImage: `url(${Vane})`}}>

            </div>
            <span className="statistics-title statistic-welcome-text">
            {wind_direction_10m ? wind_direction_10m : <CircularProgress color="secondary" />}
            </span>
          </div>
        </div>
        <div className="card-box card-box-width-down">
          <div className="humedity-title">
            <span>Humedad</span>
            
          </div>
<div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
          <div className="pressure-image progretion-images" style={{backgroundImage: `url(${HumidityImage})`}}>

            </div>
          <HumidityBar humedity={humedity} />
        </div>
        </div>
        <div className="card-box-width-down">
          
            <span className="statistic-title-wind">Probabilidad de lluvias: </span>
          
          <div>
          <div className="pressure-image progretion-images" style={{backgroundImage: `url(${RainingChance})`}}>
          </div>
          <span className="statistics-title">{precipitation}%</span> 
          </div>
        </div>
        <div className="card-box card-box-welcome">
          <span className="statistic-title-wind">
           Presión Atmosférica
            </span>

          <div>
            <div className="pressure-image progretion-images" style={{backgroundImage: `url(${BarometerImage})`}}>

            </div>
            <span className="statistics-title statistic-welcome-text">
          {pressure ? pressure : <CircularProgress color="secondary" />} HPa
            </span>
          </div>
        </div>
        <div className="card-box card-box-welcome">
          <span className="statistic-title-wind">
           Horas de Lluvia estimadas para hoy:
            </span>

          <div>
            <div className="pressure-image progretion-images" style={{backgroundImage: `url(${RainningImage})`}}>

            </div>
            <span className="statistics-title statistic-welcome-text">
            {dailyRainingHours !== undefined && dailyRainingHours !== null ? (
  dailyRainingHours
) : (
  <CircularProgress color="secondary" />
)} Hs.
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DayProgretion;
