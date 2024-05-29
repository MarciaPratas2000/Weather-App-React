import React from "react";
import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <h1 className="current-city" id="current-city">{props.city}</h1>
      <p className="current-details">
        <span id="date-now">{props.date} </span>, <span id="current-description"> {props.description}</span>
        <br />
        Humidity:<strong id="current-humidity">{props.humidity}</strong>, Wind:
        <strong id="current-wind">{props.wind}</strong>
      </p>
    </div>
  );
}
