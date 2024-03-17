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

console.log(playRound(getPlayerChoice(), getComputerChoice()));

//function playFiveRounds
    //keep score of overall winner and loser