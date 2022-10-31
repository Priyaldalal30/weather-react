import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <span>
      <form className="search-form">
        <input type="search" placeholder="Search City" className="city-input" />

        <button className="search" role="img">
          {" "}
          🔍{" "}
        </button>

        <button className="location" role="img">
          {" "}
          📍{" "}
        </button>
      </form>
    </span>
  );
}
