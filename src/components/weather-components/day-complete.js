import React from "react";
import { Line } from "react-chartjs";

const DayComplete = () => {
  const chartData = {
    labels: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
      "24:00",
    ],
    datasets: [
      {
        label: "Temperatura (°C)",
        data: [15, 17, 18, 20, 22, 24, 23, 19, 15, 29, 25, 22, 20], 
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

  return (
    <div style={{ marginLeft: "4vh" }}>
      <div
        style={{
          background: "rgb(255,136,0)",
          background:
            "linear-gradient(180deg, rgba(255,136,0,1) 0%, rgba(249,255,0,0.6530987394957983) 100%)",
          height: "15vh",
          width: "76vh",
          borderRadius: "20px",
        }}
        className="day-progretion"
      >
        <Line
          data={chartData}
          options={chartOptions}
          width={702}
          height={129}
        />
      </div>
    </div>
  );
};

export default DayComplete;
