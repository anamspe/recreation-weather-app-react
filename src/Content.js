import React from "react";

import "./content.css";

export default function Content() {
  let date = "Saturday";
  let time = "14:18";
  let city = "Vancouver, CA";
  let temp = "8";
  let minMax = "(7º - 10º)";
  let tempDescription = "Overcast clouds";

  let wind = "21";
  let humidity = "91";

  let sunrise = "07:39";
  let sunset = "17:13";

  return (
    <div className="Content">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mt-4">
              <h4 className="current-date">
                {date} | {time}{" "}
              </h4>
              <h1 className="main-city">
                {" "}
                <i className="fa-solid fa-map-pin city-pin"></i> {city}{" "}
              </h1>
              <span className="main-temp"> {temp}º</span>{" "}
              <span className="temp-letter">C</span>
              <p>
                <small className="min-max">{minMax}</small>
              </p>
              <p className="temp-description">{tempDescription}</p>
              <ul>
                <li>
                  {" "}
                  <span role="img" aria-label="accessible-emoji">
                    🍃
                  </span>{" "}
                  Wind: {wind} km/h
                </li>
                <li>
                  {" "}
                  <span role="img" aria-label="accessible-emoji">
                    💦
                  </span>{" "}
                  Humidity: {humidity}%{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="col text-center mt-2">
            <img
              src="https://images.emojiterra.com/twitter/v14.0/128px/2601.png"
              alt="weather-icon"
              width="175px"
              height="175px"
            />
            <p className="sunrise-sunset d-block">
              Sunrise: <span> {sunrise} </span> <br />
              Sunset: <span> {sunset}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
