//<!--==============================Q1=================================-->
//<!--Write a program that takes input a name from user & greet the user like this       
//<!--==============================Q1=================================-->

// var userNmae = prompt("Please Enter your Name");

// alert("Hi, " + userNmae);

//<!--==============================Q2=================================-->
//<!--Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default     
//<!--==============================Q2=================================-->

// var userNumber = prompt("Enter a number to print its multipilication table");

// document.write("Multipilication table of " + userNumber + "<br />");

// for(var i = 1; i <= 10; i++) {
//     document.write(userNumber + " * " + i + " = " + userNumber * i + "<br />")
// };

//<!--==============================Q3=================================-->
//<!--Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”       
//<!--==============================Q3=================================-->

// var userCity = prompt("please Enter Your City");

// if(userCity === "Karachi") {
//     alert("Welcome to city of lights")
// }

// else{
//     alert("Welcome to city of " + userCity)
// };

//<!--==============================Q4=================================-->
//<!--Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am    
//<!--==============================Q4=================================-->

// var userGender = prompt("Please Enter Your Gender");

// if (userGender === "Male") {
//     alert("Good Morning Sir")
// }

// else if(userGender === "FeMale") {
//     alert("Good Morning Ma'am")
// }

// else {
//     alert("Please enter Gender")
// };

//<!--==============================Q5=================================-->
//<!--Write a program to take input color of road traffic signal from the user & show the message according to this table:        
//<!--==============================Q5=================================-->

// var userRoadColour = prompt("Please Enter Colour Of Road Traffic Signal");

// if (userRoadColour === "red") {
//     document.write("<table><tr><th>Signal color</th><th>Message</th></tr><tr><td>" + userRoadColour + "</td><td>Vehicles must stop</td></tr></table>")
// }
// else if(userRoadColour === "yellow") {
//     document.write("<table><tr><th>Signal color</th><th>Message</th></tr><tr><td>" + userRoadColour + "</td><td>Vehicles should get ready to move</td></tr></table>")
// }
// else if(userRoadColour === "green") {
//     document.write("<table><tr><th>Signal color</th><th>Message</th></tr><tr><td>" + userRoadColour + "</td><td>Vehicles can move now</td></tr></table>")
// }
// else{
//     alert("Please Enter Right Road Traffic Signal Colour")
// };

//<!--==============================Q6=================================-->
//<!--Write a program to take input max age & current age from user. If the current age is less than or equal to max age, show the message “You are welcome”
//<!--==============================Q6=================================-->

// var userCuAge = prompt("Enter You Age");

// var userMaxAge = prompt("Enter Your Max Age");

// if(userCuAge <= userMaxAge) {
//     alert("Your Are Welcome")
// }
// else{
//     alert("Sorry")
// };

//<!--==============================Q7=================================-->
//<!--Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”     
//<!--==============================Q7=================================-->

// var userCarFule = prompt("Please Enter Current Fule amount in litre");

// if(userCarFule < 0.25 ) {
//     alert("Please refill the fule in your car")
// }
// else{
//     alert("your fule is greater than 0.25")
// }

//<!--==============================Q8=================================-->
//<!--Run this script, & check whether alert message would be displayed or not. Record the outputs.      
//<!--==============================Q8=================================-->

// var a = 4;

// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// var b = 82;

// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// var c = 12;

// if (c++ === 13) {
//   alert("condition 1 is true");
// }

// if (c === 13) {
//   alert("condition 2 is true");
// }

// if (++c < 14) {
//   alert("condition 3 is true");
// }

// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;

// var laborCost = 2000;

// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }

// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

//<!--==============================Q9=================================-->
//<!--Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:     
//<!--Show the total marks, marks obtained, percentage, grade & remarks like: 
//<!--==============================Q9=================================-->

// var total = 300

// var userEngMarks = Number(prompt("Enter your marks of english"));

// var userUrduMarks = Number(prompt("Enter your marks of Urdu"));

// var userMathMarks = Number(prompt("Enter your Marks of Math"));

// var totalObtained = userEngMarks + userMathMarks + userUrduMarks

// var percentage = (totalObtained / total) * 100

// percentage = percentage.toFixed(2)

// if(percentage >= 80) {
//     console.log("milad")
//     document.write(`
//     <table>
//     <tr>
//         <th>Total Marks</th>
//         <th>Marks Obtained</th>
//         <th>Percentage %</th>
//         <th>Grade</th>
//         <th>Remarks</th>
//     </tr>
//     <tr>
//         <td>${total}</td>
//         <td>${totalObtained}</td>
//         <td>${percentage}</td>
//         <td>A-one</td>
//         <td>Excellent</td>
//     </tr>
//     </table>`)
// }

// else if(percentage >= 70) {
//     document.write(`
//     <table>
//     <tr>
//         <th>Percentage %</th>
//         <th>Grade</th>
//         <th>Remarks</th>
//     </tr>
//     <tr>
//         <td>${percentage}</td>
//         <td>A</td>
//         <td>Good</td>
//     </tr>
//     </table>`)
// }

// else if(percentage >= 60) {
//     document.write(`
//     <table>
//     <tr>
//         <th>Percentage %</th>
//         <th>Grade</th>
//         <th>Remarks</th>
//     </tr>
//     <tr>
//         <td>${percentage}</td>
//         <td>B</td>
//         <td>You need to Improve</td>
//     </tr>
//     </table>`)
// }

// else if(percentage >= 60) {
//     document.write(`
//     <table>
//     <tr>
//         <th>Percentage %</th>
//         <th>Grade</th>
//         <th>Remarks</th>
//     </tr>
//     <tr>
//         <td>${percentage}</td>
//         <td>Fail</td>
//         <td>Sorry</td>
//     </tr>
//     </table>`)
// }

//<!--==============================Q10=================================-->
//<!--Write a program to implement checkout process of a shopping cart system for an e-commerce website. Take input from users, the following:  
//<!--a. Name of item1  
//<!--b. Name of item2 
//<!--c. Price of item 1 
//<!--d. Price of item 2 
//<!--e. Ordered quantity of item 1  
//<!--f. Ordered Quantity of item 2 
//<!--g. Shipping charges 
//<!--Compute the total cost. If the total cost is above 2000 PKR , offer them 10% discount & show the receipt in your browser.  
//<!--==============================Q10=================================-->

// var userItem1 = prompt("Enter name Of Item1");

// var priceItem1 = Number(prompt("Enter A price of Item1"));

// var quantityItem1 = Number(prompt("Enter Quantity of Item1"));

// var userItem2 = prompt("Enter name Of Item2");

// var priceItem2 = Number(prompt("Enter A price of Item2"));

// var quantityItem2 = Number(prompt("Enter Quantity of Item2"));

// var shippingCharg = Number(prompt("Enter The amount of shipping charges"));

// var totalItem1 = priceItem1 * quantityItem1

// var totalItem2 = priceItem2 * quantityItem2

// var total = totalItem1 + totalItem2 + shippingCharg

// document.write(`
// <h1>Shopping Cart</h1>
// <br />
// <br />
// <p>Price of ${userItem1} is${priceItem1}</p>
// <p>Quantity of ${userItem1} is${quantityItem1}</p>
// <p>Price of ${userItem2} is${priceItem2}</p>
// <p>Quantity of ${userItem2} is${quantityItem2}</p>
// <bt />
// <p>Shipping Charges ${shippingCharg}</p>
// <br />
// <p>Total cost of your order is ${total} PKR</p>
// `)

// if (total > 2000) {
//     var discount = (total * 10)/ 100
//     var discountedPrice = total - discount
//     document.write("Discounted Price is " + discountedPrice + "PKR")
// }

//<!--==============================Q11=================================-->
//<!--Guess game:  
//<!--Store a secret number (ranging from 1 to 10) in a variable. 
//<!--Prompt user to guess the secret number. 
//<!--a. If user guesses the same number, show  “Bingo! Correct answer”.  
//<!--b. If the guessed number +1 is the secret number, show  “Close enough to the correct answer”.
//<!--==============================Q11=================================-->

// var secretNum = Math.random();

// console.log(secretNum)

// secretNum = secretNum * 10;

// console.log(secretNum)

// secretNum = secretNum +1

// console.log(secretNum)

// secretNum = Math.floor(secretNum);

// console.log(secretNum)

// var userNum = prompt("Enter Here any number from 1 to 10")

// if (userNum <= 10 ) {
//     if(userNum == secretNum) {
//         alert("Bingo! Correct Answer")
//     }
//     else if(secretNum + 1 == userNum) {
//         console.log(secretNum)

//         alert("Close enough to the correct answer")
//     }
//     else if(secretNum - 1 == userNum) {
//         console.log(secretNum)

//         alert("Close enough to the correct answer")
//     }
//     else{
//         alert("Sorry Try Again")
//     }
// }
// else{
//     alert("Please Enter Number Between 1 to 10")
// }

//<!--==============================Q12=================================-->
//<!--Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
//<!--==============================Q12=================================-->

// var userNumber = prompt("Enter Here Number");

// var mod = userNumber % 3

// if (mod == 0){
//     alert("It is divisible by 3")
// }

// else{
//     alert("It is not divisible by 3")
// }

//<!--==============================Q13=================================-->
//<!--Names & Total scores of two teams are taken as input. Write a program that shows which team has won the game or show if there is a tie. (Team A or Team B)      
//<!--==============================Q12=================================-->

// var nameOfTeamA = "Tigers"

// var nameOfTeamB = "Qalandars"

// var scoureTeamA = 240

// var scoureTeamB = 200

// if (scoureTeamA > scoureTeamB) {
//     alert(nameOfTeamA + " have won the game")
// }
// else {
//     alert(nameOfTeamB + " have won the game")
// }

//<!--==============================Q14=================================-->
//<!--Take a string, a number and a Boolean in three variables. Write a program that checks the type of variables & responds accordingly. Like :       
//<!--==============================Q14=================================-->

// var string = "Pakistan";

// var number = 10;

// var boolean = False;

// alert(string + " is a " + typeof string);

// alert(number + " is a " + typeof number);

// alert(boolean + " is a " + typeof boolean);

//<!--==============================Q15=================================-->
//<!--Write a program that checks whether the given input is an even number or an odd number.      
//<!--==============================Q15=================================-->

// var userNum = prompt("Enter Here Any Number");

// var check = userNum % 2

// if (check == 0) {
//     alert("The number is even")
// }
// else {
//     alert("The number is odd")
// }

//<!--==============================Q16=================================-->
//<!--Weather in Karachi nowadays is too cool, write a program that takes temperature as input and shows a message based on following criteria 
//<!--a. T > 40 then “It is too hot outside.” 
//<!--b. T > 30 then “The Weather today is Normal.” 
//<!--c. T > 20 then “Today’s Weather is cool.” 
//<!--d. T > 10 then “OMG! Today’s weather is so Cool.”     
//<!--==============================Q6=================================-->

// userTemp = prompt("Enter the temprature");

// if (userTemp > 40) {
//     alert("It's too hot outside");
// }

// else if(userTemp > 30) {
//     alert("The Weather today is Normal");
// }

// else if(userTemp > 20) {
//     alert("Today's Weather is cool");
// }

// else if(userTemp > 10) {
//     alert("OMG! Today's Weather is so Cool");
// }

// else{
//     alert("plz enter correct value")
// }

//<!--==============================Q17=================================-->
//<!--Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
//<!--a. First number 
//<!--b. Second number 
//<!--c. Operation (+, -, *, /, %) 
//<!--Compute & show the calculated result to user.
//<!--==============================Q17=================================-->

// var userFirstNum = Number(prompt("Enter First Number"))

// var opreator = prompt("Enter Here Opreator");

// var userSecondNum = Number(prompt("Enter Second Number"))

// document.write("Your Answer of <br />")

// if (opreator === "+") {

//     var add = userFirstNum + userSecondNum;

//     document.write(userFirstNum + opreator + userSecondNum + "=" + add);
// }

// else if (opreator === "-") {

//     var subtract = userFirstNum - userSecondNum;

//     document.write(userFirstNum + opreator + userSecondNum + "=" + subtract);
// }

// else if (opreator === "*") {

//     var multipily = userFirstNum * userSecondNum;

//     document.write(userFirstNum + opreator + userSecondNum + "=" + multipily);
// }

// else if (opreator === "/") {

//     var divide = userFirstNum / userSecondNum;

//     document.write(userFirstNum + opreator + userSecondNum + "=" + divide);
// }

// else if (opreator === "%") {

//     var modulud = userFirstNum % userSecondNum;

//     document.write(userFirstNum + opreator + userSecondNum + "=" + modulud);
// }

// else{
//     alert("please enter write opreator")
// }

//<!--==============================Q18=================================-->
//<!--Write a program that takes user input day name. If the day is Monday, Tuesday, Wednesday, Thursday or Friday, then show “It’s a week day”. If the day is Saturday then show “It’s weekend”. If the day is Sunday then show “Yay! It’s a holiday”
//<!--==============================Q18=================================-->

// var userDay = prompt("Enter Here Day");

// var firstChar = userDay.slice(0, 1)

// firstChar = firstChar.toUpperCase()

// var othChar = userDay.slice(1)

// othChar = othChar.toLowerCase()

// userDay = firstChar + othChar

// if (userDay === "Monday" || userDay === "Tuesday" || userDay === "Wednesday" || userDay ===  "Thursday" || userDay ===  "Friday") {
//     alert("It's a week day");
// }

// else if (userDay === "Saturday") {
//     alert("It's a weekend");
// }

// else if (userDay === "Sunday") {
//     alert("Yay! It's a holiday");
// }

// else{
//     alert("Please enter correct day");
// }

//<!--==============================Q19=================================-->
//<!--Write a program that takes input user’s score, if it’s greater than 50, say “You are passed”. Otherwise, show “Try again!”       
//<!--==============================Q19=================================-->

// var userScore = prompt("Enter Your score");

// if(userScore > 50) {
//     alert("You are passed")
// }

// else{
//     alert("Try again!")
// }

//<!--==============================Q20=================================-->
//<!--Write a program that: 
//<!--a. takes 2 numbers. 
//<!--b. tells whichever number is the greater (higher) number. 
//<!--c. tells if they are equal 
//<!--Show the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").      
//<!--==============================Q20=================================-->

// var userNum1 = prompt("Enter First Number");

// var userNum2 = prompt("Enter Second Number");

// if (userNum1 > userNum2) {
//     alert("The greater number of " + userNum1 + " and " + userNum2 + " is" + userNum1);
// }

// if (userNum1 < userNum2) {
//     alert("The greater number of " + userNum1 + " and " + userNum2 + " is" + userNum2);
// }

// else if (userNum1 === userNum2) {
//     alert("The both numbers " + userNum1 + " and " + userNum2 + " is " + "equal");
// }

//<!--==============================Q21=================================-->
//<!--The Translator:  
//<!--Write a program that: 
//<!--a. takes 1 input, a language code (e.g. "es", "de", "en") 
//<!--b. tells "Hello, World" for the given language, for atleast 3 languages. 
//<!--It should default to returning English. 
//<!--(Hint: use translate.google.com to check the translation of hello world in different languages)     
//<!--==============================Q21=================================-->

// var userLangCode = prompt("Enter Language code");

// if (userLangCode === "en") {
//     alert("Hello, World");
// }

// else if(userLangCode === "ur") {
//     alert("ہیلو ، ورلڈ")
// }

// else if(userLangCode === "ar") {
//     alert("مرحبا بالعالم")
// }
// else{
//     alert("PLease enter correct language code")
// }

//<!--==============================Q22=================================-->
//<!--Write a program to take input a number & tell whether it’s a positive or negative number
//<!--==============================Q22=================================-->

// var userNumber = prompt("PLease Enter a Number");

// if (userNumber.slice(0,1) === "-") {
//     alert("It's negative number");
// }

// else{
//     alert("It's Positive Number");
// }

//<!--==============================Q23=================================-->
//<!--The Pluralizer: Write a program that: 
//<!--a. takes 2 inputs, a noun and a number. 
//<!--b. tells the number and pluralized form, like "5 cats" or "1 dog". 
//<!--Run the program for a few different inputs and show the result to make sure it works       
//<!--==============================Q23=================================-->

// var number = prompt("Enter a number");

// var noun = prompt("Enter A noun");

// var concatinate = number + noun;

// alert(concatinate);