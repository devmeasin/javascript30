const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hours = document.querySelector(".hours");

function getTimes() {
  const date = new Date();

  const secondX = date.getSeconds();
  const minuteX = date.getMinutes();
  const hoursX = date.getHours();

  const secondsDegrees = (secondX / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = (minuteX / 60) * 360 + (secondX / 60) * 6 + 90;
  minute.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = (hoursX / 12) * 360 + (minuteX / 60) * 30 + 90;
  hours.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(getTimes, 1000);

getTimes();
