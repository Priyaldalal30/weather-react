import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecastHour(props) {
  function time() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return <div>{hour}:00</div>;
  }

  return (
    <div className="card-hour-1">
      <div className="forecast-current-hour">{time()}</div>

      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={25} />
      </div>
      <div className="forecast-current-temp">
        {Math.round(props.data.temp)}°
      </div>
    </div>
  );
}
