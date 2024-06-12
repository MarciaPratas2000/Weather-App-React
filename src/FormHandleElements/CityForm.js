import React, { useState } from "react";
import "./CityForm.css";
import CurrentWeatherUpdate from "../MainWeatherElements/CurrentWeatherUpdate.js";
import ForecastColumn from "../MainWeatherElements/ForecastColumn.js";

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
    setCity(inputValue); // Update city only after form submission
    setInputValue(""); // Clear input value after submission
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="CityForm">
      {/* Form for inputting new city */}
        <form id="city-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a City"
            value={inputValue}
            className="search-input"
            onChange={handleInputChange}
          />
          <input type="submit" value="Submit" className="search-button" />
        </form>
       <div>
        <CurrentWeatherUpdate city={city} />
        <ForecastColumn city={city} />
      </div>
    </div>
  );
}
