let now = new Date();
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");


let days = [
"Sunday",
"Monday", 
"Tuesday", 
"Wednesday", 
"Friday",
"Saturday",
];

let currentDay = days[now.getDay()];
let currentMonth = now.getMonth();

h2.innerHTML = `${currentDay} ${currentMonth}`;

let currentHours = now.getHours();
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}

let currentMinutes = now.getMinutes();

if(currentMinutes < 10) {
currentMinutes = `0${currentMinutes}`;
}



h3.innerHTML= `${currentHours}: ${currentMinutes}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

function getData(event){
event.preventDefault();
let input = document.querySelector("#city-here");
let searchCity = `${input.value}`;
let apiKey = "a0d17306a9a4c1c8803257ecf3d5f7ed";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=${searchCity}&appid=${apiKey}&units=metric`;
axios.get(`${apiUrl}`).then(showTemperature);
}


let searchButton = document.querySelector("#city-search");
searchButton.addEventListener ("submit", getData);