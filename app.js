const MOVES = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let userScore = 0;
let rounds = 5;
let userPlay = "";

const score = document.querySelector("#score");
const text = document.querySelector("#text");
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userPlay = button.value;
    playRound(userPlay, computerPlay());
    score.textContent = `Your Score: ${userScore} Computer Score: ${computerScore}`;
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
  } else if (computerSelection == "Paper" && userSelection == "Scissors") {
    userScore++;
    text.textContent = `computer:${computerSelection} vs you:${userSelection}
      You Win! Scissors beats Paper`;
  } else {
    returntext.textContent = "There is No Such Move";
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
