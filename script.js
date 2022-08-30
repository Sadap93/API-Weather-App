/*
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79a254e99cmshad29f45ff22f9f0p1257ccjsn8a4d496731f2',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};

fetch('https://open-weather13.p.rapidapi.com/city/szeged', options)
  .then(response => response.json())
  .then(data => console.log(data.weather[0].main))
  .catch(err => console.error(err));
*/

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇*/
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

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
  .then(response => response.json())
  .then(json => {
    const data = json
  console.log(data);
  console.log(data.name);
  console.log(data.weather[0].main);
  console.log(data.main.temp);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  const weatherData = {
    name: data.name,
    main: data.weather[0].main,
    temp: data.main.temp,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
  }
    showWeatherData({weatherData})
    if (data.cod === "404") {
    console.log("Invalid city name")  
    }
  })
  //CODE GOES HERE
}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = ({weatherData}) => {
  //CODE GOES HERE
  cityName.innerHTML = weatherData.name

}
