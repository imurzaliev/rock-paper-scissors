const MOVES = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let userScore = 0;
let rounds = 1;

// rounds = prompt("How many rounds do You want to play?");

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(playRound(button.value, computerPlay()));
  });
});

function computerPlay() {
  let move = MOVES[Math.floor(Math.random() * 3)];
  return move;
}

function playRound(userSelection, computerSelection) {
  if (computerSelection === userSelection) {
    return `computer:${computerSelection} vs you:${userSelection}
    Draw`;
  } else if (computerSelection == "Rock" && userSelection == "Scissors") {
    computerScore++;
    return `computer:${computerSelection} vs you:${userSelection}
      You Lose! Rock beats Scissors`;
  } else if (computerSelection == "Paper" && userSelection == "Rock") {
    computerScore++;
    return `computer:${computerSelection} vs you:${userSelection}
      You Lose! Paper beats Rock`;
  } else if (computerSelection == "Scissors" && userSelection == "Paper") {
    computerScore++;
    return `computer:${computerSelection} vs you:${userSelection}
      You Lose! Scissors beats Paper`;
  } else if (computerSelection == "Scissors" && userSelection == "Rock") {
    userScore++;
    return `computer:${computerSelection} vs you:${userSelection}
      You Win! Rock beats Scissors`;
  } else if (computerSelection == "Rock" && userSelection == "Paper") {
    userScore++;
    return `computer:${computerSelection} vs you:${userSelection}
      You Win! Paper beats Rock`;
  } else if (computerSelection == "Paper" && userSelection == "Scissors") {
    userScore++;
    return `computer:${computerSelection} vs you:${userSelection}
      You Win! Scissors beats Paper`;
  } else {
    return "There is No Such Move";
  }
}

function game() {
  // for (i = 0; i < rounds; i++) {
  console.log(playRound(userPlay(), computerPlay()));
  // }
  if (computerScore > userScore) {
    console.log(`You Loose!
        Your score is ${userScore} and compures scores is ${computerScore}`);
  } else if (computerScore < userScore) {
    console.log(`You Win!
      Your score is ${userScore} and compures scores is ${computerScore}`);
  } else {
    console.log(`It's a draw!
      Your score is ${userScore} and compures scores is ${computerScore}`);
  }
}
