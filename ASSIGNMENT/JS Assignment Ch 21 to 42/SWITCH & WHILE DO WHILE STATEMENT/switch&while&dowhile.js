//<!--==============================Q1=================================-->
//<!--Write a switch statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young".
//<!--==============================Q1=================================-->

// var userAge = Number(prompt("Enter Your Age"));

// switch (userAge > 18) {
//   case true:
//     alert("Old enough");
//     break;
//   case false:
//     alert("Too Young");
//     break;
// }

//<!--==============================Q2=================================-->
//<!--Write a program to check whether the given input number is divisible by 3 or not by using Switch Case statements. Show a message “Number is not divisible by 3” or “Number is divisible by 3”.
//<!--==============================Q2=================================-->

// var userNum = prompt("Enter Any Number");

// var checkBy3 = userNum % 3

// switch (checkBy3) {
//     case 0 :
//         alert("It is divisible by 3");
//         break;
//     default :
//     alert("It's not divisible by 3");
// }

//<!--==============================Q3=================================-->
//<!--Write a program to create a calculator for +, -, *, /, % using switch case statements. (number1, number2 and operator will be input)
//<!--==============================Q3=================================-->

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

//<!--==============================Q4=================================-->
//<!--he getDay() method returns the weekday as a number between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 …). Use the weekday number to calculate weekday name.
//<!--==============================Q4=================================-->

// var day = new Date().getDay();

// switch (day) {
//     case 0 :
//         document.write("Today is: Sunday");
//         break;
//     case 1 :
//         document.write("Today is: Monday");
//         break;
//     case 2 :
//         document.write("Today is: Tuesday");
//         break;
//     case 3 :
//         document.write("Today is: Wednesday");
//         break;
//     case 4 :
//         document.write("Today is: Thursday");
//         break;
//     case 5 :
//         document.write("Today is: Friday");
//         break;
//     case 6 :
//         document.write("Today is: Saturday");
//         break;
// }

//<!--==============================Q5=================================-->
//<!--The getDay() method returns the weekday as a number between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...). If today is neither Saturday (6) nor Sunday (0), write a default message:
//<!--==============================Q5=================================-->

// var day = new Date().getDay();

// switch (day) {
//     case 0 :
//         document.write("Today is: Sunday");
//         break;
//     case 6 :
//         document.write("Today is: Saturday");
//         break;
//     default :
//         document.write("Today is neigther Saturday nor Sunday");
// }

//<!--==============================Q6=================================-->
//<!--Given the following script
//<!--function checkCar() {
//<!--    var text;
//<!--    var favCar = prompt("What is your favorite car?");
//<!--    switch(favCar) {
//<!--        //Add code here
//<!--    }
//<!--    document.write( text);
//<!--} checkCar();
//<!--Finish the switch statement. Add the following cases: BMW, Ford and Peugeot.  Set the value of the variable text to: "German car" for BMW. "American car" for Ford. "French car" for Peugeot.  Also add a default case where the text value is "Unknown car name".
//<!--==============================Q6=================================-->

// function checkCar() {
//     var text;
//     var favCar = prompt("What is your favorite car?");
//     switch(favCar) {
//         case "BMW" :
//             text = "'German car' for BMW"
//             break;
//         case "Ford" :
//             text = "'American car' for Ford"
//             break;
//         case "Peugeot" :
//             text = "'French car' for Peugeot"
//             break;
//         default :
//             text = "Unknown cae name";
//     }

//     document.write( text);
// }
// checkCar();

//<!--==============================Q7=================================-->
//<!--Fix the following switch statement:
//<!--==============================Q7=================================-->

// function checkFruit() {
//     var text;
//     var fruits = prompt("Enter a fruit name");
//     switch(fruits) {
//         case "Banana" :
//             text = "Banana is good!";
//             break;
//         case "Orange" :
//             text = "I am not a fan of orange.";
//             break;
//         case "Apple" :
//             text = "How you like them apples?";
//             break;
//         default :
//             text = "I have never heard of that fruit.";
//     }
//     document.write( text);
// }
// checkFruit()

//<!--==============================Q8=================================-->
//<!--Write a function that displays the marks range against a particular grade. For example, if grade is “B”, then print Marks [ >= 60 and <70 ]
//<!--==============================Q8=================================-->

// var grade = "B"

// function marksRange(grade) {
//   switch (grade) {
//     case "A":
//       range = "Marks [>=70 and <80]";
//       break;
//     case "B":
//       range = "Marks [>=60 and <70]";
//       break;
//     case "C":
//       range = "Marks [>=40 and <60]";
//       break;
//   }
// }

// marksRange("A");
// var range;
// document.write("Your marks range is: " + range);

//<!--==============================Q9=================================-->
//<!--Use a switch statement to rewrite the following JavaScript code. Prompt the user for the number of a month rather than setting it to 8:
//<!--==============================Q9=================================-->

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

//<!--==============================Q10=================================-->
//<!--Use a conditional (ternary) operator
//<!--for this exercise: If the variable age is a value below 18, the value of the variable voteable should be "Too young",  otherwise the value of voteable should be "Old enough".
//<!--==============================Q10=================================-->

// var userAge = Number(prompt("Enter Your Age"));

// switch (userAge > 18) {
//   case true:
//     alert("Old enough");
//     break;
//   case false:
//     alert("Too Young");
//     break;
// }

//<!--==============================Q11=================================-->
//<!--Write a program to display the message “Hello World” 5 times in your browser.
//<!--==============================Q11=================================-->

// var i = 0;
// while (i < 5) {
//     document.write("Hello World <br />")
//     i++
// }

//<!--==============================Q12=================================-->
//<!-- Write a program to print numeric counting from 1 to 10.
//<!--==============================Q12=================================-->

// var i = 1;
// while (i <= 10) {
//     document.write(i + "<br />")
//     i++
// }

//<!--==============================Q13=================================-->
//<!--Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
//<!--==============================Q13=================================-->

// var userTab = prompt("Enter Here any number to make his table");

// var multiLength = prompt("Enter length of multipilication table");

// var i = 1;
// while( i <= multiLength) {
//     document.write(userTab + " * " + i + " = " + userTab * i + "<br />")
//     i++
// }

//<!--==============================Q14=================================-->
//<!--You have an array
//<!--A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
//<!--Write each element on new line with the help of for loop
//<!--==============================Q14=================================-->

// var comArray = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// var i = 0;
// while(i < comArray.length) {
//     document.write(comArray[i] + "<br />");
//     i++
// }

//<!--==============================Q15=================================-->
//<!--Write a program to print items of the following array using for loop:
//<!--fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
//<!--==============================Q15=================================-->

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// var i = 0;
// while(i < fruits.length) {
//     document.write(fruits[i] + "<br />");
//     i++
// }

// var j = 0;
// while(j < fruits.length) {
//     document.write("Element at index " + j + " is " + fruits[j] + "<br />");
//     j++
// }

//<!--==============================Q16=================================-->
//<!--Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.
//<!--==============================Q16=================================-->

// var userarrayN = prompt("Enter here how many items you add in array");

// var userarray = []

// var i = 0;
// while (i < userarrayN) {
//     var userarrayItems= prompt("Enter value for index" + i);
//     i++

//     userarray.push(userarrayItems);
// }

// document.write("Numbers of items: " + userarray.length + "<br />Items:<br /><br />");

// var k = 0;
// while(k < userarray.length) {
//     document.write(userarray[k] + "<br />");
//     k++
// }

//<!--==============================Q17=================================-->
//<!--Generate the following series in your browser. See example output.
//<!--a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//<!--b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//<!--c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//<!--d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//<!--e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//<!--==============================Q17=================================-->

// document.write("<h3>Counting:</h3>");

// var i = 1;
// while (i <= 15) {
//     document.write(i + " ,");
//     i++
// };

// document.write("<h3>Reverse counting:</h3>");

// var j = 10;
// while (j >= 1) {
//     document.write(j + " ,");
//     j--
// };

// document.write("<h3>Even:</h3>");

// var g = 0;
// while (g <= 20) {
//     document.write(g + " ,");
//     g += 2
// }

// document.write("<h3>Odd:</h3>");

// var k = 1;
// while (k <= 20) {
//     document.write(k + " ,");
//     k += 2;
// }

// document.write("<h3>Series:</h3>");

// var l = 2;
// while(l <= 20) {
//     document.write(l + "K, ");
//     l += 2;
// }

//<!--==============================Q18=================================-->
//<!--You have an array
//<!--A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//<!--Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
//<!--==============================Q18=================================-->

// var userOrder = prompt("Welcome Raza Bakery. What do you want to order Sir");

// var cakes= ["cake", "apple pie", "cookie", "chips", "patties"];

// var matchFound = false

// var i = 0;
// while ( i < cakes.length) {
//     if(userOrder == cakes[i]) {
//         document.write(cakes[i] + "<b> is available</b> at index " + i + " in our bakery");
//         matchFound = true
//     }
//     i++;
// }

// if(matchFound === false){
//     document.write("We are sorry. " + userOrder + " is <b>not available</b> in our bakery");
// }

//<!--==============================Q19=================================-->
//<!--You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores  = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your browser using JS.
//<!--==============================Q19=================================-->

// var studentNmaes = ["Ali", "Sami", "Taha", "Inam"];

// var studentScores = [58, 73, 89, 90];

// document.write("<table id='studenTable' border='1'><tr><th>Nmae</th><th>Scores</th></tr></table>")

// var table = document.getElementById("studenTable")

// var i = 0;
// while(i < studentNmaes.length) {
//     table.innerHTML += `
//     <tr>
//         <td>${studentNmaes[i]}</td>
//         <td>${studentScores[i]}</td>
//     </tr>
//     `
//     i++;
// }

//<!--==============================Q20=================================-->
//<!--Write a program that prints number from start of the array to desired stop value. Given array:
//<!--var scores  = [12, 45, 3, 22, 34, 50];
//<!--(Hint: take stop value from user)
//<!--E.g. if user gives 3 as input value print 12, 45, 3
//<!--if user gives 34 as input value print 12, 45, 3, 22, 34
//<!--==============================Q20=================================-->

// var scores = [12, 45, 3, 22, 34, 50];

// var userNum = prompt("Enter here number");

// var matchFound = false

// var i = 0;
// while (i < scores.length) {
//     if(scores[i] == userNum) {
//         console.log(scores[i])
//         var selectArray = scores.slice(0, i+1)
//         console.log(selectArray)
//         document.write(selectArray + "<br />")
//         matchFound = true
//     }
//     i++;

// }

// if (matchFound === false){
//     console.log(matchFound)
//     document.write(scores)
// }

//<!--==============================Q21=================================-->
//<!--You have an array
//<!--A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
//<!--Write each element on new line with the help of nested loops.
//<!--==============================Q21=================================-->

// var nesArray = [[123], [456], [789] ];

// var i = 0;
// while(i < nesArray.length) {
//     var j = 0;
//     while(j < 1 ) {
//         document.write(nesArray[i] + "<br />");
//         j++
//     }
//     i++;
// }

//<!--==============================Q22=================================-->
//<!--Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive.
//<!--==============================Q22=================================-->

// var userNum = prompt("Enter Here any number");

// var empArray = [];

// empArray[0] = userNum;

// var i = 0;
// while(i < userNum * 2) {
//     var sub = empArray[i] - 0.5;
//     empArray[i+1] = " " + sub;
//     i++;
// };

// document.write(empArray)

//<!--==============================Q23=================================-->
//<!--The even/odd reporter
//<!--Write a loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//<!--==============================Q23=================================-->

// var i = 0;
// while(i <= 20) {
//     if(i % 2 === 0) {
//         document.write(i + " is even <br />");
//     }
//     else{
//         document.write(i + " is odd <br />");
//     };
//     i++
// }

//<!--==============================Q24=================================-->
//<!--Write a program to calculate the product of the odd integers from 1 to 7.
//<!--==============================Q24=================================-->

// var oddArray = [];

// var update = 1

// var i = 0;
// while(i <= 7) {
//     if(i % 2 !== 0) {
//         var odd = i
//         update = update * odd
//     };
//     i++

// };

// document.write("The product of the odd integers from 1 to 7 is: " + update);

//<!--==============================Q25=================================-->
//<!--Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7
//<!--==============================Q25=================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = userIniStr;
// var i = 0;
// while(i < userIniStr) {
//     // stardsp=stardsp+'*';
//     var j= 0;
//     while(j < count) {
//         document.write("*")
//         j++
//     }
//     --count
//     document.write("<br/>")
//     i++

// }

//<!--==============================Q26=================================-->
//<!--Write a program to create the following patterns in your browser. Take number of lines as an input.
//<!--==============================Q26=================================-->

//<!--===============================a==================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = userIniStr;

// var i = 0;
// while (i < userIniStr) {
//   var j = 0;
//   while (j <= count) {
//     document.write("*");
//     j++;
//   }
//   document.write("<br/>");
//   i++;
// }

//<!--===============================b==================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = 0;
// var i = 0;
// while (i < userIniStr) {
//   var j = 0;
//   while (j <= count) {
//     document.write("*");
//     j++;
//   }
//   ++count;
//   document.write("<br/>");
//   i++;
// }

//<!--===============================c==================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = userIniStr;
// var i = 0;
// while (i < userIniStr) {
//   var j = 0;
//   while (j < count) {
//     document.write("*");
//     j++;
//   }
//   --count;
//   document.write("<br/>");
//   i++;
// }
