const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
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
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
  function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if (playerWins == 5) {
      document.querySelector(".winner").textContent =
        "You Have Won 5 Games, Congratulations!";
    } else {
      document.querySelector(".winner").textContent =
        "Sorry, The Computer Has Won 5 Times";
    }
    document.querySelector(".reset").style.display = "flex";
  }
}
function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `The Computer Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}
function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The Computer Won the Round!";
  } else {
    document.querySelector(".winner").textContent = `Round ends in a Tie`;
  }
}

function tallyWins() {
  const pWinCount = winners.filter((winner) => winner == "Player").length;
  const cWinCount = winners.filter((winner) => winner == "Computer").length;
  const ties = winners.filter((winner) => winner == "Tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Score: ${ties}`;
}

function computerSelect() {
  // get input from the computer
  const choice = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);

  return choice;
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
function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}
startGame();
