import "./App.css";
import Weather from "./components/weather";
import React, { useEffect, useState } from 'react';




function App() {

 

  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}?latitude=-27.6039&longitude=-55.3236&minutely_15=relativehumidity_2m&current=precipitation,weathercode&current=temperature_2m&current=rain,surface_pressure&current=relativehumidity_2m,windspeed_10m&visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&daily=uv_index_max&timezone=America%2FSao_Paulo&hourly=temperature_2m&forecast_days=1&current=wind_direction_10m&current=apparent_temperature&forecast_days=7&daily=weather_code&daily=precipitation_hours`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
       
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  
  return (
    <div className="App" >
      <header className="App-header" >
        <Weather data={weatherData} />
    
      </header>
    </div>
  );
}

export default App;
