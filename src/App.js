import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Map from "./components/Map";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const coordHandler = (coords) => {
    setCoordinates(coords);
    console.log(coords);
  }

  return (
		<div className="App">
			<SideBar coordHandler={coordHandler} />
			<Map coordinates={coordinates} />
		</div>
  );
}

export default App;
