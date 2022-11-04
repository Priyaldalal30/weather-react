import React from "react";
import "./TemperatureUnit.css";

export default function TemperatureUnit(props) {
  return (
    <div className="currentTemp">
      <span>{Math.round(props.tempUnit)} </span>
      <span className="units">°C</span>
    </div>
  );
}
