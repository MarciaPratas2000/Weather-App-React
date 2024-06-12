import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentTemperature from "./CurrentTemperature.js";
import CurrentWeatherInfo from "./CurrentWeatherInfo.js";
import "./CurrentWeatherUpdate.css";
import ForecastWeather from "./ForecastWeather.js";

export default function CurrentWeatherUpdate(props) {
  const [location, setLocation] = useState({ lat: 38.7223, lon: -9.1393 }); // State variable for latitude and longitude of Lisbon
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    description: "",
    humidity: "",
    wind: "",
    date: ""
  });

  const [temperature, setTemperature] = useState({
    iconUrl: "",
    temperature: "",
    unit: "ºC"
  });

  const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";


  useEffect(() => {
    fetchWeather(props.city || "Lisbon"); // Fetch weather data for the default city (Lisbon) when component mounts
  }, [props.city]);

  function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setWeatherInfo({
          city: data.name || "Unknown",
          description: data.weather[0]?.description || "Unknown",
          humidity: `${data.main?.humidity}%` || "Unknown",
          wind: `${data.wind?.speed} Km/h` || "Unknown",
          date: new Date(data.dt * 1000)
        });
        setTemperature({
          iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temperature: Math.round(data.main.temp) || 0
        });
        setLocation({ lat: data.coord.lat, lon: data.coord.lon }); // Update location state
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <div className="CurrentWeatherUpdate">
      <div className="Main">
        <main className="mainElement">
          <div className="current-weather">
            <CurrentWeatherInfo {...weatherInfo} />
            <CurrentTemperature {...temperature} />
          </div>
          <div>
          <ForecastWeather  location={location} /> {/* Pass setLocation as a prop */}
          </div>
        </main>
      </div>
    </div>
  );
}
