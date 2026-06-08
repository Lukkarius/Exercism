export function createScoreBoard() {
  const scoreBoard = {
    'The Best Ever': 1000000,
  };
  return scoreBoard;
}


export function addPlayer(scoreBoard, player, score) { // ADD
  scoreBoard[player] = score;
  return scoreBoard;
}


export function removePlayer(scoreBoard, player) { // REMOVE
  delete scoreBoard[player];
  return scoreBoard;
}


export function updateScore(scoreBoard, player, points) { // INCREASE SCORE
  scoreBoard[player] += points;
  return scoreBoard;
}


export function applyMondayBonus(scoreBoard) { // bonus points (100)
  for (let i in scoreBoard) {
      scoreBoard[i] += 100;
  }
  return scoreBoard;
}
