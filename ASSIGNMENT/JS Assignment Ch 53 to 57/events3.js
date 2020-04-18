//---------------------------------------------------------Q1--------------------------------------------->
// Consider you have 4 images in a file as shown below
//---------------------------------------------------------Q1--------------------------------------------->

images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg", "./images/7.jpg", "./images/8.jpg", "./images/4.jpg"];

var getUlId = document.getElementById("ul");

// console.log(getUlId)

for(var i = 0; i < images.length; i++) {
  getUlId.innerHTML += `
  <li class="image-box"><img src="${images[i]}" id ="image${+ i}" onclick="modalOpen(${i})"/></li>
  `
  
}

var modalDiv = document.getElementById("modal_div");


function modalOpen(clickedImage) {
  modalDiv.className = "modal-show modal-open"

  var cuPic = document.getElementById("image" + clickedImage);

  var cuSrc = cuPic.getAttribute('src') 

  console.log(cuSrc)

  console.log(cuPic)

  var modalimage = document.getElementById("modalImage")
  modalimage.src = cuSrc;
}

function closeModal() {

  modalDiv.className = "modal-close modal"

  
}

//---------------------------------------------------------Q2--------------------------------------------->
//---- Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-). On each click on “zoom in”(+) , add 10px in font size of paragraph. And on each click on “zoom out”(-) , minus 10px in font size of paragraph. -->
//---------------------------------------------------------Q2--------------------------------------------->
var sizeCounter = 16;
function fontSize(btn) {
  var para = document.getElementById("fontPara");
  para.style.fontSize = sizeCounter + "px";

  if (btn === "-") {
    if (sizeCounter > 0) {
      sizeCounter = sizeCounter - 10;
      para.style.fontSize = sizeCounter + "px";

      if (sizeCounter < 0) {
        sizeCounter = 0;
        para.style.fontSize = sizeCounter + "px";
      }
    }
  } else if (btn === "+") {
    sizeCounter = sizeCounter + 10;
    para.style.fontSize = sizeCounter + "px";
    console.log(sizeCounter);
  }
}
