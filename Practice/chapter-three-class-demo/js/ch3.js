// JavaScript Document

// CONDITIONALS

var br = ("<br>")

//if
var a = 20;
var b = 10;
if (a > b) {
	document.write(a + "is greater than" + b);
}

// if-else

var c = 30;
var d = 40;
if (c > d) {
	document.write(br + c + "is greater than" + d);
} else if (c < d) {
	document.write(br + c + "is less than" + d);
} else {
	document.write(br + c + "is equal to" + d);
}

//Multiple Conditions
//Ex: is g between 50 and 90 inclusive?

var g = 55;

if (g >= 50 && g <= 60 || g > 300) {
	document.write(br + g + "is between 50-60 or it is greater than 300");
}

//////////////////////////////////////////////////////////////////////////////////////////

//Loops

// while (may not run)
/*
	while (condition) {
		do this stuff
	}
*/

var num = 1;
while (num < 5) {
	document.write(br + num);
	num++;
}

var arrBeatles = [
	"John",
	"Paul",
	"George",
	"Ringo"
];

var beatlesCounter = 0;
while (beatlesCounter < arrBeatles.length) {
	document.write(br + arrBeatles[beatlesCounter]);
	beatlesCounter++;
}

// do-while (guaranteed to run at least once)

var arrGrease = [
	"Danny",
	"Sandy",
	"Rizzo",
	"Kenickie"
];

var greaseCounter = 5;
do{
	document.write(br + arrGrease[greaseCounter]);
	greaseCounter++
}
while(greaseCounter < arrGrease.length);


//for (just a succinct version of WHILE)

/*
	for() {
		do stuff
	}
*/

var arrKroft = [
	"HR",
	"Sigmund",
	"Benita",
	"Witchiepoo"
];

for(var i = 0; i < arrKroft.length; i++) {
	document.write(br + arrKroft[i]);
}

//////////////////////////////////////////////////////////

//Functions

//Code that just sits there and doesn't execute until call

function bePolite(greeting, response) {
	document.write(br + greeting);
	document.write(br + response);
}

bePolite("Howdy!");
bePolite("How are you doing?", "What's it to you?");


function calculateTip(total, percent) {
	var theTip = total * percent;
	return theTip;
}

calculateTip(50, .2);

//Variable Scope
// local-variables - exist only within their function
// global variables - exist everywhere

function testGlobals() {
	var x = 5;
	alert("inside x = " + x);
}

x = 10;

testGlobals();


alert("outside x = " + x);













































