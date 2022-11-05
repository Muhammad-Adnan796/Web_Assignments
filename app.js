//                 d) String Methods ( BuiltIn Function )
/* 

1) length , ( Property )   { length property is return the length of the text }
2) toLowerCase(),          { toLowerCase() method is convert a text into the LowerCase }
3) toUpperCase(),          { toUpperCase() method is convert a text into the UpperCase }
4) includes(),             { includes() method returns the true if given word is found in anywhere of the text otherwise returns false}
5) startsWith(),           { startsWith() method return true if the given word is found at the start of text otherwise false }
6) endsWith(),             { endsWith() method return true if the given word is found at the end of text otherwise false }
7) search(),               { search() method returns the index number of given word or a character if found other wise returns -1}
8) match(),                { match() method check the given word in a text if found returns a new array of founded words}
9) indexOf(),              { indexOf() method return the index number from left to right if given word is found otherwise -1 }
10) lastIndexOf(),         { lastIndexOf() method return the index number from right to left if given word is found otherwise -1 }
11) replace(),             { replace() method replace the given word with another word } 
12) trim(),                { trim() method removes the extra spaces in a text }  
13) charAt(),              { charAt() method return a character if found  by giving a index number otherwise empty }
14) charCodeAt(),          { charAt() method return a sky code of a character  by giving a index number text otherwise empty }
15) fromCharCode(),        { fromCharCode() method returns any keyboard character by giving a sky code  }
16) concat(),              { concat() method is used for merging two or more then two strings }
17) split(),               { split() method is used for break the each word of string and convert it into an array }
18) repeat(),              { repeat() method is used for repeat the text by giving a number of repeatition }
19) slice(),               { slice() method is used for get the character or a words by giving a index number from 1 point to another point }
20) substr(),              { substr() method is used for get characters }
21) substring(),           { substring() same like slice function }
22) toString(),            {  toString() method is used for any text convert into strings}
 */


var str = `The quick brown fox jumps over the lazy dog`;
var sameWords = str.match(/the/gi);

var same = str.match(/the/gi).length;
document.write(`Text :  ${str} <br> There are ${same} occurences of word "${sameWords}" <br> `);
document.write(`<br><br>`)

//              String BuiltIn Methods
document.write(`          String BuiltIn Methods <br><br>`);


// 1) length, ( property ),
var strLength = `The quick brown fox jumps over the lazy dog`;
document.write(`1). Length ( property ) : ${strLength.length} <br>`);

// 2) toLowerCase(), 

var strlower = `The quick brown fox jumps over the lazy dog`;
document.write(`2). Lower Case : ${strlower.toLowerCase()} <br>`);

// 3) toUpperCase(), 

var strUpper = `The quick brown fox jumps over the lazy dog`;
document.write(`3). Upper Case : ${strUpper.toUpperCase()} <br>`);

// 4) includes(), 

var strIncludes = `The quick brown fox jumps over the lazy dog`;
document.write(`4). Includes : ${strIncludes.includes(`lazy`)} <br>`);

// 5) startsWith(),

var strStartsWith = `The quick brown fox jumps over the lazy dog`;
document.write(`5). Starts With : ${strStartsWith.startsWith(`The`)} <br>`);

// 6) endsWith(),

var strEndsWith = `The quick brown fox jumps over the lazy dog`;
document.write(`6). Ends With : ${strEndsWith.endsWith(`dog`)} <br>`);

// 7) search(),

var strSearch = `The quick brown fox jumps over the lazy dog`;
document.write(`7). Search : ${strSearch.search(`og`)} <br>`);

// 8) match(), 

var strMatch = `The quick brown fox jumps over the lazy dog`;
document.write(`8). Matched : ${strMatch.match(/the/gi)} <br>`);

// 9) indexOf(), 

var strIndexOf = `The quick brown fox is jumps over the lazy is dog`;
var strIndexOfv = strIndexOf.indexOf(`is`);
document.write(`9). IndexOf Method : ${strIndexOfv} <br>`);

// 10) lastIndexOf(), 

var strLastIndexOf = `The quick brown fox is jumps over the lazy is dog`;
var strLastIndexOfv = strLastIndexOf.lastIndexOf(`is`);
document.write(`10). LastIndexOf Method : ${strLastIndexOfv} <br>`);

// 11) replace(),

var strReplace = `The quick brown fox jumps over the lazy dog`;
document.write(`11). Replace Method : ${strReplace.replace(`brown`,`doy`)} <br>`);

// 12) trim(),  

var strTrim = `The quick brown fox jumps over the          lazy dog`;
document.write(`12). Trim Method : ${strTrim.trim()} <br>`);

// 13) charAt(),

var strCharAt = `The quick brown fox jumps over the lazy dog`;
document.write(`13). CharAt Method : ${strCharAt.charAt(12)} <br>`);

// 14) charCodeAt(),

var strCharCodeAt = `The quick brown fox jumps over the lazy dog`;
document.write(`14). CharCodeAt Method : ${strCharCodeAt.charCodeAt(12)} <br>`);

// 15) fromCharCode(), 

document.write(`15). fromCharCode : ${String.fromCharCode(945)} <br>`);

// 16) concat(),

var str1 = `The quick brown fox `;
var str2 = `jumps over `;
var str3 = `the lazy dog `;
var concatination = str1.concat(str2,str3);
document.write(`16). Concatinated Strings : ${concatination} <br>`);

// 17) split(),   

var strSplit = `The quick brown fox jumps over the lazy dog`;
document.write(`17). Split Method : ${strSplit.split(` `)} <br>`);

// 18) repeat(),

var strRepeat = `The quick brown fox jumps over the lazy dog`;
document.write(`18). Repeat Method : ${strRepeat.repeat(2)} <br>`);

// 19) slice(),  

var strSlice = `The quick brown fox jumps over the lazy dog`;
document.write(`19). Slice Method : ${strSlice.slice(2,7)} <br>`);

// 20) substring(), 

var strSubstring = `The quick brown fox jumps over the lazy dog`;
document.write(`20). Substring Method : ${strSubstring.substring(2,7)} <br>`);

// 21) toString(), 

var strToString = `The quick brown fox jumps over the lazy dog`;
document.write(`21). ToString Method : ${strToString.toString()} <br>`);
