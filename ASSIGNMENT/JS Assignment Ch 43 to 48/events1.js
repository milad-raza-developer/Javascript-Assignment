//---------------------------------------------------------Q1 & Q2--------------------------------------------->
// Show an alert box on click on a link. -->
// Display some Mobile images in browser. On click on an image Show the message in alert to user.  -->
//---------------------------------------------------------  --------------------------------------------------->

function popup() {
    alert("Thanks for purchasing a phone")
}

//---------------------------------------------------------Q3--------------------------------------------->
//-- Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.  -->
//---------------------------------------------------------Q4--------------------------------------------->

var names = ["Jhones", "Mark", "James", "Doe", "Milad"];

var clas = [10, 9, 10, 8, 11];

var tabBody = document.getElementById("table_body");

function tableGenerator() {
  for (var i = 0; i < names.length; i++) {
    tabBody.innerHTML += `
        <tr id ="${i}">
            <td id= "${i}">${i}</td>
            <td id="${i}">${names[i]}</td>
            <td>${clas[i]}</td>
            <td><button onClick='del(${i})'>Delete</button></td>
        </tr>
  `;
  }
}

tableGenerator();

function del(trID) {
  names.splice(trID, 1);

  clas.splice(trID, 1);

  tabBody.innerHTML = null;

  tableGenerator();
}

//---------------------------------------------------------Q5--------------------------------------------->
//-- Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.  -->
//---------------------------------------------------------Q5--------------------------------------------->
var counter = 0
function count(checkBtn) {
    if(checkBtn === "less") {
        --counter;
    }
    else{
        ++counter;
    }
    document.getElementById("counter_span").innerHTML = counter
}