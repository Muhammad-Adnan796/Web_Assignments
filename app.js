
//            Chapter # 17 to 20 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 17 to 20 (Assignment)</b> <br><br><br><br>");

// 1.
//  Declare and initialize an empty multidimensional array.
// (Array of arrays)

// Anwer-1
document.write("Answer -1 <br><br>");
 var emptyArray;
emptyArray = [ [],[],[] ];
document.write(`${emptyArray} <br><br><br>`);


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// Anwer-2
document.write("Answer -2 <br><br>");

var emptyArray;
emptyArray = [ [0,1,2,3],[1,0,1,2],[2,1,0,1] ];
for(var i = 0; i < emptyArray.length ; i++){
   for(var j = 0; j < emptyArray[i].length ; j++){
    document.write(`<b> ${emptyArray[i][j]} </b> `);
        }
        document.write("<br>");
   }

   document.write("<br><br>");


// 3. Write a program to print numeric counting from 1 to 10.  

// Anwer-3
document.write("Answer -3 <br><br>");

for(var i = 1; i <= 10; i++){
    document.write(`${i} <br>`);
}
document.write("<br><br><br>");


// 4. 
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// Anwer-4
document.write("Answer -4 <br> ");
 
var tableName = Number(prompt("Enter a number to show its multiplication table","2"));
var limitTable = Number(prompt("Enter a length of multiplication table","10"));
document.write(`<h1> Multiplication table of ${tableName} <br> Length ${limitTable} </h1> `);

for(var i = 1; i <= limitTable; i++){
    document.write(`${tableName} x ${i} = ${tableName * i} <br> `);

} 
document.write("<br><br><br>");


// 5. 
// Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// Anwer-5
document.write("Answer -5 <br> ");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(`<h1> Fruits Array: </h1>`);

for(var i = 0; i < fruits.length; i++){
    document.write(`${fruits[i]} <br>`);
}
document.write("<br>")
for(var i = 0; i < fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Anwer-6
document.write("Answer -6 <br> ");

document.write(`<h1> Counting: </h1>`);
for(var i=1; i <= 15; i++){
    document.write(`${i},`);
}

document.write(`<h1> Reverse counting: </h1>`);
for(var i=10; i >= 1; i--){
    document.write(`${i},`);
}

document.write(`<h1> Even: </h1>`);
for(var i=0; i <= 20; i++){
    if(i % 2 === 0){
        document.write(`${i},`);
    }  
}

document.write(`<h1> Odd: </h1>`);
for(var i=0; i <= 20; i++){
    if(i % 2 !== 0){
        document.write(`${i},`);
    }
    
}

document.write(`<h1> Series: </h1>`);
for(var i=1; i <= 20; i++){
    if(i % 2 === 0){
        document.write(`${i}k,`);
    }  
}


// 7. 
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:


// Anwer-7
document.write("Answer -7 <br><br> ");

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userItems = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var i=0; i<= items.length; i++){
    if(items[i] == userItems){
        alert(`${userItems} is available at index ${[i]} in our bakery`);
        document.write(`${userItems} is <b>available</b> at index ${[i]} in our bakery <br>`);
        break;
    }
}
if(items[i] !== userItems){
    alert(`We are sorry.${userItems} is not available in our bakery `);
    document.write(`We are sorry.${userItems} is <b>not available</b> in our bakery <br>`);
   
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// Anwer-8
document.write("Answer -8 <br><br> ");
var largestNumb = [24, 53, 78, 91, 12];
document.write(`Array items: ${largestNumb} <br>`);
var largests = Math.max(...largestNumb);
document.write(`The Largest number is ${largests} <br><br><br>`);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// Anwer-9
document.write("Answer -9 <br><br> ");
var largestNumb = [24, 53, 78, 91, 12];
document.write(`Array items: ${largestNumb} <br>`);
var largests = Math.min(...largestNumb);
document.write(`The smallest number is ${largests} <br><br><br>`);


// 10.
//  Write a program to print multiples of 5 ranging 1 to 100.

// Anwer-10
document.write("Answer -10 <br><br> ");

for(var i=1 ; i <= 100; i++){
    if(i % 5 == 0){
        document.write(` ${i},`);
    }
}
