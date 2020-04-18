//<!--==============================Q1=================================-->
//<!--Write a program that takes a positive integer from user & display the following in your browser. 
//<!--a. number 
//<!--b. round off value of the number 
//<!--c. floor value of the number 
//<!--d. ceil value of the number 
//<!--==============================Q1=================================-->

// var userNum = Number(prompt("Enter here positive integer"));

// var round = Math.round(userNum);

// var floor = Math.floor(userNum);

// var ceil = Math.ceil(userNum);

// document.write("number: " + userNum + "<br />round off value: " + round + "<br />floor value: " + floor + "<br />ceil value: " + ceil + "<br />");

//<!--==============================Q2=================================-->
//<!--Write a program that takes a negative integer from user & display the following in your browser. 
//<!--a. number 
//<!--b. round off value of the number 
//<!--c. floor value of the number 
//<!--d. ceil value of the number  
//<!--==============================Q2=================================-->

// var userNum = prompt("Enter here negative integer");

// if(userNum.slice(0, 1) == "-") {
// var round = Math.round(userNum);

// var floor = Math.floor(userNum);

// var ceil = Math.ceil(userNum);

// document.write("number: " + userNum + "<br />round off value: " + round + "<br />floor value: " + floor + "<br />ceil value: " + ceil + "<br />");

// }

// else{
//     alert("plz enter negative integer")
// }

//<!--==============================Q3=================================-->
//<!--Write a program that takes a positive floating point number from user & display the following in your browser. 
//<!--a. number 
//<!--b. round off value of the number 
//<!--c. floor value of the number 
//<!--d. ceil value of the number 
//<!--==============================Q3=================================-->

// var userNum = parseFloat(prompt("Enter Here positive floating point"));

// var round = Math.round(userNum);

// var floor = Math.floor(userNum);

// var ceil = Math.ceil(userNum);

// document.write("number: " + userNum + "<br />round off value: " + round + "<br />floor value: " + floor + "<br />ceil value: " + ceil + "<br />");

//<!--==============================Q4=================================-->
//<!--Write a program that takes a negative floating point number from user & display the following in your browser. 
//<!--a. number
//<!--b. round off value of the number 
//<!--c. floor value of the number 
//<!--d. ceil value of the number 
//<!--==============================Q4=================================-->

// var userNum = prompt("Enter Here negative floating point");

// var check = userNum.slice(0, 1);

// parseFloat(userNum);

// if(check == "-") {
// var round = Math.round(userNum);

// var floor = Math.floor(userNum);

// var ceil = Math.ceil(userNum);

// document.write("number: " + userNum + "<br />round off value: " + round + "<br />floor value: " + floor + "<br />ceil value: " + ceil + "<br />");

// }

// else{
//     alert("plz enter negative integer")
// }

//<!--==============================Q5=================================-->
//<!-- Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
//<!--==============================Q5=================================-->

// var userNum = prompt("Enter here number");

// var absolute = userNum.slice(1);

// document.write("The absolute value of " + userNum + " is " + absolute) + "<br />";

//<!--==============================Q6=================================-->
//<!--Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser. 
//<!--==============================Q6=================================-->

// var randomNum = Math.random(); 

// var limit = (randomNum * 6) + 1; 

// var floor = Math.floor(limit)

// document.write("Random dice value: " + floor + "<br />");

//<!--==============================Q7=================================-->
//<!--Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
//<!--==============================Q7=================================-->

// var randomNum = Math.random(); 

// var limit = (randomNum * 2) + 1; 

// var floor = Math.floor(limit)

// if(floor === 1) {
//     document.write(floor + "<br />random coin value: Tails");
// }

// else {
//     document.write(floor + "<br />random coin value: Heads");
// }

//<!--==============================Q8=================================-->
//<!--Write a program that shows a random number between 1 and 100 in your browser
//<!--==============================Q8=================================-->

// var randomNum = Math.random(); 

// var limit = (randomNum * 100) + 1; 

// var floor = Math.floor(limit)

// document.write("Random number between 1 and 100: " + floor + "<br />");

//<!--==============================Q9=================================-->
//<!--//<!--Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
//<!--a. 50 
//<!--b. 50kgs 
//<!--c. 50.2kgs 
//<!--d. 50.2kilograms
//<!--==============================Q9=================================-->

// var userWeight = prompt("Enter Here your weight");

// var find = userWeight.indexOf("kgs");

// var find2 = userWeight.indexOf("kilograms");

// var userWeightKg;

// if(find !== -1) {
//     userWeightKg = userWeight.replace("kgs", " kilograms");
//     document.write(userWeightKg)
// }

// else if(find2 !== -1) {
//     userWeightKg = userWeight.replace("kilograms", " kilograms");
//     document.write(userWeightKg)
// }

// else {
//     userWeightKg = userWeight + " kilograms" 
//     document.write(userWeightKg)
// }

//<!--==============================Q10=================================-->
//<!--Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
//<!--==============================Q10=================================-->

// var randomNum = Math.random(); 

// var limit = (randomNum * 10) + 1; 

// var floor = Math.floor(limit);

// var userNum = prompt("Enter a number between 1 and 10");

// if(userNum <= 10) {
//     if(userNum == floor) {
//         alert("Correct Answer!")
//     }
//     else{
//         alert("Try again!")
//     }
// }
// else{
//     alert("Plz enter number between 1 and 10")
// }

//<!--==============================Q11=================================-->
//<!--Write a program that displays current date and time in your browser. 
//<!--==============================Q11=================================-->

// var date = new Date();

// document.write(date);

//<!--==============================Q12=================================-->
//<!--Write a program that alerts the current month in words. For example December
//<!--==============================Q12=================================-->

// var  date = new Date();

// var month = date.getMonth();

// var months = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

// var monthWord = months[month];

// document.write("Current month: " + monthWord + "<br />");

//<!--==============================Q13=================================-->
//<!--Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
//<!--==============================Q13=================================-->

// var  date = new Date();

// var day = date.getDay()

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var dayWord = days[day];

// document.write("Current month: " + dayWord + "<br />");

//<!--==============================Q14=================================-->
//<!--Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
//<!--==============================Q14=================================-->

// var  date = new Date();

// var day = date.getDay()

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var dayWord = days[day];

// if(dayWord === "sat" || dayWord === "Sun") {
//     alert("It's Fun Day");
// }
// else{
//     alert("It's not a fun day");
// };

//<!--==============================Q15=================================-->
//<!--Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”
//<!--==============================Q15=================================-->

// var date = new Date();

// var onlyDate = date.getDate();

// if(onlyDate < 16) {
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last fifteen days of the month");
// };

//<!--==============================Q16=================================-->
//<!--Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
//<!--==============================Q16=================================-->

// var date = new Date()

// var millisecond = date.getTime();

// var minutes = date.getTime() * 60;

// document.write("Current Date: " + date + "<br />Elapsed milliseconds since January 1, 1970: " + millisecond + "<br />Elapsed minutes since January 1, 1970: " + minutes + "<br />");

//<!--==============================Q17=================================-->
//<!--Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
//<!--==============================Q17=================================-->

// var date = new Date();

// var hour = date.getHours();

// console.log(hour)

// if(hour >= 0 && hour <= 12) {
//     document.write("It's AM")
// }

// else{
//     document.write("It's PM")
// };

//<!--==============================Q18=================================-->
//<!--Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate
//<!--==============================Q18=================================-->

// var laterDate = new Date("Dec 31, 2020");

// document.write("Later Date: " + laterDate);

//<!--==============================Q19=================================-->
//<!--Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?  Note: 1st Ramadan was on June 18, 2015
//<!--==============================Q19=================================-->

// var date = new Date().getTime();

// var ramzanDate = new Date("April 26, 2019").getTime()

// var diff =date - ramzanDate

// var days = Math.floor(diff / (1000 * 60 * 60 * 24));

// document.write(days + " days have passed since 1st Ramadan, 2019");

//<!--==============================Q20=================================-->
//<!--Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
//<!--==============================Q20=================================-->

// var date = new Date()

// var dateMillisec = date.getTime()

// var begiYear = new Date("January 01, 2020").getTime()

// var diff = dateMillisec - begiYear

// var days = Math.floor(diff / (1000 * 60));

// document.write("On reference date " + date + "<br />" +  days + " seconds had passed since since beginning 2020");

//<!--==============================Q21=================================-->
//<!--Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser
//<!--==============================Q21=================================-->

// var date = new Date();

// var back1 = date - 1 

// var back1date = new Date()

// back1date.setHours(hour - 1);

// document.write("current Date: " + date + "<br />1 hour ago, it was " + back1date)

//<!--==============================Q22=================================-->
//<!--Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
//<!--==============================Q22=================================-->

// var date = new Date();

// var year = date.getFullYear()

// var backYear = new Date()

// backYear.setFullYear(year - 100);

// document.write("current date: " + date + "<br />100 year back, it was " + backYear + "<br />");

//<!--==============================Q23=================================-->
//<!--Write a program to ask the user about his age. Calculate and show his birth year in your browser
//<!--==============================Q23=================================-->

// var userAge = prompt("Enter here your age"); 

// var date = new Date();

// var curYear = date.getFullYear()

// date.setFullYear(curYear - userAge);

// var birthYear = date.getFullYear();

// document.write("Your age is " + userAge + "<br />Your birth year is " + birthYear);

//<!--==============================Q24=================================-->
//<!--Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: 
//<!--a. Customer Name 
//<!--b. Current Month 
//<!--c. Number of units 
//<!--d. Charges per unit 
//<!--e. Net Amount Payable (within Due Date) 
//<!--f. Late Payment Surcharge 
//<!--g. Gross Amount Payable (after Due Date) 
//<!--Where, 
//<!--Net Amount Payable (within Due Date) = Number of units * Charges per unit 
//<!--& 
//<!--Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
//<!--==============================Q24=================================-->

// var cusName = prompt("Enter Here Your name");

// var date = new Date();

// var month = date.getMonth()

// var months = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

// var monthWord = months[month];

// var numOfUnits = prompt("Enter Here number of units");

// var chPerUnit = 14;

// var netAmount = chPerUnit * numOfUnits;

// var lateChar = 500;

// var grossAmount = netAmount + lateChar

// document.write(`
// <h1>K-Electric Bill</h1>
// Customer Name: <b>${cusName}</b><br />
// Month: <b>${monthWord}</b><br />
// Number os units: <b>${numOfUnits}</b><br />
// Charges per Unit: <b>${chPerUnit}</b><br /><br />
// Net Amount Payable (within Due Date): <b>${netAmount}</b><br />
// Late payment surcharges: <b>${lateChar}</b><br />
// Gross Amount Payable (after Due Date): <b>${grossAmount}</b><br />
// `)


