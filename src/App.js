import "./App.css";
import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div>
        <Weather defaultCity="London" />
      </div>

      <Footer />
    </div>
  );
}
