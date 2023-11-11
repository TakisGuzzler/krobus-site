/*Create functions*/
document.getElementById("question").onmouseover = function() {mouseOver()};
document.getElementById("question").onmouseout = function() {mouseOut()};

/*Change text to special hover message*/
function mouseOver() {
  document.getElementById("question").textContent="It's obviously Krobus! No contest ^_^";
}

/*Return text to default state*/
function mouseOut() {
  document.getElementById("question").textContent = "Who is the best character in hit game Stardew Valley?";
}