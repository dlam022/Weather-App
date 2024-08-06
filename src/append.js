import getIcon from './icon.js';

const dataDiv = document.querySelector('.data');
const fah = '℉';
const cel = '°C';

function append(data, temp) {
  const titleDiv = document.createElement('div');
  titleDiv.className = 'location';

  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  const infoRight = document.createElement('div');
  const infoLeft = document.createElement('div');

  const condition = document.createElement('h2');
  condition.setAttribute('id', 'cond');
  condition.textContent = data.current.condition.text;
  const conditionpic = document.createElement('img');
  conditionpic.setAttribute('id', 'condpic');
  conditionpic.src = getIcon(data.current.condition.text);

  const title = document.createElement('h2');
  title.textContent = `${data.location.name}, ${data.location.region}`;
  titleDiv.appendChild(condition);
  titleDiv.appendChild(conditionpic);
  titleDiv.appendChild(title);

  const info = document.createElement('h3');
  infoLeft.appendChild(info);
  infoLeft.className = 'temp';
  titleDiv.appendChild(infoLeft);
  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  rightDiv.className = 'rightcss';
  leftDiv.className = 'leftcss';
  infoLeft.appendChild(leftDiv);
  infoLeft.appendChild(rightDiv);

  const other = document.createElement('div');
  other.className = 'othercss';

  const winddiv = document.createElement('div');
  winddiv.className = 'wind-div';
  const windright = document.createElement('div');
  windright.className = 'wind-right';
  const windtemp = document.createElement('h3');
  const wind = document.createElement('h3');
  wind.className = 'header-size';
  wind.textContent = 'Wind Speed';
  const windpic = document.createElement('img');
  windpic.src = getIcon('wind');
  windpic.className = 'sidepics';
  windright.appendChild(wind);
  windright.appendChild(windtemp);
  winddiv.appendChild(windpic);
  winddiv.appendChild(windright);

  const humidityDiv = document.createElement('div');
  humidityDiv.className = 'humDiv';
  const humidRight = document.createElement('div');
  humidRight.className = 'humidRight';
  const humidpic = document.createElement('img');
  humidpic.setAttribute('id', 'humidpic');
  humidpic.src = getIcon('humidity');
  const humidity = document.createElement('h3');
  humidity.className = 'header-size';
  humidity.textContent = 'Humidity';
  const humidTemp = document.createElement('h3');
  humidRight.appendChild(humidity);
  humidRight.appendChild(humidTemp);
  humidityDiv.appendChild(humidpic);
  humidityDiv.appendChild(humidRight);
  humidTemp.textContent = `${data.current.humidity}%`;

  const feelsrightdiv = document.createElement('div');
  feelsrightdiv.className = 'feelsright';
  const feelsright = document.createElement('div');
  const feels = document.createElement('div');
  const feelspic = document.createElement('img');
  const feelsheader = document.createElement('h3');
  feelsheader.className = 'header-size';
  feelsheader.textContent = 'Feels Like';
  feelspic.src = getIcon('thermometer');
  feelspic.setAttribute('id', 'feelspic');
  feelsrightdiv.appendChild(feelsheader);
  feelsrightdiv.appendChild(feelsright);

  feels.className = 'feelsDiv';
  feelsright.className = 'felright';
  feels.appendChild(feelspic);
  feels.appendChild(feelsrightdiv);
  other.appendChild(winddiv);
  other.appendChild(humidityDiv);
  other.appendChild(feels);

  if (!temp) {
    leftDiv.innerHTML = `${data.current.temp_f}`;
    rightDiv.innerHTML = fah;
    windtemp.textContent = `${data.current.wind_mph} MPH`;
    feelsright.innerHTML = `${data.current.feelslike_f} ${fah}`;
  } else {
    leftDiv.innerHTML = `${data.current.temp_c}`;
    rightDiv.innerHTML = cel;
    windtemp.textContent = `${data.current.wind_kph} KPH`;
    feelsright.innerHTML = `${data.current.feelslike_c} ${cel}`;
  }
  infoRight.appendChild(other);
  infoRight.className = 'extra';
  infoDiv.appendChild(infoRight);

  dataDiv.appendChild(titleDiv);
  dataDiv.appendChild(infoDiv);
}

export default append;
