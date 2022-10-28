import React from "react";

import "./City.css";

export default function City() {
  let locationData = {
    city: "Woking",
    date: "Tuesday 25th October",
    time: "15:30",
  };
  return (
    <div className="City">
      <div className="city">{locationData.city}</div>
      <div className="date">
        {locationData.date}
        {"  "}
        {locationData.time}
      </div>
      <h3>
        <span>21 </span>
        <span className="units">
          <a href="/" className="active">
            °C
          </a>{" "}
          |<a href="/">°F</a>
        </span>
      </h3>
    </div>
  );
}
