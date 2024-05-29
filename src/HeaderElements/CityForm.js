import React from "react";
import "./CityForm.css";

export default function CityForm() {
  return (
    <div className="CityForm">
      <form id="city-form">
        <input
          className="search-input"
          id="search-input"
          type="search"
          placeholder="Enter a city.."
          required
        />
        <input
          className="search-button"
          type="submit"
          value="Search"
          id="search-button"
        />
      </form>
    </div>
  );
}
