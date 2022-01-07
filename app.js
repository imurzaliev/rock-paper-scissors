const MOVES = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let userScore = 0;
let userPlay = "";

const score = document.querySelector("#score");
const text = document.querySelector("#text");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userPlay = button.value;
    playRound(userPlay, computerPlay());
    score.textContent = `Your Score: ${userScore} Computer Score: ${computerScore}`;
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
  if (computerSelection === userSelection) {
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
    Draw`;
  } else if (computerSelection == "Rock" && userSelection == "Scissors") {
    computerScore++;
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
      You Lose! Rock beats Scissors`;
  } else if (computerSelection == "Paper" && userSelection == "Rock") {
    computerScore++;
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
      You Lose! Paper beats Rock`;
  } else if (computerSelection == "Scissors" && userSelection == "Paper") {
    computerScore++;
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
      You Lose! Scissors beats Paper`;
  } else if (computerSelection == "Scissors" && userSelection == "Rock") {
    userScore++;
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
      You Win! Rock beats Scissors`;
  } else if (computerSelection == "Rock" && userSelection == "Paper") {
    userScore++;
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
      You Win! Paper beats Rock`;
  } else {
    userScore++;
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
      You Win! Scissors beats Paper`;
  }
}

function game() {
  if (computerScore > userScore) {
    text.textContent = `You Loose!
        Your score is ${userScore} and compures scores is ${computerScore}`;
  } else if (computerScore < userScore) {
    text.textContent = `You Win!
      Your score is ${userScore} and compures scores is ${computerScore}`;
  } else {
    text.textContent = `It's a draw!
      Your score is ${userScore} and compures scores is ${computerScore}`;
  }
}
