import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <span>
      <form className="search-form">
        <input type="search" placeholder="Search City" className="city-input" />

        <button className="search" role="img">
          <i class="fa-solid fa-magnifying-glass-location"></i>
        </button>

        <button className="location" role="img">
          <i class="fa-solid fa-location-dot"></i>
        </button>
      </form>
    </span>
  );
}
