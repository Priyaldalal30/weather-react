import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";

import "./Current.css";
import "./Responsive.css";
import CurrentDate from "./CurrentDate";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: props.defaultCity,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description1: response.data.weather[0].main,
      description2: response.data.weather[0].description,
      lowtemp: response.data.main.temp_min,
      hightemp: response.data.main.temp_min,
      sunrise: "6:30",
      sunset: "19:30",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.main.pressure,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="grid">
        <div className="card1">
          <div className="weathericon">
            <img src={weatherData.imgUrl} alt="weathericon" />
          </div>
          <div className="description1">{weatherData.description1}</div>
          <br />
          <div className="description2">{weatherData.description2}</div>
        </div>
        <div className="card2">
          <div className="city">{weatherData.city}</div>
          <div className="currentTemp">
            <span>{Math.round(weatherData.temp)} </span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
          <div className="date">
            <CurrentDate date={weatherData.date} />
          </div>
        </div>
        <div className="card3">
          <div className="details">
            <br />
            <div className="details1">
              <i className="fa-solid fa-droplet"></i> Humidity:{" "}
              <span>{weatherData.humidity}%</span>
            </div>

            <div className="details2">
              <i className="fa-solid fa-wind"></i> Wind:{" "}
              <span>{weatherData.wind}mph</span>
            </div>

            <div className="details3">
              <i className="fa-solid fa-eye"></i> Visibility:{" "}
              <span>{weatherData.visibility}mi</span>
            </div>
            <div className="details4">
              <i class="fa-solid fa-temperature-quarter"></i> Feels Like:{" "}
              <span>{Math.round(weatherData.feelsLike)}°C</span>
            </div>

            <div className="details5">
              <i class="fa-solid fa-temperature-high"></i> High:{" "}
              <span>{Math.round(weatherData.hightemp)}°C</span>
            </div>

            <div className="details6">
              <i class="fa-solid fa-temperature-low"></i> Low:{" "}
              <span>{Math.round(weatherData.lowtemp)}°C</span>
            </div>

            <div className="details7">
              <i class="fa-regular fa-sun"></i> Sunrise:{" "}
              <span>{weatherData.sunrise}</span>
            </div>

            <div className="details8">
              <i class="fa-regular fa-moon"></i> Sunset:{" "}
              <span>{weatherData.sunset}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

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
