//------------------------------------------------Q1-IN CHOICE--------------------------------------------->
//------------------------------------------------  ------------------------------------------------------->

//---------------------------------------------------------Q2--------------------------------------------->
// Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.
//---------------------------------------------------------  --------------------------------------------->
function viewMore() {
  document.getElementById("para").className = "showPara";
  document.getElementById("viewBtn").className = "none";
  document.getElementById("sortBtn").className = "visible";
}
function sort() {
  document.getElementById("para").className = "paragraph";
  document.getElementById("viewBtn").className = "morebtn";
  document.getElementById("sortBtn").className = "sortbtn";
}

//---------------------------------------------------------Q3--------------------------------------------->
// In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.
//---------------------------------------------------------  --------------------------------------------->
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
            <td class="show" id="editId${i}"><button onClick='edit(${i})'>Edit</button></td>
            <td class="hide" id="inputId${i}"><input type="text" id="inputField${i}" /></td>
            <td class="hide" id="sbtId${i}"><button onClick='submit(${i})'>Submit</button></td>
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

function edit(edtId) {
  document.getElementById("editId" + edtId).className = "hide";

  document.getElementById("inputId" + edtId).className = "show";

  document.getElementById("sbtId" + edtId).className = "show";

  var curName = names[edtId];

  document.getElementById("inputField" + edtId).value = curName;
}

function submit(subId) {
  names[subId] = document.getElementById("inputField" + subId).value;

  tabBody.innerHTML = null;

  tableGenerator();
}

function add() {
  var nameValue = document.getElementById("add_name_input").value;

  var clasValue = document.getElementById("add_class_input").value;
  names.push(nameValue);

  clas.push(clasValue);

  tabBody.innerHTML = null;

  tableGenerator();
}

