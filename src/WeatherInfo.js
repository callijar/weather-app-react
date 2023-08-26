import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row  p-3 temperature-container d-flex align-content-center">
        <div className="col-md-auto d-flex justify-content-center">
          {" "}
          <WeatherIcon code={props.data.icon} size={52} />{" "}
        </div>
        <div className="col-md-auto display-1 d-flex justify-content-center temperature">
          {Math.round(props.data.temperature)}<span className="unit">°C</span>
          {"   "}
        </div>
        <div className="col-md-auto main">
        <svg className="blob" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> <path fill="#D0E2FF" d="M65.2,-34.9C79.3,-13.2,81.9,17.8,69.2,35.3C56.4,52.7,28.2,56.6,9.6,51C-9,45.5,-18.1,30.6,-19.7,19.5C-21.4,8.5,-15.7,1.3,-11.2,-14.8C-6.7,-31,-3.3,-56.2,11.1,-62.6C25.5,-69,51.1,-56.6,65.2,-34.9Z" transform="translate(100 100)" /> </svg>

          <h1 className="display-1 city-name"> {props.data.city}</h1>{" "}
        </div>
      </div>

      <div className="d-flex justify-content-center p-3">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />,{" "}
          </li>
          <li>{props.data.description}, </li>
          <li>Humidity: {props.data.humidity}%, </li>
          <li>Wind: {props.data.wind} km/h </li>
        </ul>
      </div>
    </div>
  );
}
