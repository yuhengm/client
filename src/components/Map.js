import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = (props) => {
  const [center, setCenter] = useState({ lat: 49.15, lng: -122.8 });
  const [zoom, setZoom] = useState(10);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_MUZ2Hqhs1Q4YOjMu8nKN3-fyXHJFnG0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={49.15} lng={-122.8} name="My Marker" color="blue" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
