import React from "react";
import ForecastColumn from "./ForecastColumn";
import "./ForecastWeather.css";

const dayForecast = [
  {
    day: "Monday",
    img: "https://example.com/icons/sunny.png",
    alt: "Sunny",
    maxTemp: "28º",
    minTemp: "20º",
  },
  {
    day: "Tuesday",
    img: "https://example.com/icons/cloudy.png",
    alt: "Cloudy",
    maxTemp: "25º",
    minTemp: "18º",
  },
  {
    day: "Wednesday",
    img: "https://example.com/icons/rainy.png",
    alt: "Rainy",
    maxTemp: "22º",
    minTemp: "15º",
  },
  {
    day: "Thursday",
    img: "https://example.com/icons/cloudy.png",
    alt: "Cloudy",
    maxTemp: "24º",
    minTemp: "17º",
  },
  {
    day: "Friday",
    img: "https://example.com/icons/sunny.png",
    alt: "Sunny",
    maxTemp: "27º",
    minTemp: "19º",
  },
];

export default function ForecastWeather() {
  return (
    <div className="ForecastWeather">
      <div className="forecast-weather" id="forecast">
        {/* Map over the dayForecast array to render ForecastColumn components */}
        {dayForecast.map((props, index) => (
          <ForecastColumn className="Column"
            key={index}
            day={props.day}
            img={props.img}
            alt={props.alt}
            maxTemp={props.maxTemp}
            minTemp={props.minTemp}
          />
        ))}
      </div>
    </div>
  );
}
