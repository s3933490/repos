function getComputerChoice() {
  let choice = 0;
  choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "paper";
  } else if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "scissors";
  }
}
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "paper") {
      return "You lose! Paper beats Rock";
    } else if (computerSelection == "scissors") {
      return "You win! Rock beats Scissors";
    } else if (computerSelection == "rock") {
      return "It's a draw";
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "paper") {
      return "It's a draw";
    } else if (computerSelection == "scissors") {
      return "You lose! Scissors beats Paper";
    } else if (computerSelection == "rock") {
      return "You win! Paper beats Rock";
    }
  } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "paper") {
      return "You win! Scissors beats paper";
    } else if (computerSelection == "rock") {
      return "You lose! Rock beats Scissors";
    } else if (computerSelection == "scissors") {
      return "It's a draw";
    }
  } else {
    return "Invalid input";
  }
}

function game() {
  let counter = 0;
  let score = 0;
  const choice = document.getElementsByClassName("choice");
  for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", function () {
      let result = playRound(choice[i].getAttribute("id"));
      if (result.includes("You win")) {
        score++;
      }
      if (counter < 5) {
        let div = document.querySelector("#score");
        counter++;
        div.textContent = "Game number " + counter;

        const div2 = document.createElement("div");
        div2.textContent = result;
        div.appendChild(div2);

        const div3 = document.createElement("div");
        div3.textContent = "Score: " + score;
        div.appendChild(div3);
        if (counter == 5) {
          if (score >= 3) {
            div.textContent = "You win. " + score + " wins.";
          } else {
            div.textContent = "You lose. " + score + " win(s).";
          }
        }
      }
    });
  }
}
game();
