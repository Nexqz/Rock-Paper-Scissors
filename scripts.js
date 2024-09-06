const getComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
};

const getHumanChoice = function () {
  let choice;

  while (choice !== "rock" || choice !== "paper" || choice !== "scissors") {
    choice = prompt("rock, paper, or scissors");
    if (choice.toLowerCase() === "rock") {
      return "rock";
    } else if (choice.toLowerCase() === "paper") {
      return "paper";
    } else if (choice.toLowerCase() === "scissors") {
      return "scissors";
    }
  }
};

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "paper") {
    // console.log("player win");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissor") {
    // console.log("player win");
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    // console.log("player win");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    // console.log("computer win");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    // console.log("computer win");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    // console.log("computer win");
    computerScore++;
  }
  // } else if (computerChoice === humanChoice) {
  //   return "tie";
  // }
};

//---------------------
//function for multiple rounds
//--------------------

const playGame = function (rounds) {
  for (i = 0; i < rounds; i++) {
    const player = getHumanChoice();
    console.log(`Player: ${player}`);
    const computer = getComputerChoice();
    console.log(`Computer: ${computer}`);
    playRound(player, computer);
    console.log(
      `Player Score: ${humanScore} ... Computer Score: ${computerScore}`
    );
  }
  if (humanScore > computerScore) {
    console.log("player win the game");
  } else if (humanScore < computerScore) {
    console.log("computer win the game");
  } else if (humanScore === computerScore) {
    console.log("the game is a tie");
  }
};

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// console.log(`player choose ${humanSelection}`);
// console.log(`computer choose ${computerSelection}`);
// playRound(humanSelection, computerSelection);
// console.log(`player score: ${humanScore}`);
// console.log(`computer score: ${computerScore}`);
playGame(2);
