
//       c)   Array Methods (BuiltIn Functin)

/*  This methods is performing action on just arrays elements  */

/* 
1) sort(),        { this method is used for elements placed in an alphabatical order in array },
2) reverse(),     { this method is used for reversed all the elements from left to right in array },
3) pop(),         { this method is used for removing the last element of the array  },
4) push(),        { this method is used for adding an element at the end of the array  },
5) shift(),       { this method is used for removing the first element of the array  },
6) unshift(),     { this method is used for adding the element at the start of the array  },
7) concat(),      { this method is used for merging multiple arrays }
8) join(),        { this method is used for join the elements of an array with any thing like (-,_,$,@,%.etc) }
9)  slice(),      { this method is used for get the elements from an array }
10) splice(),     { this method is used for add the elements in an array on any index }
11) isArray(),    { this method is used for checking the value which is an array or not this method gives a boolean value}
12) indexOf(),    { this method is used for searching the word from starts of an array and gives a index number }
13) lastIndexOf(),{ this method is used for searching the word from end of an array and gives a index number }
14) every(),      { this method is checking the complete array is passed the condition then give true or false}
15) filter(),     { this method check all the element of an array then all the elements passed the condition then this method returns a new array of that passed elements }
16) find(),       { this method returns the value of the first element in an array that passed the condition}
17) findIndex(),  { this method returns the index of the first element in an array that passed the condition}
18) includes(),   { this method is used for search the element in an array if element is found then gives a true otherwise false }
19) some(),       { this method is checking the array which is passed the condition at anyone index then give true or false}
20) forEach(),    { this method is working like for loop }
21) toString(),   { this method is used for convert an array into the strings }
22) fill(),       { this method replace all the elements with another same word }
 */



var ary = [`Zeeshan`, `Adnan`, `Yasir`, `Hasnain`, `Shahid`];
document.write(`Main Array :  ${ary} <br>`);

// 1) sort(),

ary.sort();
document.write(`Sorted Array :  ${ary} <br>`);

// 2) reverse(),

ary.reverse();
document.write(`Reverse Array :  ${ary} <br>`);

// 3) pop(),

ary.pop();
document.write(`Poped Array :  ${ary} <br>`);

// 4) push(), 

ary.push("Ahmed");
document.write(`Pushed Array :  ${ary} <br>`);

// 5) shift(),

ary.shift();
document.write(`Shifted Array :  ${ary} <br>`);

// 6) unshift(),

ary.unshift(`Bilal`);
document.write(`Unshifted Array :  ${ary} <br>`);

// 7) concat(),

var concyarry1 = [ `Sheraz`,`Adil` ];
var concyarry2 = [ `Yaseen`,`Abdullah` ];
var concatination = ary.concat(concyarry1,concyarry2);
document.write(`Concated Array :  ${concatination} <br>`);

// 8) join(), 

var joined = ary.join(` / `);
document.write(`Joinded Array :  ${joined} <br>`);
   
// 9)  slice(), 

var slicary =  ary.slice(1,3);
document.write(`Sliced Array :  ${slicary} <br>`);

// 10) splice(),

var ary2 = [`Zeeshan`, `Adnan`, `Yasir`, `Hasnain`, `Shahid`];
ary2.splice(1,0,`Nagori`,`Zaib`);
document.write(`Spliced Array :  ${ary2} <br>`);

// 11) isArray(),

var arryis = Array.isArray(ary);
document.write(`IsArray or Not :  ${arryis} <br>`);

// 12) indexOf(),
 
document.write(`IndexOF Array :  ${ary2.indexOf(`Yasir`,0)} <br>`);

// 13) lastIndexOf(),

ary2.splice(1,0,`Hasnain`);
document.write(`Array :  ${ary2} <br>`);
document.write(`LastIndexOF Array :  ${ary2.lastIndexOf(`Hasnain`,7)} <br>`);

// 14) every(), 

var adultevery = [100,130,21,18];
function checkAdultevery(ageevery){
    return ageevery >= 18
}
document.write(`Every Array :  ${adultevery.every(checkAdult)} <br>`);

// 15) filter(),

var isFilterarr = [100,13,21,18];
function isFilterAge(isfoundIndex){
    return isfoundIndex >= 18
}
document.write(`Filtered Array :  ${isFilterarr.filter(isFilterAge)} <br>`);

// 16) find(),   

var isfind = [10,13,21,18];
function isAgeEqual(isfound){
    return isfound >= 18
}
document.write(`Finded Array :  ${isfind.find(isAgeEqual)} <br>`);

// 17) findIndex(),

var isfindIndex = [10,13,21,18];
function isAgeEqualIndex(isfoundIndex){
    return isfoundIndex >= 18
}
document.write(`Finded Array :  ${isfindIndex.findIndex(isAgeEqual)} <br>`);

// 18) includes(),

document.write(`Include or not \"Array\" :  ${ary2.includes(`Yasir`)} <br>`);

// 19) some(),

var adult = [10,13,15,18,20];
function checkAdult(age){
    return age >= 18
}
document.write(`Some Array :  ${adult.some(checkAdult)} <br>`);

// 20) forEach(), 

ary.forEach(function(value,index){
    document.write(`For Each ${index}  :  ${value} <br>`);
});

// 21) toString(),

ary.toString();
document.write(`From array to Strings :  ${ary} <br>`);

// 22) fill(),

ary.fill(`Dani`);
document.write(`Filled Array  :  ${ary} <br>`);







