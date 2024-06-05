import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [temperature, setTemperature] = useState(props.temperature);

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  // Convert temperature to Celsius or Fahrenheit based on the unit
  if (props.unit === "ºF") {
    setTemperature(celsiusToFahrenheit(temperature));
  }

  return (
    <div className="TemperatureConversion">
      <p className="temperature">{temperature}</p>
    </div>
  );
}
