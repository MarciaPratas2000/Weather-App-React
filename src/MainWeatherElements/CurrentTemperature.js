import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="current-temperature-icon" >
      <img
            scr={props.iconUrl}
            alt="Weather-icon"
          />
      </span>
      <div className="tempSet">
        <div className="current-temperature-value">{props.temperature}</div>
        <div className="current-temperature-unit">ºC</div>
      </div>
    </div>
  );
}
