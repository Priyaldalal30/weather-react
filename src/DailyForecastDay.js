import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[day];
  }
  return (
    <div className="card-day-1">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={34} />
      </div>
      <div className="forecast-temp">
        <span className="forecast-high-temp">
          ↑ {Math.round(props.data.temp.max)}°
        </span>
        <span className="forecast-low-temp">
          ↓ {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
