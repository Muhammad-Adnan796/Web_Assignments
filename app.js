//            Chapter # 21 to 25 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 21 to 25 (Assignment)</b> <br><br><br><br>");


// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// Answer-1
document.write("Answer -1 <br><br>");
/* 
let firstNameQ1 = prompt("Enter the first name ");
let lastNameQ1 = prompt("Enter the last name ");
let fullNameQ1 = firstNameQ1 + lastNameQ1;
document.write(`Welcome Sir/Ma'am ${fullNameQ1}  <br><br><br>`) ;
 */

// 2. 
// Write a program to take a user input about his favorite mobile phone model.
//  Find and display the length of user input in your browser

// Answer-2
document.write("Answer -2 <br><br>");
/* 
let mobilePhone = prompt("Enter the name of your favorite mobile phone ");
document.write(`My favorite phone is : ${mobilePhone}  <br> Length of string : ${mobilePhone.length} <br><br><br>`) ;
 */

// 3. 
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// Answer-3
document.write("Answer -3 <br><br>");
/* 
let pakistan = "Pakistani";
document.write(`String: ${pakistan}  <br>`) ;
document.write(`Index of 'n': ${pakistan.indexOf("n")}  <br><br><br>`) ;
 */

// 4. 
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// Answer-4
document.write("Answer -4 <br><br>");
/* 
let helloWorld = "Hello World";
document.write(`String: ${helloWorld}  <br>`) ;
document.write(`Last index of 'l': ${helloWorld.lastIndexOf("l")}  <br><br><br>`) ;
 */
// 5. 
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// Answer-5
document.write("Answer -5 <br><br>");
/* 
let characterPak = "Pakistani";
document.write(`String: ${characterPak}  <br>`) ;
document.write(`Character at index '3': ${characterPak.charAt(3)}  <br><br><br>`) ;
 */
// 6. 
// Repeat Q1 using string concat() method

// Answer-6
document.write("Answer -6 <br><br>");
/* 
let firstNameQ6 = prompt("Enter the first name ");
let lastNameQ6 = prompt("Enter the last name ");
document.write(`Welcome Mr ${firstNameQ6.concat(" "+lastNameQ6)}  <br><br><br>`) ;
 */
// 7. 
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser

// Answer-7
document.write("Answer -7 <br><br>");

/* let hyderabad = "Hyderabad";
document.write(`City: ${hyderabad}  <br>`) ;
document.write(`After replacement: ${hyderabad.replace(/hyder/i,"Islam")}  <br><br><br>`) ;
 */
// 8. 
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// Answer-8
document.write("Answer -8 <br><br>");
/* 
let message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(`Message: ${message}  <br>`) ;
document.write(`After replacement: ${message.replace(/and/g,"&")}  <br><br><br>`) ;
 */
// 9. 
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// Answer-9
document.write("Answer -9 <br><br>");

/* let stringNumb = "472";
document.write(`Value: ${stringNumb}<br>`);
document.write(`Type: ${typeof stringNumb}<br>`);
let number1 = parseInt(stringNumb);
document.write(`Value: ${number1}<br>`);
document.write(`Type: ${ typeof number1}<br><br><br>`); */

// 10. 
// Write a program that takes user input. Convert and show the input in capital letters

// Answer-10
document.write("Answer -10 <br><br>");
/* 
let smallLetters = prompt("Enter any Name to convert a Upper Case letter");
document.write(`User input: ${smallLetters}<br>`);
document.write(`Upper case: ${smallLetters.toUpperCase()}<br><br><br>`);
 */

// 11. 
// Write a program that takes user input. Convert and show the input in title case.

// Answer-11
document.write("Answer -11 <br><br>");
/* 
let capitalLetter = prompt("Enter any Name to convert a capital letter");
let firstLetter = capitalLetter.slice(0,1); 
let upperCase =  firstLetter.toUpperCase();
let otherLetter = capitalLetter.slice(1);
document.write(`User input: ${capitalLetter}<br>`);
document.write(`Title case: ${upperCase + otherLetter}<br><br><br>`);
 */
// 12. 
// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// Answer-12
document.write("Answer -12 <br><br>");
/*  
let num = 35.36;
document.write(`Number : ${num}<br>`);
let removeDot =  num.toString().replace(".","");
document.write(`Result : ${removeDot}<br><br><br>`);
 */

// 13. 
// Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username.For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// Answer-13 
document.write("Answer -13 <br><br>");
/* 
const checkValidName = (username) => username.match(/[\@\.\,\!\#\$\%\^\&\*\(\)\_\=\+\'\"\;\:\/\?\>\<\.\,]/) === null;

var userName = prompt("Enter your Name ");
if (!checkValidName(userName)) {
    while (!checkValidName(userName)) {
        userName = prompt("please enter a valid userName ");
        if (checkValidName(userName)) {
            document.write(`User Name : <b>${userName}</b> <br><br><br>`);

        }
    };
} else {
    document.write(`User Name : <b>${userName}</b> <br><br><br>`);

} */


// 14. 
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, 
// program should inform about its availability. Example:

// Answer-14
document.write("Answer -14 <br><br>");
/* 
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userItems = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var i=0; i<= items.length; i++){
    if(items[i] == userItems.toLowerCase()){
        alert(`${userItems} is available at index ${[i]} in our bakery`);
        document.write(`${userItems} is <b>available</b> at index ${[i]} in our bakery <br>`);
        break;
    }
}
if(items[i] !== userItems.toLowerCase()){
    alert(`We are sorry.${userItems} is not available in our bakery `);
    document.write(`We are sorry.${userItems} is <b>not available</b> in our bakery <br>`);
   
} */

// 15.
//  Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.



// Answer-15 X
document.write("Answer -15 <br><br>");


 let numbersQ15 = /[0-9]/g; 
let capitalLetterQ15 = /[A-Z]/g; 
let smallLetterQ15 = /[a-z]/g; 


let passwordQ15 = prompt("Enter a password.")
let firstLetterQ15 = passwordQ15.charAt(0);
// document.write(firstLetterQ15);
document.write(firstLetterQ15.match(/[0-9]/));


if(passwordQ15.length < 6 && !firstLetterQ15.match(/[0-9]/)  ){
    document.write("If k andar");
    while(passwordQ15.length < 6 &&  firstLetterQ15.match(/[0-9]/)  ){
        passwordQ15 = prompt("Please enter a valid password");
        if(passwordQ15.length >= 6 ) {
            document.write(`validated PAssword : ${passwordQ15} <br><br><br>`);
            break;
        }
    }
}else if(passwordQ15.length >= 6 && !firstLetterQ15.match(/[0-9]/) ){
    document.write("If Else k andar");

    document.write(`validated PAssword without while loop : ${passwordQ15} <br><br><br>`);
} 


// 16. 
// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// Answer-16
document.write("Answer -16 <br><br>");
/* 
let university = "University of Karachi";
for(let i=0; i< university.length; i++){
    document.write(`${university[i]} <br>`)
} */

// 17. 
// Write a program to display the last character of a user input.

// Answer-17
document.write("Answer -17 <br><br>");
/* 
let countryName = prompt("Enter your country name");
document.write(`User input: ${countryName} <br>`);
let lastword = countryName.charAt(countryName.length -1); 
document.write(`Last character of input: ${lastword} <br>`);
 */
// 18. 
// You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.


// Answer-18 
document.write("Answer -18 <br><br>");
/* 
let story = "The quick brown fox jumps over the lazy dog";
document.write(`Text: ${story}<br>`);
let oneWord = story.toLowerCase().match(/the/g);
document.write(`There are ${oneWord.length} occurrences(s) of word 'the'  <br>`);
 */
