import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("Boston");
  let [temperature, setTemperature] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently ${temperature}°F in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiKey = "7059cb165caa3316bff682d263a01b1e";
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(showTemperature);

  return (
    <div classname="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={changeCity}
        />
        <input type="submit" value="search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
