import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Triangle } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const [showForecastComponent, setShowForecastComponent] = useState(false);
  const handleMoreClick = () => {
    setShowForecastComponent(true);
  };
  const ComponentToShow = () => {
    return (
      <div>
        <WeatherForecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
      </div>
    );
  };

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "45t979b41003aof20ffaaa7143e5db63";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather rounded">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 input-group mb-3">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input rounded-pill rounded-end-0 border-end-0 border-button"
                onChange={handleCityChange}
              />
              <button class="btn search-button rounded-pill rounded-start-0 border-start-0 border-button" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <div>
          {!showForecastComponent && (
            <button
              onClick={handleMoreClick}
              className="btn rounded-pill border-button"
            >
              Forecast
            </button>
          )}
          {showForecastComponent && <ComponentToShow />}
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <Triangle
          height="80"
          width="80"
          color="#8AAAE5"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}
