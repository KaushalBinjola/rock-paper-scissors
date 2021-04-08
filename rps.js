let rps = ["Rock", "Paper", "Scissor"];
let playerScore = 0;
let computerScore = 0;

function game() {
    let computerPlay = rps[Math.floor(Math.random() * rps.length)];
    let playerSelectionIndex = parseInt(
        prompt("Enter 1 for Rock \nEnter 2 for Paper \nEnter 3 for Scissor")
    );
    let playerPlay = rps[playerSelectionIndex - 1];

    if (playerSelectionIndex > 0 && playerSelectionIndex < 4) {
        console.log(playRound(playerPlay, computerPlay));
    } else {
        console.log("Please enter valid option");
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("Computer chose:-" + computerSelection + "\n");
    console.log("You chose:-" + playerSelection + "\n");
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "Tie you both chose Rock";
        } else if (computerSelection == "Paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else {
            playerScore++;
            return "You Win! Rock beat Scissors";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            return "Tie you both chose Paper";
        } else {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection == "Rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        } else {
            return "Tie you both chose Scissors";
        }
    }
}

console.log("First to 5 wins! Ready? Go!");

while(1>0) {
    if (computerScore == 5 || playerScore == 5) break;
    else {
        game();
        console.log(
            "Player Score: " +
                playerScore +
                "\tComputer Score: " +
                computerScore
        );
    }
}
