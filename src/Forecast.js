import React from "react";

import "./Forecast.css";

export default function Weather() {
  return (
    <div>
      <br />
      <br />
      <div className="hourly-card">
        <div className="card-day-1">6 - 9 </div>
        <div className="card-day-2">9 - 12 </div>
        <div className="card-day-3">12 - 15 </div>
        <div className="card-day-4">15 - 18 </div>
        <div className="card-day-5">18 - 21 </div>
        <div className="card-day-6">21 - 12 </div>
      </div>
      <br />
      <div className="daily-grid">
        <div className="card-day-1">Mon </div>
        <div className="card-day-2">Tue </div>
        <div className="card-day-3">Wed </div>
        <div className="card-day-4">Thu </div>
        <div className="card-day-5">Fri </div>
        <div className="card-day-6">Sat </div>
      </div>
    </div>
  );
}
