//            Chapter # 35 to 38 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 35 to 38 (Assignment)</b> <br><br><br><br>");

// 1. 
// Write a function that displays current date & time in your browser.

// Answer-1
document.write("Answer -1 <br><br>");

function dateFunc(){
    let currDate = new Date();
    document.write(`Current Date : ${currDate} <br><br><br>`);
}
dateFunc();

// 2. 
// Write a function that takes first & last name and then it greets the user using his full name.

// Answer-2
document.write("Answer -2 <br><br>");

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

function fullName(firstname,lastname){
    let fullname = `${firstname} ${lastname}`;
    return fullname;
}
let userName = fullName(firstName,lastName);
document.write(`WellCome <b> Mr ${userName} </b><br><br><br>`);


// 3. 
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// Answer-3
document.write("Answer -3 <br><br>");

let firstNumb = Number(prompt("Enter first number to find the Sum"));
let secNumb = Number(prompt("Enter second number to find the Sum"));

function sumofTwoNumb(firstnumb,secnumb){
    return firstnumb + secnumb;
}
document.write(`Sum of ${firstNumb} and ${secNumb} Numbers: <b> ${sumofTwoNumb(firstNumb,secNumb)} </b><br><br><br>`);


// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser.

// Answer-4
document.write("Answer -4 <br><br>");

let firstNumbQ4 = Number(prompt("Calculator,Enter first number"));
let secNumbQ4 = Number(prompt("Calculator,Enter second number"));
let operatorQ4 = prompt("Enter any operator");

document.write(`<h1>Calculator</h1>`);

function calculator(firstnumbQ4, secnumbQ4, operatorsQ4) {
    let result = 0;
    if (operatorsQ4 === "+") {
        result = firstnumbQ4 + secnumbQ4;
        document.write(`<b>Addition</b> of <b>${firstNumbQ4}</b> and <b>${secNumbQ4}</b> : <b>${result}</b><br><br><br>`);
    } else if (operatorsQ4 === "-") {
        result = firstnumbQ4 - secnumbQ4;
        document.write(`<b>Subtraction</b> of <b>${firstNumbQ4}</b> and <b>${secNumbQ4}</b> : <b>${result}</b><br><br><br>`);
    } else if (operatorsQ4 === "*") {
        result = firstnumbQ4 * secnumbQ4;
        document.write(`<b>Multiplication</b> of <b>${firstNumbQ4}</b> and <b>${secNumbQ4}</b> : <b>${result}</b><br><br><br>`);
    } else if (operatorsQ4 === "/") {
        result = firstnumbQ4 / secnumbQ4;
        document.write(`<b>Division</b> of <b>${firstNumbQ4}</b> and <b>${secNumbQ4}</b> : <b>${result}</b><br><br><br>`);
    } else if (operatorsQ4 === "%") {
        result = firstnumbQ4 % secnumbQ4;
        document.write(`<b>Remainder</b> of <b>${firstNumbQ4}</b> and <b>${secNumbQ4}</b> : <b>${result}</b><br><br><br>`);
    }

}
calculator(firstNumbQ4, secNumbQ4, operatorQ4);


// 5. 
// Write a function that squares its argument.

// Answer-5
document.write("Answer -5");

document.write(`<h1>Squaring</h1>`);

let squareNumbQ5 = Number(prompt("Enter any number to take squar","1"));

function square(squarenumber){
    return squarenumber * squarenumber; 
}
document.write(`The square of <b>${squareNumbQ5} </b> : <b>${square(squareNumbQ5)}</b><br><br><br>`);


// 6. 
// Write a function that computes factorial of a number.

// Answer-6
document.write("Answer -6");

document.write(`<h1>factorial</h1>`);

let factorialNumbQ6 = Number(prompt("Enter any number to find a factorial"));

function factorialize(numberQ6){
   if(numberQ6 === 0 || numberQ6 === 1){
    return 1;
   }else{
    for(let i=numberQ6 - 1; i >= 1; i-- ){
        numberQ6 = numberQ6*i;
    }
    return numberQ6;
   }
}
document.write(`The factorial of <b>${factorialNumbQ6}</b> : <b>${factorialize(factorialNumbQ6)}</b><br><br><br>`);


// 7. 
// Write a function that take start and end number as inputs & display counting in your browser.

// Answer-7
document.write("Answer -7");

document.write(`<h1>Counting</h1>`);

let startNumb = Number(prompt("Enter a number where do you start counting"));
let endNumb = Number(prompt("Enter a number where do you end counting"));

function counting(stnumb,ednumb){
    document.write(`Counting from <b>${stnumb}</b> to <b>${ednumb}</b> <br>`)
   for(let i = stnumb; i <= ednumb; i++){
    document.write(`<b>${i}</b><br>`);
   }
   document.write("<br><br>");
}
 counting(startNumb,endNumb);


//  8.
// Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// Answer-8
document.write("Answer -8<br><br>");

var baseSide = Number(prompt("Enter base to find hypotenuse of right angle triangle."));
var perpendiSide = Number(prompt("Enter perpendicular to find hypotenuse of right angle triangle."));

function calculateHypotenuse(bas, per) {

    var calcuhypotenuse = (bas * bas) + (per * per);
    
    function calculateSquare(hypo) {
        return Math.sqrt(hypo);
    }
    return calculateSquare(calcuhypotenuse);

}
document.write(`Hypotenuse of right angle triangle is : <b>${calculateHypotenuse(baseSide, perpendiSide)}</b><br><br><br>`)


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// Answer-9
document.write("Answer -9<br><br>");

let heightQ9 = Number(prompt("Enter height to find area of rectangle"));
let widthQ9 = Number(prompt("Enter width to find area of rectangle"));

function areaRectangle(height, width) {
    return height * width;
}
document.write(`The area of a rectangle is <b> ${areaRectangle(heightQ9,widthQ9)} m<sup>2</sup> </b> <br><br><br>`);


// 10.
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// Answer-10
document.write("Answer -10 <br><br>");

let givenWord = prompt("Enter word to check whether tha word is palindrome or not!").toLowerCase();
function palindromeFunc(word) {
    let matchP = false;
    for (let i = 0; i < word.length / 2; i++) {
        if (givenWord[i] === givenWord[word.length - 1 - i]) {
            matchP = true;
            document.write(`The given word <b>${word}</b> is a palindrome <br><br><br>`);
            break;
        }
    }
    if (matchP === false) {
        document.write(`The given word <b>${word}</b> is not a palindrome <br><br><br>`);
    }
}

palindromeFunc(givenWord);

// 11.
//  Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
// each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// Answer-11
document.write("Answer -11 <br><br>");

let eachletterBig = prompt("Enter any sentence");

function capitalize(onelettercapi){
    let splited = onelettercapi.split(" ");
    let newArray = [];
    for(let i=0; i < splited.length; i++){
        newArray.push(`${splited[i].charAt(0).toUpperCase()}${splited[i].slice(1).toLowerCase()} `);
    }
    return newArray.join(" ");
}
 let capital =  capitalize(eachletterBig);
document.write(`Input String :${eachletterBig}<br>`);
document.write(`Output of String :${capital} <br><br><br>`);

// 12. 
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// Answer-12 samaj nhi aya
document.write("Answer -12 <br><br>");
/* 
// Method 1 to find the largest word in a string 

let biggerlengthWord = "Web Development Tutorial";

function find_longest_word(longword) {
    var array1 = longword.split(" ");
    var result = array1[0];

    for (var x = 0; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}

let longlength = find_longest_word(biggerlengthWord);

document.write(`Input String :${biggerlengthWord}<br>`);
document.write(`Output of String :${longlength} <br><br><br>`);
 */

// Method 2 to find the largest word in a string 

let arr = "Web Development Tutorial";
function longest_word(){
    let splited = arr.split(" ");
    // this function inside the sort method compare the pair of an array elements
    let sorted = splited.sort(function(a,b){
        return b.length - a.length;
    });
    return sorted[0];
}
document.write(`Input String :${arr}<br>`);
document.write(`Output of String : <b> ${longest_word()} </b><br><br><br>`);
    
   
// 13. 
// Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// Answer-13
document.write("Answer -13<br><br>");

let story = "JSResourceS.com";
function storyLetter(story1){
    let oneWord = story1.toLowerCase().match(/o/g).length;
    return oneWord;

}
document.write(`Text: ${story}<br>`);
document.write(`There are <b> ${storyLetter(story)} </b>occurrences(s) of word 'o'  <br><br><br>`);


// 14. 
// The Geometrizer:
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output"The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The areais NN".

// Answer-14
document.write("Answer -14");

document.write(`<b> <h1> The Geometrizer </h1> </b> `);

let radius = Number(prompt("Calculate properties of a circle!","Enter radius of a circle"));
document.write(`Radius of a circle : <b>${radius}m</b><br>`);

function calcCircumference(radii){
    let circumference = 2*3.142*radii;
    return circumference;
}
document.write(`Circumference of a Circle : <b>${calcCircumference(radius)}m</b><br>`);
function calcArea(radii){
    var area = 3.142*(radii*radii);
    return area;
}
document.write(`Area of a Circle : <b>${calcArea(radius)}m<sup>2</sup></b><br><br><br>`);
 