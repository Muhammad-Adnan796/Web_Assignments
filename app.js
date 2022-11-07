
document.write(`  Date Methods <br><br>`);


//             Date Methods ( BuiltIn Function )

/* 
1) toDateString(),
2) getDate(),
3) getFullYear(),
4) getMonth(),
5) getDay(),
6) getHours(),
7) getMinutes(),
8) getSeconds(),
9) getMilliseconds(),
10) setDate(),
3) setFullYear(),
6) setHours(),
9) setMilliseconds(),
7) setMinutes(),
4) setMonth(),
8) setSeconds(),
 */




document.write(`Get Methods of Date <br><br>  `);


// 1) toDateString(),

var nowDate = new Date();
document.write(`1). toDateString Methods: ${nowDate.toDateString()}<br><br> `);

// 2) getDate(),

document.write(`2). getDate Methods : ${nowDate.getDate()}<br><br> `);

// 3) getFullYear(),

document.write(`3). getFullYear Methods : ${nowDate.getFullYear()}<br><br> `)

// 4) getMonth(),

document.write(`4). getMonth Methods : ${nowDate.getMonth()}<br><br> `)

// 5) getDay(),

document.write(`5). getDay Methods : ${nowDate.getDay()}<br><br> `)

// 6) getHours(),

document.write(`6). getHours Methods : ${nowDate.getHours()}<br><br> `)

// 7) getMinutes(),

document.write(`7). getMinutes Methods : ${nowDate.getMinutes()}<br><br> `)

// 8) getSeconds(),

document.write(`8). getSeconds Methods : ${nowDate.getSeconds()}<br><br> `)

// 9) getMilliseconds(),

document.write(`9). getMilliseconds Methods : ${nowDate.getMilliseconds()}<br><br> `)


document.write(`Set Methods of Date <br><br><br><br>  `);

//               set Methods is used for Future such as on monday in 2030 what is month

// 10) setDate(),

document.write(`10). setDate Methods : ${nowDate.setDate(21)}<br><br> `)

// 11) setFullYear(),

document.write(`11). setFullYear Methods : ${nowDate.setFullYear(2030)}<br><br> `)

// 12) setHours(),

document.write(`12). setHours Methods : ${nowDate.setHours(14)}<br><br> `)

// 13) setMilliseconds(),

document.write(`13). setMilliseconds Methods : ${nowDate.setMilliseconds(45)}<br><br> `)

// 14) setMinutes(),

document.write(`14). setMinutes Methods : ${nowDate.setMinutes(39)}<br><br> `)

// 15) setMonth(),

document.write(`15). setMonth Methods : ${nowDate.setMonth(7)}<br><br> `)

// 16) setSeconds(),

document.write(`16). setSeconds Methods : ${nowDate.setSeconds(45)}<br><br> `)


