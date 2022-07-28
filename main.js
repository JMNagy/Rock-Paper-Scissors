const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
  //play the game
  //play five rounds
  //console based
}
function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}
function playerChoice() {
  // get input from the player
  let input = prompt("Type Rock, Paper, or Siccors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Siccors. Spelling needs to be exact, but capitalization doesn't matter."
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}
function computerChoice() {
  // get input from the computer
  return choices[Math.floor(Math.random() * choices.length)];
}
function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  //console.log(choiceP, choiceC);
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "siccors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((winner) => winner == "Player").length;
  let computerWins = winners.filter((winner) => winner == "Computer").length;
  let ties = winners.filter((winner) => winner == "Tie").length;
  console.log("Reuslts: ");
  console.log("Player Wins: ", playerWins);
  console.log("Computer Wins: ", computerWins);
  console.log("Ties: ", ties);
}
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player Chose: ", playerChoice);
  console.log("Computer Chose: ", computerChoice);
  console.log(winner, "Won the Round");
  console.log("-------------------------------");
}

game();
