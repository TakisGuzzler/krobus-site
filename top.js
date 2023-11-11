/*Creates arrow in top left*/
document.getElementById("arrowTop").onclick = function() {
    window.scrollTo(pageXOffset, 0);
  };

  /*Controls arrow visibility*/
  window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset*2 < document.documentElement.clientHeight);
  });