import React from "react";
import { WiDayRain, WiDaySunny } from "react-icons/wi";

const Temperature = () => {
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
          <WiDayRain style={{ margin: "10px" }} size={64} color="#FEF647" />
          <span style={{ color: "white" }}>LLuvia con algo de sol</span>
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
              20°C
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span
              style={{
                fontSize: "18px",
                color: "#ffffff" /* Color base similar al de metal */,
                textShadow: "1px 1px 2px #808080, -1px -1px 2px #808080}}",
              }}
            >
              Viernes 17:00
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
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          {" "}
          <div className="min-temp" style={{margin:'1vh'}}>
            <span style={{ color: "white" }}>Min: </span>
            <span style={{ color: "white" }}>2°C</span>
           
          </div>
          <div
            style={{ width: "1px", height: "8vh", backgroundColor: "#ffffff" }}
            className="divider-temp"
          >
            {" "}
          </div>
          <div className="max-temp" style={{margin:'1vh'}}>
            <span style={{ color: "white" }}>Max: </span>
            <span style={{ color: "white" }}>25°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
