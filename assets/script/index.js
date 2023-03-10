"use strict";

const time = document.querySelector(".time");
const dateOn = document.querySelector(".date");
const alarm = document.querySelector(".alarm");

let alarmTime = null;
let alarmAudio = new Audio("./assets/audio/alarm.mp3");
alarmAudio.type = "audio/mp3";

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

  if (alarmTime === `${hours}:${minutes}`) {
    alarmAudio.play();
    time.style.color = "red";
  } else {
    time.style.color = "#fcfcfc";
  }

  setTimeout(digitalwatch, 1000);
}

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  const alarmTimeInput = document.querySelector(".alarm-time");
  const alarmTimeDisplay = document.querySelector(".alarm-time-display");
  const inputRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (inputRegex.test(alarmTimeInput.value)) {
    alarmTime = alarmTimeInput.value;
    alarmTimeDisplay.textContent = alarmTime;
    alarmTimeInput.value = "";
  } else {
    alert("Please enter a valid time in HH:MM format.");
    alarmTimeInput.value = "";
  }
});

document.querySelector(".form").addEventListener("reset", function (event) {
  event.preventDefault();
  alarmTime = null;
  document.querySelector(".alarm-time-display").textContent = "";
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
});

digitalwatch();
