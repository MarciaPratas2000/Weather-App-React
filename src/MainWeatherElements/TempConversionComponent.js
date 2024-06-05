import React, { useState } from "react";
import "./TempConversionComponent.css";

export default function TempConversionComponent(props) {
  const [unit, setUnit] = useState("ºC");
  const [temperature, setTemperature] = useState(props.temperature);

  function handleUnitChange(selectedUnit) {
    setUnit(selectedUnit);
    if (selectedUnit === "ºF") {
      setTemperature(celsiusToFahrenheit(temperature));
    } else {
      setTemperature(props.temperature);
    }
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  return (
    <div className="TempConversionComponent">
      <div className="tempSet">
        <div className="current-temperature-value">{temperature}</div>
      </div>
      <button onClick={() => handleUnitChange("ºC")} className={unit === "ºC" ? "selected" : ""}>
        ºC
      </button>
      <button onClick={() => handleUnitChange("ºF")} className={unit === "ºF" ? "selected" : ""}>
        ºF
      </button>
    </div>
  );
}
