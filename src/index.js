import './styles/style.css';
import weatherfunctions from './weather.js';
import clear from './clear.js';
import bottomindex from './bottomindex.js';

const search = document.querySelector('#searchbar');
const toggle = document.querySelector('.toggle');
let temp = true;
let start = false;

let val = '';

toggle.onclick = function () {
  toggle.classList.toggle('active');
  if (!start && toggle.classList.contains('active')) {
    console.log('fahrenheit');
    temp = false;
    console.log('first run');
  } else if (!start && !toggle.classList.contains('active')) {
    console.log('celsius');
    console.log('second run');
    temp = true;
  } else if (toggle.classList.contains('active') && start) {
    console.log('third run');
    temp = false;
    console.log(val);
    clear();
    weatherfunctions.getWeather(val, temp);
    bottomindex(val, temp);
  } else {
    console.log('fourth run');
    temp = true;
    console.log(val);
    clear();
    weatherfunctions.getWeather(val, temp);
    bottomindex(val, temp);
  }
};

search.addEventListener('keyup', (event) => {
  val = search.value.trim();
  if (event.key === 'Enter') {
    start = true;
    clear();
    if (val.trim() === '') {
      return;
    }
    console.log(val);
    weatherfunctions.getWeather(val, temp);
    bottomindex(val, temp);
  }
});
