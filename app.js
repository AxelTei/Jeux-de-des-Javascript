
let actualScore;
let actualPlayer;
let newGlobal1;
let newGlobal2;
let globalPoints1 = document.querySelector('#globalPts1');
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
    actualPlayer = 1;
    globalPoints1.textContent = '0';
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
        let current = document.getElementById(`currentScore${actualPlayer}`);
        current.textContent = actualScore;
    } else {
        changeTheRound()
    }
}

const changeTheRound = () => 
{
    if (actualPlayer === 1) {
        actualPlayer = 2
        actualScore = 0
    } else {
        actualPlayer = 1
        actualScore = 0
    }

    currentPoints1.textContent = '0';
    currentPoints2.textContent = '0';
}

const keepTheScore = () => 
{
    if(actualPlayer === 1) {
        newGlobal1 += actualScore;
        let global = document.getElementById(`globalPts${actualPlayer}`);
        global.textContent += newGlobal1;
    } else {
        newGlobal2 += actualScore;
        let global = document.getElementById(`globalPts${actualPlayer}`);
        global.textContent += newGlobal2;
    }

    //let global = document.getElementById(`globalPts${actualPlayer}`);
    //global.textContent = newGlobal[actualPlayer];

    if(global >= 100) {
        alert(`PLAYER${actualPlayer} WINS!`)
    } else {
        changeTheRound();
    }
}

rollButton.addEventListener('click', rollTheDice);
holdButton.addEventListener('click', keepTheScore);
newGameButton.addEventListener('click', startGame);