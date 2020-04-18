//<!--==============================Q1=================================-->
//<!--Declare an empty array using JS literal notation to store student names in future.
//<!--==============================Q1=================================-->

// <!--=============================&==================================-->

//<!--==============================Q2=================================-->
//<!--Declare an empty array using JS object notation to store student names in future
//<!--==============================Q2=================================-->

// var studentNames = [];

// studentNames[0] = "Ali";

//<!--==============================Q3=================================-->
//<!--Declare and initialize a strings array.
//<!--==============================Q3=================================-->

// var stringArray = ["Ali", "Bila", "Raza"];

//<!--==============================Q4=================================-->
//<!--Declare and initialize a numbers array. 
//<!--==============================Q4=================================-->

// var numbersArray = [0, 1, 2];

//<!--==============================Q5=================================-->
//<!-- Declare and initialize a boolean array.
//<!--==============================Q5=================================-->

// var booleanArray = [true, false];

//<!--==============================Q6=================================-->
//<!--Declare and initialize a mixed array.
//<!--==============================Q6=================================-->

// var mixedArray = ["Raza", 10, true];

//<!--==============================Q7=================================-->
//<!--Declare and Initialize an array and store available mobile networks in Pakistan
//<!--==============================Q7=================================-->

// var networks = ["Zong", "Ufone", "Jazz", "Warid", "Mobilink", "Telenore"];

// document.write("<br />" + networks);

//<!--==============================Q8=================================-->
//<!-- Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
//<!--==============================Q8=================================-->

// var qualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// for(var i = 0; i < qualifications.length; i++ ) {
//     document.write(i + ") " + qualifications[i] + "<br />");
// }

//<!--==============================Q9=================================-->
//<!--Declare and initialize an empty array to store top movies of 2015.  Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method)
//<!--==============================Q9=================================-->

// var topMovies = ["Avengers", "Spectre", "Jurassic World", "Inside Out"];

// document.write("<h1>Top movies of 2015</h1>")

// for(var i = 0; i < topMovies.length; i++) {
//     document.write(i + ") " + topMovies[i] + "<br />");
// }

// document.write("<br /><b>Lenth of the array:</b> " + topMovies.length);

//<!--==============================Q10=================================-->
//<!--Declare and Initialize an array with your favorite cars. Show  
//<!--a. First index of the array 
//<!--b. Car at first index of the array 
//<!--c. Last index of the array
//<!--d. Car at last index of the array 
//<!--==============================Q10=================================-->

// var favCars = ["Audi", "Volvo", "Ford", "Lamborghini"];

// var first = favCars[0];

// var lastIndex = favCars.length-1;

// var last = favCars[lastIndex];

// document.write("<h2>Favorite Cars</h2>");

// document.write(favCars)

// document.write("<br /><br />First Index of the array: 0 <br />Car at First index of the array: " + first + "<br />First Index of the array: " + lastIndex + "<br />Car at lastt index of the array: " + last);

//<!--==============================Q11=================================-->
//<!-- Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
//<!--==============================Q11=================================-->

// var studentNames = ["Michael", "John", "Tony"];

// var scores = [320, 230, 480];

// for(var i = 0; i < studentNames.length; i++) {
//     var percen = (scores[i] / 500) * 100;
//     document.write("Score of " + studentNames[i] + "is" + scores[i] + ". Percentage: " + percen + "%<br />");
// }

//<!--==============================Q12=================================-->
//<!--Initialize an array with color names. Display the array elements in your browser. 
//<!--a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
//<!--b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
//<!--c. Add two more color to the beginning of the array. Display the updated array in your browser
//<!--d. Delete the first color in the array. Display the updated array in your browser. 
//<!--e. Delete the last color in the array. Display the updated array in your browser. 
//<!--f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
//<!--g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 
//<!--==============================Q12=================================-->

// var colors =  ["Red", "Blue", "Green"];

// document.write(colors + "<br/>");

// var userColorBegi = prompt("Enter Here color for add beginning of the array");

// colors.unshift(userColorBegi);

// document.write(colors + "<br/>");

// var userColorend = prompt("Enter Here color for add end of the array");

// colors.push(userColorend);

// document.write(colors + "<br/>");

// colors.unshift("Pink", "Yellow");

// document.write(colors + "<br/>");

// colors.shift(0);

// document.write(colors + "<br/>");

// colors.pop(colors.length-1);

// document.write(colors + "<br/>");

// var userIndex = prompt("Ente Here Which Index No You Want to add");

// var add = prompt("Enter here color for add ");

// colors[userIndex] = add

// document.write(colors + "<br/>");

// var delIndexNo = prompt("Ente Here Which Index No wants to delete color")

// var delcount = prompt("Ente Here how many colors wants to delete ")

// colors.splice(delIndexNo, delcount);

// document.write(colors + "<br/>");

//<!--==============================Q13=================================-->
//<!--Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
//<!--==============================Q13=================================-->

// var scoreArray = [320, 230, 480, 120];

// var orderdScore = scoreArray.sort()

// document.write("<br />Scores Of Students: " + scoreArray + "<br />Ordered Scores Of Students: " + orderdScore)

//<!--==============================Q14=================================-->
//<!--Write a program to sort the below mentioned array: 
//<!--var fruits = [“strawberry”, “apple”, “orange”, “banana”]; 
//<!--==============================Q14=================================-->

// var fruits = ["strawberry", "apple", "orange", "banana"]; 

// var sorted  = fruits.sort()

// document.write("<h2>Fruits List:</h2>" + fruits + "<h2>Orderes fruit List:</h2>" + sorted);


//<!--==============================Q15=================================-->
//<!--Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//<!--==============================Q15=================================-->

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar" ];

// var selectedCities = cities.slice(2, 4);

// document.write("Cities List:<br />" + cities);

// document.write("<br /><br />Selected Cities List:<br />" + selectedCities);

//<!--==============================Q16=================================-->
//<!--Write a program to create a single string from the below mentioned array: 
//<!--var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
//<!--(Use array’s join method)
//<!--==============================Q16=================================-->

// var arr = ["This ", " is ", " my ", " cat"];

// var str = arr.join(" ")

// document.write(str)


//<!--==============================Q17=================================-->
//<!--Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
//<!--==============================Q17=================================-->

// var devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices: <br />" + devices + "<br /><br />");

// for(var i = 0; i < devices.length; i++) {
//     document.write("Out: <br />" + devices[i] + "<br />");
// }

//<!--==============================Q18=================================-->
//<!--Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out) 
//<!--==============================Q18=================================-->

// var revDevices = ["moniter", "printer", "mouse", "keyboard"];

// document.write("Devices: <br />" + devices + "<br /><br />");

// for(var i = 0; i < revDevices.length; i++) {
//     document.write("Out: <br />" + revDevices[i] + "<br />");
// }

//<!--==============================Q19=================================-->
//<!--Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
//<!--==============================Q19=================================-->

// var mobCompany = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & haier"];
    
// var selectId = document.getElementById("selectBox")

// for(var i = 0; i < mobCompany.length; i++) {

//     selectId.innerHTML += `<option>${mobCompany[i]}</option>`
// }

//<!--==============================Q20=================================-->
//<!--Declare and initialize an empty multidimensional array.  (Array of arrays) 
//<!--==============================Q20=================================-->

// var mulitAarray1 = [[4, 2, 8, 9], [3, 9, 6, 12], [2, 7, 1, 4]];

//<!--==============================Q21=================================-->
//<!--Declare and initialize a multidimensional array representing the following matrix:
//<!--==============================Q21=================================-->

// var mulitAarray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// document.write("<br />" + mulitAarray[0] + "<br />" + mulitAarray[1] + "<br />" + mulitAarray[2]);


