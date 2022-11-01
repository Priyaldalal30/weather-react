import React, { useState } from "react";
import "./TemperatureUnit.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.tempUnit * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="currentTemp">
        <span>{Math.round(props.tempUnit)} </span>
        <span className="units">
          °C |
          <a href="/" className="active" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="currentTemp">
        <span>{Math.round(convertToFahrenheit())} </span>
        <span className="units">
          <a href="/" className="active" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
