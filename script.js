// console.log("hello?");

function getComputerChoice(computerChoice) {
    let options = ["Rock", "Paper", "Scissors"];
    let randomiser = Math.floor(Math.random() * options.length);

    computerChoice = options[randomiser];
    return computerChoice;

}

console.log(getComputerChoice());