
//            Chapter # 9 to 11 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 9 to 11 (Assignment)</b> <br><br><br><br>");


// 1. 
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Answer -1
document.write("Answer -1 <br> ");

var cityName = prompt("Enter the name of city!");

if (cityName == "karachi") {
    alert("Welcome to city of lights");
    document.write("Welcome to city of lights <br><br><br> ");
} else {
    alert("Not found!");
    document.write("Not found! <br><br><br>");
}

// 2. 
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// Answer -2
document.write("Answer -2 <br> ");

var gender = prompt("Enter your gender!");

if (gender == "male") {
    alert(" Good Morning Sir.");
    document.write(" Good Morning Sir. <br><br><br> ");
} else {
    alert(" Good Morning Ma’am");
    document.write(" Good Morning Ma’am <br><br><br>");
}

// 3. 
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// Answer -3
document.write("Answer -3 <br> ");

var colorName = prompt("Enter signal color name!");

if (colorName == "red") {
    alert("Must Stop.");
    document.write(" Must Stop. <br><br><br> ");
} else if (colorName == "yellow") {
    alert("Ready to move.");
    document.write("Ready to move. <br><br><br>");
} else if (colorName == "green") {
    alert("Move now.");
    document.write("Move now. <br><br><br>");
} else {
    alert("Not Found!");
    document.write("Not Found! <br><br><br>");
}

// 4. 
// Write a program to take input remaining fuel in car (in
//  litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”


// Answer -4
document.write("Answer -4 <br> ");

var fuel = prompt("Enter remaining fuel!");

if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
    document.write(" Please refill the fuel in your car <br><br><br> ");
} else {
    alert("Fuel is already up to 0.25 Liters");
    document.write("Fuel is already up to 0.25 Liters <br><br><br>");
}

// 5. 
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// Answer -5
document.write("Answer -5 <br> <br>");

// a.
document.write("(a) <br> ");

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
    document.write("given condition for variable a is true <br><br>");
}

// b.
document.write("(b) <br> ");

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true ");
    document.write("given condition for variable b is true <br><br>");
} else {
    alert("given condition for variable b is false ");
    document.write("given condition for variable b is false <br><br>");
}

// c.
document.write("(c) <br> ");

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
    document.write("condition 1 is true <br><br>");
}
if (c === 13) {
    alert("condition 2 is true");
    document.write("condition 2 is true <br><br>");
}
if (++c < 14) {
    alert("condition 3 is true");
    document.write("condition 3 is true <br><br>");
}
if (c === 14) {
    alert("condition 4 is true");
    document.write("condition 4 is true <br><br>");
}

// d.
document.write("(d) <br> ");

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
    document.write("The cost equals <br><br>");
}

// e.
document.write("(e) <br> ");

if (true) {
    alert("True");
    document.write("True <br><br>");
}
if (false) {
    alert("True");
    document.write("True <br><br>");
}

// f.
document.write("(f) <br> ");

if ("car" < "cat") {
    alert("car is smaller than cat");
    document.write("car is smaller than cat <br><br> ");
} else {
    alert("car is greater than cat");
    document.write("car is greater than cat <br><br> <br> ");
}

// 6. 
// Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// Answer -6
document.write("Answer -6 <br> <br>");

document.write("<b>Marks Sheet</b> <br> <br><br> ")
var english = Number(prompt("Enter English obtained marks"));
var urdu = Number(prompt("Enter Urdu obtained marks"));
var maths = Number(prompt("Enter Mathes obtained marks"));
var obtainedMarksSubjects = english + urdu + maths;
var totalMarks = Number(prompt("Enter Total marks"));

var percentage = (obtainedMarksSubjects / totalMarks) * 100;

if (percentage >= 80) {
    document.write(`Total marks : ${totalMarks} <br>`);
    document.write(`Marks Obtained : ${obtainedMarksSubjects} <br>`);
    document.write(`Percentage : ${percentage}% <br>`);
    document.write(`Grade : A-ONE <br>`);
    document.write(`Remarks : Excellent <br><br><br>`);
} else if (percentage >= 70) {
    document.write(`Total marks : ${totalMarks} <br>`);
    document.write(`Marks Obtained : ${obtainedMarksSubjects} <br>`);
    document.write(`Percentage : ${percentage}% <br>`);
    document.write(`Grade : A <br>`);
    document.write(`Remarks : Good <br><br><br>`);
} else if (percentage >= 60) {
    document.write(`Total marks : ${totalMarks} <br>`);
    document.write(`Marks Obtained : ${obtainedMarksSubjects} <br>`);
    document.write(`Percentage : ${percentage}% <br>`);
    document.write(`Grade : B <br>`);
    document.write(`Remarks : You need to improve <br><br><br>`);
} else if (percentage < 60) {
    document.write(`Total marks : ${totalMarks} <br>`);
    document.write(`Marks Obtained : ${obtainedMarksSubjects} <br>`);
    document.write(`Percentage : ${percentage}% <br>`);
    document.write(`Grade : Fail <br>`);
    document.write(`Remarks : Sorry <br><br><br>`);
}


// 7.
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// Answer -7
document.write("Answer -7 <br> <br>");

var secretNumber = Number(prompt("Enter any secret number!"));

if (secretNumber == 1 ||
    secretNumber == 2 ||
    secretNumber == 3 ||
    secretNumber == 4 ||
    secretNumber == 5 ||
    secretNumber == 6 ||
    secretNumber == 7 ||
    secretNumber == 8 ||
    secretNumber == 9 ||
    secretNumber == 10) {
    alert("Bingo! Correct");
    document.write("<b>Bingo!</b> Correct <br><br><br>");
} else {
    alert("Close enough to the correct answer");
    document.write("Close enough to the correct answer <br><br><br>");
}

// 8. 
// Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3.

var divident = Number(prompt("Enter any number to check given number is divisible or not!"));

if (divident % 3 == 0) {
    alert(`${divident} is divisible by 3`);
    document.write(`${divident} is divisible by 3 <br><br><br>`);
} else {
    alert(`${divident} is not divisible by 3`);
    document.write(`${divident} is not divisible by 3 <br><br><br>`);
}

// 9.
//  Write a program that checks whether the given input is an
// even number or an odd number.

// Answer-9
document.write("Answer -9 <br> <br>");

var oddOrEven = Number(prompt("Enter a number 'Even or Odd' "));
if (oddOrEven % 2 == 0) {
    alert(`${oddOrEven} : Number is Even`);
    document.write(`${oddOrEven} : Number is Even <br><br><br>`);
} else {
    alert(`${oddOrEven} : Number is Odd`);
    document.write(`${oddOrEven} : Number is Odd <br><br><br>`);
}

// 10. 
// Write a program that takes temperature as input and shows a message based on following criteria,
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Answer-10
document.write("Answer -10 <br> <br>");

var temperature = Number(prompt("Enter a Temperature"));

if (temperature > 40) {
    alert(`Temperature : ${temperature} \u00B0C \n It is too hot outside.`);
    document.write(`Temperature : ${temperature} \u00B0C <br> It is too hot outside. <br><br><br>`);
} else if (temperature > 30) {
    alert(`Temperature : ${temperature} \u00B0C \n The Weather today is Normal.`);
    document.write(`Temperature : ${temperature} \u00B0C <br> The Weather today is Normal. <br><br><br>`);
} else if (temperature > 20) {
    alert(`Temperature : ${temperature} \u00B0C \n Today’s Weather is cool`);
    document.write(`Temperature : ${temperature} \u00B0C <br> Today’s Weather is cool <br><br><br>`);
} else if (temperature > 10) {
    alert(`Temperature : ${temperature} \u00B0C \n OMG! Today’s weather is so Cool.`);
    document.write(`Temperature : ${temperature} \u00B0C <br> OMG! Today’s weather is so Cool. <br><br><br>`);
}

// 11. 
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// Answer-11
document.write("Answer -11 <br> <br>");

var firstNumber = Number(prompt("Calculator App", "Enter first number!"));
var secNumber = Number(prompt("Calculator App", "Enter second number!"));
var operator = prompt("Calculator App", "Enter operator!");

if (operator == "+") {
    alert(`Addition of the ${firstNumber} & ${secNumber} = ${firstNumber + secNumber}`);
    document.write(`Addition of the ${firstNumber} & ${secNumber} = ${firstNumber + secNumber} <br><br><br>`);
} else if (operator == "-") {
    alert(`Subtraction of the ${firstNumber} & ${secNumber} = ${firstNumber - secNumber}`);
    document.write(`Subtraction of the ${firstNumber} & ${secNumber} = ${firstNumber - secNumber} <br><br><br>`);
} else if (operator == "*") {
    alert(`Multiplication of the ${firstNumber} & ${secNumber} = ${firstNumber * secNumber}`);
    document.write(`Multiplication of the ${firstNumber} & ${secNumber} = ${firstNumber * secNumber} <br><br><br>`);
} else if (operator == "/") {
    alert(`Division of the ${firstNumber} & ${secNumber} = ${firstNumber / secNumber}`);
    document.write(`Division of the ${firstNumber} & ${secNumber} = ${firstNumber / secNumber} <br><br><br>`);
} else if (operator == "%") {
    alert(`Remainder of the ${firstNumber} & ${secNumber} = ${firstNumber % secNumber}`);
    document.write(`Remainder of the ${firstNumber} & ${secNumber} = ${firstNumber % secNumber} <br><br><br>`);
}

//   End of Assignment 9 to 11...
