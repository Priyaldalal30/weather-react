import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";

import "./DailyForecast.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastDay, setForecastDay] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showDailyForecast(response) {
    setForecastDay(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="daily-grid">
        <div className="day1">
          <DailyForecastDay data={forecastDay[1]} />
        </div>
        <div className="day2">
          <DailyForecastDay data={forecastDay[2]} />
        </div>
        <div className="day3">
          <DailyForecastDay data={forecastDay[3]} />
        </div>
        <div className="day4">
          <DailyForecastDay data={forecastDay[4]} />
        </div>
        <div className="day5">
          <DailyForecastDay data={forecastDay[5]} />
        </div>
        <div className="day6">
          <DailyForecastDay data={forecastDay[6]} />
        </div>
        <div className="day7">
          <DailyForecastDay data={forecastDay[7]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let latitude = props.coordinates.coordinates.lat;
    let longitude = props.coordinates.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showDailyForecast);
    return null;
  }
}
