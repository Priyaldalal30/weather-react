import React from "react";
import CurrentDate from "./CurrentDate";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="current">
      <div className="grid">
        <div className="card1">
          <div className="weathericon">
            <WeatherIcon code={props.data.icon} alt="props.data.icon" />
          </div>
          <div className="description1">{props.data.description1}</div>
          <div className="description2">{props.data.description2}</div>
        </div>
        <div className="card2">
          <div className="city">{props.data.city}</div>
          <div className="currentTemp">
            <span>{Math.round(props.data.temp)} </span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
          <div className="date">
            <CurrentDate date={props.data.date} />
          </div>
        </div>
        <div className="card3">
          <div className="details">
            <br />
            <div className="details1">
              <i className="fa-solid fa-droplet"></i> Humidity:{" "}
              <span>{props.data.humidity}%</span>
            </div>

            <div className="details2">
              <i className="fa-solid fa-wind"></i> Wind:{" "}
              <span>{Math.round(props.data.wind)} mph</span>
            </div>

            <div className="details3">
              <i class="fa-brands fa-cloudscale"></i> Pressure:{" "}
              <span>{props.data.pressure} mi</span>
            </div>
            <div className="details4">
              <i class="fa-solid fa-temperature-quarter"></i> Feels Like:{" "}
              <span>{Math.round(props.data.feelsLike)}°C</span>
            </div>

            <div className="details5">
              <i class="fa-solid fa-temperature-high"></i> High:{" "}
              <span>{Math.round(props.data.hightemp)}°C</span>
            </div>

            <div className="details6">
              <i class="fa-solid fa-temperature-low"></i> Low:{" "}
              <span>{Math.round(props.data.lowtemp)}°C</span>
            </div>

            <div className="details7">
              <i class="fa-regular fa-sun"></i> Sunrise:{" "}
              <Sunrise time={props.data.sunrise} />
            </div>

            <div className="details8">
              <i class="fa-regular fa-moon"></i> Sunset:{" "}
              <Sunset times={props.data.sunset} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
