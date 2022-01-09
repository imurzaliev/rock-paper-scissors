const MOVES = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let userScore = 0;
let userPlay = "";

const scorePlayer1 = document.querySelector("#you");
const scorePlayer2 = document.querySelector("#computer");
const movePlayer1 = document.querySelector("#youMove");
const movePlayer2 = document.querySelector("#compMove");
const roundWinner = document.querySelector("#winner");

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userPlay = button.value;
    playRound(userPlay, computerPlay());
    scorePlayer1.textContent = userScore;
    scorePlayer2.textContent = computerScore;
    if (userScore == 5 || computerScore == 5) {
      game();
      userScore = 0;
      computerScore = 0;
    }
  });
});

function computerPlay() {
  let move = MOVES[Math.floor(Math.random() * 3)];
  return move;
}

function playRound(userSelection, computerSelection) {
  movePlayer1.textContent = userSelection;
  movePlayer2.textContent = computerSelection;

  if (computerSelection === userSelection) {
    roundWinner.textContent = "Draw";
  } else if (computerSelection == "Rock" && userSelection == "Scissors") {
    computerScore++;
    roundWinner.textContent = "You Lose! ";
  } else if (computerSelection == "Paper" && userSelection == "Rock") {
    computerScore++;
    roundWinner.textContent = "You Lose!";
  } else if (computerSelection == "Scissors" && userSelection == "Paper") {
    computerScore++;
    roundWinner.textContent = "You Lose!";
  } else if (computerSelection == "Scissors" && userSelection == "Rock") {
    userScore++;
    roundWinner.textContent = "You Win!";
  } else if (computerSelection == "Rock" && userSelection == "Paper") {
    userScore++;
    roundWinner.textContent = "You Win!";
  } else {
    userScore++;
    roundWinner.textContent = "You Win!";
  }
}

function game() {
  if (computerScore > userScore) {
    display.textContent = `You Lose!
        Your score is ${userScore} and computers scores is ${computerScore}`;
  } else if (computerScore < userScore) {
    display.textContent = `You Win!
      Your score is ${userScore} and computers scores is ${computerScore}`;
  } else {
    display.textContent = `It's a draw!
      Your score is ${userScore} and computers scores is ${computerScore}`;
  }
}
