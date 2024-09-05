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
  let choice = prompt("rock, paper, or scissors");
  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  } else {
    //-------------------------
    //Infinite prompt loop bug
    //-------------------------
    // while (choice != "rock" && choice != "paper" && choice != "scissors") {
    //   prompt("not a valid choice, rock, paper, or scissors");
    // }
  }
};

// console.log(getHumanChoice());
