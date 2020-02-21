var slider_content = document.getElementById("box")
var images = ["./slidingimages/image1.jpg", "./slidingimages/image2.jpg", "./slidingimages/image3.jpg", "./slidingimages/image4.jpg", "./slidingimages/image5.jpg"]
var i = 1
console.log(i)

function next() {
    // var c_image = images[4]
    
    if (i < images.length) {
        console.log(i)
        i = i+1
        console.log(i)
    }
    else{
        i = 1
        console.log(i)
    }
    
    
    slider_content.innerHTML = "<img src="+images[i-1]+">";
}

function prev() {
    if(i < images.length+1 && i > 1) {
        i = i - 1;
    }
    else {
        i = images.length
    }
    slider_content.innerHTML = "<img src=" +images[i-1] + ">";
}
