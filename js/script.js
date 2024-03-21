// function getComputerChoice
    //randomly return either 'Rock' 'Paper' or 'Scissors'
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3) + 1;
    switch (computerChoice){
        case 1:
            return computerChoice = "rock";
        case 2:
            return computerChoice = "paper";
        case 3:
            return computerChoice = "scissors"
        default:
            return console.log(computerChoice);
    }
}

//function getPlayerChoice
    //Get the player's selection from the console. ** MUST BE CASE INSENSITIVE **
function getPlayerChoice(){
    let playerChoice = prompt("Please select 'r' for rock, 'p' for paper or 's' for scissors").toLowerCase();
    let x = true;
    while (x){
        switch (playerChoice){
            case 'r':
                x = false;
                return playerChoice = "rock"
            case 'p':
                x = false;
                return playerChoice = 'paper'
            case 's':
                x = false;
                return playerChoice = 'scissors'
            default:
                playerChoice = prompt("Please select 'r' for rock, 'p' for paper or 's' for scissors");
        }
    }

}
// function playRound(playerSelection, computerSelection)
    //Return a string of who won based on the input player selection and the random computer selection
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'You tied'
    } else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case "paper":
                return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats rock!`
            case "scissors":
                return `You win! Rock beats ${computerSelection}!`
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "scissors":
                return `You lose! Scissors beats paper!`
            case "rock":
                return "You win!  Paper beats rock"
        } 
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lose!  Rock beats scissors"
            case "paper":
                return "You win!  Scissors beats paper"
        }
    }
}

function playFiveRounds() {
    let i = 0;
    let wins = 0;
    let ties = 0;
    let losses = 0;
    while (i < 5) {
        let round = playRound(getPlayerChoice(), getComputerChoice());
        console.log(round);
        if (round.charAt(4) == "l") {
            losses++;
        } else if (round.charAt(4) == "w") {
            wins++;
        } else {
            ties++;
        }
        console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`)
        i++;
    }
}

function disableButtons(){
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

const end = document.createElement("h1");
const body = document.body;

let wins = 0;
let ties = 0;
let losses = 0;

function updateScore(){
  let winScore = document.getElementById("wins");
  winScore.textContent = `Wins: ${wins}`;
  let tieScore = document.getElementById("ties");
  tieScore.textContent = `Ties: ${ties}`;
  let lossScore = document.getElementById("losses");
  lossScore.textContent = `Losses: ${losses}`;

  if(wins == 5){
    disableButtons();
    end.textContent = "You win!";
    body.appendChild(end);
  } else if (losses == 5){
    disableButtons();
    end.textContent = "You lose!";
    body.appendChild(end);
  }
}

function score(round){
  if(round.charAt(4) == "l"){
    losses = losses+1;
  } else if (round.charAt(4) == "w"){
    wins = wins+1;
  } else {
    ties = ties +1;
  }
  updateScore();
}

document.getElementById("rock").onclick = function() {
  let play = playRound("rock", getComputerChoice());
  score(play);
}
document.getElementById("paper").onclick = function () {
  let play = playRound("paper", getComputerChoice());
  score(play);
}
document.getElementById("scissors").onclick = function () {
  let play = playRound("scissors", getComputerChoice());
  score(play);
}
