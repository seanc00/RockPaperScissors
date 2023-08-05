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

  // console.log(computerChoice);
  return computerChoice;
}

function playGame(playerChoice) {
  const computer = computerChoice();
  let result = '';

  // all rock outcomes
  if (playerChoice === 'Rock' && computer === 'Rock') {
    result = 'Draw!';
  } else if (playerChoice === 'Rock' && computer === 'Paper') {
    result = 'Loss!';
  } else if (playerChoice === 'Rock' && computer === 'Scissors') {
    result = 'Win!';
  }

  console.log(result);
  //console.log(playerChoice);
  //console.log(computer);
}