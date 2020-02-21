// // var indexs = [0, 1, 2, 3, 4];

// var names = ["Jhones", "Mark", "James", "Doe", "Milad"];

// var clas = [10, 9, 10, 8, 11];

// var tabBody = document.getElementById("table_body");

// function tableGenerator() {
//   for (var i = 0; i < names.length; i++) {
//     tabBody.innerHTML += `
//         <tr id ="${i}">
//             <td id= "${i}">${i}</td>
//             <td id="${i}">${names[i]}</td>
//             <td>${clas[i]}</td>
//             <td><button onClick='del(${i})'>Delete</button></td>
//             <td><button onClick='edit(${i},${i},${i})'>Edit</button></td>

//         </tr>
//   `;
//   }
// }

// tableGenerator()

// function del(trID) {

//     names.splice(trID,1);

//     clas.splice(trID,1);

//     tabBody.innerHTML = null;

//     tableGenerator();

// }

// function edit(tr_id, indexNo, nameId ) {
//     // var tabBodytd = tabBody.getElementsByTagName('tr');
//     // tabBodytd.innerHTML += '<td><input type="text"/></td>'
//     //     console.log(tabBodytd);
//     // console.log(trID)
//     // console.log(id)
//     // console.log(bt_id)
//     // var a = document.getElementById(bt_id)
//     // console.log(a)
//     // .style.display = "none"
//     // document.getElementById(id).innerHTML += '<td><input type="text"/></td>'
//     var inputField = document.getElementById(tr_id)
//     inputField.innerHTML += `<td><input type="text" id="ed_input"/></td><td><button id="button" onClick="submit(${indexNo})">Submit</button></td>`

//     var editInputValue = document.getElementById("ed_input")
//     var values = []
//     values.push(names[indexNo])
//     // console.log(values)
//     // console.log(values[indexNo])
//     editInputValue.value = values

//     // console.log(nameId)
//     // console.log(indexNo)

//     var inputValue =  document.getElementById("ed_input").value
//     return inputValue

// }

//         function submit(indexNo) {

//            var returnValue = edit()
//             names.splice(indexNo, indexNo+1, returnValue)
//             tableGenerator();
//         }

// var indexs = [0, 1, 2, 3, 4];

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
            <td><button onClick='edit(${i})'>Edit</button></td>
            
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

function edit(nameIndex) {
  var spanId = document.getElementById("edit_span");

  spanId.innerHTML = `
    <span id="input_span">
        <input type="text" id="edit_input" placeholder="Edit Name Here"/>
    </span>
    <span>
        <button id="update_btn" onClick = "submit(${nameIndex})">Submit</button>
    </span>
    `;
    var values = []
    var inputId = document.getElementById("edit_input")
    values.push(names[nameIndex])
    inputId.value = values[nameIndex]
    console.log(values)
}

function submit(nameIndex) {
    names.splice(nameIndex, 0, values[nameIndex])
    console.log(names)
}
