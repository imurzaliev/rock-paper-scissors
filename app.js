const MOVES = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let move = MOVES[Math.floor(Math.random() * 3)];
  return move;
}

function userPlay() {
  const userMove = prompt("What is your move? Rock, Paper, Scissors");
  return capitalizeFirstLetter(userMove);
}

function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function winner(userSelection, computerSelection) {
  if (computerSelection === userSelection) {
    return `computer:${computerSelection} vs you:${userSelection} 
    Draw`;
  } else if (computerSelection == "Rock" && userSelection == "Scissors") {
    return `computer:${computerSelection} vs you:${userSelection} 
      You Lose! Rock beats Scissors`;
  } else if (computerSelection == "Paper" && userSelection == "Rock") {
    return `computer:${computerSelection} vs you:${userSelection} 
      You Lose! Paper beats Rock`;
  } else if (computerSelection == "Scissors" && userSelection == "Paper") {
    return `computer:${computerSelection} vs you:${userSelection} 
      You Lose! Scissors beats Paper`;
  } else if (computerSelection == "Scissors" && userSelection == "Rock") {
    return `computer:${computerSelection} vs you:${userSelection} 
      You Win! Rock beats Scissors`;
  } else if (computerSelection == "Rock" && userSelection == "Paper") {
    return `computer:${computerSelection} vs you:${userSelection} 
      You Win! Paper beats Rock`;
  } else if (computerSelection == "Paper" && userSelection == "Scissors") {
    return `computer:${computerSelection} vs you:${userSelection} 
      You Win! Scissors beats Paper`;
  } else {
    return "There is No Such Move";
  }
}

console.log(winner(userPlay(), computerPlay()));
