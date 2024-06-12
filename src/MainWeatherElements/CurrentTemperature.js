import React from "react";
import "./CurrentTemperature.css";
import TempConversion from "./TempConversion";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <TempConversion temperature={props.temperature} />
      <span className="current-temperature-icon">
        <img
          src={props.iconUrl} 
          alt="Current-Weather-icon"
        />
      </span>
    </div>
  );
}
