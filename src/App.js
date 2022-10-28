import "./App.css";
import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";
import City from "./City";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card">
          <Search />
          <City />

          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
}
