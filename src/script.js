//const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const UserInput = document.querySelectorAll('quote-input')
const quoteStartElement = document.getElementById('quoteStart')
const words = ['Super', 'Bowl', 'Cut', 'Back', 'Pack', 'Mule']
const myNodelist = document.querySelectorAll("textarea");
const Rules = document.getElementById('rules')
const Hint = document.getElementById('hint')
var currentGuess = 0






async function renderNewQuote() {
  quoteStartElement.innerHTML = words[0]
}


for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].addEventListener('keypress', function (e) {
    myNodelist[i].classList.remove("incorrect");
    myNodelist[i].classList.remove("blink-bg");
    if (e.key === 'Enter') {
      e.preventDefault();
    if (myNodelist[i].value.toLowerCase() === words[i+1].toLowerCase()){
      checkColor(i,4) 
      currentGuess++
    }
    else{
      checkColor(i,3)
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
    if (myNodelist[currentGuess].value !== null) {
      let hint = words[currentGuess+1].charAt(0)
      myNodelist[currentGuess].innerHTML = hint
  }
}

// giveHint()
renderNewQuote()