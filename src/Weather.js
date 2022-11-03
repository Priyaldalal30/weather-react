import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";

import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

import "./Weather.css";
import "./Responsive.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [background, setBackground] = useState("");

  function changeBackground(weatherCondition) {
    if (weatherCondition === "01d" || weatherCondition === "01n") {
      setBackground("bg-clear-sky");
    }

    if (weatherCondition === "02d" || weatherCondition === "02d") {
      setBackground("bg-partly-cloudy");
    }
    if (weatherCondition === "03d" || weatherCondition === "03n") {
      setBackground("bg-cloudy");
    }
    if (weatherCondition === "04d" || weatherCondition === "04d") {
      setBackground("bg-overcast");
    }

    if (
      weatherCondition === "09d" ||
      weatherCondition === "10d" ||
      weatherCondition === "09n" ||
      weatherCondition === "10n"
    ) {
      setBackground("bg-rain");
    }

    if (weatherCondition === "11d" || weatherCondition === "11n") {
      setBackground("bg-thunderstrom");
    }

    if (weatherCondition === "13d" || weatherCondition === "13n") {
      setBackground("bg-snow");
    }

    if (weatherCondition === "50d" || weatherCondition === "50n") {
      setBackground("bg-fog");
    }
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description1: response.data.weather[0].main,
      description2: response.data.weather[0].description,
      lowtemp: response.data.main.temp_min,
      hightemp: response.data.main.temp_max,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      feelsLike: response.data.main.feels_like,
    });
    changeBackground(response.data.weather[0].icon);
  }

  function search() {
    const apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }
  function handleCityChange(event) {
    event.preventDefault();

    setCity(event.target.value);
  }

  function currentLocation(location) {
    const apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  if (weatherData.ready) {
    return (
      <div className={`weather-app ${background}`} id="container">
        <a
          href="https://weather-react-pd.netlify.app"
          className="celsiusLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          View in Fahrenheit
        </a>
        <div>
          <span>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                spellCheck="true"
                type="search"
                placeholder="Search City"
                className="city-input"
                onChange={handleCityChange}
              />

              <button className="search" role="img">
                <i class="fa-solid fa-magnifying-glass-location"></i>
              </button>

              <button className="location" role="img" onClick={getLocation}>
                <i class="fa-solid fa-location-dot" />
              </button>
            </form>
          </span>
          <CurrentWeather data={weatherData} />
          <HourlyForecast coordinates={weatherData} />
          <hr />
          <DailyForecast coordinates={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <Watch
        height="80"
        width="80"
        radius="48"
        color="black"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
