
//            Chapter # 12 to 13 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 12 to 13 (Assignment)</b> <br><br><br><br>");

// 1.
//  Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,
//  uppercase letter or lower case letter. 
// (Hint: ASCII codes:-  A=65, Z=90, a=97, z=122 ,  Digit=48 =to= 57,  
// Special Symbol = 0 =to= 47 or 58 =to= 64 or 91 =to= 96 or 123 =to= 127, ).

// Answer-1
document.write("Answer -1 <br> <br>");

var asci = prompt("Enter any Character!");
if (asci >= "A" && asci <= "Z") {
    alert(`${asci} : is an UpperCase Character`);
    document.write(`<b> ${asci} </b> : is an UpperCase Character <br><br><br>`);

} else if (asci >= "a" && asci <= "z") {
    alert(` ${asci} : is an LowerCase Character`);
    document.write(`<b> ${asci} </b> : is an LowerCase Character <br><br><br>`);

} else if (asci.matchAll("^(?:(?=.*\b5[15]00\b)[0-9]{2,}\\[0-9]{2}-[0-9]{4}-[0-9]{3}-|(?!.*\b5[15]00\b)[0-9]{2,}\\[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]{2})$")) {
    alert(` ${asci}  : is an Special Character`);
    document.write(`<b> ${asci} </b> : is an Special Character <br><br><br>`);

} else {
    alert(` ${asci}: is not an Alphabetic Character`);
    document.write(`<b> ${asci} </b> : is not an Alphabetic Character <br><br><br>`);
}

// 2. 
// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// Answer-2
document.write("Answer -2 <br> <br>");

var integerNumber1 = parseInt(prompt("Enter any first integer number!"));
var integerNumber2 = parseInt(prompt("Enter any second integer number!"));

if (integerNumber1 > 0 && integerNumber2 > 0 && integerNumber1 > integerNumber2) {
    alert(`The First number is the larger: ${integerNumber1}`);
    document.write(`The First number is the larger: ${integerNumber1} <br><br><br>`);

} else if (integerNumber1 > 0 && integerNumber2 > 0 && integerNumber1 < integerNumber2) {
    alert(`The Second number is the larger: ${integerNumber2}`);
    document.write(`The Second number is the larger: ${integerNumber2} <br><br><br>`);

} else if (integerNumber1 === integerNumber2 && integerNumber1 > 0 && integerNumber2 > 0) {
    alert(`The First and Second number are equal: ${integerNumber1}`);
    document.write(`The First and Second number are equal: ${integerNumber1} <br><br><br>`);

} else {
    document.write("Please add an integer!");
}

// 3. 
// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// Answer-3
document.write("Answer -3 <br> <br>");

var natureOfNumber = Number(prompt("Enter any number for checking the nature of number!"));

if (natureOfNumber > 0) {
    alert(`${natureOfNumber} : is positive Number`);
    document.write(`${natureOfNumber} : is Positive Number <br><br><br>`);
} else if (natureOfNumber == 0) {
    alert(`${natureOfNumber} : is Zero `);
    document.write(`${natureOfNumber} : is Zero  <br><br><br>`);
} else {
    alert(`${natureOfNumber} : is Negative Number`);
    document.write(`${natureOfNumber} : is Negative Number <br><br><br>`);
}

// 4.
//  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

// Answer-4
document.write("Answer -4 <br> <br>");

var vowels = prompt("Enter any character for checking wheather the character is vowel or not!");

if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u") {
    alert(`${vowels} : is vowel.`);
    document.write(`${vowels} : is vowel. <br><br><br>`);
} else {
    alert(`${vowels} : is not a vowel.`);
    document.write(`${vowels} : is not a vowel. <br><br><br>`);
}

// 5.
//  Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. 
// If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise.

// Answer-5
document.write("Answer -5 <br> <br>");

var password = prompt("Enter Your Password!");

if (password == "adnan8123796") {
    alert("Correct! The password you entered matches the original password");
    document.write("Correct! The password you entered matches the original password <br><br><br>");

} else if (password != "adnan8123796") {
    alert("Incorrect password");
}

// 6. 
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// Answer-6
document.write("Answer -6 <br> <br>");

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
    document.write(`${greeting} <br><br><br>`);
}
else {
    greeting = "Good evening";
    alert(greeting);
    document.write(`${greeting} <br><br><br>`);
}

// 7.
//  Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements.

// Answer-7
document.write("Answer -7 <br> <br>");

var times = Number(prompt("Enter a Time!"));

if (times >= 0000 && times < 1200) {
    alert(`"Good Morning!"`);
    document.write(`"Good Morning!" <br><br><br>`);
} else if (times >= 1200 && times < 1700) {
    alert(`"Good AfterNoon!"`);
    document.write(`"Good AfterNoon!" <br><br><br>`);
} else if (times >= 1700 && times < 2100) {
    alert(`"Good Evening!"`);
    document.write(`"Good Evening!" <br><br><br>`);
} else if (times >= 2100 && times <= 2359) {
    alert(`"Good Night!"`);
    document.write(`"Good Night!" <br><br><br>`);
}


//                        END of Assignment 12 to 13...