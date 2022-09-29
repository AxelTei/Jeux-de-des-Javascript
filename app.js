
const rollDice = document.querySelector('#rollDiceButton')
const holdScore = document.querySelector('#holdButton')
const newGame = document.querySelector('#newgameButton')
const currentButton = document.querySelector('#currentButton')
const currentButton2 = document.querySelector('#currentButton2')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
let globalPoints = document.querySelector('#globalPts')
let globalPoints2 = document.querySelector('#globalPts2')
let currentPoints = document.querySelector('#currentScore')
let currentPoints2 = document.querySelector('#currentScore2')

const rollTheDice = () => 
{
    let diceResult = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return diceResult;
}

if(diceResult === 1) {
    
} else {

}

rollDice.addEventListener('click', rollTheDice);
holdScore.addEventListener('click',)
newGame.addEventListener('click',)
