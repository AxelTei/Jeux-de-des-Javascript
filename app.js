
let actualScore;
let activePlayer;
let canvasElement = document.querySelector('#canvasElement')

const startGame= () => 
{
    actualScore = 0;
    activePlayer = 0;
    globalPoints.textContent = '0';
    globalPoints2.textContent = '0';
    currentPoints.textContent = '0';
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
        let current;
    } else {
        changeRound()
    }
}

const changeRound = () => 
{

}
