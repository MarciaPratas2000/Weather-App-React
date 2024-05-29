import React, { useState } from "react";

export default function Weather(props) {
  const [data, setData] = useState(props.data);
  const [loaded, setLoaded] = useState(true);
  const [weather, setWeather] = useState(null);

  const weatherData = {
    city: data.name,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    minTemperature: data.main.temp_min,
    maxTemperature: data.main.temp_max,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  };

  if (loaded && data) {
    return (
      <div>
        <p>
          City: <strong>{weatherData.city}</strong>
        </p>
        <p>Temperature: {weatherData.temperature} ºC</p>
        <p>Feels like: {weatherData.feelsLike} ºC</p>
        <p>Min temperature: {weatherData.minTemperature} ºC</p>
        <p>Max temperature: {weatherData.maxTemperature} ºC</p>
        <p>Description: {weatherData.description}</p>
        <p>Humidity: {weatherData.humidity}%</p>
        <p>Wind: {weatherData.windSpeed} m/s</p>
        <p>
          Icon:{" "}
          <img
            src={weatherData.iconUrl}
            alt="Weather icon"
          />
        </p>
      </div>
    );
  }

  if (props.error) {
    return <p>Error: {props.error.message}. Please Refresh the page or retry.</p>;
  } else {
    return <p>Loading...</p>;
  }
}
