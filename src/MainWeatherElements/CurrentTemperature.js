import React from "react";
import "./CurrentTemperature.css";
import TempConversionComponent from "./TempConversionComponent";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="current-temperature-icon">
        <img
          src={props.iconUrl} 
          alt="Weather-icon"
        />
      </span>
      <TempConversionComponent temperature={props.temperature} />
    </div>
  );
}
