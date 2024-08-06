import getHour from './weather.js';

const bottomData = document.querySelector('.data-extra');
let counter = 1;

function bottomindex(data, temp) {
  const switchData = document.createElement('div');
  switchData.className = 'data-switch';

  const leftArrow = document.createElement('div');
  const rightArrow = document.createElement('div');
  rightArrow.className = 'rightA';
  leftArrow.className = 'leftA';
  leftArrow.innerHTML = '<';
  rightArrow.innerHTML = '>';
  leftArrow.addEventListener('click', () => {
    console.log('click');
    if (counter == 1) {
      counter = 1;
    } else {
      counter--;
      getHour(data, temp, counter);
    }
    console.log(counter);
  });
  rightArrow.addEventListener('click', () => {
    if (counter == 3) {
      counter = 3;
    } else {
      counter++;
      getHour(data, temp, counter);
    }
    console.log(counter);
  });

  switchData.appendChild(leftArrow);
  switchData.appendChild(rightArrow);
  bottomData.appendChild(switchData);
  getHour(data, temp, counter);
}

export default bottomindex;
