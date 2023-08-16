const score = {
  wins: 0,
  draws: 0,
  losses: 0
};

const totalGames = {
  gameWins: 0,
  gameLosses: 0
};

function resetScore() {
  if (score.wins === 5 || score.losses === 5) {
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;
  }
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

  
  // interactive changes for stats board
  document.querySelector('.gameMoves')
    .innerHTML = `Player: ${playerChoice} || Computer: ${computer}`;
  document.querySelector('.gameOutcome')
    .innerHTML = `${result}`;
  document.querySelector('.scoreDisplay').innerHTML =
    `Wins: ${score.wins} || Draws: ${score.draws} || Losses: ${score.losses}`; 
    

  // code to reset score and determine winner
  if (score.wins === 5) {
    setTimeout(()=>{alert('You Win! Well done.\nScores have been reset.')}, 300);
    resetScore();
    totalGames.gameWins++;
  } else if (score.losses === 5) {
    setTimeout(()=>{alert('You Lose! Better luck next time...\nScores has been reset.')}, 300);
    resetScore();
    totalGames.gameLosses++;
  }

  return result;
}

