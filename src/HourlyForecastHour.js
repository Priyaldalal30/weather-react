import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecastHour(props) {
  function time() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return hour;
  }

  return (
    <div className="card-hour-1">
      <div className="forecast-current-hour">{time()}</div>

      <div className="forecast-icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={25}
          color={"rgba(247, 243, 243, 0.655)"}
        />
      </div>
      <div className="forecast-current-temp">
        {Math.round(props.data.temp)}°
      </div>
    </div>
  );
}
