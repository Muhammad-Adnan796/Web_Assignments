
//                    Chapter # 5 (Assignment);
document.write("<br><br><br>");
document.write("<b>Chapter # 5 (Assignment)</b> <br><br><br><br>");

// 1. 
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// Answer - 1
 document.write(`Answer -1 <br>`);
var numberOne = Number(prompt("Enter first number!"));
var numbertwo = Number(prompt("Enter second number!"));

document.write(`Sum of <b>${numberOne}</b> and <b>${numberOne}</b> is <b>${numberOne + numbertwo}</b> <br><br><br>`);
 
// 2. 
// Repeat task1 for subtraction, multiplication, division &
// modulus.

// Answer - 2
 document.write(`Answer -2 <br>`);

var number1 = Number(prompt("Enter first number!"));
var number2 = Number(prompt("Enter second number!"));

document.write(`Subtraction of <b>${number1}</b> and <b>${number2}</b> is <b>${number1 - number2}</b> <br>`);
document.write(`Multiplication of <b>${number1}</b> and <b>${number2}</b> is <b>${number1 * number2}</b> <br>`);
document.write(`Division of <b>${number1}</b> and <b>${number2}</b> is <b>${number1 / number2}</b> <br>`);
document.write(`Modulus of <b>${number1}</b> and <b>${number2}</b> is <b>${number1 % number2}</b> <br><br><br>`);
 

// 3. 
// Do the following using JS Mathematic Expressions.
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// Answer - 3
document.write(`Answer -3 <br><br>`);

// (a)
 var value;
// (b)
document.write(`b). Value after variable declaration is: ${value} <br>`);   // Undefined 
// (c) 
value = 5;
// (d)
document.write(`d). Initial value: <b>${value}</b><br>`);           // 5 
// (e)
value++;
// (f)
document.write(`f). Value after increment is: <b>${value}</b><br>`);   // 6 
// (g)
value += 7;
// (h)
document.write(`h). Value after addition is: <b>${value}</b><br>`);       // 13 
// (i)
value--;
// (j)
document.write(`k). Value after decrement is: <b>${value}</b><br>`);    // 12
//  (k) 
value %= 3;  
// (l) 
document.write(`l). The remainder is : <b>${value % 3}</b><br><br><br>`);   //  0 
 

// 4.
// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// Answer - 4
 document.write(`Answer -4 <br><br>`);

var oneTicket = 600;
document.write(`Total cost to by 5 tickets to a movie is <b>${oneTicket * 5} PKR</b> <br><br><br> `);
 

// 5.
//  Write a script to display multiplication table of any
// number in your browser. E.g

// Answer - 5
document.write(`Answer -5 <br><br>`);
 
document.write("<b>Table of 4 </b><br>");
var tableName = 4;
document.write(`${tableName} x 1 = ${tableName * 1} <br> 
                ${tableName} x 2 = ${tableName * 2} <br> 
                ${tableName} x 3 = ${tableName * 3} <br> 
                ${tableName} x 4 = ${tableName * 4} <br> 
                ${tableName} x 5 = ${tableName * 5} <br> 
                ${tableName} x 6 = ${tableName * 6} <br> 
                ${tableName} x 7 = ${tableName * 7} <br> 
                ${tableName} x 8 = ${tableName * 8} <br> 
                ${tableName} x 9 = ${tableName * 9} <br> 
                ${tableName} x 10 = ${tableName * 10} <br> <br> <br>`
); 


// 6. 
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

// Answer - 6
document.write(`Answer -6 <br><br>`);
 
var tempInCelcius = 25;
var formulaF = (tempInCelcius * 9 / 5) + 32;
document.write(`${tempInCelcius}\u00B0C is ${formulaF}\u00B0F<br>`);
var tempInFahrnehite = 70;
var formulaC = (tempInFahrnehite - 32 ) *  5 / 9;
document.write(`${tempInFahrnehite}\u00B0F is ${formulaC}\u00B0C<br><br><br>`);
 

// 7. 
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Answer - 7
document.write(`Answer -7 <br>`);
 
document.write(`<b> <h1> Shopping Cart </h1> </b> <br>`);

var priceItem1 = 650;
var quantityItme1 = 3;
var priceItem2 = 100;
var quantityItme2 = 7;
var shippingChr = 100;

document.write(`Price of Itme 1 is ${priceItem1}<br>`);
document.write(`Quantity of Itme 1 is ${quantityItme1}<br>`);
document.write(`Price of Itme 2 is ${priceItem2}<br>`);
document.write(`Quantity of Itme 2 is ${quantityItme2}<br>`);
document.write(`Shipping Charges ${shippingChr}<br><br>`);

document.write(`Total cost of your order is ${(priceItem1*quantityItme1) + (priceItem2 * quantityItme2) + shippingChr}<br><br><br>`);
 


// 8. 
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Answer - 8
document.write(`Answer -8 <br>`);
 document.write(`<b> <h1> Marks Sheet </h1> </b> `);

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write(`Total Marks : ${totalMarks}<br>`);
document.write(`Marks Obtained : ${marksObtained}<br>`);
document.write(`Percentage : ${percentage}%<br><br><br>`);
 

// 9. 
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Answer - 9
document.write(`Answer -9 <br>`);

 document.write(`<b> <h1> Currency in PKR </h1> </b> `);

var dollars = 10;
var riyals = 25;
var exchangeRates = (dollars * 104.80) + (riyals * 28);
document.write(`Total Currency in PKR : ${exchangeRates}<br><br><br>`);
 

// 10.
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// Answer - 10
document.write(`Answer -10 <br><br>`);
 
var someNum = Number(prompt("Enter Some Number"));

document.write(`Random Number: ${((someNum + 5) * 10)/2} <br><br><br>`);
 

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


// Answer - 11
document.write(`Answer -11 <br>`);

 document.write(`<b> <h1> Age Calculator </h1> </b> `);

var currentYear = Number(prompt("Age Calculator","Enter Current Year"));
var birthYear = Number(prompt("Age Calculator","Enter Birth Year"));
var birthDate = currentYear - birthYear;
document.write(`you will be either ${birthDate} or ${birthDate - 1} years old <br><br><br>`);
 

// 12.
//  The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”.
// (Hint : Area of a circle = π r2, π = 3.142)

// Answer - 12
document.write(`Answer -12 <br>`);
 document.write(`<b> <h1> The Geometrizer </h1> </b> `);

var radius = Number(prompt("Calculate properties of a circle!","Enter radius of a circle"));
var circumference = 2*3.142*5;
var area = 3.142*(radius*radius);
document.write(`Radius of a circle : <b>${radius}m</b><br>`);
document.write(`Circumference of a Circle : <b>${2*3.142*radius}m</b><br>`);
document.write(`Area of a Circle : <b>${3.142*(radius*radius)}m<sup>2</sup></b><br><br><br>`);
 

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Answer - 13
document.write(`Answer -13 <br>`);
document.write(`<b> <h1> The Lifetime Supply Calculator </h1> </b> `);

var favSnack = "Chocolate Chip";
var age = 15;
var estimatedMaximumAge = 65;
var quantityPerDay = 3;
var calculation = (quantityPerDay*365)*(estimatedMaximumAge-age);

document.write(`Favourite Snack: ${favSnack}<br>`);
document.write(`Current Age: ${age}<br>`);
document.write(`Estimated Maximum Age: ${estimatedMaximumAge}<br>`);
document.write(`You will need ${calculation} ${favSnack} to last you until the ripe old age of ${estimatedMaximumAge}<br><br><br>`);
