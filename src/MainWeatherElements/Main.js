import React from "react";
import CurrentTemperature from "./CurrentTemperature.js";
import CurrentWeatherInfo from "./CurrentWeatherInfo.js";
import ForecastWeather from "./ForecastWeather.js";
import "./Main.css";


export default function Main() {

  const weatherInfo = ({
    city: "Lisbon",
    description: "few clouds",
    humidity: "22%",
    wind: "7.72Km/h",
  });

  const temperature= ({
    iconUrl: "https://example.com/icons/sunny.png",
    temperature: "18",
  });

  return (
    <div className="WeatherMain">
      <div className="Main">
        <main className="mainElement">
          <div className="current-weather">
            <CurrentWeatherInfo {...weatherInfo} />
            <CurrentTemperature {...temperature} />
          </div>
          <ForecastWeather />
        </main>
      </div>
    </div>
  );
}
