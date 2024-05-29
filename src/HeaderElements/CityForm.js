import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
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
    console.log(response);
  }

  function resetResponse() {
    setResponse(null);
    setLoaded(false);
  }

  function fetchWeather() {
    let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        setError(error);
      });
  }
  function handleSubmit(event) {
    resetResponse();
    event.preventDefault();
    //API weather city
    if (city) {
      fetchWeather();
    }
    //Other condition for our ohter API call
  }

  if (loaded) {
    return (
      <div className="CityForm">
        <form  id="city-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a City"
            onChange={updateCityname}
            // Add value to control the input
          />
          <input type="submit" value="Submit" />
        </form>
        <Weather data={response.data} error={error} />
      </div>
    );
  } else {
    return (
      <div className="CityForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a City"
            onChange={updateCityname}
            // Add value to control the input
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
