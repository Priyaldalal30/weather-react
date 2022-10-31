import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    description: "cloudy",
    hightemp: "19",
    lowtemp: "12",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "74",
    wind: "8",
    visibility: "10",
  };

  return (
    <div className="Weather">
      <div className="description">{weatherData.description}</div>
      <h5>
        <div>
          H:
          <span className="high-number">{weatherData.hightemp}</span>
          <span className="high"> °C | L:</span>
          <span className="low-number">{weatherData.lowtemp}</span>
          <span className="low"> °C</span>
        </div>
      </h5>

      <div className="row">
        <div className="col-md-4">
          <div className="weathericon">
            <img src={weatherData.imgUrl} alt="weathericon" />
          </div>
        </div>
        <div className="col-md-8">
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
        <br />
      </div>
    </div>
  );
}
