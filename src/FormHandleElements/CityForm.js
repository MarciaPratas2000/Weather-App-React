import React, { useState } from "react";
import axios from "axios";
import "./CityForm.css";
import MainUpdate from "../MainWeatherElements/MainUpdate.js";

export default function CityForm() {
  const [city, setCity] = useState("Lisbon");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";

  function updateCityname(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setResponse(response.data);
    setLoaded(true);
  }

  function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        setError(error);
        setLoaded(true);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(false);
    setError(null);
    if (city) {
      fetchWeather(city);
    }
  }

  // Fetch initial weather data for "Lisbon"
  if (!loaded && !response) {
    fetchWeather("Lisbon");
  }

  return (
    <div className="CityForm">
      <form id="city-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a City"
          onChange={updateCityname}
          value={city}
          className="search-input"
        />
        <input type="submit" value="Submit" className="search-button" />
      </form>
      {loaded ? (
        <MainUpdate data={response} error={error} />
      ) : (
        <div className="warning">Loading...Please try to type a city and submit. </div>
      )}
    </div>
  );
}
