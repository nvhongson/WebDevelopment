"use strict";
//Global variables accessible to all functions
var numbers = [];  //create an empty array
var enterButton = null;  //global variables must be initialised
var calculateButton = null;

/* Get a number from the prompt
*  If a valid number add to array, if not give error message to user
*  Display the updated array of numbers on the web page
*  Make the Calculate button visible
*/
function enterNumber(){
	var number = prompt("Enter your number");
	number = Number(number);   //convert the input to a number type
	if (isFinite(number)) {    // test what is entered is a number   
		numbers.push(number);   //add the number entered to the end of the array 
	}
	else{
		alert("Please enter a valid number");
	}
	document.getElementById("numberList").innerHTML = "The numbers you have entered so far are: " + numbers;  //diplay a list of number entered
	enterButton.textContent = "Enter your next number";	//change the label on the Enter Button
	calculateButton.style.visibility = "visible";     //show the button  - uses the CSS property of the elenment
}		
/* Calculate the sum and average of the array of number
*  Display the results on the web page
*/
function calculateAverage(){
	var average = 0;
	var total = 0;
	for (var i = 0 ; i < numbers.length; i++){    
		total += numbers[i];   //add each number in the array to the cumulative total 
	}
	average = total/numbers.length;
	document.getElementById("result").innerHTML = "The total of your numbers is " + total + " and their average is " + average;
}

function init(){
		enterButton = document.getElementById("enter");  
		calculateButton = document.getElementById("calculate");
		calculateButton.style.visibility = "hidden";    //hide the Calculate button until some numbers are entered
		enterButton.onclick = enterNumber;
		calculateButton.onclick = calculateAverage;	
}

window.onload = init;
