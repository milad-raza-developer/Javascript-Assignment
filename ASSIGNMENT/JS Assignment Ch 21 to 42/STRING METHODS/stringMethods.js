//<!--==============================Q1=================================-->
//<!--Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name
//<!--==============================Q1=================================-->

// var firstNmae =  prompt("Enter here your first name");

// var lastNmae =  prompt("Enter here your last name");

// var fullNmae = firstNmae + " "+ lastNmae;

// document.write("Your Full Name is " + fullNmae + "<br />");

//<!--==============================Q2=================================-->
//<!--Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
//<!--==============================Q2=================================-->

// var favMob = prompt("Enter here your favorite mobile phone model");
// var length = favMob.length;
// document.write("My favorite phone is: " + favMob + "<br />Length of string: " + length);

//<!--==============================Q3=================================-->
//<!--Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
//<!--==============================Q3=================================-->

// var string = "Pakistani"

// var find = myCountry.indexOf("n");

// document.write("String: " + myCountry + "<br /> Index of 'n': " + find);

//<!--==============================Q4=================================-->
//<!--Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
//<!--==============================Q4=================================-->

// var str = "Hello World";

// var lastFind = str.lastIndexOf("l");

// document.write("String: " + str + "<br /> Index of 'l': " + lastFind);

//<!--==============================Q5=================================-->
//<!--Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser
//<!--==============================Q5=================================-->

// var string = "Pakistani";

// var index3 = string.slice(3,4);

// document.write("String: " + string + "<br />Character at index 3: " + index3 + "<br />");

//<!--==============================Q6=================================-->
//<!--Repeat Q1 using string concat() method.
//<!--==============================Q6=================================-->

// var firstNmae =  prompt("Enter here your first name");

// var lastNmae =  prompt("Enter here your last name");

// var fullNmae = firstNmae + " "+ lastNmae;

// document.write("Your Full Name is " + fullNmae + "<br />");

//<!--==============================Q7=================================-->
//<!--Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
//<!--==============================Q7=================================-->

// var city = "Hyderabad";

// document.write("City: " + city + "<br />");

// city = city.replace("Hyder", "Islam");

// document.write("After replacement: " + city + "<br />");

//<!--==============================Q8=================================-->
//<!--Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
//<!--var message = “Ali and Sami are best friends. They play cricket and football together.”; 
//<!--==============================Q8=================================-->

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write("message: " + message + "<br />");

// message = message.replace(/and/g, "&")

// document.write("After Replacement: " + message + "<br />");

//<!--==============================Q9=================================-->
//<!--Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
//<!--==============================Q9=================================-->

// var value = "472"

// typeof value

// document.write("Value: " + value + "<br />Type: " + typeof value + "<br />");

// value = Number("472")

// typeof value

// document.write("Value: " + value + "<br />Type: " + typeof value);

//<!--==============================Q10=================================-->
//<!--Write a program that take a URL as user input in the following format: (www.facebook.com / www.yahoo.com ). Extract the domain name & show in your browser. 
//<!--==============================Q10=================================-->

// var url = prompt("Enter here URL");

// var indexOfDomain = url.indexOf(".") + 1

// var domain = url.slice(indexOfDomain);

// document.write("<b>URL: </b>" + url + "<br /><b>Domain: </b>" + domain);


//<!--==============================Q11=================================-->
//<!--Write a program that takes user input. Convert and show the input in capital letters. 
//<!--==============================Q11=================================-->

// var userInput = prompt("Enter here input");

// document.write("User Input: " + userInput + "<br />");

// userInput =  userInput.toUpperCase();

// document.write("Upper case: " + userInput + "<br />");

//<!--==============================Q12=================================-->
//<!--Write a program that takes user input. Convert and show the input in small letters.
//<!--==============================Q12=================================-->

// var userInput = prompt("Enter here input");

// document.write("User Input: " + userInput + "<br />");

// userInput =  userInput.toLowerCase();

// document.write("Upper case: " + userInput + "<br />");

//<!--==============================Q13=================================-->
//<!--Write a program that takes user input. Convert and show the input in title case
//<!--==============================Q13=================================-->

// var userInput = prompt("Enter here your input");

// document.write("User input: " + userInput + "<br/>")

// var firstLetter = userInput.slice(0, 1);

// firstLetter = firstLetter.toUpperCase()

// var otherLetter = userInput.slice(1);

// otherLetter = otherLetter.toLowerCase()

// var full = firstLetter + otherLetter;

// document.write("Tittle case: " + full + "<br />")

//<!--==============================Q14=================================-->
//<!--Write a program that converts the variable num to string.           
//<!--var num = 35.36 ; 
//<!--Remove the dot to display “3536” display in your browser.
//<!--==============================Q14=================================-->

// var num = 35.36;

// document.write("Number: " + num + "<br />");

// num = num.toString()

// var index = num.indexOf(".");

// num = num.slice(0, index) + num.slice(index+1);

// document.write("Result: " + num + "<br />")

//<!--==============================Q15=================================-->
//<!--Write a program to display the value of x in your browser if a=”3” and b=”3”?
//<!--x = a + b
//<!--==============================Q15=================================-->

// var a = "3";

// var b = "3"
// var x;

// if(a === "3" & b === "3" ) {
//     var x = a + b;
//     document.write("a is " + a + "<br />b is " + b + "<br />a + b is " + x + "<br />");
// }

// else{
//     document.write("a is " + a + "<br />b is " + b + "<br />");
// }

//<!--==============================Q16=================================-->
//<!--Write a program to display the value of y in your browser if a=”3” and b=”3”?          
//<!--y = a - b
//<!--==============================Q16=================================-->

// var a = "3";

// var b = "3"

// var y;

// if(a === "3" & b === "3" ) {
//     var y = a - b;
//     document.write("a is " + a + "<br />b is " + b + "<br />a - b is " + y + "<br />");
// }

// else{
//     document.write("a is " + a + "<br />b is " + b + "<br />");
// }

//<!--==============================Q17=================================-->
//<!-- Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of  [@ . , !], refer to ASCII table at the end of this document. 
//<!--==============================Q17=================================-->

// var userName = prompt("Enter valid username");

// var matchFound = false

// var check;

// for(var i = 0; i < userName.length; i++) {
//     check = userName.charAt(i)

//     if(check === "!" || check === "," || check === "." || check === "@") {
//         alert("Please enter valid username");
//         matchFound = true
//     }
// };

// if(matchFound === false) {
//     document.write("valid username: " + userName)
// };

//<!--==============================Q18=================================-->
//<!--You have an array           
//<!--A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//<!--Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.  Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example: 
//<!--==============================Q18=================================-->

// var userInput = prompt("Welcome to ABC Bakery, What do you want to order sir?");

// var array = ["cake", "apple pie", "cookie", "chips", "patties"] ;

// var firstChar = userInput.slice(0, 1);

// var othChar = userInput.slice(1);

// userInput = firstChar + othChar;

// var matchFound = false

// for(var i = 0; i < array.length; i++) {
//     if(userInput === array[i]) {
//         document.write(userInput + "is <b>available</b> at index " + i + " in our bakery" );
//         matchFound = true
//     }
// };

// if(matchFound === false) {
//     document.write("We are sorry. " + userInput + "is <b>not available</b> in our bakery");
// };

//<!--==============================Q19=================================-->
//<!--Write a program to take two input strings. Using string comparison, tell which string is greater than other or if they both are equal
//<!--==============================Q19=================================-->

// var str1 = prompt("Enter Here First string for compare");

// var str2 = prompt("Enter Here Second string for compare");

// if(str1.length > str2.length) {
//     document.write(str1 + "is greater than " + str2)
// }

// else if(str2.length > str1.length) {
//     document.write(str2 + "is greater than " + str1);
// }

// else{
//     document.write("both are equal")
// }

//<!--==============================Q20=================================-->
//<!--Write a program to take password as an input from user. The password must qualify these requirements: 
//<!--a. It should contain alphabets and numbers 
//<!--b. It should not start with a number 
//<!--c. It must at least 6 characters long 
//<!--    If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
//<!--==============================Q20=================================-->

// var pass = prompt("Enter password");

// var pass2 = pass

// var firstC = pass.slice(0,1);

// var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// document.write("Enter Password: " + pass + "<br />")

// if (Number(firstC)) {
//     document.write("Password can not begin with a number <br />");
// }

// if(Number(pass2)) {
//     document.write("Password all characters in number <br />");
// }
// else {
//     var matchFound = false;
//     for(var j = 0; j < pass2.length; j++) {
//         var pass3 = pass2.charAt(j)
//         if(Number(pass3)){
//             matchFound = true
//             break;
//         }
//     }
// }
// if(matchFound === false) {
//     document.write("please enter at least  one number <br />");
// }

// if(pass.length < 6) {
//     document.write("please enter atLeast 6 Character");
// }

//<!--==============================Q21=================================-->
//<!--Write a program to convert the following string to an array using string split method.         
//<!--var university = “University of Karachi”; 
//<!--Display the elements of array in your browser.
//<!--==============================Q21=================================-->

// var string = "University of Karachi";

// var array = string.split()

// for(var k = 0; k < array[0].length; k++) {
//     document.write(array[0].charAt(k) + "<br />")
// }

//<!--==============================Q22=================================-->
//<!--Write a program to display the last character of a user input
//<!--==============================Q22=================================-->

// var userInput = prompt("Enter here ");

// var last = userInput.charAt(userInput.length-1);

// document.write("User Input: " + userInput + "<br />Last Character of input: " + last + "<br />");

//<!--==============================Q23=================================-->
//<!--You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. 
//<!--==============================Q23=================================-->

    // <!--=================================================LEAVE IN CHOICE====================================-->
// var text = "The quick brown fox jumps over the lazy dog";

// var textArray = text.split(" ");

// console.log(textArray)

// var countWords = []

// for(var i = 0; i < textArray.length; i++) {
//     if(textArray[i] === "The" || textArray[i] === "the") {
//         countWords.push(textArray[i]);
//     }
//     }

// console.log(countWords)

// document.write("Text: " + text + "<br />There are " + countWords.length + " occurrences of word 'the'")


//<!--==============================Q24=================================-->
//<!--Write a program to count number of vowels & consonants in given string           
//<!--var str = “Pakistan”;
//<!--==============================Q24=================================-->

// var str = "Pakistan";

// var vowels = []

// for(var i = 0; i < str.length; i++) {
//     if(str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u" ) {
//         vowels.push(str.charAt(i));
//     }
// }

// var vowelCount = vowels.length;

// var consonantCount = str.length - vowelCount;

// document.write("Your Input Vowels: " + vowelCount + "<br />Your Input consonants: " + consonantCount + "<br />")


