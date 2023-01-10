


//                    Chapter # 4 (Assignment);
document.write("<br><br><br>");
document.write("<b>Chapter # 4 (Assignment)</b> <br><br><br><br>");

// Chapter No 4

// 1. Declare 3 variables in one statement.

// Answer-1
document.write(`Answer -1 <br>`);

var variablesOneStatement = "3 Variables in One Statement", fullName = "Muhammad Adnan", age = 22;

alert(`${variablesOneStatement} \n${fullName} \n${age} `);
document.write(`${variablesOneStatement} <br> Full Name : ${fullName} <br> Age : ${age} <br><br><br>`);


// 2. Declare 5 legal & 5 illegal variable names.

// Answer-2
document.write(`Answer -2 <br>`);
var legalmethods = "1) variableName , <br> 2) _variableName, <br> 3) $VariableName, <br> 4) VariableName123,<br> 5) Variable_Name,";
var illegalmethods = "1) Variablename , <br> 2) .variableName, <br> 3) -VariableName, <br> 4) 12VariableName,<br> 5) =VariableName,";
document.write(`<b>Legal Methods of the Variable Name</b> : <br> ${legalmethods}<br>`);
document.write(`<b>Illegal Methods of the Variable Name</b> : <br> ${illegalmethods}<br><br><br>`);


// 3. Display this in your browser
// For example $my_1stVariable






// Answer no 3 
// a) A heading stating “Rules for naming JS variables”
document.write(`Answer -3(a) <br>`);
document.write(` <b> Rules for naming JS variables </b> <br><br>`);

// b) Variable names can only contain ______, ______,
// ______ and ______.
document.write(`Answer -3(b) <br>`);
var number = "numbers";
var $ = "$";
var _slash = "_";
document.write(`a) Variable names can only contain <b>${number}</b>,<b>${$}</b> and <b>${_slash}</b>.For Example: $my_1stVariable <br><br> `);


// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
document.write(`Answer -3(c) <br>`);
var letter = "letter";
document.write(`b) Variable must begin with a <b>${letter}</b>, <b>${$}</b> or <b>${_slash}</b> .For Example: $name,_1stVariable name or name <br><br>`);


// d) Variable names are case _________
document.write(`Answer -3(d) <br>`);
var sensitive = "Sensitive";
document.write(`c) Variable names are case <b>${sensitive}</b>.<br><br>`);


// e) Variable names should not be JS _________
document.write(`Answer -3(e) <br>`);
var keyword = "Keyword";
document.write(`d) Variable name should not be JS <b>${keyword}</b>`);