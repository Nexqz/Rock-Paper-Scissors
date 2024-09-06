//---------------------
//function where computer randomly returns 'rock', 'paper', or 'scissors'
//---------------------

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

// console.log(getComputerChoice());

//---------------------
//function return user input choice
//---------------------

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

  // if (choice === "rock") {
  //   return "rock";
  // } else if (choice === "paper") {
  //   return "paper";
  // } else if (choice === "scissors") {
  //   return "scissors";
  // } else {
  //   // while (choice != "rock" || choice != "paper" || choice != "scissors") {
  //   //   prompt("not a valid choice, rock, paper, or scissors");
  //   //   if (choice === "rock" || choice === "paper" || choice === "scissors") {
  //   //     break;
  //   //   }
  //   // }
  // }
};

// };

// console.log(getHumanChoice());

//---------------------
//scores for both player and bot
//---------------------

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("player win");
    return humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissor") {
    console.log("player win");
    return humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("player win");
    return humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("computer win");
    return computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("computer win");
    return computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("computer win");
    return computerScore++;
  } else if (computerChoice === humanChoice) {
    console.log("tie");
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`player choose ${humanSelection}`);
console.log(`computer choose ${computerSelection}`);
playRound(humanSelection, computerSelection);
console.log(`player score: ${humanScore}`);
console.log(`computer score: ${computerScore}`);

//---------------------
//function for multiple rounds
//--------------------
