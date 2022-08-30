//"city-name"
const cityName = document.getElementById('city-name');
//"weather-type"
const weatherType = document.getElementById('weather-type');
//"temp"
const temp = document.getElementById('temp');
//"min-temp"
const minTemp = document.getElementById('min-temp');
//"max-temp"
const maxTemp = document.getElementById('max-temp');

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(json => {
      const data = json
      const weatherData = {
        name: data.name,
        type: data.weather[0].main,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
      }
      showWeatherData(weatherData)
      if (data.cod === "404") {
        console.log("Invalid city name")
      }
    })
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
}

//convert Fahrenheit to Celsius
const convertToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) / 1.8).toFixed(2)
}

const showWeatherData = (weatherData) => {
  cityName.innerText = weatherData.name
  weatherType.innerText = weatherData.type
  const tempCelsius = convertToCelsius(weatherData.temp)
  const tempMinCelsius = convertToCelsius(weatherData.tempMin)
  const tempMaxCelsius = convertToCelsius(weatherData.tempMax)
  //refresh dom
  temp.innerText = tempCelsius
  minTemp.innerText = tempMinCelsius
  maxTemp.innerText = tempMaxCelsius
}
