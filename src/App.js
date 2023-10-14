import "./App.css";
import Weather from "./components/weather";
import Funcions from "./funcions";
import React, { useEffect, useState } from 'react';


function App() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}?latitude=-27.6039&longitude=-55.3236&minutely_15=relativehumidity_2m&current=precipitation,weathercode&current=temperature_2m&current=relativehumidity_2m,windspeed_10m&visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&daily=uv_index_max&timezone=America%2FSao_Paulo&hourly=temperature_2m&forecast_days=1`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);



  
  return (
    <div className="App" style={{ backgroundColor: "black", height:'100%' }}>
      <header className="App-header" style={{ backgroundColor: "black", display:'flex', flexDirection:'row' }}>
        <Weather data={weatherData} />
        
      </header>
    </div>
  );
}

export default App;
