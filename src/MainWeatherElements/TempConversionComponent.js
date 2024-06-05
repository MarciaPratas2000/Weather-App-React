import React, { useState, useEffect } from "react";
import "./TempConversionComponent.css";

export default function TempConversionComponent(props) {
  const [unit, setUnit] = useState("ºC"); // Initialize unit state with an empty string
  const [temperature, setTemperature] = useState(props.temperature);
  const [prevTemperature, setPrevTemperature] = useState(null); // Initialize prevTemperature state with null


  // Check if the temperature has changed
  if (prevTemperature !== props.temperature) {
    setTemperature(props.temperature); // Update temperature state
    setUnit("ºC"); // Set unit to "ºC"
    setPrevTemperature(props.temperature); // Update prevTemperature state
  }

/* if statement equivalente a 
  useEffect(() => {
    setTemperature(props.temperature);
    // Set the unit state based on the temperature
    setUnit("ºC");
  }, [props.temperature]);*/


  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function handleUnitChange(selectedUnit) {
    if (selectedUnit === "ºF") {
      setUnit("ºF");
      setTemperature(celsiusToFahrenheit(props.temperature));
    } else {
      setUnit("ºC");
      setTemperature(props.temperature);
    }
  }

  return (
    <div className="TempConversionComponent">
      <div className="tempSet">
        <div className="current-temperature-value">{temperature}</div>
      </div>
      <button
        onClick={() => handleUnitChange("ºC")}
        className={unit === "ºC" ? "selected" : ""}
      >
        ºC
      </button>
      <button
        onClick={() => handleUnitChange("ºF")}
        className={unit === "ºF" ? "selected" : ""}
      >
        ºF
      </button>
    </div>
  );
}
