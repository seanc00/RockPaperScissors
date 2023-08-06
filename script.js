let score = {
  wins: 0,
  draws: 0,
  losses: 0
};

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
    
  // all paper outcomes
  if (playerChoice === 'Paper' && computer === 'Paper') {
    result = 'Draw!';
  } else if (playerChoice === 'Paper' && computer === 'Scissors') {
    result = 'Loss!';
  } else if (playerChoice === 'Paper' && computer === 'Rock') {
    result = 'Win!';
    }
      
  // all rock outcomes
  if (playerChoice === 'Scissors' && computer === 'Scissors') {
    result = 'Draw!';
  } else if (playerChoice === 'Scissors' && computer === 'Rock') {
    result = 'Loss!';
  } else if (playerChoice === 'Scissors' && computer === 'Paper') {
    result = 'Win!';
  }

  // score code
  if (result === 'Win!') {
    score.wins++;
  } 

  // interactive changes for stats board
  document.querySelector('.gameMoves')
    .innerHTML = `Player: ${playerChoice} || Computer: ${computer}`
  document.querySelector('.gameOutcome')
    .innerHTML = `${result}`;

  console.log(score);

  return result;

  //console.log(result);
  //console.log(playerChoice);
  //console.log(computer);
}
