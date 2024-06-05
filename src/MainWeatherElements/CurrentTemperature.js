import React from "react";
import "./CurrentTemperature.css";
import UnitComponent from "./UnitComponent"; // Correct import statement

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="current-temperature-icon" >
        <img
          src={props.iconUrl} // Fixed typo: 'scr' should be 'src'
          alt="Weather-icon"
        />
      </span>
      <div className="tempSet">
        <div className="current-temperature-value">{props.temperature}</div>
        <div className="current-temperature-unit"><UnitComponent /></div>
      </div>
    </div>
  );
}
