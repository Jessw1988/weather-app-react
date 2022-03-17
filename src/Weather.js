import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          className="form-control"
          autoFocus="on"
        />
        <input type="submit" value="search" className="btn btn-primary w-100" />
      </form>
      <h1> New York</h1>
      <ul>
        <li> Wednesday 07:00</li>
        <li> Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="Col-6">
          <div class="clearFix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Mostly cloudy"
              className="float-left"
            />
            <div class="float-left">
              <span className="temperature">6 </span>{" "}
              <span className="unit">°C </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li> Precipitation: 15%</li>
            <li> Humidity: 72%</li>
            <li>Wind 17km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
