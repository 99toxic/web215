// JavaScript Document

//Create br variable
br = "<br>";

//Create Variables
var a = 20;

document.write(a);

var b = "the number is";

document.write(br + b + a);

//Perform Operations
var c = 30;
var d = 30.5;

document.write(br + (c + d));
document.write(br + (d - c));
document.write(br + (c * d));
document.write(br + (d / c));
document.write(br + (d % c));

// Concatenation and Escaping
var aristocat = "Tom \"Alley Cat\" O'Mally";
var age = "64";
var number = 1;

document.write(br + aristocat + " is " + age + " years old.");
document.write(br + (age + number));

//Create Indexed Arrays
var food = ["Apple", "Pizza", "Cake", "Cheese"];

document.write(br + food[1]);
document.write(br + food.length);

//Add a single element to the end of the array
food[4] = "Bagel";

document.write(br + food);

//Add a multiple elements to the end of the array
food.push("Hotdog", "Burger");

document.write(br + food);

//Add a multiple elements to the beginning of the array
food.unshift("Bannana", "Peach");

document.write(br + food);

//Remove a single element from the beginning of the array
food.shift();

document.write(br + food);

//Remove a single element from the end of the array
food.pop();

document.write(br + food);

//Create a multi-dimensional array
var fruit = ["Bannana", "Peach", "Apple"];
var veg = ["Broccoli", "Pepper", "Celery", "Carrot"];
var fruitVeg = [fruit, veg];

document.write(br + fruitVeg[1][0]);
