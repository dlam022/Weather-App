import getIcon from './icon.js';

const bottomData = document.querySelector('.data-extra'); //big div
const dataDiv = document.createElement('div'); //div for flex
dataDiv.className = 'bottom-inner';
const fah = '℉';
const cel = '°C';
let t = 12;
let a = 1;
let b = 4;

function hourAppend(data, temp, counter) {
  dataDiv.innerHTML = '';
  console.log(data.forecast.forecastday[0].hour[0]);
  a = 1;
  if (counter == 1) {
    console.log('first run');
    for (let i = 0; i < 8; i++) {
      const innerDiv = document.createElement('div'); //div for grid
      innerDiv.className = 'grid-inner';
      const time = document.createElement('h3');
      if (i == 0) {
        time.innerHTML = `${t} am`;
      } else if (i > 0 && i < 12) {
        time.innerHTML = `${i} am`;
      } else if (i == 12) {
        time.innerHTML = `${t} pm`;
      } else {
        time.innerHTML = `${a} pm`;
        a++;
      }
      const temperature = document.createElement('h3');
      if (!temp) {
        temperature.innerHTML = `${data.forecast.forecastday[0].hour[i].temp_f} ${fah}`;
      } else {
        temperature.innerHTML = `${data.forecast.forecastday[0].hour[i].temp_c} ${cel}`;
      }
      const condition = document.createElement('h3');
      const condpic = document.createElement('img');
      condpic.className = 'extra-pic';
      condition.innerHTML = `${data.forecast.forecastday[0].hour[i].condition.text}`;
      condpic.src = getIcon(
        data.forecast.forecastday[0].hour[i].condition.text
      );

      innerDiv.appendChild(time);
      innerDiv.appendChild(temperature);
      innerDiv.appendChild(condition);
      innerDiv.appendChild(condpic);

      dataDiv.appendChild(innerDiv);
    }
  } else if (counter == 2) {
    console.log('second run');
    for (let i = 8; i < 16; i++) {
      const innerDiv = document.createElement('div'); //div for grid
      innerDiv.className = 'grid-inner';
      const time = document.createElement('h3');
      if (i == 0) {
        time.innerHTML = `${t} am`;
      } else if (i > 0 && i < 12) {
        time.innerHTML = `${i} am`;
      } else if (i == 12) {
        time.innerHTML = `${t} pm`;
      } else {
        time.innerHTML = `${a} pm`;
        a++;
      }
      const temperature = document.createElement('h3');
      if (!temp) {
        temperature.innerHTML = `${data.forecast.forecastday[0].hour[i].temp_f} ${fah}`;
      } else {
        temperature.innerHTML = `${data.forecast.forecastday[0].hour[i].temp_c} ${cel}`;
      }
      const condition = document.createElement('h3');
      const condpic = document.createElement('img');
      condpic.className = 'extra-pic';
      condition.innerHTML = `${data.forecast.forecastday[0].hour[i].condition.text}`;
      condpic.src = getIcon(
        data.forecast.forecastday[0].hour[i].condition.text
      );

      innerDiv.appendChild(time);
      innerDiv.appendChild(temperature);
      innerDiv.appendChild(condition);
      innerDiv.appendChild(condpic);

      dataDiv.appendChild(innerDiv);
    }
  } else {
    for (let i = 16; i < 24; i++) {
      console.log('third run');
      const innerDiv = document.createElement('div'); //div for grid
      innerDiv.className = 'grid-inner';
      const time = document.createElement('h3');
      if (i == 0) {
        time.innerHTML = `${t} am`;
      } else if (i > 0 && i < 12) {
        time.innerHTML = `${i} am`;
      } else if (i == 12) {
        time.innerHTML = `${t} pm`;
      } else {
        time.innerHTML = `${b} pm`;
        b++;
      }
      if (b == 12) {
        b = 4;
      }
      const temperature = document.createElement('h3');
      if (!temp) {
        temperature.innerHTML = `${data.forecast.forecastday[0].hour[i].temp_f} ${fah}`;
      } else {
        temperature.innerHTML = `${data.forecast.forecastday[0].hour[i].temp_c} ${cel}`;
      }
      const condition = document.createElement('h3');
      const condpic = document.createElement('img');
      condpic.className = 'extra-pic';
      condition.innerHTML = `${data.forecast.forecastday[0].hour[i].condition.text}`;
      condpic.src = getIcon(
        data.forecast.forecastday[0].hour[i].condition.text
      );

      innerDiv.appendChild(time);
      innerDiv.appendChild(temperature);
      innerDiv.appendChild(condition);
      innerDiv.appendChild(condpic);

      dataDiv.appendChild(innerDiv);
    }
  }
  bottomData.appendChild(dataDiv);
}

export default hourAppend;
