import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs";
import './day-complete.css';

const DayComplete = ({ data }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.current) {
        setHourlyData(data.hourly.temperature_2m);
      }
     
    };

    fetchData();
  }, [data]);

  const chartData = {
    labels: [
      "0:00",
      "1:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ],
    datasets: [
      {
        label: "Temperatura (°C)",
        data: hourlyData,
        fill: "rgba(75, 192, 192, 0.2)",
        strokeColor: "rgba(75, 192, 192, 1)",
        yAxisID: "temperature",
      },
    ],
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          type: "category",
          labels: {
            stepSize: 3,
          },
          position: "bottom",
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Hora del día",
  
        }
       
      },
      ],
      yAxes: [
        {
          id: "temperature",
          type: "linear",
          position: "left",
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: "Temperatura (°C)",
          },
        },
        {
          id: "hourly",
          type: "linear",
          position: "right",
          ticks: {
            beginAtZero: true,
            max: 24,
          },
          scaleLabel: {
            display: true,
            labelString: "Hora del día",
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  const isMobile = window.innerWidth <= 600; // Punto de quiebre en 600px

const chartWidth = isMobile ? 1000 : 1200;

  return (
    <div style={{ marginLeft: "4vh" }}>
      <div
        style={{
          background: "rgb(255,136,0)",
          background:
            "linear-gradient(180deg, rgba(255,136,0,1) 0%, rgba(249,255,0,0.6530987394957983) 100%)",
          height: "18vh",
          width: "76vh",
          borderRadius: "20px",
        }}
        className="day-progretion"
      >
        <div className="chart-container">
        <Line
          data={chartData}
          options={chartOptions}
          responsive={true}
          maintainAspectRatio= {false}
          width={chartWidth} // Ajusta el ancho del gráfico
          height={170} // Ajusta la altura del gráfico
          style={{ marginLeft:'5vh', marginTop:'10px' }}
        />
        </div>
      </div>
    </div>
  );
};

export default DayComplete;
