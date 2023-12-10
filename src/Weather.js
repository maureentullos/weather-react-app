import React from "react";
import axios from "axios";


export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°F`);
    }
    let apiKey = "3d360585fa7881320345041eeb3adff2";
    let apiUrl=`https://api.openweatherapp.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    
    axios.get(apiUrl).then(handleResponse);
    return(
        <h2>Hello from Weather</h2>
    );
    
}