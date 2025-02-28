
const from = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingInput = from.querySelector("#guessingNumber");
const but = from.querySelector("#chack");
const textResult = document.querySelector(".resultText");
const Remaining = document.querySelector(".Remaining");
const message = document.createElement("p");
// initializing start
let totalAttempts= 5;
let attempts= 0;
let totalWon=0;
let totalLost=0;
// initializing start


from.addEventListener("submit", function(event){
    event.preventDefault();
   
   attempts++;
   if(attempts==5){
    gussingInput.disabled=true
    but.disabled=true
   }
   if(attempts<6){
let gussNumber = Number(gussingInput.value)
    chekResult(gussNumber);
    Remaining.innerHTML=`Remaining attempts: ${totalAttempts-attempts}`
   }
   gussingInput.value=" ";
});

function chekResult(value){
    console.log(value);
    const randomNum = getRandomNum(6);
     if(value==randomNum){
    textResult.innerHTML=  `You habe won; `;
    totalWon++;
     }else{
        textResult.innerHTML=`You have lost ; random Number was: ${randomNum}`;
    totalLost++; 
    }

    message.innerHTML=`won: ${totalWon} lost:${totalLost}`
    message.classList.add("large-text");
    cardBody.appendChild(message);
      
}

function getRandomNum(limt){
    return Math.floor(Math.random()*limt)
}