// =========================================Q1==========================================
// ======= i. Get element of id “main-content” and assign them in a variable.===========
// =============== ii. Display all child elements of “main-content” element.============
// === iii. Get all elements of class “render” and show their innerHTML in browser.=====
// ========== iv. Fill input value whose element id first-name using javascript.========
// ========================== v. Repeat part iv for id ”last-name” and “email===========
// =========================================Q1==========================================

//-----------------------------------LEAVE IN CHOICE------------------------------------

// =========================================Q2==========================================
// ============ i.  What is node type of  element having id “form-content”.=============
// ======= ii. Show node type of element having id “lastName” and its child node.=======
// =============== iii. Update child node of element having id “lastName”.==============
// ================= iv. Get First and last child of id “main-content”.=================
// ====================== v. Get next and previous siblings of id “lastName”.===========
// =========== vi. Get parent node and node type of element having id “email”===========
// =========================================Q2==========================================

var getDivId = document.getElementById("form-content").nodeType;

document.write("node Type of id 'form-content' is: " + getDivId + "<br />");

var last = document.getElementById("lastName");

document.write("node Type of id 'lastName' is: " + last.nodeType + "<br />");

document.write("node Type child of id 'lastNmae' is: " + last.childNodes[0].nodeType + "<br />");

console.log(last.childNodes[0])

console.log( last.childNodes[0].innerHTML = "Last Name: Raza")

var divMain = document.getElementById("main-content");

document.write("First child of id 'main-content' is: " + divMain.firstChild + "<br />");

document.write("First child of id 'main-content' is: " + divMain.lastChild + "<br />");

document.write("Next Sibling of id 'lastNmae' is: " + last.nextSibling + "<br />");

document.write("Next Previous of id 'lastNmae' is: " + last.previousSibling + "<br />");

var email =  document.getElementById("email");

document.write("node Type of id 'email' is: " + email.parentNode + "<br />");

document.write("node Type of id 'email' is: " + email.nodeType + "<br />");




