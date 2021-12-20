const MOVES = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let move = MOVES[Math.floor(Math.random() * 3)];
  return move;
}

function userPlay() {
  const userMove = prompt("What is your move? Rock, Papper, Scissors");
  return userMove;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(computerPlay(), capitalizeFirstLetter(userPlay()));
