

//  Prompt is used for UserInput

/* var age  = prompt( " Whate is your age ");

document.write(age);

var newAge = age + 2;

document.write(newAge); */


// Hot to convert the prompt strings into whole number

/* var height = prompt("What is your height");



var total_height = parseInt(height) + 3;   

document.write(total_height);

document.write("<br>");  */


// Hot to convert the prompt strings into  decimal number

/* var heightint = prompt("What is your height");



var total_heightint = parseFloat(heightint) + 3;  

document.write(total_heightint);
document.write("<br>");  */



// Hot to convert the prompt strings into any number even a whole number or a decimal value

/* var heightnum = prompt("What is your height");



var total_heightnum = Number(heightnum) + 3;  

document.write(total_heightnum); */


// Q # 1.

//  Write a program to take “city” name as input from user. If user enters
// “Karachi”, welcome the user like this: “Welcome to city of lights”




var karachi = "karachi";
var cityname = prompt("Which city do you live ");

if (cityname == karachi) {
    document.write("Wellcome to the city of lights");

} else {
    document.write("Enter city name");

}  

document.write("<br>");
document.write("<br>");
document.write("<br>");



// Q # 2.
//  Write a program to take input color of road traffic signal from the user
// & show the message according to this table:



var signalcolor = prompt("Enter Color Name");

if (signalcolor == "red") {
    document.write("Must Stop");
} else if (signalcolor == "yellow") {
    document.write("Ready to move");
} else if (signalcolor == "green") {
    document.write("Move Now");
} else {
    document.write("Enter Color name");
}  


document.write("<br>");
document.write("<br>");
document.write("<br>");


// Q # 3.

// a)


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
    document.write("given condition for variable a is true");
} else {
    alert("Some thing went wrong");
    document.write("Some thing went wrong " + a);

}   


document.write("<br>");
document.write("<br>");

// b)


var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
    document.write("given condition for variable b is true");
} else {
    alert("Some thing went wrong" + b);
    document.write("Some thing went wrong " + b);
} 


document.write("<br>");
document.write("<br>");

// c)



var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
    document.write("condition 1 is true");
} else if (c === 13) {
    alert("condition 2 is true");
    document.write("condition 2 is true");
} else if (++c < 14) {
    alert("condition 3 is true");
    document.write("condition 3 is true");
} else if (c === 14) {
    alert("condition 4 is true");
    document.write("condition 4 is true");
} else {
    alert("Some thing went wrong");
    document.write("Some thing went wrong " + c);

}


document.write("<br>");
document.write("<br>");

// d)



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The Cost Equals " + totalCost);
    document.write("The Cost Equals " + totalCost);
} else {
    alert("The Cost is not Equal");
    document.write("The Cost is not Equal");
} 


document.write("<br>");
document.write("<br>");

// e)



if (true) {
    alert("True");
    document.write("True");
} else if (false) {
    alert("False");
    document.write("False");
}  


document.write("<br>");
document.write("<br>");

//    f)


if ("car" < "cat") {
    alert("Car is smaller than cat");
    document.write("Car is smaller than cat");
} else {
    alert("Something wrong");
    document.write("Something wrong");
}




document.write("<br>");
document.write("<br>");


// Q # 4.


var english = prompt("Write english marks");
var urdu = prompt("Write urdu marks");
var islamiat = prompt("Write islamiat marks");

var obtainedMarks = Number(english) + Number(urdu) + Number(islamiat);

var totalMarks = 300;

var parcentage = (obtainedMarks / totalMarks) * 100;

if (parcentage >= 80) {
    document.write("Total Marks : " + totalMarks);
    document.write("<br>");
    document.write("Marks Obtained : " + obtainedMarks);
    document.write("<br>");
    document.write("Parcentage : " + parcentage + " %");
    document.write("<br>");
    document.write("Grade : A-one");
    document.write("<br>");
    document.write("Remarks : Excellent");
} else if (parcentage >= 70) {
    document.write("Total Marks : " + totalMarks);
    document.write("<br>");
    document.write("Marks Obtained : " + obtainedMarks);
    document.write("<br>");
    document.write("Parcentage : " + parcentage + " %");
    document.write("<br>");
    document.write("Grade : A");
    document.write("<br>");
    document.write("Remarks : Good");
} else if (parcentage >= 60) {
    document.write("Total Marks : " + totalMarks);
    document.write("<br>");
    document.write("Marks Obtained : " + obtainedMarks);
    document.write("<br>");
    document.write("Parcentage : " + parcentage + " %");
    document.write("<br>");
    document.write("Grade : B");
    document.write("<br>");
    document.write("Remarks : You need to improve ");
} else {
    document.write("Total Marks : " + totalMarks);
    document.write("<br>");
    document.write("Marks Obtained : " + obtainedMarks);
    document.write("<br>");
    document.write("Parcentage : " + parcentage + " %");
    document.write("<br>");
    document.write("Grade : Fail");
    document.write("<br>");
    document.write("Remarks : Sorry");
}   


document.write("<br>");
document.write("<br>");

// Q # 5. 

// Guess game:
// Store a secret number(ranging from 1 to 10) in a variable.Prompt
// user to guess the secret number.
//     a.If user guesses the same number, show “Bingo! Correct answer”.
//     b.If the guessed number + 1 is the secret number, show “Close
//   enough to the correct answer”.


var secretNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var userNumber = parseInt(prompt("Guess the number "));
var userindexnum = secretNumber.indexOf(userNumber);

if (secretNumber.length !== userindexnum && userindexnum !== -1) {
    alert("Bingo! Correct Answer");
    document.write("Bingo! Correct Answer");
} else {
    alert("Close enough to the correct answer");
    document.write("Close enough to the correct answer");

}  


document.write("<br>");
document.write("<br>");
document.write("<br>");

// Q # 6.

// Write a program that checks whether the given input is an even
// number or an odd number.


var number = prompt("Enter Any Number ");

if( ( Number(number) % 2 ) == 0 ){
    alert("Number is Even");
    document.write("Number is Even");
}else{
    alert("Number is Odd");
    document.write("Number is Odd");

}  


document.write("<br>");
document.write("<br>");
document.write("<br>");


// Q # 7. 

// Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user


document.write("Calculator App");
document.write("<br>");

var number1 = parseFloat(prompt("Enter first number "));
var operator = prompt("Enter Operaor ( Either +,-,*,/,%)");
var number2 = parseFloat(prompt("Enter second number "));
let result;

if (operator == "+") {
    document.write("Enter First Number : " + number1);
    document.write("<br>");
    document.write("Enter Second Number : " + number2);
    document.write("<br>");
    result = number1 + number2;
    alert(number1 + " " + operator + " " + number2 + " = " + result );
    document.write(number1 + " " + operator + " " + number2 + " = " + result );
} else if (operator == "-") {

    document.write("Enter First Number : " + number1);
    document.write("<br>");
    document.write("Enter Second Number : " + number2);
    document.write("<br>");
    result = number1 - number2;
    alert(number1 + " " + operator + " " + number2 + " = " + result );
    document.write(number1 + " " + operator + " " + number2 + " = " + result );

} else if (operator == "*") {

    document.write("Enter First Number : " + number1);
    document.write("<br>");
    document.write("Enter Second Number : " + number2);
    document.write("<br>");
    result = number1 * number2;
    alert(number1 + " " + operator + " " + number2 + " = " + result);
    document.write(number1 + " " + operator + " " + number2 + " = " + result );

} else if (operator == "/") {

    document.write("Enter First Number : " + number1);
    document.write("<br>");
    document.write("Enter Second Number : " + number2);
    document.write("<br>");
    result = number1 / number2;
    alert(number1 + " " + operator + " " + number2 + " = " + result );
    document.write(number1 + " " + operator + " " + number2 + " = " + result);

} else if (operator == "%") {

    document.write("Enter First Number : " + number1);
    document.write("<br>");
    document.write("Enter Second Number : " + number2);
    document.write("<br>");
    result = number1 % number2;
    alert(number1 + " " + operator + " " + number2 + " = " + result);
    document.write(number1 + " " + operator + " " + number2 + " = " + result );

} else {
    alert("Enter Number ");
    document.write("Enter Number ");
}   



document.write("<br>");
document.write("<br>");
document.write("<br>");



// Q # 8. 

// Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.


var userNumb = parseInt(prompt("Enter a Number"));

if (userNumb > 0) {
    document.write("User Number : " + userNumb);
    document.write("<br>");
    document.write("The Number is Positive ");
} else if (userNumb < 0) {
    document.write("User Number : " + userNumb);
    document.write("<br>");
    document.write("The Number is Negative ");
} else {
    document.write("User Number : " + userNumb);
    document.write("<br>");
    document.write("The Number is Zero ");
}  

document.write("<br>");
document.write("<br>");
document.write("<br>");


// Q # 9.

// Write a program that takes a character (i.e. string of length 1) and
// returns true if it is a vowel, false otherwise



var uservowels = prompt("Enter Character");

if( uservowels == "a" || uservowels == "e" || uservowels == "i" || uservowels == "o" || uservowels == "u" ){
    document.write("Character is : "+uservowels);
    document.write("<br>");
    document.write("True");
}else{
    document.write("Character is : "+uservowels);
    document.write("<br>");
    document.write("False");
}  


document.write("<br>");
document.write("<br>");
document.write("<br>");


// Q # 10




var password = "muhammadadnan";
var correctPassword = prompt("Enter Your Password");

if( correctPassword == "" ){
 alert("Enter Your Correct PAssword");
}else if( correctPassword == password ){
    document.write("“Correct! The password you entered matches the original password”");
}else{
    alert("Wrong Password");
} 



document.write("<br>");
document.write("<br>");
document.write("<br>");


// Q # 11. 

// Write a program that take time as input from user in 24 hours clock
// format like: 1900 = 7pm. Implement the following case using if, else &
// else if statements




var time = parseInt(prompt("Enter Time "));

if( time >= 0000 && time < 1200 ){
    document.write("Time is : " + time);
    document.write("<br>");
    document.write(" “Good Morning!” ");

}else if( time >= 1200  && time < 1700){
    document.write("Time is : " + time);
    document.write("<br>");
    document.write(" “Good AfterNoon!” ");
}else if( time >= 1700 && time < 2100 ){
    document.write("Time is : " + time);
    document.write("<br>");
    document.write(" “Good Evening!” ");
}else if( time >= 2100 && time <= 2359 ){
    document.write("Time is : " + time);
    document.write("<br>");
    document.write(" “Good Night!” ");
}else{
    alert("False");
    alert("Enter Time");
}
