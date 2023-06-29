
function getComputerChoice(computerChoice) {
    let options = ["Rock", "Paper", "Scissors"];
    let randomiser = Math.floor(Math.random() * options.length);

    computerChoice = options[randomiser];
    return computerChoice;

}

function getPlayerChoice(playerChoice) {
    // gets user choice via input
    let userInput = prompt("Pick a number: 1 = Rock, 2 = Paper, or 3 = Scissors");

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

// function check
//console.log(getPlayerChoice());
//console.log(getComputerChoice());

function playRound(player, computer) {
    player = getPlayerChoice();
    computer = getComputerChoice();

    console.log(computer);
    console.log(player);

    switch(true) {
        // all outcomes for player = paper
        case (player == "Paper" && computer == "Paper"):
            console.log("It is a Tie!");
            break;
        case (player == "Paper" && computer == "Rock"):
            console.log("Player wins!");
            break;
        case (player == "Paper" && computer == "Scissors"):
            console.log("Computer wins!");
            break;
        // all outcomes for player = Scissors
        case (player == "Scissors" && computer == "Paper"):
            console.log("Player wins!");
            break;
        case (player == "Scissors" && computer == "Scissors"):
            console.log("It is a Tie!");
            break;
        case (player == "Scissors" && computer == "Rock"):
            console.log("Computer wins!");
            break;
        // all outcomes for player = Rock
        case (player == "Rock" && computer == "Scissors"):
            console.log("Player wins!");
            break;
        case (player == "Rock" && computer == "Rock"):
            console.log("It is a Tie!");
            break;
        case (player == "Rock" && computer == "Paper"):
            console.log("Computer wins!");
            break;
        default:
            console.log("Error..");
    }

    return { player: player, computer: computer };
}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}

game();



