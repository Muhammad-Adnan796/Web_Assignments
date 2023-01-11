
//            Chapter # 14 to 16 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 14 to 16 (Assignment)</b> <br><br><br><br>");

// 1. 
// Declare an empty array using JS literal notation to store student names in future.

// Anwer-1
document.write("Answer -1 <br><br>");

var studentsList;
studentsList = [];
studentsList[0] = " Students Array ";
studentsList[1] = " Adnan ";
studentsList[2] = " Yasir ";
studentsList[3] = " Zeeshan ";
studentsList[4] = " Hasnain ";
studentsList[5] = " Adeel ";
document.write(`${studentsList} <br><br><br>`);

// 2. 
// Declare an empty array using JS object notation to store student names in future.

// Anwer-2
document.write("Answer -2 <br><br>");

var studentsNames;
studentsNames = Array();
studentsNames[0] = " Students Names ";
studentsNames[1] = " Bilal ";
studentsNames[2] = " Sheraz ";
studentsNames[3] = " Zohaib ";
studentsNames[4] = " Soban ";
studentsNames[5] = " Haseeb ";
document.write(`${studentsNames} <br><br><br>`);

// 3. 
// Declare and initialize a strings array.

// Anwer-3
document.write("Answer -3 <br><br>");

var stringList;
stringList = [" Strings Array ", " Laptop ", " Airbuds ", " Henfree ", " Pen ", " Shopner "];
document.write(`${stringList} <br><br><br>`);

// 4. 
// Declare and initialize a numbers array.

// Anwer-4
document.write("Answer -4 <br><br>");

var numberList;
numberList = ["Number Array", 5, 8, 10, 11, 20, 30, 50];
document.write(`${numberList} <br><br><br>`);

// 5.
// Declare and initialize a boolean array.

// Anwer-5
document.write("Answer -5 <br><br>");

var booleanList;
booleanList = ["Boolean Array", true, false, true, false, false];
document.write(`${booleanList} <br><br><br>`);

// 6. 
// Declare and initialize a mixed array.

// Anwer-6
document.write("Answer -6 <br><br>");

var mixedList;
mixedList = [" Mixed Array ", true, " Asad ", 20, false];
document.write(`${mixedList} <br><br><br>`);

// 7. 
// Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like:

// Anwer-7
document.write("Answer -7 <br><br>");

document.write(`<b>Qualifications:</b> <br><br>`)
var educationDegree;
educationDegree = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(`<b>1) ${educationDegree[0]}</b> <br>
                <b>2) ${educationDegree[1]}</b> <br>
                <b>3) ${educationDegree[2]}</b> <br>
                <b>4) ${educationDegree[3]}</b> <br>
                <b>5) ${educationDegree[4]}</b> <br>
                <b>6) ${educationDegree[5]}</b> <br>
                <b>7) ${educationDegree[6]}</b> <br>
                <b>8) ${educationDegree[7]}</b> <br><br><br>`
);

// 8.
// Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, 
// display the scores & percentages of students like:

// Anwer-8
document.write("Answer -8 <br><br>");

var studentsNamesArray = ["Faiz Hameed", "Asim Munir", "Bajwa"];
var studentsScoresArray = [320, 230, 480];
var studentsTotalMarks = 500;
document.write(`Score of 
${studentsNamesArray[0]} is 
${studentsScoresArray[0]}. Percentage : 
${(studentsScoresArray[0] / studentsTotalMarks) * 100}%<br>`);
document.write(`Score of 
${studentsNamesArray[1]} is 
${studentsScoresArray[1]}. Percentage : 
${(studentsScoresArray[1] / studentsTotalMarks) * 100}%<br>`);
document.write(`Score of 
${studentsNamesArray[2]} is 
${studentsScoresArray[2]}. Percentage : 
${(studentsScoresArray[2] / studentsTotalMarks) * 100}%<br><br><br>`);

// 9. 
// Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
// Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-define position/index.
// Display the updated array in your browser.

// Anwer-9
document.write("Answer -9 <br><br>");
var colorNames = [" Red ", " Blue ", " Yellow ", " Green ", " Black "];
document.write(`Array) ${colorNames} <br>`);

var addBiginingClr = prompt("Enter any one Color at the beginning of an array");
colorNames.unshift(addBiginingClr);
document.write(`a) ${colorNames} <br>`);

var addEndClr = prompt("Enter any one Color at the end of an array");
colorNames.push(addEndClr);
document.write(`b) ${colorNames} <br>`);

var addTwoBiginingAClr = prompt("Enter any one Color at the beginning of an array");
var addTwoBiginingBClr = prompt("Enter any one Color at the beginning of an array");
colorNames.unshift(addTwoBiginingAClr, addTwoBiginingBClr);
document.write(`c) ${colorNames} <br>`);

colorNames.shift();
document.write(`d) ${colorNames} <br>`);

colorNames.pop();
document.write(`e) ${colorNames} <br>`);

var indexNumberClr = Number(prompt("Enter index number at which you can add color"));
var indexClrName = prompt("Enter any one Color in array");
colorNames.splice(indexNumberClr, 0, indexClrName);
document.write(`f) ${colorNames} <br>`);

var remIndexNumberClr = Number(prompt("Enter index number at which you can remove color"));
var remIndexEnd = Number(prompt("Enter a number to remove how many colors"));
colorNames.splice(remIndexNumberClr, remIndexEnd);
document.write(`g) ${colorNames} <br><br><br>`);

// 10.
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sortmethod.

// Anwer-10
document.write("Answer -10 <br><br>");

var studentsSortArray = [320, 230, 480, 120];
document.write(`Scores of Students : ${studentsSortArray} <br>`);
studentsSortArray.sort();
document.write(`Ordered Scores of Students : ${studentsSortArray} <br><br><br>`);


// 11.
//  Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array.

// Anwer-11
document.write("Answer -11 <br><br>");

document.write(`Cities List: <br>`);
var citiesList = [" Karachi ", " Lahore ", " Islamabad ", " Quetta ", " Peshawar "];
document.write(`${citiesList} <br><br>`);
var selectedCities = [].concat(citiesList[2], citiesList[3]);
document.write(`Selected Cities List: <br> ${selectedCities} <br><br><br>`);


// 12. 
// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)


// Anwer-12
document.write("Answer -12 <br><br>");

var stringArr = ["This", "is", "my", "cat"];
document.write(`Array:<br> ${stringArr} <br><br>`);
let stringArrJoin = stringArr.join(' ');
document.write(`String:<br> ${stringArrJoin} <br><br><br>`);

// 13. 
// Create a new array. 
// Store values one by one in such a way that you can access the values in the order in which they were stored. 
// (FIFO-First In First Out)


// Anwer-13
document.write("Answer -13 <br><br>");

var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");
document.write(`Devices: <br> ${fifo} <br><br>`);

document.write(`Out: 
                <br> ${fifo.shift()} <br> 
                Out: <br> ${fifo.shift()} <br> 
                Out: <br> ${fifo.shift()} <br> 
                Out: <br> ${fifo} <br><br><br>`
);


// 14.
//  Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
//  (Last InFirst Out) .               

// Anwer-14
document.write("Answer -14 <br><br>");

var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");
document.write(`Devices: <br> ${lifo} <br><br>`);

document.write(`Out: 
                <br> ${lifo.pop()} <br> 
                Out: <br> ${lifo.pop()} <br> 
                Out: <br> ${lifo.pop()} <br> 
                Out: <br> ${lifo} <br><br><br>`
);

// 15. 
// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:


// Anwer-15
document.write("Answer -15 <br><br>");

var phonManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`
            <select style="width: 100px; height: 25px; border-radius: 5px;" name="phone-manufacturers" id="">
                  <option value="apple">${phonManufacturers[0]}</option>
                  <option value="samsung">${phonManufacturers[1]}</option>
                  <option value="motorola">${phonManufacturers[2]}</option>
                  <option value="nokia">${phonManufacturers[3]}</option>
                  <option value="sony">${phonManufacturers[4]}</option>
                  <option value="haier">${phonManufacturers[5]}</option>
            </select>
`)