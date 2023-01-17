//            Chapter # 26 to 30 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 26 to 30 (Assignment)</b> <br><br><br><br>");

// 1.
// Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Anwer-1
document.write("Answer -1 <br><br>");

let positiveInteger = Number(prompt("Enter a positive Integer"));
document.write(`Number: ${positiveInteger}<br>`);
let roundedOff = Math.round(positiveInteger);
document.write(`Round off value: ${roundedOff}<br>`);
let floorValue = Math.floor(positiveInteger);
document.write(`Floor value: ${floorValue}<br>`);
let cielValue = Math.ceil(positiveInteger);
document.write(`Ceil value: ${cielValue}<br><br><br>`);


// 2. 
// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// Anwer-2
document.write("Answer -2 <br><br>");

let negativeInteger = Number(prompt("Enter a negative Integer"));
document.write(`Number: ${negativeInteger}<br>`);
let roundedOffN = Math.round(negativeInteger);
document.write(`Round off value: ${roundedOffN}<br>`);
let floorValueN = Math.floor(negativeInteger);
document.write(`Floor value: ${floorValueN}<br>`);
let cielValueN = Math.ceil(negativeInteger);
document.write(`Ceil value: ${cielValueN}<br>`);


// 3. 
// Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Anwer-3
document.write("Answer -3 <br><br>");

let absoluteInteger = Number(prompt("Enter any Integer to find a absolute number"));

if(absoluteInteger < 0  ){
   multipleMinus = absoluteInteger * (-1);
    document.write(`The absolute value of ${absoluteInteger} is ${multipleMinus} <br><br><br>`);
}else if(absoluteInteger > 0  ){
    document.write(`The absolute value of ${absoluteInteger} is ${absoluteInteger} <br><br><br>`);
}

// 4. 
// Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.:

// Anwer-4
document.write("Answer -4 <br><br>");

let randomNum = parseInt((Math.random() * 6) + 1);
document.write(`Random dice value: ${randomNum}`);


// 5. 
// Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser

// Anwer-5
document.write("Answer -5 <br><br>");

let randomNumhead = parseInt((Math.random() * 2) + 1);
document.write(randomNumhead+"<br>");
document.write(`${randomNumhead == 1 ? "Random coin value: Tails" : "Random coin value: Heads" } <br><br><br> `);


// 6. 
// Write a program that shows a random number between 1 and 100 in your browser.

// Anwer-6
document.write("Answer -6 <br><br>");

let randomNumnundred = parseInt((Math.random() * 100) + 1);
document.write(`Random number between 1 and 100 : ${randomNumnundred } <br><br><br> `);


// 7. 
// Write a program that asks the user about his weight. 
// Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Anwer-7
document.write("Answer -7 <br><br>");

let userWeight = prompt("Enter your weight in kilograms");
let userWeightletter = userWeight.replace(/[a-z]/g, "");
document.write(`The weight of user is ${userWeightletter} kilograms <br><br><br>`);


// 8. 
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// Anwer-8
document.write("Answer -8 <br><br>");

let secretNumber = parseInt((Math.random() * 10) + 1);
let userSecretNumber = Number(prompt("Enter a secret number between 1 and 10"));
if (secretNumber == userSecretNumber) {
    alert(`Congratulation !`);
    document.write(`<b>Congratulation ! </b> <br><br><br>`);
} else {
    alert(`Try again !`);
    document.write(`<b>Try again !</b> <br><br><br>`);
}