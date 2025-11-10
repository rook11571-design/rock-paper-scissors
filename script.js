const choiceDiv = document.createElement("div");
choiceDiv.id = "choice";
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.value = rockBtn.textContent.toLowerCase();
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.value = paperBtn.textContent.toLowerCase();
const scsBtn = document.createElement("button");
scsBtn.textContent = "Scissors";
scsBtn.value = scsBtn.textContent.toLowerCase();
choiceDiv.appendChild(rockBtn);
choiceDiv.appendChild(paperBtn);
choiceDiv.appendChild(scsBtn);
document.body.appendChild(choiceDiv);

result = document.createElement("p");
document.body.appendChild(result);

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.value;
    playRound(humanChoice.toLowerCase(), getComputerChoice().toLowerCase());
    if (humanScore == 5) {
      result.textContent = `Human is the winner! The human scores ${humanScore} and the computer scores ${computerScore}.`;
      [humanScore,computerScore] =[0,0];
    } else if (computerScore == 5) {
      result.textContent =
        `Computer is the winner! The human scores ${humanScore} and the computer scores ${computerScore}.`
      ;
      [humanScore,computerScore] =[0,0];
    }
  });
});

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
let humanScore = 0;
let computerScore = 0;
playRound = (humanChoice, computerChoice) => {
  console.log(`Human choice is ${humanChoice}`);
  console.log(`Computer choice is ${computerChoice}`);
  if (humanChoice == computerChoice) {
    result.textContent = `Tie!Score now is human ${humanScore} : computer ${computerScore}`;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    
    humanScore += 1;
    result.textContent = `Human Wins!Score now is human ${humanScore} : computer ${computerScore}`;
  } else {
    result.textContent = `Computer Wins!Score now is human ${humanScore} : computer ${computerScore}`;;
    computerScore += 1;
  }
};
