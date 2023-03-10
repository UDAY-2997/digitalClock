"use strict";

const time = document.querySelector(".time");
const dateOn = document.querySelector(".date");
const alarm = document.querySelector(".alarm");

function digitalwatch() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear().toString().padStart(4, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const todayTime = `${hours}:${minutes}:${seconds}`;
  const todayDate = `${day} / ${month} / ${year}`;

  time.innerHTML = todayTime;
  dateOn.innerHTML = todayDate;

  setTimeout(digitalwatch, 1000);
}

digitalwatch();
