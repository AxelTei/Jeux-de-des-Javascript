
const rollDice = document.querySelector('#rollDiceButton');

const rollTheDice = () => {
    let diceResult = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    alert(diceResult);
}

rollDice.addEventListener('click', rollTheDice);
