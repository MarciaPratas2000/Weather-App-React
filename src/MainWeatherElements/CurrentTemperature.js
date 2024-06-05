import React from "react";
import "./CurrentTemperature.css";
import UnitComponent from "./TempConversionComponent";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="current-temperature-icon">
        <img
          src={props.iconUrl} 
          alt="Weather-icon"
        />
      </span>
      <UnitComponent temperature={props.temperature} />
    </div>
  );
}
