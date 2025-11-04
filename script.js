getComputerChoice = () => {
  choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "Paper";
  }
  if (choice == 1) {
    return "Rock";
  }
  return "Scissors";
};
getHumanChoice = () => {
  choice = prompt("Play Rock, Paper or Scissors:");
  return choice;
};
let humanScore = 0;
let computerScore = 0;
playRound = () => {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice().toLowerCase();
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice == computerChoice) {
    console.log('Tie!');
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log("Human Wins!");
    humanScore += 1;
  } else {
    console.log("Computer Wins!");
    computerScore += 1;
  }
};
playGame = () =>{
for (let i = 0; i < 5; i++) {
  playRound();
}
if(humanScore>computerScore){
    console.log("Human is the winner!");
}
else if(humanScore<computerScore){
    console.log("Computer is the winner!");
}
else{
    console.log("It is a tie!");
}
}
playGame();