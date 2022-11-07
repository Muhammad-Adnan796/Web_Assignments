
document.write(`  Math Methods <br><br>`);

//                    Math Methods

/* 
1) ceil(x),     { ceil(x) mehod is returns a nearest integer upper value of decimal value }
2) floor(x),    { floor(x) mehod is returns a nearest integer down value of decimal value }
3) round(x),    { round(x) mehod is returns a upward integer value when the value is >=5 and when <5 returns a downward integer value  }
4) trunc(x),    { trunc(x) method is return a integer without greater or lesser a value },
5) max(x,y,z,...,n),  { max(x,y,z,...,n) method returns a maximum integer value from a list }
6) min(x,y,z,...,n),   { min(x,y,z,...,n) method returns a minimum integer value from a list }
7) sqrt(x), {  sqrt(x) method use for the square Root } 
1) cbrt(x),     {  cbrt(x) method use for the cubic Root }
2) pow(x,y),   {  pow(x,y) method use for the exponential form }
3) random(), {  random() method use for the random number }
4) abs(x),   { abs(x) method returns a positive absolute value }
5) PI,  { PI method returns a value of decimal pi value }

*/

// 1) ceil(x),

document.write(`1). Math ceil Method : ${Math.ceil(5.4)} <br><br>`);

// 2) floor(x),

document.write(`2). Math floor Method : ${Math.floor(5.4)} <br><br>`);

// 3) round(x),  

document.write(`3). Math roundoff Method : ${Math.round(5.4)} <br><br>`);

// 4) trunc(x), 

document.write(`4). Math trunc Method : ${Math.trunc(5.4)} <br><br>`);

// 5) max(x,y,z,...,n),

document.write(`5). Math max Method : ${Math.max(5.4,8,12,10,16)} <br><br>`);

// 6) min(x,y,z,...,n),

document.write(`6). Math min Method : ${Math.min(5.4,8,12,10,16)} <br><br>`);

// 7) sqrt(x),

document.write(`7). Math Square Root Method : ${Math.sqrt(64)} <br><br>`);

// 8) cbrt(x),

document.write(`8). Math Cubic Root Method : ${Math.cbrt(125)} <br><br>`);

// 9) pow(x,y),

document.write(`9). Math Power Method : ${Math.pow(4,3)} <br><br>`);

// 10) random(),

document.write(`10). Math Random between 1 to 10  Method : ${Math.round(Math.random() * 10 ) + 1} <br><br>`);

// 11) abs(x), 

document.write(`11). Math abs Method : ${Math.abs(-5.6)} <br><br>`);

// 12) PI, 

document.write(`12). Math PI Method : ${Math.PI} <br><br>`);
document.write(`<br><br>`);



document.write(`  Number Methods <br><br>`);

//                 Number BuiltIn Mwthods

/* 
1) number(),     { number() mehod is used to convert string value into numbers }
2) parseInt(),   { parseInt() mehod is used to convert the decimal value into integers }
3) parseFloat(), { parseFloat() mehod is used to returns the value in decimal }
4) isFinite(),   { isFinite() method is check the given value is finit or infinite if finit then returns true otherwise false },
5) isInteger(),  { isInteger() method is check the given value will be integer returns true otherwise false }
6) toFixed(x),   { toFixed(x) method is stop the value after the decimal for giving a number }
7) toPrecision(x), { toPrecision(x) method is roundoff the value } 
*/


// 1) number(), 

var numStr = "50";
document.write(`1). Number Method : ${Number(numStr)}<br><br>`);

// 2) parseInt(),

var parsIntStr = 50.87;
document.write(`2). ParsInt Method : ${parseInt(parsIntStr)}<br><br>`);

// 3) parseFloat(),

var parsFloatStr = 50.87;
document.write(`3). ParseFloat Method : ${parseFloat(parsFloatStr)}<br><br>`);

// 4) isFinite(), 

var isFiniteStr = 5;
document.write(`4). isFinit Method : ${isFinite(isFiniteStr)}<br><br>`);

// 5) isInteger(),

var isIntegerStr = `2`;
document.write(`5). isInteger Method : ${Number.isInteger(isIntegerStr)}<br><br>`);

// 6) toFixed(x),

var toFixedStr = 5.56777;
document.write(`6). toFixed Method : ${toFixedStr.toFixed(2)}<br><br>`);

// 7) toPrecision(x),

var toPrecisionStr = 5.7685;
document.write(`7). toPrecision Method : ${toPrecisionStr.toPrecision(2)}<br><br>`);
document.write(`<br><br>`);

