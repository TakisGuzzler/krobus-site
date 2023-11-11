/*Creates functions*/
document.getElementById("image").onmouseover = function() {mouseOn()};
document.getElementById("img").onmouseout = function() {mouseOff()};

/*Hides text after hovering over it*/
function mouseOn() {
    var img = document.getElementById("img");
    img.style.visibility = 'visible';
    image.style.visibility = 'hidden';
}

/*Hides image after hovering over it*/
function mouseOff() {
    var image = document.getElementById("image");
    img.style.visibility = 'hidden';
    image.style.visibility = 'visible';
}
