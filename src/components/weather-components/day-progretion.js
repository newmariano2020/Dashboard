import React, { useEffect, useState } from "react";
import climaIcon from "./img/clima-icon.jpeg";
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
import Precipitation from "./precipitation";
import "./day-progretion.css";

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

  const [uvStatus, setUvStatus] = useState();
  const [windStatus, setWindStatus] = useState();
  const [humedity, setHumedity] = useState();
  const [sunriseFix, setSunriseFix] = useState();
  const [sunsetFix, setSunsetFix] = useState();
  const [precipitation, setPrecipitation] = useState();

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
      }
    };

    fetchData();
  }, [data]);

  const humidity = datas.humedity;

  const windInfo = evaluarVelocidadViento(windStatus);
  const windColor = windInfo.color;
  const windClasificacion = windInfo.clasificacion;

  return (
    <div
      className="day-progretion-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50vh",

        marginLeft: "3.5vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#8A71DF",
          marginTop: "4px",
          display: "flex",
          flexDirection: "row",
          gap: "6vh",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "48vh",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#8A71DF",
          height: "12vh",
          width: "48vh",

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "6vh",
          alignItems: "center",
        }}
        className="day-progretion"
      >
        <div style={{ textAlign: "center", height: "8vh", width: "40%" }}>
          <span className="day-text">
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
      <h2
        style={{
          color: "white",
          fontSize: "20px",
          textAlign: "center",
          animation: "glow 2s infinite",
          textShadow: "0 0 5px #000000, 0 0 10px #434037",
        }}
      >
        Estadísticas
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50vh",
          flexWrap: "wrap",
          gap: "2vh",
        }}
        className="cards-box-container"
      >
        <div
        className="card-box"
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
           
            borderRadius: "20px",
          }}
        >
          <div className="statistics-title">
            <span>Indice de UV</span>
          </div>
          <UvProgress uvIndex={uvStatus} />
        </div>
        <div
        className="card-box"
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
           
            borderRadius: "20px",
          }}
        >
          <div className="statistics-title" style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold", color: "#542472" }}>
              Velocidad del viento{" "}
            </span>
          </div>
          <div style={{ marginLeft: "3vh" }}>
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
            className="wind-box-container"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: windColor ? windColor : "#542472",
            }}
          >
            {" "}
            <span className="statistics-wind-text">{windClasificacion}</span>
          </div>
        </div>
        <div
        className="card-box"
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
           
            borderRadius: "20px",
          }}
        >
          <div className="statistics-title" style={{ textAlign: "center" }}>
            <span>Salida y Puesta del Sol</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WiHorizonAlt size={29} color="#E7DD13 " />
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
            <WiHorizon size={30} color="#A9A20B " />
            <span className="sun-text-hour" style={{ color: "#B4880A" }}>
              {sunsetFix ? sunsetFix : <CircularProgress color="secondary" />}PM
            </span>
          </div>
        </div>
        <div
        className="card-box"
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
           
            borderRadius: "20px",
          }}
        >
          <div className="statistics-title">
            <span>Humedad</span>
          </div>
          <HumidityBar humedity={humedity} />
        </div>
        <div
        className="card-box"
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
           
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div  className="statistics-title" >
            <span
             
            >
              Probabilidad de lluvias:{" "}
            </span>
          </div>

          <Precipitation precipitation={precipitation} />
        </div>
        <div
        className="card-box"
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
           
            borderRadius: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="statistics-title" >
            Bienvenido!
          </span>
          <div>
            <WiBarometer size={60} color="#41922B " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayProgretion;
