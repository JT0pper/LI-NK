//const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const UserInput = document.querySelectorAll('quote-input');
const quoteStartElement = document.getElementById('quoteStart');
const words = ['Super', 'Bowl', 'Cut', 'Back', 'Pack', 'Mule'];
const myNodelist = document.querySelectorAll("textarea");
const Rules = document.getElementById('rules');
const Hint = document.getElementById('hint');
var currentGuess = 1;
var rulesModal = document.getElementById("rulesModal");
var rulesBtn = document.getElementById("rulesButton");
var span = document.getElementsByClassName("close")[0];

rulesBtn.onclick=function(){
  rulesModal.style.display="block"
}

span.onclick = function() {
  rulesModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == rulesModal) {
    rulesModal.style.display = "none";
  }
}

async function renderNewQuote() {
  quoteStartElement.innerHTML = words[0];
}


for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].addEventListener('keypress', function (e) {
    myNodelist[i].classList.remove("incorrect");
    myNodelist[i].classList.remove("blink-bg");
    if (e.key === 'Enter') {
      e.preventDefault();
    if (myNodelist[i].value.toLowerCase() === words[i+1].toLowerCase()){
      checkColor(i,4);
      currentGuess++;
    }
    else{
      checkColor(i,3);
    }
    
    }
  });
}


function checkColor(i,j) {
    if (j == 4){
    myNodelist[i].classList.add("correct");
    myNodelist[i].disabled=true;
    }
    else{
    myNodelist[i].classList.add("incorrect");
    myNodelist[i].classList.add("blink-bg");
    }
}
  

function giveHint() {
      let hint = words[currentGuess].charAt(0);
      myNodelist[currentGuess - 1].value = hint;
}

// giveHint()
renderNewQuote()