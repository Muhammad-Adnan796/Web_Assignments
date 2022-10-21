


/*
var tablenum = Number(prompt("Please Enter table number"));
var startnum = Number(prompt("Please Enter Starting point"));
var endnum = Number(prompt("Please Enter End point"));


for (var i = startnum ; i <= endnum; i++) {
    if (i == 21) {
        // break statment is break the loop after execute this condition ,
        break;
        // continue statement is miss this line on which condition is given in if statment ,
        // continue;
    }
    document.write(tablenum + " x " + i + " = " + (tablenum * i));
    document.write("<br>")

} */



// Task Triangle 


/*
let numb = 5;
let string1 = "";
// first loop is for draw a column,
for( let i = 1; i <= numb ; i++ ){
    // second loop is for draw a spaces,
    for( let j = 1; j <= numb - i; j++){
      string1 += " ";
    }

    // third loop is for draw stars,
    for ( let k = 0; k < 2 * i - 1 ; k++){
        string1 += "*";
    }
      string1 += "<br>";

}
document.write(string1);



let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";

  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";

  }

  string += "\n";
}
*/

/*
console.log(string);

document.write("<br>")
document.write("<br>")
document.write("<br>")
*/


// Array OR Lists


/* how to add values in array */
/*
var foods = [];
foods[0] = "Mango";
foods[1] = "Orange";
*/

/* how to add multiple values in  array */

/*  foods.push("Grapes","Banana");

document.write(foods);  */

/*
document.write("<br>")
document.write("<br>")
document.write("<br>")
*/


// Task 

// 1. Fill the array ,
// 2. Take userInput as a number,
// 3. user number is found in array write found other wise not found.


/*
var arra = [ 12,45,64,77,11,10,19,18,17 ];
var userInput = Number(prompt("Enter number to find"));



var found = false;
document.write("User Input "+userInput);
document.write("<br>")

for( var i = 0; i < arra.length ; i++){
  if( arra[i] === userInput ){
    document.write("Found " + userInput + " on index = " + i);
    found = true;
    break;
  }
}
document.write("<br>");

if(!found){
  document.write("Not Found");

  
}  */

/*
document.write("<br>");
document.write("<br>");
document.write("<br>");
*/




// Splice ( Addition of elements)


/* var foods = ["Pizza", "Burger" , "Icecream"];
document.write(foods);
document.write("<br>");  */


// For removing no elements in array
//           index,number of elements , elements
/*  foods.splice(1,0,"Sandwich");
document.write(foods);


document.write("<br>");


var food = ["Pizza", "Burger" , "Icecream","Snacks","Fries"];
document.write(food);
document.write("<br>");  */


// For removing multi elements in array
//           index,number of elements , elements
/* food.splice(1,2,"Sandwich");
document.write(food);

document.write("<br>");
document.write("<br>");
document.write("<br>");  */

// Slice ( Remove elements from one point to another point  )

/*
var foody = ["Pizza", "Burger" , "Snacks","Sandwich","Fries"];
document.write(foody);
document.write("<br>");  */


//                    index,another point ,
/*  var arr = foody.slice(1,3);
document.write(foody);
document.write("<br>");
document.write(arr);  */    // "Burger","Snacks"



//                        ASSIGNMENT NO 03


// Q # 1.  
// Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M.
//   Phil., PhD). Show the listed qualifications in your browser ?


// Answer # 1

document.write("Answer # 1");
document.write("<br>");
document.write("<br>");

var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
var count = [1, 2, 3, 4, 5, 6, 7, 8]

document.write("Qualifications: ");
document.write("<br>");
document.write("<br>");


for (var i = 0; i <= education.length - 1; i++) {
  document.write(count[i] + " ) " + education[i]);
  document.write("<br>");

};

document.write("<br>");
document.write("<br>");
document.write("<br>");





// Q # 2. 
// Write a program to store 3 student names in an array.Take another
// array to store score of these three students. Assume that total marks
// are 500 for each student, display the scores & percentages of
// students like:



// Answer # 2

document.write("Answer # 2");
document.write("<br>");
document.write("<br>");


var names = ["Zeeshan", "Hasnain", "Babar Azam"];
var marks = [320, 230, 480];
var totolMarks = 500;

for (var i = 0; i <= names.length - 1; i++) {
  document.write("Score of "+names[i]+" is "+marks[i]+" . Percentage : "+(marks[i]/totolMarks) * 100+"%");
  document.write("<br>");

};

document.write("<br>");
document.write("<br>");
document.write("<br>");




// Q # 3. 
// Initialize an array with color names. Display the array elements in
// your browser.
// A. 
// Ask the user what color he/she wants to add to the beginning &
// add that color to the beginning of the array. Display the updated
// array in your browser.
// B. 
// Ask the user what color he/she wants to add to the end & add
// that color to the end of the array. Display the updated array in
// your browser.
// C. 
// Add two more colors to the beginning of the array. Display the
// updated array in your browser.
// D. 
// Delete the first color in the array. Display the updated array in
// your browser.
// E. 
// Delete the last color in the array. Display the updated array in
// your browser.
// F. 
// Ask the user at which index he/she wants to add a color & color
// name. Then add the color to desired position/index. Display the
// updated array in your browser.
// G. 
// Ask the user at which index he/she wants to delete color(s) &
// how many colors he/she wants to delete. Then remove the
// same number of color(s) from user-defined position/index. .
// Display the updated array in your browser.



// Answer # 3
document.write("Answer # 3");
document.write("<br>");
document.write("<br>");

var array1 = ["Blue", "Red", "Green", "Yellow"];
document.write(array1);
document.write("<br>");


// A .

var arrayA = [ "Blue", "Red","Green","Yellow" ];
arrayA.unshift(prompt("Add a Color to the starts of the array A . "));
document.write(arrayA);
document.write("<br>");


// B.

var arrayB = [ "Blue", "Red","Green","Yellow" ];
arrayB.push(prompt("Add a Color to the end of the array B ."));
document.write(arrayB);
document.write("<br>");


// C.

var arrayC = [ "Blue", "Red","Green","Yellow" ];
arrayC.push(prompt("Add two Colors to the end of the array C ."),prompt("Add two Colors to the end of the array C . "));
document.write(arrayC);
document.write("<br>");


// D .

var arrayD = ["Blue", "Red", "Green", "Yellow"];
arrayD.shift();
document.write(arrayD);
document.write("<br>");


// E .

var arrayE = ["Blue", "Red", "Green", "Yellow"];
arrayE.pop();
document.write(arrayE);
document.write("<br>");


// F .

var arrayF = ["Blue", "Red", "Green", "Yellow"];
arrayF[parseInt(prompt("Write index number where you want to add the color in an array"))] = prompt("Add a Color to the end of the array F .");
document.write(arrayF);
document.write("<br>");


// G .

var arrayG = ["Blue", "Red", "Green", "Yellow"];
arrayG.splice(parseInt(prompt("Write starting index for removing elements from an array")), parseInt(prompt("Write ending index for removing elements from an array")), prompt("Add a Color to the array G ."));
document.write(arrayG);
document.write("<br>");


document.write("<br>");
document.write("<br>");
document.write("<br>");



// Q # 4. 
// Write a program to initialize an array with city names. Copy 3 array
// elements from cities array to selected cities array.



// Answer # 4
document.write("Answer # 4");
document.write("<br>");
document.write("<br>");
var citiesNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(citiesNames);
document.write("<br>");
document.write("Selected cities list: ");
document.write("<br>");
document.write(citiesNames[2] + ", " + citiesNames[3]);


document.write("<br>");
document.write("<br>");
document.write("<br>");




// Q # 5.
//  Write a JavaScript program to remove all duplicate items from an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : [3, ‘a’, 2, 4, 9]



// Answer # 5
document.write("Answer # 5");
document.write("<br>");
document.write("<br>");
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//           How to remove duplicate elements from an array,
var unique = [...new Set(arr1)];
document.write(unique);


document.write("<br>");
document.write("<br>");
document.write("<br>");



// 6. 
// We have the following arrays:
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// Write a JavaScript program to display in the following way :
// 1st choice is Karachi
// 2nd choice is Lahore
// 3rd choice is Islamabad


// Answer # 6
document.write("Answer # 6");
document.write("<br>");
document.write("<br>");

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st", "nd", "rd", "th"];
var counter = [1, 2, 3, 4];

for (var i = 0; i <= aCities.length - 1; i++) {
  document.write(counter[i] + o[i] + " choice is " + aCities[i] + " .");
  document.write("<br>");
};

document.write("<br>");
document.write("<br>");
document.write("<br>");




// 7. 
// Write a JavaScript program to compute the union of two arrays.
// (Merge two arrays by removing all duplicates)
// var a = [10,20,4,40,60,70]
// var b = [1,2,3,4,5,6,7,8,9,10]
// Output should be: [1,2,3,4,5,6,7,8,9,10,20,40,60,70]




// Answer # 7
document.write("Answer # 7");
document.write("<br>");
document.write("<br>");


var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var merging = [...a, ...b];
let outPut = [...new Set(merging)];


// 1st Method for sorting numaric array by loops,

for (var i = 1; i < outPut.length; i++) {
  for (var j = 0; j < i; j++) {
    if (outPut[i] < outPut[j]) {
      var x = outPut[i];
      outPut[i] = outPut[j];
      outPut[j] = x;
    }
  }
}
document.write(outPut);

document.write("<br>");
document.write("<br>");

// 2nd Method for sorting numaric array by comparing function,

let outPut2 = [...new Set(merging)];
outPut2.sort(function (a, b) { return a - b });

document.write(outPut2);



document.write("<br>");
document.write("<br>");
document.write("<br>");



// Q # 8. 
// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k





// Answer # 8
document.write("Answer # 8");
document.write("<br>");
document.write("<br>");


// a)
document.write("a. Counting: ");

for (var i = 0; i <= 20; i++) {
  document.write(i + ",");
};
document.write("<br>");

// b)
document.write("b. Reverse Counting: ");

for (var i = 20; i >= 0; i--) {
  document.write(i + ",");
};
document.write("<br>");

// c)
document.write("c. Even: ");

for (var i = 0; i <= 10; i++) {

  var j = (i * 2);
  document.write(j + ",");
};
document.write("<br>");

// d)
document.write("d. Odd: ");

for (var i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    document.write(i + ",");
  }
};
document.write("<br>");

// e)
document.write("e. Series: ");

for (var i = 1; i <= 10; i++) {
  var j = i * 2;
  document.write(j + "k, ");

};
document.write("<br>");
document.write("<br>");
document.write("<br>");



// Q # 9. 
// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].




// Answer # 9
document.write("Answer # 9");
document.write("<br>");
document.write("<br>");


var largNumb = [24, 53, 78, 91, 12];
document.write("Array items: " + largNumb);
document.write("<br>");
document.write("The largest number is: " + Math.max(...largNumb));
document.write("<br>");
document.write("The smallest number is: " + Math.min(...largNumb));

document.write("<br>");
document.write("<br>");
document.write("<br>");




// Q # 10. 
// Sort an array from smallest to largest value
// A = [20,53,78,4,91,12]
// Output should be: [4,12,20,53,78,91]




// Answer # 10
document.write("Answer # 10");
document.write("<br>");
document.write("<br>");


var tenthSortingArray = [20, 53, 78, 4, 91, 12];

tenthSortingArray.sort(function (a, b) { return a - b });
document.write(tenthSortingArray);


document.write("<br>");
document.write("<br>");
document.write("<br>");


// Q # 11. 
// You have an array:
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After
// searching, prompt the user whether the given item is found in the list
// or not. Example:



// Answer # 11
document.write("Answer # 11");
document.write("<br>");
document.write("<br>");



var bakeryFood = ["cake", "apple pie", "cookie", "chips", "patties"];

var userSearch = prompt("Welcome to Faisal Bakery.What do you want to order sir/ma'am?");
var namy = bakeryFood.slice(0, 4);

var indexNum = bakeryFood.indexOf(userSearch);

if (indexNum !== namy && indexNum !== -1) {
  document.write(`${userSearch}  is available at index ${indexNum} in our bakery `);

} else {
  document.write(`We are sorry. ${userSearch} is not  available in our bakery`);

}

document.write( "                 ASSINMENT NO 3 ENDED!" );
