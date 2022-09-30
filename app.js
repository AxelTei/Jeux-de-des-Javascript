
let actualScore;
let activePlayer;
let globalPoints = document.querySelector('#globalPts');
let globalPoints2 = document.querySelector('#globalPts2');
let currentPoints1 = document.querySelector('#currentScore1');
let currentPoints2 = document.querySelector('#currentScore2');
let canvasElement = document.querySelector('#canvasElement');
const rollButton = document.querySelector('#rollDiceButton');
const holdButton = document.querySelector('#holdButton');
const newGameButton = document.querySelector('#newgameButton');

const startGame = () => 
{
    actualScore = 0;
    activePlayer = 1;
    globalPoints.textContent = '0';
    globalPoints2.textContent = '0';
    currentPoints1.textContent = '0';
    currentPoints2.textContent = '0';
}

startGame();

const rollTheDice = () => 
{
    let diceResult = Math.floor(Math.random() * 6) + 1;

    let diceStyleAnimation;

    if (diceResult !== 1) 
    {
        actualScore += diceResult;
        let current = document.getElementById(`currentScore${activePlayer}`);
        current.textContent = actualScore;
    } else {
        changeTheRound()
    }
}

const changeTheRound = () => 
{
    if (activePlayer === 1) {
        activePlayer = 2
    } else {
        activePlayer = 1
        actualScore = 0
    }

    currentPoints1.textContent = '0';
    currentPoints2.textContent = '0';
}

rollButton.addEventListener('click', rollTheDice);
holdButton.addEventListener('click', changeTheRound);
newGameButton.addEventListener('click', startGame)