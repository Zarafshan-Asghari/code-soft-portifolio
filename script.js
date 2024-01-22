"use strict";
let currentTime = new Date();
// let time = document.getElementById("time");
let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("sec");
let amOrPm = document.getElementById("amOrPm");

// ------------------------------
// برای استفاده از قالب 12 ساعته آنرا تقسیم 12 می کنیم
hour.textContent = currentTime.getHours() % 12;
minutes.textContent = currentTime.getMinutes();
seconds.textContent = currentTime.getSeconds();
// -----------------------------
// AM OR PM
currentTime.getHours() >= 6 && currentTime.getHours() <= 12 // 3
  ? (amOrPm.textContent = "am")
  : (amOrPm.textContent = "pm");

// console.log(currentTime.getHours() % 12 < 12);
