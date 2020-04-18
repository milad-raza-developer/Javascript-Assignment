//<!--==============================Q1=================================-->
//<!--Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//<!--==============================Q1=================================-->

// <!--=============================OR=================================-->

//<!--==============================Q2=================================-->
//<!--Repeat task1 for subtraction, multiplication, division & modulus. E.g.
//<!--==============================Q2=================================-->

// var num1 = 13;

// var num2 = 9;

// var add = 13+9;

// var subtract = 13-9;

// var multiplication = 13*9;

// var division = 13/9;

// var modulus = 13%9;

// alert("Sum of "+num1+" and "+num2+" is "+add);

// alert("Result of subracting "+num1+" from "+num2+" is "+subtract);

// alert("Result of multiplying "+num1+" and "+num2+" is "+multiplication);

// alert("Result of dividing "+num1+" by "+num2+" is "+division);

// alert("Remainder of "+num1+" by "+num2+" is "+modulus);

//<!--==============================Q3=================================-->
//<!--Do the following using JS Mathematic Expressions
//<!--a. Declare a variable.
//<!--b. Show the value of variable in your browser like “Value after variable declaration is: ??”
//<!--c. Initialize the variable with some number.
//<!--d. Show the value of variable in your browser like “Initial value: 3”.
//<!--e. Increment the variable.
//<!--f. Show the value of variable in your browser like “Value after increment is: 4”.
//<!--g. Add 7 to the variable.
//<!--h. Show the value of variable in your browser like “Value after addition is: 11”.
//<!--i. Decrement the variable.
//<!--j. Show the value of variable in your browser like “Value after decrement is: 10”.
//<!--k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1”
//<!--==============================Q3=================================-->

// var initialValue;

// initialValue = 3;

// document.write("<hr />Value after variable declaration is undefined <br />Initial Value: "+initialValue);

// initialValue = ++initialValue;

// document.write("<br /> Value after increament is "+initialValue);

// initialValue = initialValue+7;

// document.write("<br /> Value after addition is "+initialValue);

// initialValue = --initialValue;

// document.write("<br /> Value after decrement is "+initialValue);

// initialValue = initialValue%3;

// document.write("<br /> The reminder is "+initialValue);

//<!--==============================Q4=================================-->
//<!--Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
//<!--==============================Q4=================================-->

// var TicketCost = 600;

// var fiveTicketCost = 600*5;

// document.write("<br /> <hr />Total cost to buy 5 tickets to a movie is "+fiveTicketCost+" PKR");

//<!--==============================Q5=================================-->
//<!--Write a script to display multiplication table of any number in your browser. E.g
//<!--==============================Q5=================================-->

// var tableNum = prompt("Gives The Number for generate table(as you like) ");

// var init = 0;

// document.write("<br /> <br / > <hr/>"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

// document.write("<br />"+tableNum+" * "+ ++init +" = "+ tableNum*init);

//<!--==============================Q6=================================-->
//<!--The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here
//<!--a. Store a Celsius temperature into a variable.
//<!--b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//<!--c. Now store a Fahrenheit temperature into a variable.
//<!--d. Convert it to Celsius & output “NNoF is NNoC”.
//!--==============================Q6=================================-->

// var celcius = prompt("Give Celcius temprature to convert Fahrenheit");

// var convertCToF = (celcius * 9 / 5) + 32;

// var fahrenheit = prompt("Give Fahrenheit temprature to convert Celcius");

// var convertFToC = (fahrenheit - 32) * 5 / 9;

// document.write("<br /> <hr />"+celcius+"C is "+convertCToF+"F");

// document.write("<br />"+fahrenheit+"F is "+convertFToC+"C");

//<!--==============================Q7=================================-->
//<!--Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//<!--a.  Price of item 1
//<!--b. Price of item 2
//<!--c. Ordered quantity of item 1
//<!--d. Ordered Quantity of item 2
//<!--e. Shipping charges
//<!--e. Compute the total cost & show the receipt in your browser.
//!--==============================Q7=================================-->

// var p1Item = parseFloat(prompt("Enter the price of Item1"));

// var orderQuantityItem1 = parseFloat(prompt("Enter the quantity of Item1"));

// var p2Item = parseFloat(prompt("Enter the price of Item2"));

// var orderQuantityItem2 = parseFloat(prompt("Enter the quantity of Item2"));

// var shippingCharges = parseFloat(prompt("Enter the shipping charges"));

// var amountOf1 = p1Item * orderQuantityItem1;

// var amountOf2 = p2Item * orderQuantityItem2;

// var total = amountOf1 + amountOf2 + shippingCharges;

// document.write("<br /><hr /><h2>Shopping Cart</h2>Price of item 1 is : "+p1Item);

// document.write("<br />Quantity of item 1 is : "+orderQuantityItem1);

// document.write("<br /><br/>Price of item 2 is : "+p2Item);

// document.write("<br />Quantity of item 2 is : "+orderQuantityItem2);

// document.write("<br /><br />Shipping Charges : "+shippingCharges);

// document.write("<br /><br /> Total cost of your order is "+total+" PKR");

//<!--==============================Q8=================================-->
//<!--Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser.
//<!--==============================Q8=================================-->

// var totalMarks = parseFloat(prompt("Enter Total marks"));

// var obtainedMarks = parseFloat(prompt("Enter Obtained marks"));

// var percentage = (obtainedMarks * 100) / totalMarks;

// document.write("<br /><hr /><h2>Marks Obtained</h2>Total Marks : " + totalMarks + "<br /> Marks Obtained : " + obtainedMarks  + "<br /> Percentage : " + percentage + " %");

//<!--==============================Q9=================================-->
//<!--Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. 
//<!--(Exchange rates :  1 US Dollar  = 104 Pakistani Rupee  and  1 Saudi Riyal = 28 Pakistani Rupee) 
//<!--==============================Q9=================================-->

// var US = parseFloat(prompt("Enter amount in US Dollar"));

// var saudiRiyal = parseFloat(prompt("Enter amount in Saudi Riyal"));

// var USToPK = US * 154.88;

// var riyalToPK = saudiRiyal * 41.28;

// var total = USToPK + riyalToPK;

// document.write("<br /><hr /><h2>Currency in PKR</h2>" + US + " US Dollar convert to : " + USToPK + " PKR");

// document.write("<br />"+ saudiRiyal +" Saudi Riyal convert to : "+ riyalToPK +" PKR");

// document.write("<br /><br />Total Of Both above: " + total + " PKR");

//<!--==============================Q10=================================-->
//<!--Write a program to initialize a variable with some number and do arithmetic in following sequence: 
//<!--a. Add 5 
//<!--b. Multiply by 10 
//<!--c. Divide the result by 2  
//<!--Perform all calculations in a single expression
//<!--==============================Q10=================================-->

// var airthmetic = 1;

// airthmetic = airthmetic + 5;

// airthmetic = airthmetic * 10;

// airthmetic = airthmetic / 2

// alert(airthmetic)

//<!--==============================Q11=================================-->
//<!--The Age Calculator: Forgot how old someone is? Calculate it! 
//<!--a. Store the current year in a variable. 
//<!--b. Store their birth year in a variable. 
//<!--c. Calculate their 2 possible ages based on the stored values. 
//<!--Output them to the screen like so: “They are either NN or NN years old
//<!--==============================Q11=================================-->

// var currentYear = parseFloat(prompt("Enter The Current Year"));

// var birthYear = parseFloat(prompt("Enter Your Birth Year"));

// var ageOfPerson = currentYear - birthYear;

// document.write("<br /><hr /><h2>Age Calculator </h2> Current Year : "+currentYear+"<br />Birth Year : "+birthYear+"<br /><br /> They are either "+ageOfPerson);

// ageOfPerson = ++ageOfPerson;

// document.write("or "+ageOfPerson+" years old");

//<!--==============================Q12=================================-->
//<!--The Geometrizer: Calculate properties of a circle. 
//<!--a. Store a radius into a variable. 
//<!--b. Calculate the circumference based on the radius, and 
//<!--output “The circumference is NN”.  
//<!--(Hint : Circumference of a circle = 2 π r ,   π = 3.142) 
//<!--Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2,  π = 3.142) 
//<!--==============================Q12=================================-->

// var radius = parseFloat(prompt("Enter The Radius of a Circle"));

// var circumference = 2 * 3.142 * radius;

// var area = 3.14 * radius * radius;

// document.write("<br /><hr /><h1>The Geometrizer</h1> Radius of a circle : "+radius);

// document.write("<br /> The circumference is : "+circumference);

// document.write("<br /> The area is : "+area);

//<!--==============================Q13=================================-->
//<!--Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser 
//<!--==============================Q13=================================-->

// var a = 10;

// document.write("<br /><hr /> The value of a is "+a);

// document.write("<br />...................................................<br  />");

// document.write("<br />The value of ++a ia: "+ ++a);

// document.write("<br /> Now the value of a is: "+a);

// document.write("<br /><br />The value of a++ is: "+a++);

// document.write("<br />Now the value of a is: "+a);

// document.write("<br /><br /> The value --a  is: "+ --a);

// document.write("<br />Now The value a  is: "+a);

// document.write("<br /><br /> The value --a  is: "+a--);

// document.write("<br />Now The value a  is: "+a);

//<!--==============================Q14=================================-->
//<!--What will be the output in variables a, b & result after execution of the following script:          
//<!--var a = 2,
//<!--b = 1;          
//<!--var result = --a   -   --b   +   ++b  +   b--
//<!--==============================Q14=================================-->

// var b = 2;

// var c = 1;

// var result = --b - --c + ++c + c--;

// document.write("<br /><hr /> a is: "+b);

// document.write("<br />b is: "+b);

// document.write("<br />result is: "+result);

//<!--==============================Q15=================================-->
//<!--The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//<!--a. Store your favorite snack into a variable 
//<!--b. Store your current age into a variable. 
//<!--c. Store a maximum age into a variable. 
//<!--d. Store an estimated amount per day (as a number). 
//<!--e. Calculate how many would you eat total for the rest of your life
//<!--Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
//<!--==============================Q15=================================-->

// var favSnack = prompt("Enter your favorite snack");

// var cuAge = parseFloat(prompt("Enter your current age"));

// var maxAge = parseFloat(prompt("Enter your maximum age"));

// var estimate = parseFloat(prompt("Enter your estimated amount of snack per day"));

// var calc = (maxAge - cuAge) * estimate;

// document.write("<br /><hr />Favorite Snack : "+favSnack);

// document.write("<br />Current Age : "+cuAge);

// document.write("<br />Esimated Maximum Age : "+maxAge);

// document.write("<br />Amount of snacks per day : "+estimate);

// document.write("<br /><br />You will need " + calc + " " + favSnack + " to last you will ripe old age of " + maxAge);
