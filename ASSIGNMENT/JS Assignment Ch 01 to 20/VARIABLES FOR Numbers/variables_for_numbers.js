//<!--==============================Q1=================================-->
//<!-- Declare a variable called age & assign to it your age. Show your age in an alert box
//<!--==============================Q1=================================-->

var age = 14;
alert("I am " + age + " years old");

//<!--==============================Q2=================================-->
//<!--Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
//<!--==============================Q2=================================-->

var visited = 21;
alert("You have visited this site " + visited + " times");

//<!--==============================Q3=================================-->
//<!--Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
//<!--==============================Q3=================================-->

var birthYear = 2003;
document.write(
  "My birth Year is " +
    birthYear +
    "<br / >" +
    "Data type of my declared variable is number"
);

//<!--==============================Q4=================================-->
//<!--A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:  
//<!--a. Visitor’s name 
//<!--b. Product title 
//<!--c. Quantity i.e. how many products a visitor wants to order 
//<!--Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
//<!--==============================Q4=================================-->

var visitorDataNmae = "Milad Raza";
var visitorProductTittle = "T-shirt";
var visitorQuantity = 10;

document.write(
  "<br / >" +
    visitorDataNmae +
    " ordered " +
    visitorQuantity +
    visitorProductTittle +
    "(s) on XYZ Clothing store"
);
