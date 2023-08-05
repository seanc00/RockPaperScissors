function rock() {
  let playerChoice = 'Rock';
  console.log(playerChoice);
}

function scissors() {
  let playerChoice = 'Scissors'
  console.log(playerChoice);
}

function paper() {
  let playerChoice = 'Paper'
  console.log(playerChoice);
}

// randomises computer choice for rock/paper/scissors
function computerChoice() {
  let computerChoice = '';
  let randomNumber = Math.random();

  if (randomNumber < 1/3) {
    computerChoice = 'Rock';
  } else if (randomNumber < 2/3 && randomNumber > 1/3) {
    computerChoice = 'Paper'
  } else if (randomNumber < 1 && randomNumber > 2/3) {
    computerChoice = 'Scissors'
  }

  console.log(computerChoice);
  return computerChoice;
}