import React from "react";
import "../App.css";

const Marker = (props) => {
  const { color, lat, lng } = props;
  return (
    <div>
      <div
        className="pin"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={`lat:${lat}, lng:${lng}`}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;
