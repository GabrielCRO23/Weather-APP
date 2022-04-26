const searchButton = document.querySelector('#submitButton');
const changeButton = document.querySelector('#changeUnits')
const temperatureDisplay = document.querySelector('#temperature')
const checkbox = document.querySelector('#getWeatherF')
let CITY_NAME;
let CURRENT_TEMP;
let UNITS;

/*

searchButton.addEventListener('click', function() {
    let CITY_NAME = document.getElementById('weather-search').value;
    event.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=570f50d767691ae0612a59f3d17eac1a&${UNITS}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      temperatureDisplay.textContent = Math.floor(response.main.temp)
      
    });
})

temperatureDisplay.addEventListener('click', function(){
    temperatureDisplay.textContent * 9/5 + 32
})

/*

changeButton.addEventListener('click', function(){
    temperatureDisplay.textContent * 9/5 + 32
}) 
*/

searchButton.addEventListener('click', function(){
    event.preventDefault()
    if (checkbox.checked === true) {
        getWeatherF();
    } else {
        getWeatherC();
    }
})

async function getWeatherC() {
    UNITS = 'units=metric'
    let CITY_NAME = document.getElementById('weather-search').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=570f50d767691ae0612a59f3d17eac1a&${UNITS}`, {mode: 'cors'})
    const data = await response.json();
    temperatureDisplay.textContent = Math.floor(data.main.temp)
  }

async function getWeatherF() {
    UNITS = 'units=imperial'
    let CITY_NAME = document.getElementById('weather-search').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=570f50d767691ae0612a59f3d17eac1a&${UNITS}`, {mode: 'cors'})
    const data = await response.json();
    temperatureDisplay.textContent = Math.floor(data.main.temp)
}



checkbox.addEventListener('change', function(){
    if (checkbox.checked) {
        getWeatherF()
    } else {
        getWeatherC()
    }
})
