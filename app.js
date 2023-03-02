//            Chapter # 39 to 44 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 39 to 44 (Assignment)</b> <br><br><br><br>");

// 1. 
// Write a custom function power ( a, b ), to calculate the value of a raised to b.

// Answer- 1
document.write("Answer - 1 <br><br>");
 
let baseVal = Number(prompt("Enter a number to find a square"));
let powerVal = Number(prompt("Enter a power number"));

function raisedPow(base, power) {
    return Math.pow(base, power);
}
document.write(`The value of ${baseVal}<sup>${powerVal}</sup> : <b>${raisedPow(baseVal, powerVal)} </b> <br><br><br>`);
 

// 2. 
// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not

// Answer- 2
document.write("Answer - 2 <br><br>");
 
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} is a leap year <br><br><br>`;
            } else {
                return `${year} is not a leap year <br><br><br>`;
            }
        } else {
            return `${year} is a leap year <br><br><br>`;
        }
    } else {
        return `${year} is not a leap year <br><br><br>`;
    }
}
document.write(leapYear(2019))
 

// 3. 
// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// Answer- 3
document.write("Answer - 3 <br>");
 
document.write(" <h1>Area of Triangle</h1>");

let aSide = Number(prompt("Enter side 1 to find the area of triangle"));
let bSide = Number(prompt("Enter side 2 to find the area of triangle"));
let cSide = Number(prompt("Enter side 3 to find the area of triangle"));

function sValue(a, b, c) {
    return (a + b + c) / 2;
}

function areaTri(a, b, c) {
    let sA = sValue(a,b,c) - a;
    let sB = sValue(a,b,c) - b;
    let sC = sValue(a,b,c) - c;
    return sValue(a,b,c) * sA *sB *sC;
}
document.write(`Side One :  ${aSide} <br>`);
document.write(`Side Two :  ${bSide} <br>`);
document.write(`Side Three :  ${cSide} <br>`);
document.write(`Area of Triangle : <b>${areaTri(aSide,bSide,cSide)}</b> <br><br>`);
 

// 4. 
// Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of 
// these marks. there should be 3 functions one is the mainFunction and other are for average and percentage.
// Call those functions from mainFunction and display result in mainFunction

// Answer- 4
document.write("Answer - 4 <br><br>");
 
let subject1 = Number(prompt("Enter a marks of subject 1"));
let subject2 = Number(prompt("Enter a marks of subject 2"));
let subject3 = Number(prompt("Enter a marks of subject 3"));

function averageFunc(mrk1,mrk2,mrk3){
  return ( mrk1 + mrk2 + mrk3 ) / 3
}

function percentageFunc(mrk1,mrk2,mrk3){
    return (( mrk1 + mrk2 + mrk3 ) / 300 )*100;
}

function mainFunc(sb1,sb2,sb3){
   return averageFunc(sb1,sb2,sb3),percentageFunc(sb1,sb2,sb3);
}
document.write(`Average of all subjects : <b>${averageFunc(subject1,subject2,subject3)}</b> <br> 
Percentage of all subjects : <b>${mainFunc(subject1,subject2,subject3)}%</b> <br><br><br> 
`); 

// 5. 
// You have learned the function indexOf. Code your own custom function that will perform the same functionality.
// You can code for single character as of now.

// Answer- 5
document.write("Answer - 5 <br><br>");
 
let userWord = prompt("Enter a fruit name to check wheather the fruit is found in  or not ");
let userindexNumb = Number(prompt("Enter a index number where you check the fruit", "0"));
let givenArray = ["Apple", "Banana", "Mango", "Grapes", "Orange", "Apple"]

function indexOF(word, indNumb, givenWordArray) {

    let bol = false;
    for (let i = indNumb; i <= givenWordArray.length; i++) {
        if (word === givenWordArray[i]) {
            bol = true;
            document.write(`The ${word} in the array at index ${[i]} <br><br><br>`)
            break;
        }
    }
    if (bol === false) {

        return `-1 <br><br><br>`;
    }
    return "";
}

document.write(indexOF(userWord, userindexNumb, givenArray));
 

// 6. 
// Write a function to delete all vowels from a sentence. 
// Assume that the sentence is not more than 25 characters long.

// Answer- 6
document.write("Answer - 6 <br><br>");
 
let sentenc = prompt("Enter any sentence to remove all vowels 'Sentence must be 25 chars long'");

function vowelsFunc(sentence) {
    if (sentence.length <= 25) {
        document.write(`Given Sentence : ${sentence}<br>`);
       return `After the removal of vowels : ${sentence.replace(/[aeiou]/gi,"")} <br><br><br>`;
    }else{
        while(sentence.length > 25){
            sentence = prompt(`Sentence must be 25 characters long.`);
            if(sentence.length <= 25){
                document.write(`Given Sentence : ${sentence}<br>`);
                return `After the removal of vowels : ${sentence.replace(/[aeiou]/gi,"")} <br><br><br>`;
            }
        }
    }
}

document.write(vowelsFunc(sentenc));
 

// Muhamamd Adnan: This question is not done by me. 

// 7.
// Write a function with switch statement to count the number of occurrences of any two vowels in succession in 
// a line of text.For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// Answer - 7
document.write("Answer - 7 <br><br>");
 
let str = prompt("Enter a sentence to find a length of occurences of two vowels");
// var str = "Pleases read this application io ea and give me gratuity ou";
function findOccurrences() {
    document.write(`Sentence : ${str}<br>`);
    var chars = str.toLowerCase().split("");
    var count = 0;

    // Loop over every character
    for (let i = 0; i < chars.length; i++) {
        var char = chars[i];
        var next = chars[i + 1];

        // Increase count if both characters are any of the following: aeiou
        if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
            count++
        }
    }

    return `Occurences of two vowels : ${count} <br><br><br>`;
}

// Check if a character is any of the following: aeiou
function isCorrectCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}
document.write(findOccurrences());
 
8.
// The distance between two cities (in km.) is input through the keyboard. 
// Write four functions to convert and print this distance in meters, feet, inches and centimeters

// Answer - 8
document.write("Answer - 8 <br>");
 
document.write(`<h1> Conversion </h1>`)

let anyNumbQ8 = Number(prompt("Enter a number to convert meters, feet, inches and centimeters. "));
document.write(`Given Number : ${anyNumbQ8} <br>`);
// 1 km = 1000 m
function meter(anyNumbQ8) {
    return `From km to m : ${anyNumbQ8 * 1000} <br>`;
}
// 1 km = 3280.84 feet.
function feet(anyNumbQ8) {
    return `From km to feet : ${anyNumbQ8 * 3280.84} <br>`;
}
// 1 km = 39370.1 inches
function inches(anyNumbQ8) {
    return `From km to inches : ${anyNumbQ8 * 39370.1} <br>`;
}
// 1 km = 100000 cm
function centimeter(anyNumbQ8) {
    return `From km to cm : ${anyNumbQ8 * 100000} <br>`;
}
document.write(`${meter(anyNumbQ8)} <br> 
                ${feet(anyNumbQ8)} <br> 
                ${inches(anyNumbQ8)} <br> 
                ${centimeter(anyNumbQ8)} <br><br><br>`);

// 9. 
// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. 
// Assume that employees do not work for fractional part of an hour.

// Answer - 9
document.write("Answer - 9 <br>");
 
let lb_working_hr = Number(prompt(" Enter the working hours "));
let lb_count = Number(prompt(" Enter the total numbers of employees. "));

let total_working_hr = 40;
let pay;
let ovr_tm_hr;
let ovr_tm_rate = 12;
let total_lb_pay;

function overTime() {
    ovr_tm_hr = lb_working_hr - total_working_hr;

    if (ovr_tm_hr > 0) {
        pay = ovr_tm_hr * ovr_tm_rate;
        total_lb_pay = lb_count * pay
        return `The over time pay is : ${pay} Rs <br> The total employess over time pay is : ${total_lb_pay} Rs <br><br><br>`;
    } else {
        return `Not eligible for overtime pay`;
    }
}
document.write(overTime());
 
// 10. 
// A cashier has currency notes of denominations 10, 50 and 100. 
// If the amount to be withdrawn is input through the keyboard in hundreds, 
// find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// Answer - 10
document.write("Answer - 10 <br><br>");

let cashierNots = Number(prompt("Enter amount to check notes. (In hundreds)"));

document.write(`Total Amount :  ${cashierNots} <br><br>`)

let a, b, c, d, e, f, g;

a = parseInt(cashierNots / 100);

document.write(`You will have <br><br> Hundred Notes is : ${a}`);

b = cashierNots % 100;
c = parseInt(b / 50);

document.write(` <br> Fifty Notes is : ${c}`);

d = cashierNots % 50;
e = parseInt(d / 10);

document.write(` <br> Ten Notes is : ${e}`);

f = cashierNots % 10;
g = parseInt(f / 5);

document.write(` <br> Five Notes is : ${g}`);

//                 End of  Chapter # 39 to 44 (Assignment)