import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="temperature-container d-flex justify-content-center">
        <WeatherIcon code={props.data.icon} size={52} />
        
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
          {"   "}
          <h1 className="display-1 p-5"> {props.data.city}</h1>  
      </div>

      <div className="more-info">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />, {" "}
           </li>
          <li>{props.data.description}, </li>
          <li>Humidity: {props.data.humidity}%, </li>
          <li>Wind: {props.data.wind} {" "} km/h </li>
        </ul>
      </div>
    </div>
  );
}
