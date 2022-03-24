import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import { Axios } from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let latitude = 40.7;
  let longitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  Axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19 </span>
            <span className="WeatherForecast-temperature-min"> 10 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
