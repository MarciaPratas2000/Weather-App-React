import React, { useState } from "react";
import CurrentTemperature from "./CurrentTemperature.js";
import CurrentWeatherInfo from "./CurrentWeatherInfo.js";
import "./Main.css";
import ForecastWeather from "./ForecastWeather.js";

export default function MainWeather(props) {
  // Use useState directly and then destructure the array it returns
  const [data, setData] = useState(null);

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Lisbon",
    description: "few clouds",
    humidity: "22%",
    wind: "7.72Km/h",
  });

  const [temperature, setTemperature] = useState({
    iconUrl: "https://example.com/icons/sunny.png",
    temperature: "18",
  });

  // Update state when props.data changes
  if (props.data !== data) {
    setData(props.data);
  //React runtime errors prevent: makes sure that props.data is not null anymore, as it is in first state.
    if (props.data) {
      setWeatherInfo({
        city: props.data.name || "Unknown",
        description: props.data.weather[0]?.description || "Unknown",
        humidity: `${props.data.main?.humidity}%` || "Unknown",
        wind: `${props.data.wind?.speed} Km/h` || "Unknown",
      });

      setTemperature({
        iconUrl: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
        temperature: Math.round(props.data.main.temp) || 0,
        unit: "ºC",
      });
    }
  }

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
