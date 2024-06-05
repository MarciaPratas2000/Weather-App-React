import React from "react";
import "./CurrentTemperature.css";
import TempConversionComponent from "./TempConversionComponent";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <TempConversionComponent temperature={props.temperature} />
      <span className="current-temperature-icon">
        <img
          src={props.iconUrl} 
          alt="Weather-icon"
        />
      </span>
    </div>
  );
}
