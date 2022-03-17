import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          <a href="https://github.com/Jessw1988/weather-app-react">
            {" "}
            Open sourced code on Github{" "}
          </a>{" "}
          by Jessica Wolski;
        </footer>
      </div>
    </div>
  );
}
