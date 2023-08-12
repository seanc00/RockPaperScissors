const score = {
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
  } else if (result === 'Draw!') {
    score.draws++;
  } else if (result === 'Loss!') {
    score.losses++;
  }

  document.querySelector('.scoreDisplay').innerHTML =
    `Wins: ${score.wins} || Draws: ${score.draws} || Losses: ${score.losses}`;

  // interactive changes for stats board
  document.querySelector('.gameMoves')
    .innerHTML = `Player: ${playerChoice} || Computer: ${computer}`;
  document.querySelector('.gameOutcome')
    .innerHTML = `${result}`;

  // code to reset score and determine winner
  if (score.wins === 5) {
    setTimeout(()=>{alert('You Win!!! Well done :)')}, 300);
    resetScore();
  } else if (score.losses === 5) {
    setTimeout(()=>{alert('You Lose!!! Better luck next time... :(')}, 300);
    resetScore();

  }

  return result;

  //console.log(score);
  //console.log(result);
  //console.log(playerChoice);
  //console.log(computer);
}

function resetScore() {
  if (score.wins === 5 || score.losses === 5) {
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;
  }
}
