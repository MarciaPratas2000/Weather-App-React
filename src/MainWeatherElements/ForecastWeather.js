import React, { useState, useEffect } from "react";
import ForecastColumn from "./ForecastColumn";
import "./ForecastWeather.css";
import axios from "axios";


export default function ForecastWeather(props) {
  // State variables for storing forecast data, error, and loading state
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";

  // Function to format the day from a timestamp
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  }

  // useEffect encapsulates function because of dependencies
  // Fetch forecast data whenever the location prop changes
  useEffect(() => {
    // Check if props.location is defined before fetching data
    if (!props.location) return;
    // Function to handle the API response and update the forecast state
    function handleResponse(response) {
      // Transform the API response data into the desired format
      console.log("API response:", response.data); // Logging the API response 
      // Group the forecast data by daily intervals
      const forecastList = response.data.daily;
      const updatedForecast = forecastList.slice(1, 6).map((dailyForecastItem) => ({
        day: formatDay(dailyForecastItem.dt),
        img: `http://openweathermap.org/img/wn/${dailyForecastItem.weather[0].icon}.png`,
        alt: dailyForecastItem.weather[0].description,
        maxTemp: `${Math.round(dailyForecastItem.temp.max)}º`,
        minTemp: `${Math.round(dailyForecastItem.temp.min)}º`,
      }));
    
      setForecast(updatedForecast);
      setLoaded(true);
    }
    // Function to fetch forecast data from the API
    function getForecast(lat, lon) {
      // Construct the API URL
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      // Make a GET request to the API URL
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch((error) => {
          setError(error);
          console.error("Error fetching weather forecast data:", error);
        });
    }
    
    getForecast(props.location.lat, props.location.lon); // Fetch weather data using the provided latitude and longitude
  }, [props.location]); // Specify props.location as the only dependency
  
  // Display loading message if data is not yet loaded
  if (!loaded) {
    console.log("Not Loaded");
  }

  // Display error message if there's an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if(loaded){
  console.log(forecast);
  return (
    <div className="ForecastWeather">
      <div className="forecast-weather" id="forecast">
      {forecast.map((day, index) => (
        <ForecastColumn
          key={index}
          day={day.day}
          img={day.img}
          alt={day.alt}
          maxTemp={day.maxTemp}
          minTemp={day.minTemp}
        />
      ))}
      </div>
    </div>
  );}
  

}
