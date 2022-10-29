import React from "react";

import "./Current.css";

export default function City() {
  let weatherData = {
    city: "Woking",
    date: "Tuesday 25th October",
    time: "15:30",
    description: "cloudy",
    hightemp: "19",
    lowtemp: "12",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    sunrise: "6:30",
    sunset: "19:30",
    humidity: "74",
    wind: "8",
    visibility: "10",
  };
  return (
    <div className="row">
      <div className="col-4">
        <div className="weathericon">
          <img src={weatherData.imgUrl} alt="weathericon" />
        </div>
        <div className="description">{weatherData.description}</div>
        <h5>
          <div className="high-low-temp">
            H: <span>{weatherData.hightemp}</span>
            <span> °C | L: </span>
            <span>{weatherData.lowtemp}</span>
            <span> °C</span>
          </div>
          <div>
            <div className="sun-time">
              Sunrise:
              <span> {weatherData.sunrise}</span>
            </div>
            <div className="sun-time">
              Sunset: <span>{weatherData.sunset}</span>
            </div>
          </div>
        </h5>
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
          <div>
            <i className="fa-solid fa-droplet"></i> Humidity:
            <span className="humidity"></span>{" "}
            <span className="unit">{weatherData.humidity}%</span>
          </div>
          <br />
          <div>
            <i className="fa-solid fa-wind"></i> Wind:{" "}
            <span className="wind"></span>
            <span className="unit">{weatherData.wind} mph</span>
          </div>
          <br />
          <div>
            <i className="fa-solid fa-eye"></i> Visibility:
            <span className="visibility"></span>
            <span className="unit">{weatherData.visibility} mi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
