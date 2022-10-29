import React from "react";

import "./Current.css";

export default function City() {
  let weatherData = {
    city: "Woking",
    date: "Tuesday 25th October",
    time: "15:30",
    description1: "rain",
    description2: "light rain",
    hightemp: "19",
    lowtemp: "12",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    sunrise: "6:30",
    sunset: "19:30",
    humidity: "74",
    wind: "8",
    visibility: "10",
    feelsLike: "15",
  };
  return (
    <div className="row">
      <div className="col-4">
        <div className="weathericon">
          <img src={weatherData.imgUrl} alt="weathericon" />
        </div>
        <div className="description">{weatherData.description1}</div>
        <br />
        <div className="description">{weatherData.description2}</div>
      </div>
      <div className="col-4">
        <div className="city-card">
          <div className="city">{weatherData.city}</div>

          <h3>
            <span>21 </span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </h3>
          <div className="date">
            {weatherData.date}
            <br />
            {weatherData.time}
          </div>
        </div>
      </div>
      <div className="col-4">
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
}
