import React from "react";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import CurrentTemperature from "./CurrentTemperature";
import ForecastWeather from "./ForecastWeather";
import "./Main.css";

export default function Main() {
  // Definir variáveis com os dados que você deseja passar para os componentes filhos
  const weatherInfoProps = {
    city: "Lisbon",
    date: "Saturday 16:34",
    description: "few clouds",
    humidity: "22%",
    wind: "7.72Km/h",
  };

  const temperatureProps = {
    iconSrc: "https://example.com/icons/sunny.png",
    tempValue: "18",
    unit: "", // Defina a unidade desejada (ex: "ºC")
  };

  return (
    <div className="Main">
      <main className="mainElement">
        <div className="current-weather">
          <CurrentWeatherInfo {...weatherInfoProps} />
          <CurrentTemperature {...temperatureProps} />
        </div>
        <ForecastWeather />
      </main>
    </div>
  );
}
