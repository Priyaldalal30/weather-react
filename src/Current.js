import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";

import "./Current.css";
import "./Responsive.css";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: props.city,
      date: "Tuesday 25th October",
      time: "15:30",
      description1: response.weather.main,
      description2: response.weather.description,
      lowtemp: response.main.temp_min,
      hightemp: response.main.temp_min,
      sunrise: "6:30",
      sunset: "19:30",
      humidity: response.main.humidity,
      wind: response.wind.speed,
      visibility: response.main.pressure,
      feelsLike: response.main.feels_like,
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
            <span>21 </span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
          <div className="date">
            {weatherData.date}
            <br />
            {weatherData.time}
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
              <span>{weatherData.feelsLike}°C</span>
            </div>

            <div className="details5">
              <i class="fa-solid fa-temperature-high"></i> High:{" "}
              <span>{weatherData.hightemp}°C</span>
            </div>

            <div className="details6">
              <i class="fa-solid fa-temperature-low"></i> Low:{" "}
              <span>{weatherData.lowtemp}°C</span>
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=woking&appid=${apiKey}&units=metric;
`;
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
