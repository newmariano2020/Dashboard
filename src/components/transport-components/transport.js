import React, { useEffect, useState } from "react";
import "./transport.css";
import SearcherMap from "./searcher-map";

const Transport = ({ transportData }) => {
  const [optionValue, setOptionValue] = useState(1);
  const [position, setPosition] = useState([transportData[1].latitude, transportData[1].longitude]);

  const handleOptionValueChange = (e) => {
    const value = parseInt(e.target.value, 10); // Asegúrate de que value sea un número entero
    console.log("Nuevo valor de optionValue:", value);
  
    if (!isNaN(value) && value >= 1 && value <= transportData.length) {
      setOptionValue(value);
      console.log("OptionValue actualizado:", value);
  
      // Realiza otras operaciones aquí si es necesario
    }
  };
  useEffect(() => {
    // Calcula la posición cada vez que cambia optionValue
  
    setPosition([transportData[optionValue].latitude, transportData[optionValue].longitude]);
  }, [optionValue, transportData]);

  

  return (
    <div className="transport-container">
      <div className="transport-box">
        <div className="menu-transport">
          <h3>selecciona una linea de colectivos</h3>
          <select type="select" className="input-transport" onChange={handleOptionValueChange}>
            <option value={1}>1</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={60}>60</option>
          </select>
         
        </div>
        <div className="searcher-map-box">
        <SearcherMap transportData={transportData} position={position} className="search-map"/>
        </div>
      </div>
    </div>
  );
};

export default Transport;
