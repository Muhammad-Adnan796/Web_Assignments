//            Chapter # 31 to 34 (Assignment)
document.write("<br><br><br>");
document.write("<b>Chapter # 31 to 34 (Assignment)</b> <br><br><br><br>");

// 1. 
// Write a program that displays current date and time in your browser.

// Answer-1
document.write("Answer -1 <br><br>");

let currDate = new Date();
document.write(`${currDate} <br><br><br>`);

// 2. 
// Write a program that alerts the current month in words. For example December

// Answer-2
document.write("Answer -2 <br><br>");

let monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
let currMonth = currDate.getMonth();
for (let i = 0; i < monthsNames.length; i++) {
    if (currMonth == [i]) {
        document.write(`Current Month : ${monthsNames[i]} <br><br><br>`);
        break;
    }
}

// 3. 
// Write a program that alerts the first 3 letters of the current day, 
// for example if today is Sunday then alert will show Sun.

// Answer-3
document.write("Answer -3 <br><br>");

// Method 1 to find day name 

// Get name of current day
let currDayQ3 = currDate.toLocaleDateString(locale = 'en-US', { weekday: 'short' });
document.write(`Today is ${currDayQ3} <br><br><br>`);

// Method 2 to find day name 

// let daysNames = ["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat",];

// for (let i = 0; i < daysNames.length; i++) {
//     if (currDay == [i]) {
//         document.write(`Today is ${daysNames[i]} <br><br><br>`);
//         break;
//     }
// }

// 4. 
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// Answer-4
document.write("Answer -4 <br><br>");

// Method 1 to find day name 

let currdayQ4A = currDate.toLocaleDateString(locale = 'en-US', { weekday: 'long' })
document.write(`
${currdayQ4A === "Saturday" || currdayQ4A === "Sunday" ?
        "It's Fun Day <br><br><br>" :
        "It's Busy Day <br><br><br>"}`);

// Method 2 to find day name 

// let currdayQ4 = currDate.toString();
// let c = currdayQ4.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day <br><br><br>")
// }else if(c === "Sun"){
//     document.write("It's Fun Day <br><br><br>")
// }else{
//    document.write(`It's Busy Day <br><br><br>`);
// }

// 5. 
// Write a program that shows the message “First fifteendays of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”.

// Answer-5
document.write("Answer -5 <br><br>");

let firstDaysMonths = currDate.getDate();

if (firstDaysMonths >= 16) {
    document.write(`Last days of the month <br><br><br>`);
} else {
    document.write(`First fifteen days of the month <br><br><br>`);
}


// 6.
// Write a program that determines the minutes since midnight, Jan. 1, 1970 
// and assigns it to a variable that hasn't been declared beforehand. 
// Use any variable you like to represent the Date object.

// Answer-6
document.write("Answer -6 <br><br>");

let currDateQ6 = new Date();
document.write(`Current Date: ${currDateQ6}<br>`);

let milliSecond = currDateQ6.getTime();
document.write(` Elapsed milliseconds since January 1,1970: ${milliSecond} <b>ms</b><br>`);

let minute = milliSecond / (1000 * 60 * 60);
document.write(` Elapsed minutes since January 1,1970: ${minute} <b>s</b> <br><br><br>`);

// 7. 
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// Answer-7
document.write("Answer -7 <br><br>");

let currentAMPM = currDate.getHours();
document.write(`${currentAMPM >= 12 || currentAMPM <= 24 ? "<b>It's PM</b> <br><br><br>" : "<b>It's AM</b> <br><br><br>"}`);


// 8. 
// Write a program that creates a Date object for the last day of the last month of 2020 
// and assigns it to variable named laterDate.

// Answer-8
document.write("Answer -8 <br><br>");

let last2020Date = new Date("2020 12,31")
document.write(`Later Date: ${last2020Date} <br><br><br>`);


// 9.
//  Create a date object of the starting date of this Ramadan and 
// alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// Answer-9
document.write("Answer -9 <br><br>");

let ramadanDate = new Date("6 18,2015");
let ramadanmillisec = ramadanDate.getTime();
let ramadansetDAte = new Date("3 22,2023");
let ramadansetMillisec = ramadansetDAte.getTime();
let finalinitial = (ramadansetMillisec - ramadanmillisec) / (1000 * 60 * 60 * 24);
document.write(`${finalinitial} days have passed since 1st Ramadan, 2015 <br><br><br>`);


// 10. 
// Write a program that displays in your browser the seconds that elapsed between the reference date and 
// the beginning of 2015.

// Answer-10
document.write("Answer -10 <br><br>");

let OnrefsecElapsedQ10 = new Date("12 5, 2015 22:50:16").getTime(); -
    document.write(`On reference date : ${OnrefsecElapsedQ10}<br>`);
let OnEndsecElapsedQ10 = new Date("1 1,2015").getTime();
let diff = OnrefsecElapsedQ10 - OnEndsecElapsedQ10;
let daysTillsecondElapsedQ10 = Math.ceil(diff / (1000 * 60));
document.write(`${daysTillsecondElapsedQ10} seconds had passed since beginning of 2015 <br><br><br>`);


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// Answer-11
document.write("Answer -11 <br><br>");

let dateQ11 = new Date();
let oneHour = 1000 * 60 * 60 // an hour
document.write(`Current Date: ${dateQ11}<br>`);
let _dateQ11 = new Date(dateQ11)
let dateOneHourago = new Date(_dateQ11.getTime() - oneHour);
document.write(`1 hour ago: ${dateOneHourago}<br><br><br>`);


// 12. 
// Write a program that creates a date object and show the date in an alert box that is reset
//  to 100 years back?

// Answer-12
document.write("Answer -12 <br><br>");

let dateQ12 = new Date();
document.write(`Current date: ${dateQ12}<br>`);
let back100Years = new Date(new Date().setFullYear(new Date().getFullYear() - 100));
document.write(`100 years back, it was : ${back100Years}<br><br><br>`);


// 13. 
// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// Answer-13
document.write("Answer -13 <br><br>");

let userAge = prompt("Enter your age to find the birth year", "12/28/2001");
let dobQ13 = new Date(userAge);
//calculate month difference from current date in time 
let month_diffQ13 = Date.now() - dobQ13.getTime();

//convert the calculated difference in date format 
let age_dateQ13 = new Date(month_diffQ13);

//extract year from date      
let yearQ13 = age_dateQ13.getUTCFullYear();

//now calculate the age of the user  
let age_Q13 = Math.abs(yearQ13 - 1970);
document.write(`Your age ${userAge} <br>`);
document.write(`Your birth year is ${age_Q13} <br><br><br>`);


// 14. 
// Write a program to generate your K-Electric bill in your browser. 
// All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// Answer-14
document.write("Answer -14 <br>");

let customerName = prompt("Generate your K-Electric Bill 'Enter Customer Name' ", "ABC Customer");
let currentMonthQ14 = prompt("Generate your K-Electric Bill 'Enter current month' ", "February");
let numberUnits = Number(prompt("Generate your K-Electric Bill 'Enter number of units' ", "410"));
let chargesPerUnit = Number(prompt("Generate your K-Electric Bill 'Enter charges per unit' ", "16"));
let netAmount = chargesPerUnit * numberUnits;

let latPaymentSurcharge = Number(prompt("Generate your K-Electric Bill 'Enter late payment surcharge' ", "350"));
let grossAmountFormula = netAmount + latPaymentSurcharge;

document.write("<h1>K-Electric Bill</h1>");

document.write(`Customer Name: <b>${customerName}</b><br>`);
document.write(`Month: <b>${currentMonthQ14}</b><br>`);
document.write(`Number of units: <b>${numberUnits}</b><br>`);
document.write(`Charges per unit: <b>${chargesPerUnit}</b><br><br>`);
document.write(`Net Amount Payable (within Due Date): <b>${netAmount}</b><br>`);
document.write(`Late payment surcharge : <b>${latPaymentSurcharge}</b><br>`);
document.write(`Gross Amount Payable (after Due Date): <b>${grossAmountFormula}</b><br>`);
