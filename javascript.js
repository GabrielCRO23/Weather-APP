const searchButton = document.querySelector('#submitButton');
const changeButton = document.querySelector('#changeUnits')
const temperatureDisplay = document.querySelector('#temperature')
const CITY_COUNTRY = document.querySelector('#city-and-country')
const details = document.querySelector('#details')
const FEELS_LIKE = document.querySelector('#feels-like')
const checkbox = document.querySelector('#getWeatherF')
let CITY_NAME;
let CURRENT_TEMP;
let UNITS;

getWeatherDefault();
        
searchButton.addEventListener('click', function(){
    event.preventDefault();
    if (checkbox.checked === true) {
        getWeatherF();
    } else {
        getWeatherC();
    }
});

async function getWeatherC() {
    UNITS = 'units=metric'
    let CITY_NAME = document.getElementById('weather-search').value || 'dubrovnik';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=570f50d767691ae0612a59f3d17eac1a&${UNITS}`, {mode: 'cors'})
    const data = await response.json();
    CITY_COUNTRY.textContent = data.name.toUpperCase() + ',' + ' ' + data.sys.country
    temperatureDisplay.textContent = Math.floor(data.main.temp) + '°C'
    details.textContent = data.weather[0].description.toUpperCase();
    FEELS_LIKE.textContent = 'FEELS LIKE:' + ' ' + data.main.feels_like + '°C'
  }

async function getWeatherF() {
    UNITS = 'units=imperial'
    let CITY_NAME = document.getElementById('weather-search').value || 'dubrovnik';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=570f50d767691ae0612a59f3d17eac1a&${UNITS}`, {mode: 'cors'})
    const data = await response.json();
    CITY_COUNTRY.textContent = data.name.toUpperCase() + ',' + ' ' + data.sys.country
    temperatureDisplay.textContent = Math.floor(data.main.temp) + '°F'
    details.textContent = data.weather[0].description.toUpperCase();
    FEELS_LIKE.textContent = 'FEELS LIKE:' + ' ' + data.main.feels_like + '°F' 
}

async function getWeatherDefault() {
    UNITS = 'units=metric'
    CITY_NAME = 'dubrovnik'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=570f50d767691ae0612a59f3d17eac1a&${UNITS}`, {mode: 'cors'})
    const data = await response.json();
    CITY_COUNTRY.textContent = data.name.toUpperCase() + ',' + ' ' + data.sys.country
    temperatureDisplay.textContent = Math.floor(data.main.temp) + '°C'
    details.textContent = data.weather[0].description.toUpperCase();
    FEELS_LIKE.textContent = 'FEELS LIKE:' + ' ' + data.main.feels_like + '°C'
}



checkbox.addEventListener('change', function(){
    if (checkbox.checked) {
        getWeatherF()
    } else {
        getWeatherC()
    }
})
