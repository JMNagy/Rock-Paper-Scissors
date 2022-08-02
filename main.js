const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
  //reset game
}
function startGame() {
  //play game until someone wins 5 rounds
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
  //play the game
  //play five rounds
  //console based
}
function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);

  winners.push(winner);
  tallyWins();
}
function tallyWins() {
  let pWinCount = winners.filter((winner) => winner == "Player").length;
  let cWinCount = winners.filter((winner) => winner == "Computer").length;
  let ties = winners.filter((winner) => winner == "Tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Score: ${cWinCount}`;
}

function computerSelect() {
  // get input from the computer
  return choices[Math.floor(Math.random() * choices.length)];
}
function checkWins() {
  let pWinCount = winners.filter((winner) => winner == "Player").length;
  let cWinCount = winners.filter((winner) => winner == "Computer").length;
  return Math.max(pWinCount, cWinCount);
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
  let pWinCount = winners.filter((winner) => winner == "Player").length;
  let cWinCount = winners.filter((winner) => winner == "Computer").length;
  let ties = winners.filter((winner) => winner == "Tie").length;
}
