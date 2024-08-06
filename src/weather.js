import append from './append.js';
import hourAppend from './hourly.js';

async function getWeather(val, temp) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=6d40e541c47149bfb8b225446240805&q=${val}&aqi=no`,
    { mode: 'cors' }
  );

  const weatherData = await response.json();
  console.log(weatherData);

  append(weatherData, temp);
}

async function getHour(val, temp, counter) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=6d40e541c47149bfb8b225446240805&q=${val}&hours=24&aqi=no&alerts=no`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  console.log(weatherData);

  hourAppend(weatherData, temp, counter);
}

export default { getHour, getWeather };
