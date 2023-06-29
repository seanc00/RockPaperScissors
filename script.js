
// console.log("hello?");

function getComputerChoice(computerChoice) {
    let options = ["Rock", "Paper", "Scissors"];
    let randomiser = Math.floor(Math.random() * options.length);

    computerChoice = options[randomiser];
    return computerChoice;

}
// check if works
// console.log(getPlayerChoice());

function getPlayerChoice(playerChoice) {
    // gets user choice via input
    userInput = prompt("Pick a number: 1 = Rock, 2 = Paper, or 3 = Scissors");

    // gets player choice
    if (userInput == 1) {
        userInput = "Rock";
    } else if (userInput == 2) {
        userInput = "Paper";
    } else if (userInput == 3) {
        userInput = "Scissors";
    } else {
        alert("Invalid Input");
    }

    // return player choice
    playerChoice = userInput;
    return playerChoice;
}
console.log(getPlayerChoice());
console.log(getComputerChoice());

