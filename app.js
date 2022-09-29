
const rollDice = document.querySelector('#rollDiceButton')
const holdScore = document.querySelector('#holdButton')
const newGame = document.querySelector('#newgameButton')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
let globalPoints = document.querySelector('#globalPts')
let globalPoints2 = document.querySelector('#globalPts2')

const rollTheDice = () => 
{
    let diceResult = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return diceResult;
}

rollDice.addEventListener('click', rollTheDice);
holdScore.addEventListener('click',)
newGame.addEventListener('click',)
