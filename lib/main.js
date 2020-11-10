"use strict";

// It is always helpful to use comments in your code!

//212 in boiling temp span
var boil;
boil = 212;

document.getElementById("boiling-temp").innerHTML = boil;

//32 in freezing temp span
var freeze;
freeze = 32;

document.getElementById("freezing-temp").innerHTML = freeze;

//random number in water temp span
var current;
current = 58;

document.getElementById("water-temp").innerHTML = current;

//set timeout attempt
setTimeout(function () {
  if (current > 212) {
    document.getElementById("boiling").classList.remove("hide");
    document.getElementById("boiling").classList.add("show");
  }
}, 3000);

//set timeout attempt
setTimeout(function () {
  if (current < 32) {
    document.getElementById("frozen").classList.remove("hide");
    document.getElementById("frozen").classList.add("show");
  }
}, 3000);

//set timeout attempt
setTimeout(function () {
  if (current < 212 && current > 32) {
    document.getElementById("good-temp").classList.remove("hide");
    document.getElementById("good-temp").classList.add("show");
  }
}, 3000);