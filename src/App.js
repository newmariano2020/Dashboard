import "./App.css";
import React from "react";
import Weather from "./components/weather";
import Funcions from "./funcions";


function App() {
  return (
    <div className="App" style={{ backgroundColor: "black", height:'100%' }}>
      <header className="App-header" style={{ backgroundColor: "black", display:'flex', flexDirection:'row' }}>
        <Weather />
        
      </header>
    </div>
  );
}

export default App;
