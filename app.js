
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

startGame();

function startGame() 
{
    globalPoints.textContent = '0';
    globalPoints2.textContent = '0';
    currentPoints.textContent = '0';
    currentPoints2.textContent = '0';
}

class DiceGame 
{
    constructor(player, dice, round) {
        this.player = player;
        this.dice = dice;
        this.round = round;
    }
}
