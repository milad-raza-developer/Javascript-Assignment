//<!--==============================Q1=================================-->
//<!--============Declare a variable called username.==================-->
//<!--==============================Q1=================================-->

var username;

//<!--==============================Q2=================================-->
//<!--Declare a variable called myName & assign to it a string that represents your Full Name.
//<!--==============================Q2=================================-->

var myName = "Milad Raza";

//<!--==============================Q3=================================-->
//<!--Write a script to  
// a. declare a JS variable, titled message  
// b. assign “Hello World” to the variable message 
// c. display the message in alert box -->
//<!--==============================Q3=================================-->

var message;

message = "Hello World";

alert(message);

//<!--==============================Q4=================================-->
//<!-- Write a script to save student’s bio data in JS variables and show the data in alert boxes. Example:
//<!--==============================Q4=================================-->

var bioDataName = "Ali Khan";
alert(bioDataName);

var bioDataage = "17 years old";
alert(bioDataage);

var bioDataInstitute = "SSUET";
alert(bioDataInstitute);

var bioDataCourse = "Mobile & Cloud Computing - Module A";
alert(bioDataCourse);

//<!--==============================Q5=================================-->
//<!-- Write a script to display the following alert using one JS variable: 
//<!--==============================Q5=================================-->

var break_multi = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(break_multi);

//<!--==============================Q6=================================-->
//<!-- Fortune Teller: Why pay a fortuneteller when you can just program your fortune yourself? Store the following into variables: number of children, partner’s name, geographic location, and job title. 
//<!--==============================Q6=================================-->

var fortuneTeller =
  "You will be Software Developer in USA, and married to ABC with 2 kids.";
alert(fortuneTeller);

//<!--==============================Q7=================================-->
//<!-- Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). Show the below mentioned message in an alert box. (Hint: use string concatenation)
//<!--==============================Q7=================================-->

var email = "My email address is miladrazadeveloper@gmail.com";
alert(email);

//<!--==============================Q8=================================-->
//<!--Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
//<!--==============================Q8=================================-->

var book = "'A smarter way to learn JavaScript'";
alert("I am trying to learn From the book " + book);

//<!--==============================Q9=================================-->
//<!-- Use the variables, declared in exercise 4 & show the details giving meaning to data. Like “My name is Ali Khan”, “I am 17 years old”,  “I study in SSUET”, “I take Mobile & Cloud Computing, Module A classes
//<!--==============================Q9=================================-->

alert(
  "My name is " +
    bioDataName +
    " I am " +
    bioDataage +
    " I study in " +
    bioDataInstitute +
    " I take " +
    bioDataCourse +
    " classes"
);

//<!--==============================Q10=================================-->
//<!--Write a script to display this in browser through JS 
//<!--==============================Q10=================================-->

document.write("Yay! I can  write HTML content through Javascript");

