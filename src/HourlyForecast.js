import React, { useState } from "react";
import axios from "axios";
import HourlyForecastHour from "./HourlyForecastHour";
import "./HourlyForecast.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastHour, setForecastHour] = useState(null);

  function showHourlyForecast(response) {
    setForecastHour(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="hourly-grid">
        <div className="hourly-grid1">
          <HourlyForecastHour data={forecastHour[1]} />
        </div>
        <div className="hourly-grid2">
          <HourlyForecastHour data={forecastHour[2]} />
        </div>
        <div className="hourly-grid3">
          <HourlyForecastHour data={forecastHour[3]} />
        </div>
        <div className="hourly-grid4">
          <HourlyForecastHour data={forecastHour[4]} />
        </div>
        <div className="hourly-grid5">
          <HourlyForecastHour data={forecastHour[5]} />
        </div>
        <div className="hourly-grid6">
          <HourlyForecastHour data={forecastHour[6]} />
        </div>
        <div className="hourly-grid7">
          <HourlyForecastHour data={forecastHour[7]} />
        </div>
        <div className="hourly-grid8">
          <HourlyForecastHour data={forecastHour[8]} />
        </div>
        <div className="hourly-grid9">
          <HourlyForecastHour data={forecastHour[9]} />
        </div>
        <div className="hourly-grid10">
          <HourlyForecastHour data={forecastHour[10]} />
        </div>
        <div className="hourly-grid11">
          <HourlyForecastHour data={forecastHour[11]} />
        </div>
        <div className="hourly-grid12">
          <HourlyForecastHour data={forecastHour[12]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let latitude = props.coordinates.coordinates.lat;
    let longitude = props.coordinates.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showHourlyForecast);
    return null;
  }
}
