// JavaScript Document

br = "<br>";

////////////// Conditionals ////////////////////

//if
var stock = 100;
var sold = 20;
var items = (stock - sold);

if (items > 0) {
  document.write(items);
}

//if-else

//example 1
var expression = 5 + 2;
var solution = 7;

if (expression == solution) {
  document.write(br + "Congratulations");
} else {
  document.write(br + "Incorrect");
}

//example 2
var expression = 5 + 2;
var solution = 99;

if (expression == solution) {
  document.write(br + "Congratulations");
} else {
  document.write(br + "Incorrect");
}


//else-if
document.write('<p>---------------------------------------------</p>');

//example 1
var total = 76;

if (total > 100) {
  document.write(br + total + " is more than 100");
} else if (total > 50) {
  document.write(br + total + " is greater than 50");
} else {
  document.write(br + total + " is small");
}

//example 2
var total = 125;

if (total > 100) {
  document.write(br + total + " is more than 100");
} else if (total > 50) {
  document.write(br + total + " is greater than 50");
} else {
  document.write(br + total + " is small");
}

//example 3
var total = 31;

if (total > 100) {
  document.write(br + total + " is more than 100");
} else if (total > 50) {
  document.write(br + total + " is greater than 50");
} else {
  document.write(br + total + " is small");
}

//Multiple Conditions
document.write('<p>---------------------------------------------</p>');

//example 1
var salary = 80000;

if (salary >= 70000 && salary <= 1000000) {
  document.write(br + "Good Salary");
} else {
  document.write(br + "Keep Saving");
}

//example 2
var salary = 30000;

if (salary >= 70000 && salary <= 1000000) {
  document.write(br + "Good Salary");
} else {
  document.write(br + "Keep Saving");
}

////////////////// Loops //////////////////////

//While
document.write('<p>---------------------------------------------</p>');
var num = 1;

while (num < 6) {
  document.write(br + num);
  num++;
}

//Do - while
document.write('<p>---------------------------------------------</p>');
var num = 1;

do {
  document.write(br + num);
  num++;
} while (num < 6);

//For
document.write('<p>---------------------------------------------</p>');
arrPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

for (var i = 0; i < arrPlanets.length; i++) {
  document.write(br + arrPlanets[i]);
}

////////////////// Functions //////////////////////

//Functions and Arguments
document.write('<p>---------------------------------------------</p>');
function message(hello) {
  document.write(br + hello);
}

message("hello how are you");

//Multiple Arguments
document.write('<p>---------------------------------------------</p>');
function numbers(one, two) {
  var finalProduct = one * two;
  return finalProduct;
}

numbers(1, 2);
