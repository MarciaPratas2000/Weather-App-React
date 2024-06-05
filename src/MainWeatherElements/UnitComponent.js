import React, { useState } from "react";

export default function UnitComponent() {
  const [unit, setUnit] = useState("ºC");

  function handleUnitChange(selectedUnit) {
    setUnit(selectedUnit);
  }

  return (
    <div className="UnitComponent">
      <button onClick={handleUnitChange("ºC")} className={unit === "ºC" ? "selected" : ""}>ºC</button>
      <button onClick={handleUnitChange("ºF")} className={unit === "ºF" ? "selected" : ""}>ºF</button>
    </div>
  );
}
