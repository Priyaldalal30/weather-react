import "./App.css";
import React from "react";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card">
          <Weather defaultCity="Woking" />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
