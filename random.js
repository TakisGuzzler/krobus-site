/*Functions controlling speed of quote and color change*/
setInterval(getNewQuote, 10000);
setInterval(colorQuote, 1000);

/*Function generating random number for quote selection*/
function getNewQuote() {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    displayQuote(randomNum)
}

/*Bank of quotes*/
function displayQuote(num) {
    if (num==1) document.getElementById("random").textContent="On Fridays I stay silent as a sign of devotion to Yoba.";
    else if (num==2) document.getElementById("random").textContent="A 1000 year war between my people and the dwarves recently ended. There's still a lot of resentment on both sides.";
    else if (num==3) document.getElementById("random").textContent="Please keep my location a secret. If the dwarves knew of me, they'd surely send an assassin.";
    else if (num==4) document.getElementById("random").textContent="A human visitor? This is most unusual... I'm Krobus, merchant of rare and exotic goods.";
    else if (num==5) document.getElementById("random").textContent="Please don't tell anyone about me. Humans tend to destroy things they can't understand.";
    else if (num==6) document.getElementById("random").textContent="I am too sensitive to sunlight to go out on most days. The conditions in here are perfect. Care to buy anything?";
    else if (num==7) document.getElementById("random").textContent="Back again? I suppose it does fit into my theory of human behavior.";
    else if (num==8) document.getElementById("random").textContent="You're not like the other humans, are you?";
    else if (num==9) document.getElementById("random").textContent="Ah, the sewers are flowing quickly today. It'll get nice and humid in here... just how I like it.";
    else document.getElementById("random").textContent="You've opened my eyes to the world of humans. I appreciate that.";
}

/*Function that changes quote color*/
function colorQuote() {
    document.getElementById("random").style.color = randomColors();
}

/*Function that generates random color*/
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }