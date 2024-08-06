let randomNumber = parseInt(Math.random()*100 +1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const startOver =document.querySelector('.resultParas')
console.log(randomNumber)
const p=document.createElement('p')
let prevGuess=[]
let numGuesses=0
let playGame=true

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  //to validate if number is valid
  if(  guess =='' || guess<1 || guess>100 || isNaN(guess) ){
    alert('please enter a valid number')
  }else{
    prevGuess.push(guess)
    numGuesses+=1
    update(guess)
    checkGuess(guess)
    if(numGuesses===10 && playGame===true){
      displayMessage(`Game Over. Random Number was ${randomNumber}`)
      endGame()
    }
  }
}

function checkGuess(guess){
  //check if guess is correct , high or low
  if(guess==randomNumber){
    displayMessage('You Win')
    endGame()
  }else if(guess<randomNumber){
    displayMessage(`The number is greater than ${guess}`)
  }else if(guess>randomNumber){
    displayMessage(`The number is lower than ${guess}`)
  }
}

function update(guess){
  // will include clearing the guessField , updating previous guesses and remaining
  userInput.value=''
  guessSlot.innerHTML=prevGuess
  remaining.innerHTML=10-numGuesses
}

function displayMessage(message){
  //will display whatever message we will pass.
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<button id='newGame'>Start New Game</button>`
  startOver.appendChild(p)
  playGame=false
  new_Game()
}

function new_Game(){
  const newGame=document.querySelector('#newGame')
  newGame.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random()*100 +1)
    numGuesses=0
    prevGuess=[]
    userInput.value=''
    guessSlot.innerHTML=prevGuess
    remaining.innerHTML=10-numGuesses
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    displayMessage('')
    playGame=true
  })
}