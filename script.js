// console.log("hello?");

function getComputerChoice(computerChoice) {
    let options = ["Rock", "Paper", "Scissors"];
    let randomiser = Math.floor(Math.random() * options.length);

    computerChoice = options[randomiser];
    return computerChoice;

}
// check if works
// console.log(getComputerChoice());

function getPlayerChoice(playerChoice) {
    // gets user choice via input
    let userInput = prompt("Pick one: Rock, Paper, or Scissors");

    // gets player choice
    playerChoice = userInput;
    return userInput;

}

console.log(getPlayerChoice());
