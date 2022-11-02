import "./App.css";
import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card">
          <Weather defaultCity="London" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
