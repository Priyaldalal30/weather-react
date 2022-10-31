import "./App.css";
import React from "react";
import Forecast from "./Forecast";
import Search from "./Search";
import Footer from "./Footer";
import Current from "./Current";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card">
          <Search />
          <Current defaultCity="Woking" />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
