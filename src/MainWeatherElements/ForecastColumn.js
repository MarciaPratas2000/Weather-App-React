import React from "react";
import "./ForecastColumn.css";

export default function ForecastColumn(props) {
  
  return (
    <div className="ForecastColumn">
      <div className="column" key={props.day}>
        <div className="forecast-day">{props.day}</div>
        <div className="forecast-emoji">
          <img src={props.img} alt={props.alt} />
        </div>
        <div className="forecast-min-max-temp">
          <span className="max-temperature">
            <strong>{props.maxTemp}</strong>
          </span>
          <span className="min-temperature">{props.minTemp}</span>
        </div>
      </div>
    </div>
  );}

