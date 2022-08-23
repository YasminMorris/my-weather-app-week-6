import "./styles.css";

// Search city
function search(cities) {
  cities.preventDefault();
  let newCity = document.querySelector("#default-city");
  let inputCity = document.querySelector("#city-input");
  newCity.innerHTML = inputCity.value;
  searchCity(inputCity.value);
}

let searchedCity = document.querySelector("#search-box");
searchedCity.addEventListener("submit", search);

function searchCity(searchedCity) {
  let apiKey = "a35e42fcd0d3a15ef8f182d8c86ccea2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showHiTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showLoTemperature);
}

// Show current, low and high temperature
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `${temperature}℃`;
}

function showHiTemperature(hiTempResponse) {
  let hiTemp = Math.round(hiTempResponse.data.main.temp_max);
  let hiElement = document.querySelector("#temp-hi");
  hiElement.innerHTML = `${hiTemp}℃`;
}

function showLoTemperature(loTempResponse) {
  let loTemp = Math.round(loTempResponse.data.main.temp_min);
  let loElement = document.querySelector("#temp-lo");
  loElement.innerHTML = `${loTemp}℃`;
}

// Add live time
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hour}:${minutes}`;
