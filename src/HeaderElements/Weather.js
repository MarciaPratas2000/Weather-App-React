import React, { useState} from "react";


export default function Weather(props) {
  const [data, setData] = useState(props.data);
  const [loaded, setLoaded] = useState(true);

  if (loaded && data) {
    return (
      <div>
        <p>
          City: <strong>{data.name}</strong>
        </p>
        <p>Temperature: {data.main.temp} ºC</p>
        <p>Feels like: {data.main.feels_like} ºC</p>
        <p>Min temperature: {data.main.temp_min} ºC</p>
        <p>Max temperature: {data.main.temp_max} ºC</p>
        <p>Description: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
        <p>
          Icon:{" "}
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </p>
      </div>
    );
  }

  if (props.error) {
    return <p>Error: {props.error.message} . Please Refresh the page or retry.</p>;
  } else {
    return <p>Loading...</p>;
  }
}
