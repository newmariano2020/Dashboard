import React from "react";
import {
  WiDayRain,
  WiDayWindy,
  WiMeteor,
  WiHorizonAlt,
  WiHorizon,
  WiBarometer
} from "react-icons/wi";
import UvProgress from "./uvprogress";
import HumidityBar from "./humedity";



let data = {
  uvIndex: 6,
  windStatus: 11.12,
  sunrise: 6.35,
  sunset: 5.42,
  humedity: 12,
  visibility: 6.1,
};

const DayProgretion = () => {
  const uvIndex = 6;
  const humidity = data.humedity;
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
      >
        <div style={{ marginTop: "2vh", marginLeft: "10px" }}>
          <span style={{ color: "white", fontSize: "20px" }}>Hoy</span>
        </div>
        <div style={{ marginTop: "2vh", marginLeft: "3vh" }}>
          <span style={{ color: "white", fontSize: "20px" }}>Martes</span>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <span style={{ color: "white", fontSize: "20px" }}>Miércoles</span>
        </div>
      </div>
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
          flexWrap: "wrap",
        }}
        className="day-progretion"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "6vh",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <WiDayRain size={64} color="#FEF647" Top={"4"} />
          <WiDayWindy size={64} color="#FEF647 " />
          <WiMeteor size={64} color="#FEF647 " />
        </div>
      </div>
      <h2 style={{ color: "white", fontSize: "20px" }}>Highlights</h2>
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
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
            height: "14vh",
            borderRadius: "20px",
          }}
        >
          <div style={{ margin: "2vh" }}>
            <span style={{ fontWeight: "bold", color: "#542472" }}>
              Indice de UV
            </span>
          </div>
          <UvProgress uvIndex={uvIndex} />
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
            height: "14vh",
            borderRadius: "20px",
          }}
        >
          <div style={{ margin: "2vh" }}>
            <span style={{ fontWeight: "bold", color: "#542472" }}>
              Wind Status{" "}
            </span>
          </div>
          <div style={{ marginLeft: "3vh" }}>
            <span
              style={{ fontSize: "30px", fontWeight: "bold", color: "#542472" }}
            >
              {data.windStatus}
            </span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
            height: "14vh",
            borderRadius: "20px",
          }}
        >
          <div style={{ padding: "8px" }}>
            <span style={{ fontWeight: "bold", color: "#542472" }}>
              Salida y Puesta del Sol
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
            <WiHorizonAlt size={30} color="#E7DD13 " />
            <span>:{data.sunrise}AM</span>
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
            <span>{data.sunset}PM</span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
            height: "14vh",
            borderRadius: "20px",
          }}
        >
          <div style={{ marginTop: "5px" }}> 
            <span style={{ color: "#13769B", fontSize: "15px", marginLeft:'3.5vh', fontWeight:'500' }}>Humedad</span>
          </div>
          <HumidityBar humidity={humidity} />
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
            height: "14vh",
            borderRadius: "20px",
          }}
        >
          <div style={{ margin: "2.5vh" }}>
            <span style={{ fontWeight: "bold", color: "#13769B" }}>
              Visibilidad{" "}
            </span>
          </div>
          <div style={{ marginLeft: "2.5vh" }}>
            <span
              style={{ fontSize: "30px", fontWeight: "bold", color: "#13769B" }}
            >
              6.1 km
            </span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "14.5vh",
            height: "14vh",
            borderRadius: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontWeight: "bold", color: "#13769B" }}>Buenvenido!</span>
          <div><WiBarometer size={80} color="#41922B "/></div>
        </div>
      </div>
    </div>
  );
};

export default DayProgretion;
