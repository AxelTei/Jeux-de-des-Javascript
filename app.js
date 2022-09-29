
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
let diceResult;

class DiceGame 
{
    constructor(player, dice) {
        this.player = player;
        this.dice = dice;
    }


}

/*
const rollTheDice = () => 
{
    let diceResult = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return diceResult;
};

if(diceResult === 1) {
    
}

if(globalPoints >= 100 || globalPoints2 >= 100) {
    if (globalPoints >= 100) {
        alert('PLAYER1 WIN!')
    } else {
        alert('PLAYER2 WIN!')
    }
}

rollDice.addEventListener('click', rollTheDice);
//holdScore.addEventListener('click',)
//newGame.addEventListener('click',)
*/