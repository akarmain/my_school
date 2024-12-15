let yearsPassed = 0;
let monthsPassed = 0;
const yearsElement = document.getElementById('years');
const monthsElement = document.getElementById('months');
const speedInput = document.getElementById('speed');

let elapsedTime = 0;
let timeIncrement = 100;
const baseYearDuration = 5000;

function updateTime() {
  elapsedTime += timeIncrement;
  const yearDuration = baseYearDuration / speedInput.value;
  const monthDuration = yearDuration / 12;

  yearsPassed = Math.floor(elapsedTime / yearDuration);
  monthsPassed = Math.floor((elapsedTime % yearDuration) / monthDuration);
  yearsElement.textContent = yearsPassed;
  monthsElement.textContent = monthsPassed;
}
setInterval(updateTime, 100);

function updateSpeed() {
  const speedValue = parseFloat(speedInput.value);
  const duration = 10 / speedValue;
  document.querySelector('.moon').style.animationDuration = duration + 's';
}
speedInput.addEventListener('input', updateSpeed);

updateSpeed();
