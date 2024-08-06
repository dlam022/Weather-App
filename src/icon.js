import camelCase from 'lodash/camelCase';
import cloudy from './icons/cloudy.png';
import fog from './icons/fog.png';
import hail from './icons/hail.png';
import sleet from './icons/sleet.png';
import thunderstorm from './icons/thunderstorm.png';

import humidity from './icons/humidity.png';
import raining from './icons/raining.png';
import snow from './icons/snow.png';
import sunny from './icons/sun.png';
import thermometer from './icons/thermometer.png';
import wind from './icons/wind (2).png';

function getIcon(icon) {
  const getIcon = camelCase(icon);
  console.log(getIcon);
  if (
    getIcon == 'cloudy' ||
    getIcon == 'overcast' ||
    getIcon == 'mist' ||
    getIcon == 'dust' ||
    getIcon == 'smoke' ||
    getIcon == 'partlyCloudy' ||
    getIcon == 'mostlySunny'
  )
    return cloudy;
  if (getIcon == 'sleet') return sleet;
  if (getIcon == 'hail') return hail;
  if (getIcon == 'thunderstorm') return thunderstorm;
  if (getIcon == 'haze' || getIcon == 'fog') return fog;
  if (getIcon == 'humidity') return humidity;
  if (
    getIcon == 'rain' ||
    getIcon == 'lightRain' ||
    getIcon == 'heavyRain' ||
    getIcon == 'patchyRainNearby'
  )
    return raining;
  if (getIcon == 'snow' || getIcon == 'lightSnow' || getIcon == 'heavySnow')
    return snow;
  if (getIcon == 'sunny' || getIcon == 'clear') return sunny;
  if (getIcon == 'thermometer') return thermometer;
  if (getIcon == 'wind') return wind;
}

export default getIcon;
