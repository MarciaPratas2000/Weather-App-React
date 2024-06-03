import React, { useState } from "react";
import axios from "axios";
import MainWeather from "../MainWeatherElements/MainUpdate.js";
import Main from "../MainWeatherElements/Main.js";
import "./CityForm.css";

export default function CityForm() {
  const [city, setCity] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateCityname(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setResponse(response);
    setLoaded(true);
  }

  function fetchWeather() {
    const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        setError(error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(false);
    if (city) {
      fetchWeather();
    }
  }

  return (
    <div className="CityForm">
      <form id="city-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a City"
          onChange={updateCityname}
          className="search-input"
          // Add value to control the input
        />
        <input type="submit" value="Submit"  className="search-button"/>
      </form>
      {loaded ? <MainWeather data={response?.data} error={error} /> : <Main />}
    </div>
  );
}