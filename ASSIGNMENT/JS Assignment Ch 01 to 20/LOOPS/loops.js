//<!--==============================Q1=================================-->
//<!--Write a program to display the message “Hello World” 5 times in your browser using for loop.
//<!--==============================Q1=================================-->

// for(var i = 0; i < 5; i++) {
//     document.write("Hello World <br />")
// }

//<!--==============================Q2=================================-->
//<!--Write a program to print numeric counting from 1 to 10.
//<!--==============================Q2=================================-->

// for(var i = 1; i <= 10; i++) {
//     document.write(i + "<br />")
// }

//<!--==============================Q3=================================-->
//<!--Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
//<!--==============================Q3=================================-->

// var userTab = prompt("Enter Here any number to make his table");

// var multiLength = prompt("Enter length of multipilication table");

// for (var i = 1; i <= multiLength; ++i) {
//     document.write(userTab + " * " + i + " = " + userTab * i + "<br />")
// }

//<!--==============================Q4=================================-->
//<!--You have an array 
//<!--A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] 
//<!--Write each element on new line with the help of for loop
//<!--==============================Q4=================================-->

// var comArray = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for(var i =0; i < comArray.length; i++){
//     document.write(comArray[i] + "<br />")
// }

//<!--==============================Q5=================================-->
//<!--Write a program to print items of the following array using for loop: 
//<!--fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
//<!--==============================Q5=================================-->

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br />")
// }

// for(var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br />")
// }

//<!--==============================Q6=================================-->
//<!--Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user. 
//<!--==============================Q6=================================-->

// var userarrayN = prompt("Enter here how many items you add in array");

// var userarray = []

// for (var i = 0; i < userarrayN; i++ ) {
//     var userarrayItems= prompt("Enter value for index" + i);

//     userarray.push(userarrayItems);
// }

// document.write("Numbers of items: " + userarray.length + "<br />Items:<br /><br />");

// for(var i = 0; i < userarray.length; i++){
//     document.write(userarray[i] + "<br />");
// }

//<!--==============================Q7=================================-->
//<!--Generate the following series in your browser. See example output. 
//<!--a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//<!--b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//<!--c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
//<!--d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
//<!--e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//<!--==============================Q7=================================-->

// document.write("<h3>Counting:</h3>");

// for(var i = 1; i <= 15; i++){
//     document.write(i + " ,");
// };

// document.write("<h3>Reverse counting:</h3>");

// for(var j = 10; j >= 1; j--){
//     document.write(j + " ,");
// };

// document.write("<h3>Even:</h3>");

// for(var g = 0; g <= 20; g += 2) {
//     document.write(g + " ,");
// }

// document.write("<h3>Odd:</h3>");

// for(var k = 1; k <= 20; k += 2) {
//     document.write(k + " ,");
// }

// document.write("<h3>Series:</h3>");

// for(var g = 2; g <= 20; g += 2) {
//     document.write(g + "K, ");
// }

//<!--==============================Q8=================================-->
//<!--You have an array 
//<!--A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//<!--Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
//<!--==============================Q8=================================-->

// var userOrder = prompt("Welcome Raza Bakery. What do you want to order Sir");

// var cakes= ["cake", "apple pie", "cookie", "chips", "patties"];

// var matchFound = false

// for(var i = 0; i < cakes.length; i++) {
//     if(userOrder == cakes[i]) {
//         document.write(cakes[i] + "<b> is available</b> at index " + i + " in our bakery");

//         matchFound = true
//     }
    
// }

// if(matchFound === false){
//     document.write("We are sorry. " + userOrder + " is <b>not available</b> in our bakery");
// }

//<!--==============================Q9=================================-->
//<!--Write a program to identify the largest number in the given array. 
//<!--A = [24, 53, 78, 91, 12] 
//<!--==============================Q9=================================-->

// var numArray = [24, 53, 78, 91, 12];

// document.write("Array Items:" + numArray + "<br />")

// var count = 0;

// for(var i = 0; i < numArray.length; i++) {
//     var num = numArray[i];

//     if(num > count ) {
//         count = num;
//     }
// }

// document.write("The Largest number is: " + count);

//<!--==============================Q10=================================-->
//<!--Write a program to identify the smallest number in the given array.  
//<!--A = [24, 53, 78, 91, 12] 
//<!--==============================Q10=================================-->

// var numArray = [24, 53, 78, 91, 12];

// document.write("Array Items:" + numArray + "<br />")
// var count = numArray[0];

// for(var i = 0; i < numArray.length; i++) {
//     var num = numArray[i];

//     if(num < count ) {
//         count = num;
//     }
// }

// document.write("The Smallest number is: " + count);

//<!--==============================Q11=================================-->
//<!--Write a program to identify the largest & the smallest number in the given array.  
//<!--A = [24, 53, 78, 91, 12]
//<!--==============================Q11=================================-->

// var numArray = [24, 53, 78, 91, 12];

// document.write("Array Items:" + numArray + "<br />")

// var count = numArray[0];

// var count2 = 0;

// for(var i = 0; i < numArray.length; i++) {
//     var num = numArray[i];

//     if(num < count ) {
//         count = num;
//     }
//     if(num > count2) {
//         count2 = num;
//     }
// }

// document.write("The Smallest number is: " + count + "<br />");

// document.write("The Largest number is: " + count2);

//<!--==============================Q12=================================-->
//<!--Write a program to print multiples of 5 ranging 1 to 100
//<!--==============================Q12=================================-->

// for (var i = 5; i <= 100; i = i + 5 ) {
//     document.write(i + ", ")
// }

//<!--==============================Q13=================================-->
//<!--You have given the following arrays: 
//<!--var students = ["Ali", "Sami", "Taha", "Inam"]; 
//<!--var scores  = [58, 73, 89, 90]; 
//<!--Write a program to generate the following HTML table in your browser using JS.
//<!--==============================Q13=================================-->

// var studentNmaes = ["Ali", "Sami", "Taha", "Inam"];

// var studentScores = [58, 73, 89, 90];

// var table = document.getElementById("studenTable")

// for(var i = 0; i < studentNmaes.length; i++) {
//     table.innerHTML += `
//     <tr>
//         <td>${studentNmaes[i]}</td>
//         <td>${studentScores[i]}</td>
//     </tr>
//     `
// }

//<!--==============================Q14=================================-->
//<!--Write a program that prints number from start of the array to desired stop value. Given array: 
//<!--var scores  = [12, 45, 3, 22, 34, 50]; 
//<!--(Hint: take stop value from user) 
//<!--E.g. if user gives 3 as input value print 12, 45, 3 
//<!--if user gives 34 as input value print 12, 45, 3, 22, 34
//<!--==============================Q14=================================-->

// var scores = [12, 45, 3, 22, 34, 50];

// var userNum = prompt("Enter here number");

// var matchFound = false

// for(var i = 0; i < scores.length; i++) {
//     if(scores[i] == userNum) {
//         console.log(scores[i])
//         var selectArray = scores.slice(0, i+1)
//         console.log(selectArray)
//         document.write(selectArray + "<br />")
//         matchFound = true
//     }
    
// }

// if (matchFound === false){
//     console.log(matchFound)
//     document.write(scores)
// }

//<!--==============================Q15=================================-->
//<!--You have an array 
//<!--A = [ [1,2,3] , [4,5,6] , [7,8,9] ] 
//<!--Write each element on new line with the help of nested for loops.
//<!--==============================Q15=================================-->

// var nesArray = [[123], [456], [789] ];

// for(var i = 0; i < nesArray.length;  i++) {
//     for (var j = 0; j < 1 ;j++){
//         document.write(nesArray[i] + "<br />")
//     }
    
// }

//<!--==============================Q16=================================-->
//<!--Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive. 
//<!--==============================Q16=================================-->

// var userNum = prompt("Enter Here any number");

// var empArray = [];

// empArray[0] = userNum;

// for(var i = 0; i < userNum * 2; i++ ) {
//     var sub = empArray[i] - 0.5;
//     empArray[i+1] = sub;
// };

// document.write(empArray)

//<!--==============================Q17=================================-->
//<!--The even/odd reporter 
//<!--Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//<!--==============================Q17=================================-->

// for (var i = 0; i <= 20; i++ ) {
//     if(i % 2 === 0) {
//         document.write(i + " is even <br />");
//     }
//     else{
//         document.write(i + " is odd <br />");
//     };
// }

//<!--==============================Q18=================================-->
//<!--Write a program to calculate the product of the odd integers from 1 to 7.
//<!--==============================Q18=================================-->

// var oddArray = [];

// var update = 1

// for (var i = 0; i <= 7; i++ ) {
//     if(i % 2 !== 0) {
//         var odd = i
//         update = update * odd
//     }
    
// };

// document.write(update);

//<!--==============================Q19=================================-->
//<!--Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7 
//<!--==============================Q19=================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = userIniStr;
// // var stardsp='*';
// for(var i = 0; i < userIniStr; i++ ) {
//     // stardsp=stardsp+'*';
//     for(var j= 0; j < count; j++) {
//         document.write("*")
//     }
//     --count 
//     document.write("<br/>")
    
// }

//<!--==============================Q20=================================-->
//<!--Write a program to create the following patterns in your browser. Take number of lines as an input
//<!--==============================Q20=================================-->

//<!--===============================a==================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = userIniStr;

// for(var i = 0; i < userIniStr; i++ ) {
//     for(var j= 0; j <= count; j++) {
//         document.write("*")
//     }
//     document.write("<br/>")
    
// }

//<!--===============================b==================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = 0;
// // var stardsp='*';
// for(var i = 0; i < userIniStr; i++ ) {
//     for(var j= 0; j <= count; j++) {
//         document.write("*")
//     }
//     ++count 
//     document.write("<br/>")
    
// }

//<!--===============================c==================================-->

// var userIniStr = prompt("Enter here initial number of stars");

// var count = userIniStr;
// // var stardsp='*';
// for(var i = 0; i < userIniStr; i++ ) {
//     // stardsp=stardsp+'*';
//     for(var j= 0; j < count; j++) {
//         document.write("*")
//     }
//     --count 
//     document.write("<br/>")
    
// }