import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";

import "./DailyForecast.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastDay, setForecastDate] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showDailyForecast(response) {
    setForecastDate(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastDay);
    return (
      <div className="daily-grid">
        <div>
          <DailyForecastDay data={forecastDay[1]} />
        </div>
        <div>
          <DailyForecastDay data={forecastDay[2]} />
        </div>
        <div>
          <DailyForecastDay data={forecastDay[3]} />
        </div>
        <div>
          <DailyForecastDay data={forecastDay[4]} />
        </div>
        <div>
          <DailyForecastDay data={forecastDay[5]} />
        </div>
        <div>
          <DailyForecastDay data={forecastDay[6]} />
        </div>
        <div>
          <DailyForecastDay data={forecastDay[7]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
    let latitude = props.coordinates.coordinates.lat;
    let longitude = props.coordinates.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showDailyForecast);
    return null;
  }
}
