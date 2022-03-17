import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1> {weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize"> {weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="Col-6">
          <div class="clearFix">
            <img src={weatherData.iconUrl} className="float-left" />
            <div class="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}{" "}
              </span>{" "}
              <span className="unit">°C </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul class="float-right">
            <li> Humidity: {weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind}km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
