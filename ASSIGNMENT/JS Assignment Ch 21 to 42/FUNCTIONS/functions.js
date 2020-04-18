//<!--==============================Q1=================================-->
//<!--Create a block of code that you can use several times. 
//<!--==============================Q1=================================-->

// function func() {
//     document.write("Q1<br />")
// }
// func()
// func()
// func()

//<!--==============================Q2=================================-->
//<!--Write a function that displays current date & time in your browser.
//<!--==============================Q2=================================-->

// function dateTime() {
//     document.write(new Date);
// }
// dateTime()

//<!--==============================Q3=================================-->
//<!--Write a function that takes first & last name and then it greets the user using his full name.
//<!--==============================Q3=================================-->

// function fullName() {
//     var firstName = prompt("enter your first name");
//     var lastName = prompt("enter your last name");
//     var fullName = firstName + " " + lastName;
//     document.write("Your Full Name is: " + fullName);
// }
// fullName()

//<!--==============================Q4=================================-->
//<!--Write a function that adds two numbers (input by user) and returns the sum of two numbers.
//<!--==============================Q4=================================-->

// function add(num1, num2) {
//     var add = num1 + num2;
//     document.write(num1 + " + " + num2 + " = " + add);

// }

// var usernum1 = Number(prompt("Enter First Number"));

// var usernum2 = Number(prompt("Enter Second Number"));

// add(usernum1, usernum2)

//<!--==============================Q5=================================-->
//<!-- Calculator: 
//<!--Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
//<!--==============================Q5=================================-->

// function add(num1, num2) {
//         var add = num1 + num2;
//         document.write(num1 + " + " + num2 + " = " + add);
// }

// function subtract(num1, num2) {
//         var sub = num1 - num2;
//         document.write(num1 + " - " + num2 + " = " + sub);
// }

// function multiply(num1, num2) {
//         var mult = num1 * num2;
//         document.write(num1 + " * " + num2 + " = " + mult);
// }

// function divide(num1, num2) {
//         var divi = num1 / num2;
//         document.write(num1 + " / " + num2 + " = " + divi);
// }

// function modulus(num1, num2) {
//         var mod = num1 % num2;
//         document.write(num1 + " % " + num2 + " = " + mod);
// }

// var usernum1 = Number(prompt("Enter First Number"));

// var opreator = prompt("Enter Here opreator");

// var usernum2 = Number(prompt("Enter Second Number"));

// if(opreator === "+") {
//     add(usernum1,usernum2)
// }

// else if(opreator === "-") {
//     subtract(usernum1,usernum2)
// }

// else if(opreator === "*") {
//     multiply(usernum1,usernum2)
// }
// else if(opreator === "/") {
//     divide(usernum1,usernum2)
// }
// else if(opreator === "%") {
//     modulus(usernum1,usernum2)
// }
// else{
//     alert("Please enter correct opreator")
// }

//<!--==============================Q6=================================-->
//<!-- Write a function that squares its argument.
//<!--==============================Q6=================================-->

// function square(num) {
//     var squ = num * num;
//     document.write("square of " + num + " is " + squ);
// }

// var userNum = prompt("Enter here for square");

// square(userNum);

//<!--==============================Q7=================================-->
//<!--Write a function that take start and end number as inputs & display counting in your browser.
//<!--==============================Q7=================================-->

// function counting() {
//     var stNum = Number(prompt("Enter Here start number of counting"));

//     var endNum = Number(prompt("Enter here end number of counting"));
//     if(stNum <= endNum) {
//         for(var i = stNum; i <= endNum; i++) {
//             document.write(i + "<br />");
//         }
//     }
//     else{
//         alert("please enter correct number")
//     }
// }
// counting()

//<!--==============================Q8=================================-->
//<!--Write a function that writes variable length arguments list in your browser.
//<!--==============================Q8=================================-->

// function leng(name) {
//   var countLeng = name.length;
//   document.write(countLeng);
// }

// var name = "Milad";

// leng(name);

//<!--==============================Q9=================================-->
//<!--Write a function that accepts any number of arguments & find largest of the number.
//<!--==============================Q9=================================-->

// function find(numArray) {

//   document.write("Array Items:" + numArray + "<br />");

//   var count = 0;

//   for (var i = 0; i < numArray.length; i++) {
//     var num = numArray[i];

//     if (num > count) {
//       count = num;
//     }
//   }

//   document.write("The Largest number is: " + count);
// }

// var numArray = [24, 53, 78, 91, 12];

// find(numArray)

//<!--==============================Q10=================================-->
//<!--Write a function that calculates the area of a rectangle.
//<!--A = width * height
//<!--Pass width and height in following manner:
//<!--Arguments as values
//<!--Arguments as variables
//<!--==============================Q10=================================-->

// function area(width, height) {
//   var formula = width * height;

//   document.write(formula + "<br />");

// }
// var width = 35;

// var height = 40;

// area(width, height);

// area(50, 79);

//<!--==============================Q11=================================-->
//<!--Write a function that receives an array & returns the sorted array.
//<!--==============================Q11=================================-->

// function sorting(array) {
//   array.sort()

//   document.write(array);
// }

// var array = [5, 7, 2, 0, 8, 3];

// sorting(array);

//<!--==============================Q12=================================-->
//<!--Write a function that takes numbers array, sums its elements & returns the sum.
//<!--==============================Q12=================================-->

// function addition(array) {
//   var count = 0;

//   for(var i = 0; i < array.length; i++) {
//     count = count + array[i]
//   }

//   document.write(count)
// };

// var array = [5, 8, 9, 15, 20, 0];

// addition(array);

//<!--==============================Q13=================================-->
//<!--Execute & monitor the output of following JS program:
//<!--var param = function inner() { 
//<!--    return typeof inner; 
//<!--}
//<!--alert(param()); 
//<!--==============================Q13=================================-->

// var param = function inner() {
//   return typeof inner;
// }
// alert(param());

//<!--==============================Q14=================================-->
//<!--Write a function that computes power of a number. E.g. 23 is 8.
//<!--==============================Q14=================================-->
// var userNum = prompt("Enter here any number");

// var userPower = prompt("Enter here power of number");

// function computePower(num,power) {
//   var count = num;

//   document.write(num + "<sup>" + userPower + "</sup> is ")

//   for(var i = 1; i < power; i++) {
//     count = count * num
//   }

//   document.write(count)
// };

// computePower(userNum, userPower);

//<!--==============================Q15=================================-->
//<!--Write a function that simulates a dice & returns a random dice value.
//<!--==============================Q15=================================-->

// function random() {
//   var randomNum = Math.random();

//   var limit = randomNum * 6 + 1;

//   var floor = Math.floor(limit);

//   return floor;
// }
// random();

// var diceValue = random();

// document.write("Dice Value: " + diceValue + "<br />");

//<!--==============================Q16=================================-->
//<!--Write a JavaScript function that reverse a number. 
//<!--Example x = 32243;
//<!--Expected Output : 34223
//<!--==============================Q16=================================-->

// function reversenum(n)
// {
// 	n = n + "";
//     return n.split("").reverse().join("");

// }
// var userNum = prompt("Enter here number")
// document.write("Your Num: " + userNum + "<br />")
// document.write("Reverse Number: " + reversenum(userNum));

//<!--==============================Q17=================================-->
//<!--Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//<!--Example string : 'the quick brown fox' 
//<!--Expected Output : 'The Quick Brown Fox'
//<!--==============================Q17=================================-->

// var str = "the quick brown fox" + "<br />";

// document.write("String: " + str);

// function tittleCase(content) {
//     var strArray = content.split(' ');

//     for (var i = 0; i < strArray.length; i++) {
//         var firstLetter = strArray[i].slice(0, 1).toUpperCase();

//         var othChar = strArray[i].slice(1).toLowerCase()

//         var fullStr = firstLetter + othChar;

//         strArray[i] = fullStr;
//     }

//     var titlCaseStr = strArray.join(' ')

//     document.write("Tittle Case String: " + titlCaseStr)
// }

// tittleCase(str);

//<!--==============================Q18=================================-->
//<!--Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//<!--Example string : 'Web Development Tutorial' 
//<!--Expected Output : 'Development'
//<!--==============================Q18=================================-->

// var str = "Web Development Tutorial";

// function longestWord(content) {
//   var contentArray = content.split(" ");

//   var result = contentArray[0];

//   for (var i = 0; i < contentArray.length; i++) {
//     if (result.length < contentArray[i].length) {
//       result = contentArray[i];
//     }
//   }
//   document.write("String: "  + str + "<br />The Largest Word is: " + result);
// }
// longestWord(str);

//<!--==============================Q19=================================-->
//<!--Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
//<!--Example string : 'The quick brown fox' 
//<!--Expected Output : 5
//<!--==============================Q19=================================-->

// var str = "The quick brown fox";

// function countVowel(content) {
//     var contentArray = content.split("");

//     var vowelArray = []

//     for(var i = 0; i < contentArray.length; i++) {
//         if(contentArray[i] === "a" || contentArray[i] === "e" || contentArray[i] === "i" || contentArray[i] === "o" || contentArray[i] === "u") {
//             vowelArray.push(contentArray[i])
//         }
//     }
//     document.write("String: "  + str + "<br />In this string totel vowels is: " + vowelArray.length);
// }

// countVowel(str)
