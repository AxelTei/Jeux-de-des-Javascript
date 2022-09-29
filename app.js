alert("salut")
let rollDice = document.querySelector('#rollDiceButton');
rollDice.addEventListener('click', () => {
    let diceResult = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(diceResult);
});