import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Map from "./components/Map";

function App() {
  const [coordinate, setCoordinate] = useState({});
  const coordHandler = (coord) => {
    console.log(coord);
  }

  return (
		<div className="App">
			<SideBar coordHandler={coordHandler} />
			<Map coordinate={coordinate} />
		</div>
  );
}

export default App;
