import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="current-temperature-icon" scr={props.iconSrc}></span>
      <div className="tempSet">
        <div className="current-temperature-value">{props.tempValue}</div>
        <div className="current-temperature-unit">{props.unit}ºC</div>
      </div>
    </div>
  );
}
