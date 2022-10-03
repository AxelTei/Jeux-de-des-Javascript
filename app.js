// Création des variables et récupération d'éléments html
let actualScore;
let actualPlayer;
let newScores = [0, 0];
let globalPoints1 = document.querySelector('#globalPts1');
let globalPoints2 = document.querySelector('#globalPts2');
let currentPoints1 = document.querySelector('#currentScore1');
let currentPoints2 = document.querySelector('#currentScore2');
const rollButton = document.querySelector('#rollDiceButton');
const holdButton = document.querySelector('#holdButton');
const newGameButton = document.querySelector('#newgameButton');

// Initialiser le jeu
const startGame = () => 
{
    actualScore = 0;
    actualPlayer = 1;
    newScores = [0, 0];
    globalPoints1.textContent = '0';
    globalPoints2.textContent = '0';
    currentPoints1.textContent = '0';
    currentPoints2.textContent = '0';
    gameIsActive = true;
}

startGame();

// Faire rouler le dés avec un nombre aléatoire
const rollTheDice = () => 
{
    let diceResult = Math.floor(Math.random() * 6) + 1;

    if (diceResult !== 1) {
        actualScore += diceResult;
        let current = document.getElementById(`currentScore${actualPlayer}`);
        current.textContent = actualScore;
    } else {
        changeTheRound()
    }
}

// Change le tour du joueur
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

//Place le score actuel du joueur dans son score global
const keepTheScore = () => 
{
    if (gameIsActive === true) 
    {
        newScores[actualPlayer - 1] += actualScore
        let newScore = document.getElementById(`globalPts${actualPlayer}`)
        newScore.textContent = newScores[actualPlayer - 1];
        // Vérifie si la partie est gagné pour l'un des deux joueurs
        if(newScores[actualPlayer - 1] >= 100) {
            alert(`PLAYER${actualPlayer} Wins!`)
            startGame();
        } else {
            changeTheRound();
        }
    }
}



rollButton.addEventListener('click', rollTheDice);
holdButton.addEventListener('click', keepTheScore);
newGameButton.addEventListener('click', startGame);