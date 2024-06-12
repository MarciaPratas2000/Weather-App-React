import React, { useState } from "react";
import "./CityForm.css";
import CurrentWeatherUpdate from "../MainWeatherElements/CurrentWeatherUpdate.js";

export default function CityForm() {
  const [city, setCity] = useState("Lisbon"); // Default city is Lisbon
  const [inputValue, setInputValue] = useState("");

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
      </div>
    </div>
  );
}
