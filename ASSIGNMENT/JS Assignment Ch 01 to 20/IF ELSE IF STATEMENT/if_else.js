//<!--==============================Q1=================================-->
//<!--Write a program to check whether the given input number is divisible by 3 or else show a message “Number is not divisible by 3”.
//<!--==============================Q1=================================-->

// var userNum = prompt("Enter Any Number");

// var checkBy3 = userNum % 3

// if (checkBy3 === 0){
//     alert("It is divisible by 3");
// }
// else{
//     alert("It's not divisible by 3");
// };

//<!--==============================Q2=================================-->
//<!--Write a program that checks whether the given input is an even number or an odd number
//<!--==============================Q2=================================-->

// var checkEven = userNum % 2;

// if(checkEven === 0) {
//     alert("It's even number");
// }
// else{
//     alert("It's odd number");
// };

//<!--==============================Q3=================================-->
//<!--Write an if/else statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young".
//<!--==============================Q3=================================-->

// var userAge = prompt("Enter Your Age");

// if (userAge > 18) {
//     alert("Old enough");
// }
// else{
//     alert("Too young");
// };

//<!--==============================Q4=================================-->
//<!--Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output.
//<!--==============================Q4=================================-->

// var userName = prompt("Enter Here Your Name");

// var myName = "Milad"

// if(userName === myName) {
//     alert("Its amaizing our names same");
// }

//<!--==============================Q5=================================-->
//<!--Write a program to check whether the given input number is divisible by 3 or not by using Switch Case statements. Show a message “Number is not divisible by 3” or “Number is divisible by 3”.
//<!--==============================Q5=================================-->

// var userNum = prompt("Enter any Number");

// var checkBy3 = userNum % 3;

// switch(checkBy3) {
//     case 0 :
//         alert("It's divisible by 3");
//         break;
//     default :
//     alert("It's not divisible by 3")
// }

//<!--==============================Q6=================================-->
//<!--Write a program that takes a character(number or string) in a
//<!--variable & checks whether the given input is a number,
//<!--uppercase letter or lower case letter. (Hint: ASCII codes:-
//<!--A=65, Z=90, a=97, z=122)
//<!--==============================Q6=================================-->

//<!--========================Leave In Choice==========================-->

//<!--==============================Q7=================================-->
//<!--Write a program to create a calculator for +, -, *, /, % using switch case statements. (number1, number2 and operator will be input)
//<!--==============================Q7=================================-->

// var num1 = Number(prompt("Enter first number"));

// var opreator = prompt("Enter Here opreator");

// var num2 = Number(prompt("Enter second number"));

// switch(opreator) {
//     case "+" :
//         var add = num1 + num2;
//         document.write(num1 + " " + opreator + " " + num2 + " = " + add  );
//         break;

//     case "-" :
//         var sub = num1 - num2;
//         document.write(num1 + " " + opreator + " " + num2 + " = " + sub  );
//         break;

//     case "*" :
//         var multiply = num1 * num2;
//         document.write(num1 + " " + opreator + " " + num2 + " = " + multiply  );
//         break;

//     case "/" :
//         var divide = num1 / num2;
//         document.write(num1 + " " + opreator + " " + num2 + " = " + divide  );
//         break;

//     case "%" :
//         var mod = num1 % num2;
//         document.write(num1 + " " + opreator + " " + num2 + " = " + mod  );
//         break;

//     default :
//         alert("Please enter correct opreator")
// }

//<!--==============================Q8=================================-->
//<!--Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
//<!--==============================Q8=================================-->

// var userTime = prompt("Enter Time Here In 24 Hours Format");

// var Char2 = userTime.slice(0, 2);

// var last2 = userTime.slice(3);

// userTime = Char2 + last2;

// if (userTime >= 0000 && userTime < 1200) {
//     alert("Good Morning")
// }

// else if (userTime >= 1200 && userTime < 1700) {
//     alert("Good afternoon");
// }

// else if (userTime >= 1700 && userTime < 2100) {
//     alert("Good evening");
// }
// else if (userTime >= 2100 && userTime <= 2359) {
//     alert("Good night");
// }
// else{
//     alert("Please enter time in correct format");
// }

//<!--==============================Q9=================================-->
//<!--Write a program that takes a calendar year in YYYY format in a variable. Check & notify the user whether it is a leap year or not
//<!--==============================Q9=================================-->

// var userYear = prompt("Enter Year in YYYY Format");

// var fixedYear = 2020;

// var diff = fixedYear - userYear;

// if (diff === 3 || diff === -3) {
//     alert("It's not a leep year")

// }
// else{
//     alert("Its a leep Year")
// }

//<!--==============================Q10=================================-->
//<!--Write a program that
//<!--a. Store correct password in a JS variable.
//<!--b. Asks user to enter his/her password
//<!--c. Validate the two passwords:
//<!--    i. Check if user has entered password. If not, then give message “ Please enter your password”
//<!--    ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise
//<!--==============================Q10=================================-->

// var pass = "javascript";

// var userPas = prompt("Enter A password");

// if (userPas === pass) {
//     alert("Corret!")
// }
// else{
//     alert("Incorrect")
// }

//<!--==============================Q11=================================-->
//<!--Write a program that adds an else statement to the following script to display “You are not Fahad”
//<!--var firstName = "Ali";
//<!--if (firstName === "Fahad") {
//<!--    document.write("Hello Fahad!");
//<!--}
//<!--==============================Q11=================================-->

// var firstName = "Ali";

// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// }

// else{
//     alert("You are not Fahad")
// }

//<!--==============================Q12=================================-->
//<!--This if/else statement does not work. Try to fix it:
//<!--var greeting;
//<!--var hour = 13;
//<!--if (hour < 18) {
//<!--greeting = "Good day";
//<!--else
//<!--greeting = "Good evening";
//<!--==============================Q12=================================-->

// var greeting;

// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// console.log(greeting);

//<!--==============================Q13=================================-->
//<!--Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
//<!--==============================Q13=================================-->

// var int1 = parseInt(prompt("Enter here first integer"));

// var int2 = parseInt(prompt("Enter here second integer"))

// if(int1 > int2) {
//     alert(int1 + " is greater than " + int2);
// }

// else if(int2 > int1) {
//     alert(int2 + " is greater than " + int1);
// }

// else if(int1 === int2) {
//     alert(int1 + " = " + int2);
// }

// else{
//     alert("please enter correct number");
// }
//<!--==============================Q14=================================-->
//<!--Write a program that takes input a number from user & state whether the number is positive, negative or zero.
//<!--==============================Q14=================================-->

// var userNum = prompt("Enter Here Any Number");

// var firstChar = userNum.slice(0,1)

// console.log(userNum)

// console.log(firstChar)

// if(firstChar === "-") {
//     alert("It's a negative number")
// }
// else if(firstChar != "-" && userNum != 0) {
//     alert("It's a positive number")
// }
// else if(firstChar == 0) {
//     alert("This value is zero");
// }

// else{
//     alert("please enter tight number")
// }

//<!--==============================Q15=================================-->
//<!--Ask the user what the current hour is. If the hour is between 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If the hour is between 5 and 8 p.m., tell the user, "It's dinner time." For any other hours, tell the user, "Sorry, you'll have to wait, or go get a snack." (Hint: Store the hour in 24 hours clock format i.e. 14 for 2pm , 15 for 3pm)
//<!--==============================Q15=================================-->

// var userHour = prompt("Enter Current Hour");

// if(userHour >= 6 && userHour <= 9) {
//     alert("Breakfast is served");
// }

// else if(userHour >= 11 && userHour <= 13) {
//     alert("Time for lunch");
// }

// else if(userHour >= 17 && userHour <= 20) {
//     alert("Time for dinner");
// }

// else{
//     alert("Sorry, you'll have to wait, or go get a snack")
// }

//<!--==============================Q16=================================-->
//<!--Write a program that stores value in a variable & tell whether the type of that variable is a "number", "string", "boolean" or “undefined”
//<!--==============================Q16=================================-->

// var num = 10;

// var char = "Raza";

// var boolean = true;

// var undef;

// console.log(num)

// console.log(char)

// console.log(boolean)

// console.log(undef)

//<!--==============================Q17=================================-->
//<!--Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
//<!--==============================Q17=================================-->

// var userVowel = prompt("Enter here only one Character");

// if(userVowel === "a") {
//     alert("It's a vowel");
// }

// else if(userVowel === "e") {
//     alert("It's a vowel");
// }

// else if(userVowel === "i") {
//     alert("It's a vowel");
// }

// else if(userVowel === "o") {
//     alert("It's a vowel");
// }

// else if(userVowel === "u") {
//     alert("It's a vowel");
// }

// else if(userVowel.length > 1) {
//     alert("Please write only one character")
// }

// else{
//     alert("It's not a vowel");
// }

//<!--==============================Q18=================================-->
//<!--Choose the correct comparison operator to display "true", when: 10 is NOT equal to 8
//<!--==============================Q18=================================-->

// var num = 10;

// if(num != 8 ) {
//     alert(num + " is not equal to 8")
// }
// else{
//     alert(num + "is equal to 8");
// }

//<!--==============================Q19=================================-->
//<!--Use a switch statement to rewrite the following JavaScript code. Prompt the user for the number of a month rather than setting it to 8:
//<!--==============================Q19=================================-->

// var month = 8;

// switch (month) {
//     case 1 :
//         alert("January");
//         break;
//     case 2 :
//         alert("February");
//         break;
//     case 3 :
//         alert("March");
//         break;
//     case 4 :
//         alert("April");
//         break;
//     case 5 :
//         alert("May");
//         break;
//     case 6 :
//         alert("June");
//         break;
//     case 7 :
//         alert("July");
//         break;
//     case 8 :
//         alert("August");
//         break;
//     case 9 :
//         alert("September");
//         break;
//     case 10 :
//         alert("October");
//         break;
//     case 11 :
//         alert("November");
//         break;
//     case 12 :
//         alert("December");
//         break;
//     default :
//         alert("Invalid Month")

// }

//<!--==============================Q20=================================-->
//<!--Use a conditional (ternary) operator for this exercise: If the variable age is a value below 18, the value of the variable voteable should be "Too young",  otherwise the value of voteable should be "Old enough"
//<!--==============================Q20=================================-->

// var age = prompt("Enter Here Your age");

// var voteble;

// if(age < 18) {
//     voteble = "Too Young";
//     alert(voteble)
// }

// else {
//     voteble = "Old enought";
//     alert(voteble)
// };
