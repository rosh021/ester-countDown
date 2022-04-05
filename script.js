const daysElm = document.getElementById("days");

const hoursElm = document.getElementById("hours");
const minutesElm = document.getElementById("minutes");
const secondElm = document.getElementById("second");

const countDown = () => {
  const newEster = new Date(2022, 03, 17);
  const currentDate = new Date();
  //   console.log(newEster - currentDate);

  const second = (newEster - currentDate) / 1000;
  const days = Math.floor(second / 3600 / 24);
  const hours = Math.floor(second / 3600) % 24;
  const minutes = Math.floor(second / 60) % 60;
  const totalSecond = Math.floor(second) % 60;

  console.log(days, hours, minutes, totalSecond);

  daysElm.innerText = days;
  hoursElm.innerText = hours;
  minutesElm.innerText = minutes;
  secondElm.innerText = totalSecond;
};

countDown();

setInterval(countDown, 1000);
