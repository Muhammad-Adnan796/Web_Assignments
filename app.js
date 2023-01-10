
//                    Chapter # 6 (Assignment);
document.write("<br><br><br>");
document.write("<b>Chapter # 6 (Assignment)</b> <br><br><br><br>");

// 1. 
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// Answer - 1

document.write(`Answer -1 <br>`);

document.write(`<b>Result</b><br><br>`);
var value = Number(prompt("Enter any increment number!", "10"));
document.write(`The value of a is : ${value}<br><br>`);
document.write(`................................<br><br>`);
document.write(`The value of ++a is : ${++value}<br>`);
document.write(`Now the value of a is : ${value}<br><br>`);

document.write(`The value of a++ is : ${value++}<br>`);
document.write(`Now the value of a is : ${value}<br><br>`);

document.write(`The value of --a is : ${--value}<br>`);
document.write(`Now the value of a is : ${value}<br><br>`);

document.write(`The value of a-- is : ${value--}<br>`);
document.write(`Now the value of a is : ${value}<br><br>`);



// 2. 
// What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// Answer - 2
document.write(`Answer -2 <br>`);

var a = 2, b = 1;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
var result = --a - --b + ++b + b--;
document.write(`a is ${a} <br> b is ${b} <br> Result is ${result} <br><br><br>`);



// 3. 
// Write a program that takes input a name from user &
// greet the user.

// Answer - 3
document.write(`Answer -3 <br>`);

var userName = prompt("Enter a name");
document.write(`Welcome to my Website ${userName}<br><br><br>`);


// Answer - 4
document.write(`Answer -4 is not availble in assignment <br><br><br>`);


// 5.
//  Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// Answer - 5

document.write(`Answer -5 <br>`);

var tableName = Number(prompt("Enter any table name", "5"));

document.write(`<b> <h1> Table ${tableName} </h1> </b> `);
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



// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// Answer - 6
document.write(`Answer -6 <br><br><br>`);
var subject1 = prompt("Enter Subject 1 ");
var subject2 = prompt("Enter Subject 2 ");
var subject3 = prompt("Enter Subject 3 ");
var english = Number(prompt("Enter English marks"));
var urdu = Number(prompt("Enter Urdu marks"));
var math = Number(prompt("Enter Math marks"));

var obtainedMarks = english + urdu + math;
var eachSubjectMarks = 100;
var totlaMarks = Number(prompt("Enter Total Marks"));
var eachSub1Percentage = (english / eachSubjectMarks) * 100;
var eachSub2Percentage = (urdu / eachSubjectMarks) * 100;
var eachSub3Percentage = (math / eachSubjectMarks) * 100;
var percentages = (obtainedMarks / totlaMarks) * 100;

document.write(` <table> 
 <tr> 
 <td> <b> Subject </b> </td>
 <td> <b> Total Marks </b>  </td>
 <td> <b> Obtained Marks </b>  </td>
 <td> <b> Percentage </b> </td>
 </tr>

 <tr>
 <td> ${subject1} </td>
 <td> ${eachSubjectMarks}  </td>
 <td> ${english}  </td>
 <td> ${eachSub1Percentage}% </td>
 </tr>
 <tr>
 <td> ${subject2} </td>
 <td> ${eachSubjectMarks}  </td>
 <td> ${urdu}  </td>
 <td> ${eachSub2Percentage}% </td>
 </tr>

 <tr>
 <td> ${subject3} </td>
 <td> ${eachSubjectMarks}  </td>
 <td> ${math}  </td>
 <td> ${eachSub3Percentage}% </td>
 </tr>

 <tr>
 <td> <b>  </b> </td>
 <td> <b> ${totlaMarks} </b>  </td>
 <td> <b> ${english + urdu + math} </b>  </td>
 <td> <b> ${percentages}% </b> </td>
 </tr>
             </table> `)
