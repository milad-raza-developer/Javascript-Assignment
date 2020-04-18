//<!--==============================Q1=================================-->
//<!--============Suppose You have an array of object==================-->
//<!--===========Calculate total price of each item and all items;=====-->
//<!--==============================Q1=================================-->

// var itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" }
// ];
// var netAmount = 0;
// for (var i = 0; i < itemsArray.length; i++) {
//   var lineTotal = itemsArray[i].price * itemsArray[i].quantity;
//   console.log(lineTotal);
//   document.getElementById("dataTable").innerHTML += `
//         <tr>
//         <td>${itemsArray[i].name}</td>
//         <td>${itemsArray[i].price}</td>
//         <td>${itemsArray[i].quantity}</td>
//         <td>${lineTotal}</td>
//         `;
//   netAmount = netAmount + lineTotal;
// }
// document.getElementById("dataTable").innerHTML += `

// <tr>
//     <td colspan="3"><b>Bill Total</b></td>
//     <td><b>${netAmount}</b></td>
// </tr>
// `;

//<!--==============================Q2=================================-->
//<!-- Create an object with properties name, email, password, age, gender, city, country. Check if age and country properties exist in object or not. Also check firstName and lastName properties in object -->
//<!--==============================Q2=================================-->

// var userInfo = {
//   name: "Raza",
//   email: "mrsolutions@gmail.com",
//   password: "12345",
//   age: "17",
//   gender: "male",
//   city: "Karachi",
//   country: "Pakistan"
// };

// if ("age" in userInfo === true && "country" in userInfo === true) {
//   document.write("age & country property is exist in object userInfo <br />");
// } else {
//   document.write(
//     "age & country property is not exist in object userInfo <br />"
//   );
// }

// if ("firstName" in userInfo === true && "lastName" in userInfo === true) {
//   document.write(
//     "firstName & lastName property is exist in object userInfo <br />"
//   );
// } else {
//   document.write(
//     "firstName & lastName property is not exist in object userInfo <br />"
//   );
// }

//<!--==============================Q3=================================-->
//<!-- Create a constructor function with some properties. Now create multiple records using the constructor. -->
//<!--==============================Q3=================================-->

// var user1 = new users("Bilal", "bilalansari@gmail.com", "male", "B.COM");
// var user2 = new users("Raza", "razamemon@gmail.com", "male", "INTER");
// var user3 = new users("Taha", "tahasheikh@gmail.com", "male", "MATRIC");
// function users(name, email, gender, education) {
//   this.name = name;
//   this.email = email;
//   this.gender = gender;
//   this.education = education;
// }

// var usersArray = [];

// usersArray.push(user1);
// usersArray.push(user2);
// usersArray.push(user3);
// for (var i = 0; i < usersArray.length; i++) {
//   document.getElementById("usersTable").innerHTML += `<tr>
// <td>${usersArray[i].name}</td>
// <td>${usersArray[i].email}</td>
// <td>${usersArray[i].gender}</td>
// <td>${usersArray[i].education}</td>
// </tr>
// `;
// }

//<!--==============================Q4=================================-->
//<!--============ Suppose you want to check population of your area, their educations and professions.  Create a constructor function which holds following properties: Name, gender, address, education, profession,  Enter all records one by one.==-->
//<!--============ Hint:    use select box for education and profession,   use radio box for gender==-->
//<!--============ Bonus :  use can use localStorage to save records.==-->
//<!--==============================Q4=================================-->

var name;

var gender;

var addr;

var edu;

var prof;

var mydata;

var dataArray = [];

var jsonObject;

var getData = localStorage.getItem("objectsArray");

var parsData = JSON.parse(getData);

if (parsData !== null) {
  for (var j = 0; j < parsData.length; j++) {
    dataArray.push(parsData[j]);
  }
}

function tableGenreator() {
  document.getElementById("viewDataBody").innerHTML = null;

  for (var i = 0; i < dataArray.length; i++) {
    document.getElementById("viewDataBody").innerHTML += `
        <tr>
        <td>${dataArray[i].name}</td>
        <td>${dataArray[i].gender}</td>
        <td>${dataArray[i].addr}</td>
        <td>${dataArray[i].edu}</td>
        <td>${dataArray[i].prof}</td>
        </tr>
        `;
  }
}

tableGenreator();

function mySub() {
  name = document.getElementById("myname").value;

  
    var getRadio = document.getElementsByName("gender");

    for (i = 0; i < getRadio.length; i++) {
      console.log(i)
      if (getRadio[i].checked) {
        gender = getRadio[i].value;
        console.log(gender)
    }
  }

  addr = document.getElementById("add").value;
  edu = document.getElementById("educ").value;
  prof = document.getElementById("profes").value;

  mydata = new Datta(name, gender, addr, edu, prof);

  // dataArray.push(localStorage.getItem("objectArray"))

  dataArray.push(mydata);

  jsonObject = JSON.stringify(dataArray);

  localStorage.setItem("objectsArray", jsonObject);

  getData = localStorage.getItem("objectsArray");

  parsData = JSON.parse(getData);

  console.log(getData);

  console.log(parsData);

  console.log(parsData.length);

  tableGenreator();
}

function Datta(myname, mygender, myaddr, myedu, myprof) {
  this.name = myname;
  this.gender = mygender;
  this.addr = myaddr;
  this.edu = myedu;
  this.prof = myprof;
}
