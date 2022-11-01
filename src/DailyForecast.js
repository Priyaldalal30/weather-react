import React from "react";
import axios from "axios";

import "./DailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  function showDailyForecast(response) {
    console.log(response.data);
  }

  let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
  let latitude = props.coordinates.coordinates.lat;
  let longitude = props.coordinates.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showDailyForecast);

  return (
    <div>
      <div className="daily-grid">
        <div className="card-day-1">
          <div className="forecast-day">Mon</div>
          <div className="forecast-icon">
            <WeatherIcon
              code="01n"
              size={45}
              color={"rgba(247, 243, 243, 0.655)"}
            />
          </div>
          <div className="forecast-temp">
            <span className="forecast-high-temp">19°</span>
            <span className="forecast-low-temp">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
