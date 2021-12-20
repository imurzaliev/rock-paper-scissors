const MOVES = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let move = MOVES[Math.floor(Math.random() * 3)];
  return move;
}

console.log(computerPlay());
