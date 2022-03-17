import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: "Wednesday 7:00",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
          />
          <input
            type="submit"
            value="search"
            className="btn btn-primary w-100"
          />
        </form>
        <h1> {weatherData.city}</h1>
        <ul>
          <li> {weatherData.date}</li>
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
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
