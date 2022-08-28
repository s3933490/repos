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
function playRound(playerSelection, computerSelection) {
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
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Whats your choice");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
