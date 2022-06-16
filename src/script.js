function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let city = document.querySelector("#city");
  city.innerHTML = `${cityInput.value}`;
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", showCity);

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
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
let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = `${day}, ${hours}:${minutes}`;
